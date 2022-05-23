import { NextApiRequest, NextApiResponse } from 'next'
import LanyardResponse from 'public/Lanyard'

interface Spotify {
    name: string
    artist: string
    link: string
    isplaying: boolean
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const data: LanyardResponse = await (await fetch('https://api.lanyard.rest/v1/users/701059544574591006')).json()
    let Discordstatus = 'Loading'
    let Spotify: Spotify = {
      isplaying: false,
      name: '',
      artist: '',
      link: ''
    }
    if(!data.success) return
  
    const status = data.data.discord_status
    if(status=='dnd') Discordstatus = 'DnD'
    else if(status=='online') Discordstatus = 'Online'
    else if(status=='idle') Discordstatus = 'Idle'
    else if(status=='offline') Discordstatus = 'Offline'
  
    if(data.data.listening_to_spotify) {
      Spotify = {
        isplaying: true,
        name: data.data.spotify.song,
        artist: data.data.spotify.artist,
        link: `https://open.spotify.com/track/${data.data.spotify.track_id}`
      }
    }else{
      Spotify = { isplaying: false, name: '', artist: '', link: '' }
    }

    response.status(200).json({
        discord: Discordstatus,
        spotify: Spotify
    })
}