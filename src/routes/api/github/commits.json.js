import { octokit } from '$lib/_api/Github';
import { addRepo, addCommit } from '$lib/_db/utils';

export async function get() {
	const { data } = await octokit.request('GET /users/{username}/events', {
		username: 'cryptodeal',
		per_page: 100
	});

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

	if (data && parsedData) {
		return {
			body: {
				parsedData
			}
		};
	}
}
