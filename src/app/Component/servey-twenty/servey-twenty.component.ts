import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-twenty',
  templateUrl: './servey-twenty.component.html',
  styleUrls: ['./servey-twenty.component.css'],
})
export class ServeyTwentyComponent implements OnInit {
  radioValue: any;
  checkOutLPRSetupForm: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValues = localStorage.getItem('checkOutLPRSetupForm');
    if (formValues) {
      this.checkOutLPRSetupForm = new FormGroup({
        AllowedCameras1: new FormControl(
          JSON.parse(formValues).AllowedCameras2,
          Validators.required
        ),
        AllowedCameras2: new FormControl(
          JSON.parse(formValues).AllowedCameras2,
          Validators.required
        ),
      });
    } else {
      this.checkOutLPRSetupForm = new FormGroup({
        AllowedCameras1: new FormControl(null, Validators.required),
        AllowedCameras2: new FormControl(null, Validators.required),
      });
    }
  }

  formSubmit() {
    if (this.checkOutLPRSetupForm.valid) {
      console.log(this.checkOutLPRSetupForm.value);
      localStorage.setItem(
        'checkOutLPRSetupForm',
        JSON.stringify(this.checkOutLPRSetupForm.value)
      );
      this.changeServeyStep.emit('serveytwentyone');
    }
  }

  ngOnInit(): void {}
  get AllowedCameras1() {
    return this.checkOutLPRSetupForm.get('AllowedCameras1');
  }

  get AllowedCameras2() {
    return this.checkOutLPRSetupForm.get('AllowedCameras2');
  }
}
