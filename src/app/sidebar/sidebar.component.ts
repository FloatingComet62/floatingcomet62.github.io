import { Component } from '@angular/core';

interface SidebarItem {
  title: string;
  icon: string;
  link: string;
  class?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items: SidebarItem[] = [
    {
      icon: '/assets/sidebar/Arrow.svg',
      title: 'FloatingComet62',
      class: 'arrow',
      link: '/'
    },
    {
      icon: '/assets/sidebar/Home.svg',
      title: 'Home',
      link: '/'
    },
    {
      icon: '/assets/sidebar/Projects.svg',
      title: 'Projects',
      link: '/projects'
    },
    {
      icon: '/assets/sidebar/About me.svg',
      title: 'About me',
      link: '/about'
    },
    {
      icon: '/assets/sidebar/Contact.svg',
      title: 'Contact',
      class: 'contact',
      link: '/contact'
    }
  ]

  goto(link: string){
    location.href = link;
  }

}
