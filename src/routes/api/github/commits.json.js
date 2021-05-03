import { octokit } from '$lib/_api/Github'
import { addRepo } from '$lib/_db/utils'

export async function get() {
  const { data } = await octokit.request('GET /users/{username}/events', {
    username: 'cryptodeal',
    per_page: 100,
  });
  const parsedData = data
    .filter(action => action.type === 'PushEvent')
    .map(pushEvent => {
      return { ...pushEvent, commits: pushEvent.payload.commits.filter(commits => commits.author.email === 'jimmydeal16@gmail.com') }
    })
  let repos = [...new Set(parsedData.map(item => JSON.stringify(item.repo)))];
  repos.forEach(item => {
    addRepo(JSON.parse(item)).then(repo => console.log(repo))
    console.log(JSON.parse(item))
  })
  //parse all commits in the same manner as repos
  //write all commits to database


  //console.log(parsedData)
  //console.log(parsedData[0].payload.commits)
  //const parsedRepos = JSON.parse(repos)
  //console.log(repos)
  if (data && parsedData) {
    return {
      body: {
        parsedData
      }
    };
  }
}
