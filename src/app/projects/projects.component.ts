import { Component, OnInit } from '@angular/core';
import LanyardResponse from '../../Lanyard';

interface Projects{
  title: string;
  description: string;
  tryLink: string;
  codeLink: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  Projects: Projects[] = [
    {
      title: 'PainScript',
      description: 'A programming language pain to code in and inspired by brainf**k.',
      tryLink: 'https://github.com/FloatingComet62/PainScript/releases/tag/v1.1.0',
      codeLink: 'https://github.com/FloatingComet62/PainScript',
      image: '/assets/projects/PainScript.png'
    },
    {
      title: 'UniverseSafe',
      description: 'A discord bot that will help you keep your server safe',
      tryLink: 'https://github.com/FloatingComet62/UniverseSafe',
      codeLink: 'https://github.com/FloatingComet62/UniverseSafe',
      image: '/assets/projects/UniverseSafe.png'
    },
    {
      title: 'RealBox',
      description: 'My First Game. (Yes it is very bad)',
      tryLink: 'https://floatingcomet62.github.io/Real-box/',
      codeLink: 'https://github.com/FloatingComet62/Real-Box',
      image: '/assets/projects/RealBox.png'
    },
    {
      title: 'Enver',
      description: 'An env editor as a donwloadable npm package',
      tryLink: 'https://www.npmjs.com/package/handle-env',
      codeLink: 'https://github.com/FloatingComet62/enver',
      image: '/assets/projects/Enver.png'
    },
    {
      title: 'Hashing API',
      description: 'A simple hashing API',
      tryLink: 'https://hashing-api-production.up.railway.app/',
      codeLink: 'https://github.com/FloatingComet62/Hashing-API',
      image: '/assets/projects/HashingAPI.png'
    },
    {
      title: 'FluidDB',
      description: 'Fluid DB is a no-sql database service',
      tryLink: '',
      codeLink: 'https://github.com/FloatingComet62/FluidDB',
      image: '/assets/projects/FluidDB.png'
    },
    {
      title: 'PrimeFinder',
      description: 'A prime number finder',
      tryLink: 'https://github.com/FloatingComet62/PrimeFinder/releases/tag/v1',
      codeLink: 'https://github.com/FloatingComet62/PrimeFinder',
      image: '/assets/projects/PrimeFinder.png'
    },
    {
      title: 'Chess',
      description: 'A chess game in your command line',
      tryLink: '',
      codeLink: 'https://github.com/FloatingComet62/Chess',
      image: '/assets/projects/Chess.png'
    }
  ]

  Discordstatus = 'Loading';
  current = 0;

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
  }

  goto(link: string){
    if(link!='') location.href = link;
  }

  switch(direction: boolean){
    if(direction){
      this.current++;
      if(this.current>=this.Projects.length) this.current = 0;
    }else{
      this.current--;
      if(this.current<0) this.current = this.Projects.length-1;
    }
  }

}