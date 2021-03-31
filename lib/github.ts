import fetch from 'isomorphic-unfetch'

export const fetchData = async () => {
  const user = await (
    await fetch('https://api.github.com/users/doamatto')
  ).json()
  const stars = await (
    await fetch('https://api.github.com/users/doamatto/repos?per_page=100')
  ).json()

  const stargazers = stars
    .filter((repo) => !repo.fork)
    .reduce((accumulator, repository) => {
      return accumulator + repository['stargazers_count']
    }, 0)

  return {
    followers: user.followers,
    stargazers
  }
}