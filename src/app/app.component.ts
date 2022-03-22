import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response: any;
  title = 'vcard Personal portfolio';
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
    var email = this.submitForm.value.email;
    var fullname = this.submitForm.value.fullname;
    var msg = this.submitForm.value.message;
    console.log(email);
    console.log(fullname);
    let url = '/contact.php';
    let data = 'usermail=' + email + '&username=' + fullname + '&msg=' + msg;
    //prettier-ignore
    this.http.post(url, JSON.stringify(data), this.httpOptions).subscribe((response) => (this.response = response));

    this.submitForm.reset();
    this.submitForm.disabled;
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
    window.scrollTo(0, 0); // scrol to top

    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].classList.remove('active'); // Remove 'active' css statement from all btn's
      pages[i].classList.remove('active');
    }

    event.target.classList.add('active'); // Add class 'active' to button
    page.classList.add('active'); // set page 'active' clicked btn
  }
}
