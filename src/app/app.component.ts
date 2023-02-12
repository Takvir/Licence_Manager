import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Licence_Management';

  form: FormGroup | undefined;

  isSignin = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event:any) => {
        this.isSignin = event.url==='/';
      });
  }

  // login() {
  //   console.log(this.form.value);
  // }

}
