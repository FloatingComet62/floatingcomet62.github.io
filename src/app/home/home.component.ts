import { Component, OnInit } from '@angular/core';
import LanyardResponse from '../../Lanyard';


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
