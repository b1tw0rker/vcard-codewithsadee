import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {}
  title = 'virtualx';

  toggle(sideBar: any) {
    sideBar.classList.toggle('active');
  }

  navlnk(page: any, event: any) {
    const navigationLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');
    window.scrollTo(0, 0); // Scroll TOP

    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].classList.remove('active'); // Remove Active css statement auf allen Button
      pages[i].classList.remove('active');
    }

    event.target.classList.add('active'); // Add class 'active' to button
    page.classList.add('active'); // setzt  Page 'active' des geklickten button
  }
}
