import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'virtualx';
  response: any;
  constructor(private http: HttpClient) {}
  //httpOptions for posting data
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  /**
   *
   * Formular
   *
   */

  public submitForm: FormGroup = new FormGroup({
    fullname: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
      []
    ),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      []
    ),
    message: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
      []
    ),
  });

  /**
   *
   * Formular Submit
   *
   */

  onSubmit(): void {
    // Formulardata
    // https://stackoverflow.com/questions/51382568/sending-post-data-to-php-using-angular-5
    var email = this.submitForm.value.email;
    var fullname = this.submitForm.value.fullname;
    var msg = this.submitForm.value.message;
    console.log(email);
    console.log(fullname);
    let url = 'https://www.ing-x.de/contact.php';
    let data = 'usermail=' + email + '&username=' + fullname + '&msg=' + msg;
    //prettier-ignore
    this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => (this.response = response));

    this.submitForm.reset(); // erzeugt auch ein console.log mit leerem formularinhalt
    this.submitForm.disabled;

    //$('*[data-txt="btn001"]').text('DONE');
  }

  /**
   *
   * OnInit
   */
  ngOnInit(): void {}

  /**
   *
   * Toggle SideBar
   *
   * @param sideBar
   *
   */
  toggle(sideBar: any) {
    sideBar.classList.toggle('active');
  }

  /**
   *
   * Navigation Link
   *
   * @param page
   * @param event
   *
   */
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
