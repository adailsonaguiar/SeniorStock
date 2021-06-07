import { Component, OnInit } from '@angular/core';

export type MenuItem = {
  name: string;
  route: string[];
  active: boolean;
};
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      { name: 'Products', route: ['/test'], active: false },
      { name: 'Register Product', route: ['/product', 'new'], active: false },
    ];
  }

  toggleMenu(): void {
    const overlay = document.querySelector('.overlay-sidebar');
    const mainMenu = document.querySelector('.main-menu');
    const classListOverlay = overlay?.classList;
    if (!classListOverlay?.contains('active')) {
      overlay?.classList.add('active');
      mainMenu?.classList.add('active');
    } else {
      overlay?.classList.remove('active');
      mainMenu?.classList.remove('active');
    }
  }
}
