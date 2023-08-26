import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-servey-six',
  templateUrl: './servey-six.component.html',
  styleUrls: ['./servey-six.component.css'],
})
export class ServeySixComponent implements OnInit {
  radioValue: any;
  qouteForm: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();

  constructor() {
    const formValues = localStorage.getItem('qouteForm');
    if (formValues) {
      this.qouteForm = new FormGroup({
        locationName: new FormControl(
          JSON.parse(formValues).locationName,
          Validators.required
        ),
        country: new FormControl(
          JSON.parse(formValues).country,
          Validators.required
        ),
        city: new FormControl(JSON.parse(formValues).city, Validators.required),
        type: new FormControl(JSON.parse(formValues).type, Validators.required),
      });
      this.radioValue = JSON.parse(formValues).type;
    } else {
      this.radioValue = 'residential';
      this.qouteForm = new FormGroup({
        locationName: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        type: new FormControl(this.radioValue, Validators.required),
      });
    }
  }
  checkedRadio = (value: any) => {
    this.radioValue = value;
    this.qouteForm.get('type')?.setValue(value);
  };
  formSubmit() {
    if (this.qouteForm.valid) {
      console.log(this.qouteForm.value);
      localStorage.setItem('qouteForm', JSON.stringify(this.qouteForm.value));
      this.changeServeyStep.emit('serveyseven');
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveythree');
  }

  get locationName() {
    return this.qouteForm.get('locationName');
  }

  get country() {
    return this.qouteForm.get('country');
  }
  get city() {
    return this.qouteForm.get('city');
  }
  get type() {
    return this.qouteForm.get('type');
  }

  ngOnInit(): void {}
}
