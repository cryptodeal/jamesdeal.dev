import { octokit } from '$lib/_api/Github';
import { addRepo, addCommit, getCommitsByDate } from '$lib/_db/utils';
import dayjs from 'dayjs';

export async function get() {
	const { data } = await octokit.request('GET /users/{username}/events', {
		username: 'cryptodeal',
		per_page: 100
	});
	var now = dayjs();
	var twoMonthsBack = now.subtract(2, 'month').date(1);
	if (twoMonthsBack.day() !== 0) {
		let daysTilSunday = 7 - twoMonthsBack.day();
		twoMonthsBack = twoMonthsBack.add(daysTilSunday, 'day');
	}
	console.log(twoMonthsBack);

	const parsedData = data
		.filter((action) => action.type === 'PushEvent')
		.map((pushEvent) => {
			return {
				...pushEvent,
				commits: pushEvent.payload.commits.filter(
					(commits) => commits.author.email === 'jimmydeal16@gmail.com'
				)
			};
		});

	let repos = [...new Set(parsedData.map((item) => JSON.stringify(item.repo)))];
	repos.forEach((repo) => {
		addRepo(JSON.parse(repo));
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
	commits.forEach((commit) => {
		addCommit(JSON.parse(commit));
	});

	const storedCommits = await getCommitsByDate(twoMonthsBack, now).catch((err) =>
		console.catch(err)
	);
	//console.log(storedCommits)
	if (storedCommits) {
		return {
			body: {
				storedCommits
			}
		};
	}
}
