import LanyardResponse from "./Lanyard";

export interface Spotify {
    name: string
    artist: string
    link: string
    isplaying: boolean
}
export interface Projects{
    title: string;
    description: string;
    tryLink: string;
    codeLink: string;
    image: string;
}

export async function lanyard(): Promise<{ spotify: Spotify, discord: string }>{
    const data: LanyardResponse = await (await fetch('https://api.lanyard.rest/v1/users/701059544574591006')).json()
    let Discordstatus = 'Loading'
    let spotify: Spotify = {
      isplaying: false,
      name: '',
      artist: '',
      link: ''
    }
    if (!data.success) return { spotify, discord: Discordstatus }
  
    const status = data.data.discord_status
    if (status==='dnd') Discordstatus = 'DnD'
    else if (status==='online') Discordstatus = 'Online'
    else if (status==='idle') Discordstatus = 'Idle'
    else if (status==='offline') Discordstatus = 'Offline'
  
    if (data.data.listening_to_spotify) {
      spotify = {
        isplaying: true,
        name: data.data.spotify.song,
        artist: data.data.spotify.artist,
        link: `https://open.spotify.com/track/${data.data.spotify.track_id}`
      }
    } else spotify = { isplaying: false, name: '', artist: '', link: '' }
    return { spotify, discord: Discordstatus }
}