import { Octokit } from '@octokit/rest';
const octokit = new Octokit({
	auth: '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',
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

export async function get() {
	const { data } = await octokit.request('GET /users/{username}/events', {
		username: 'cryptodeal',
		per_page: 100
	});
	console.log(data);
}
