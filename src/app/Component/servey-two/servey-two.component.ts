import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-two',
  templateUrl: './servey-two.component.html',
  styleUrls: ['./servey-two.component.css'],
})
export class ServeyTwoComponent implements OnInit {
  reCaptchaFrom: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();

  constructor() {
    this.reCaptchaFrom = new FormGroup({
      recaptcha: new FormControl(null, Validators.required),
    });
  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.reCaptchaFrom?.get('recaptcha')?.setValue(captchaResponse);
    }
  }

  formSubmit() {
    if (this.reCaptchaFrom.valid) {
      this.changeServeyStep.emit('serveythree');
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveyone');
  }

  ngOnInit(): void {}
}
