import { Component, OnInit } from '@angular/core';

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

  navlnk(event: any) {
    /*   const navigationLinks = document.querySelectorAll('[data-nav-link]');

    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks.classList.remove('active');
      console.log(i);
    } */
    event.classList.add('active');

    console.log('test');
  }
}
