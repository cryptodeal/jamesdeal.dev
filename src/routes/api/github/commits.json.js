import { octokit } from '$lib/_Github'

export async function get() {
  const { data } = await octokit.request('GET /users/{username}/events', {
    username: 'cryptodeal',
    per_page: 100,
  });
  let parsedData = data
    .filter(action => action.type === 'PushEvent')
    .map(pushEvent => {
      return { ...pushEvent, commits: pushEvent.payload.commits.filter(commits => commits.author.email === 'jimmydeal16@gmail.com') }
    })
  console.log(parsedData[1].payload.commits)
  if (data && parsedData) {
    return {
      body: {
        parsedData
      }
    };
  }
}
