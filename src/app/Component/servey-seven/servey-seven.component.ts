import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-seven',
  templateUrl: './servey-seven.component.html',
  styleUrls: ['./servey-seven.component.css'],
})
export class ServeySevenComponent implements OnInit {
  radioValue: any;
  accessPointArrayForm: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValues = localStorage.getItem('accessPointArrayForm');
    if (formValues) {
      this.accessPointArrayForm = new FormGroup({
        accessPoint: new FormControl(
          JSON.parse(formValues).accessPoint,
          Validators.required
        ),
        accessType: new FormControl(
          JSON.parse(formValues).accessType,
          Validators.required
        ),
      });
      this.radioValue = JSON.parse(formValues).accessType;
    } else {
      this.radioValue = 'car';
      this.accessPointArrayForm = new FormGroup({
        accessPoint: new FormControl(null, Validators.required),
        accessType: new FormControl(null, Validators.required),
      });
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
    this.accessPointArrayForm.get('accessType')?.setValue(value);
  };
  formSubmit() {
    if (this.accessPointArrayForm.valid) {
      console.log(this.accessPointArrayForm.value);
      localStorage.setItem(
        'accessPointArrayForm',
        JSON.stringify(this.accessPointArrayForm.value)
      );
      this.changeServeyStep.emit('serveyeight');
    }
  }
  goBack() {
    this.changeServeyStep.emit('serveysix');
  }
  ngOnInit(): void {}
  get accessPoint() {
    return this.accessPointArrayForm.get('accessPoint');
  }
}
