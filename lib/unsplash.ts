import fetch from 'isomorphic-unfetch'

export const fetchData = async () => {
  const user = await (
    await fetch('https://unsplash.com/users/doamatto')
  ).json()

  return {
    followers: user.followers,
    downloads: user.downloads
  }
}