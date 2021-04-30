import { octokit } from '$lib/Github'

export async function get() {
  const { data } = await octokit.request('GET /users/{username}/events', {
    username: 'cryptodeal',
    per_page: 100
  });
  //console.log(data);
  let count = 0;
  let parsedData = data
    .filter(action => action.type === 'PushEvent')
    .map(pushEvent => {
      return { ...pushEvent, commits: pushEvent.payload.commits.filter(commits => commits.author.email === 'jimmydeal16@gmail.com') }
    })
  parsedData.map(item => {
    item.payload.commits.map(() => count++)
  })
  //console.log(count)

  if (data && parsedData) {
    return {
      body: {
        parsedData
      }
    };
  }
}
