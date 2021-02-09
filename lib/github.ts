import fetch from 'isomorphic-unfetch'

export const fetchData = async () => {
  const user = await (
    await fetch('https://api.github.com/users/doamatto')
  ).json()
  const stars = await (
    await fetch('https://api.github.com/users/doamatto/repos?per_page=100')
  ).json()

  var stargazers = await stars.filter((i) => !i.fork).reduce((accumulate,repo) => {
    return accumulate + repo['stargazers_count']
  })

  return {
    followers: user.followers,
    stargazers
  }
}