import { Component } from '@angular/core';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World';
  serveyNumber: any;
  constructor() {
    const step = localStorage.getItem('serveystep');
    if (step) {
      this.serveyNumber = step;
    } else {
      this.serveyNumber = 'serveytwentytwo';
    }
  }

  changeServeyStep = (step: any) => {
    localStorage.setItem('serveystep', step);
    this.serveyNumber = step;
  };
}
