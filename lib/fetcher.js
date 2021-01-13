// TODO: Convert to TypeScript

// Stolen.. I mean, adapted from https://github.com/leerob/leerob.io/blob/master/lib/fetcher.js

export default async function fetcher (...args) {
  const res = await fetch(...args)
  return res.json()
}
