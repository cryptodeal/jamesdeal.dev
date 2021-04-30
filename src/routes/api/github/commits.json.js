import { octokit } from '$lib/Github'

export async function get() {
  const { data } = await octokit.request('GET /users/{username}/events', {
    username: 'cryptodeal',
    per_page: 100
  });
  //console.log(data);

  if (data) {
    return {
      body: {
        data
      }
    };
  }
}
