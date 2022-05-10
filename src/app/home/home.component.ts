import { Component, OnInit } from '@angular/core';

interface LanyardResponse {
  success: boolean;
  data:    Data;
}

interface Data {
  spotify:                   Spotify;
  listening_to_spotify:      boolean;
  kv:                        Kv;
  discord_user:              DiscordUser;
  discord_status:            string;
  activities:                Activity[];
  active_on_discord_web:     boolean;
  active_on_discord_mobile:  boolean;
  active_on_discord_desktop: boolean;
}

interface Activity {
  type:        number;
  state:       string;
  name:        string;
  id:          string;
  emoji?:      Emoji;
  created_at:  number;
  timestamps?: Timestamps;
  sync_id?:    string;
  session_id?: string;
  party?:      Party;
  flags?:      number;
  details?:    string;
  assets?:     Assets;
}

interface Assets {
  large_text:  string;
  large_image: string;
}

interface Emoji {
  name: string;
}

interface Party {
  id: string;
}

interface Timestamps {
  start: number;
  end:   number;
}

interface DiscordUser {
  username:      string;
  public_flags:  number;
  id:            string;
  discriminator: string;
  avatar:        string;
}

interface Kv {
}

interface Spotify {
  track_id:      string;
  timestamps:    Timestamps;
  song:          string;
  artist:        string;
  album_art_url: string;
  album:         string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  Domain = location.hostname;
  Discordstatus = 'Loading';
  Spotify: {
    name: string;
    artist: string;
    link: string;
    isplaying: boolean;
    } = {
          isplaying: false,
          name: '',
          artist: '',
          link: ''
        }

  constructor() { }

  ngOnInit(): void {
    setInterval(async ()=>{
      await this.updateInfo();
    }, 1000);
  }

  async updateInfo(): Promise<void> {
    const response: LanyardResponse = await (await fetch('https://api.lanyard.rest/v1/users/701059544574591006')).json();
    if(!response.success) return;
    
    const status = response.data.discord_status;
    if(status=='dnd') this.Discordstatus = 'DnD';
    else if(status=='online') this.Discordstatus = 'Online';
    else if(status=='idle') this.Discordstatus = 'Idle';
    else if(status=='offline') this.Discordstatus = 'Offline';

    if(response.data.listening_to_spotify) {
      this.Spotify = {
        isplaying: true,
        name: response.data.spotify.song,
        artist: response.data.spotify.artist,
        link: `https://open.spotify.com/track/${response.data.spotify.track_id}`
      }
    }else{
      this.Spotify = {
        isplaying: false,
        name: '',
        artist: '',
        link: ''
      }
    }
  }

}
