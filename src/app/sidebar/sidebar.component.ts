import { Component } from '@angular/core';

interface SidebarItem {
  title: string;
  icon: string;
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
      class: 'arrow'
    },
    {
      icon: '/assets/sidebar/Home.svg',
      title: 'Home'
    },
    {
      icon: '/assets/sidebar/Projects.svg',
      title: 'Projects'
    },
    {
      icon: '/assets/sidebar/About me.svg',
      title: 'About me'
    },
    {
      icon: '/assets/sidebar/Contact.svg',
      title: 'Contact',
      class: 'contact'
    }
  ]

}
