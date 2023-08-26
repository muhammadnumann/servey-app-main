import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-servey-twelve',
  templateUrl: './servey-twelve.component.html',
  styleUrls: ['./servey-twelve.component.css'],
})
export class ServeyTwelveComponent implements OnInit {
  radioValue: any;
  applyPedestrianProfile: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValues = localStorage.getItem('applyPedestrianProfile');
    if (formValues) {
      this.applyPedestrianProfile = new FormGroup({
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
      this.applyPedestrianProfile = new FormGroup({
        accessPoint: new FormControl(null, Validators.required),
        accessType: new FormControl(null),
      });
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
    this.applyPedestrianProfile.get('accessType')?.setValue(value);
  };
  formSubmit() {
    if (this.applyPedestrianProfile.valid) {
      console.log(this.applyPedestrianProfile.value);
      localStorage.setItem(
        'applyPedestrianProfile',
        JSON.stringify(this.applyPedestrianProfile.value)
      );
      this.changeServeyStep.emit('serveythirteen');
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveyeleven');
  }
  ngOnInit(): void {}
  get accessPoint() {
    return this.applyPedestrianProfile.get('accessPoint');
  }
}
