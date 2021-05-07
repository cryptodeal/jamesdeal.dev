import { Octokit } from '@octokit/rest';
import { addRepo, addCommit } from '$lib/_db/utils';

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_KEY,
	userAgent: 'activity-monitor v1.2.3',
	timeZone: 'America/Chicago',
	baseUrl: 'https://api.github.com',
	log: {
		debug: () => {},
		info: () => {},
		warn: console.warn,
		error: console.error
	},
	request: {
		agent: undefined,
		fetch: undefined,
		timeout: 0
	}
});

const storeResponse = (parsedData) => {
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
}
export { octokit, storeResponse};
