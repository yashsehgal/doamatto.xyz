import fetch from 'isomorphic-unfetch'

export const fetchData = async () => {
  const user = await (
    await fetch('https://api.unsplash.com/users/doamatto', {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASHKEY}`
      }
    })
  ).json()

  return {
    followers: user.followers,
    downloads: user.downloads
  }
}