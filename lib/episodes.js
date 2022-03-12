import { format, isFuture } from 'date-fns'
import { sanitize } from 'isomorphic-dompurify'

const {
  BUZZSPROUT_TOKEN,
  SPOTIFY_ID,
  APPLE_PODCASTS_ID,
  GOOGLE_PODCASTS_ID
} = process.env

const podcastIds = {
  spotify: SPOTIFY_ID,
  apple: APPLE_PODCASTS_ID,
  google: GOOGLE_PODCASTS_ID
}

export const getEpisodeData = async () => {
  const data = await fetch('https://www.buzzsprout.com/api/1544806/episodes.json', {
      headers: {
        "Authorization":`Token token=${BUZZSPROUT_TOKEN}`
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
        description: { __html: sanitize(description) },
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

