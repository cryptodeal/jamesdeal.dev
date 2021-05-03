import { Octokit } from '@octokit/rest';

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
export { octokit };
