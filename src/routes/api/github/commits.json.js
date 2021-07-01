import { octokit } from '$lib/_api/Github';
import { addRepo, addCommit, getCommitsByDate, getLatestCommit } from '$lib/_db/utils';
import initConnect from '$lib/_db/initConnect';
import dayjs from 'dayjs';

export async function get() {
	await initConnect();
	/* TODO: Optimize by fetching existing mongodb record, creating new records, and then merging existing w new records */
	const { data } = await octokit.request('GET /users/{username}/events', {
		username: 'cryptodeal',
		per_page: 100
	});

	let { dateLatest } = await getLatestCommit();
	dateLatest = dayjs(dateLatest);

	var now = dayjs();
	var twoMonthsBack = now.subtract(2, 'month').date(1);
	if (twoMonthsBack.day() !== 0) {
		let daysTilSunday = 7 - twoMonthsBack.day();
		twoMonthsBack = twoMonthsBack.add(daysTilSunday, 'day');
	}

	const parsedData = data
		/* Optimized by filtering on date */
		.filter(
			(action) => action.type === 'PushEvent' && !dayjs(action.created_at).isBefore(dateLatest)
		)
		.map((pushEvent) => {
			return {
				...pushEvent,
				commits: pushEvent.payload.commits.filter((commit) => {
					commit.author.email === 'jimmydeal16@gmail.com';
				})
			};
		});

	let repos = [...new Set(parsedData.map((item) => JSON.stringify(item.repo)))];

	let commits = [
		...new Set(
			parsedData.map((item) =>
				item.commits.map((commit) =>
					JSON.stringify({
						...commit,
						repoId: item.repo.id,
						date: item.created_at
					})
				)
			)
		)
	].flat();

	commits.map((commit) => {
		addCommit(JSON.parse(commit));
	});

	repos.map((repo) => {
		addRepo(JSON.parse(repo));
	});

	const storedCommits = await getCommitsByDate(twoMonthsBack, now).catch((err) =>
		console.catch(err)
	);

	if (storedCommits) {
		return {
			body: {
				storedCommits
			}
		};
	}
}
