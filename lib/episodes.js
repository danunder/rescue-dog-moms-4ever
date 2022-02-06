import { format, isFuture } from 'date-fns'

const podcastIds = {
  spotify: '26EcaDOS5HTYu7FTeCWa1F',
  apple:'id1548403423',
  google: 'aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNTQ0ODA2LnJzcw'
}

export const getEpisodeData = async () => {
  const data = await fetch('https://www.buzzsprout.com/api/1544806/episodes.json', {
      headers: {
        "Authorization":`Token token=${process.env.BUZZSPROUT_TOKEN}`
      }
  })
  const episodes = await data.json()
  return episodes
}

export const formatEpisodeData = (episodes) => (
  episodes
    .filter(({published_at}) => !isFuture(new Date(published_at)))
    .map(({
      id,
      title,
      description,
      published_at,
      artwork_url,
      audio_url
    }) => ({
        id,
        title,
        description: { __html: description },
        published_at: `Published on ${format(new Date(published_at), "PPPP")}`,
        artwork_url,
        audio_url
        // links: getPodcastLinks(id)
    }))
)

// const getPodcastLinks = async (id = 1) => {
//   // const secrets = {
//   //   clientId: 'rescueDogMomsHackerrrs',
//   //   clientSecret: 'thisisverybadsecurity'
//   // }
//   const getSpotifyAccessToken = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
//     },
//     body: {
//       grant_type: 'client_credentials'
//     }
//   })
//   const spotifyAccessToken = await getSpotifyAccessToken.json()
//   console.log(spotifyAccessToken)

//   return {
//     spotify: '',
//     apple: '',
//     google: ''
//   }
// }

// getPodcastLinks()

