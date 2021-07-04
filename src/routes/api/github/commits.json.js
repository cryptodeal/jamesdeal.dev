import { octokit } from '$lib/_api/Github';
import { addRepo, addCommit, getCommitsByDate, getLatestCommit } from '$lib/_db/utils';
import dayjs from 'dayjs';

export async function get() {
	/* TODO: Further endpoint optimization */
	const { data } = await octokit.request('GET /users/{username}/events', {
		username: 'cryptodeal',
		per_page: 100
	});

	let { date } = await getLatestCommit();
	const mostRecent = dayjs(date);

	var now = dayjs();
	var twoMonthsBack = now.subtract(2, 'month').date(1);
	if (twoMonthsBack.day() !== 0) {
		let daysTilSunday = 7 - twoMonthsBack.day();
		twoMonthsBack = twoMonthsBack.add(daysTilSunday, 'day');
	}
	const parsedData = data
		.filter((action) => action.type === 'PushEvent')
		.map((pushEvent) => {
			return {
				...pushEvent,
				commits: pushEvent.payload.commits.filter(
					(commit) => commit.author.email === 'jimmydeal16@gmail.com'
				)
			};
		});

	let repos = [...new Set(parsedData.map((item) => JSON.stringify(item.repo)))];
	repos.map((repo) => {
		return addRepo(JSON.parse(repo));
	});

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

	/* Optimized by filtering on date */
	commits.map((commit) => {
		let temp = JSON.parse(commit);
		let tempDate = dayjs(temp.date);
		if (tempDate.isAfter(mostRecent)) {
			return addCommit(JSON.parse(commit));
		} else {
			return;
		}
	});

	const storedCommits = await getCommitsByDate(twoMonthsBack, now);

	if (storedCommits) {
		return {
			body: {
				storedCommits
			}
		};
	}
}
