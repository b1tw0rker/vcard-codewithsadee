import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*     const navigationLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      console.log(i);
    } */
  }

  /*   navlnk(event: any) {
    const navigationLinks = document.querySelectorAll('[data-nav-link]');

    for (let i = 0; i < navigationLinks.length; i++) {
      this.navigationLinks.classList.remove('active');
      console.log(i);
    }
    event.target.classList.add('active');
    //pages[2].classList.add('active');
    console.log('test');
  } */
}
