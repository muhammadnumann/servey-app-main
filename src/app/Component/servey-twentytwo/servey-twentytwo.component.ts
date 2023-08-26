import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-servey-twentytwo',
  templateUrl: './servey-twentytwo.component.html',
  styleUrls: ['./servey-twentytwo.component.css'],
})
export class ServeyTwentytwoComponent implements OnInit {
  radioValue: any;
  applyVehicleProfile: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValues = localStorage.getItem('applyVehicleProfile');
    if (formValues) {
      this.applyVehicleProfile = new FormGroup({
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
      this.applyVehicleProfile = new FormGroup({
        accessPoint: new FormControl(null, Validators.required),
        accessType: new FormControl(null),
      });
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
    this.applyVehicleProfile.get('accessType')?.setValue(value);
  };
  formSubmit() {
    if (this.applyVehicleProfile.valid) {
      console.log(this.applyVehicleProfile.value);
      localStorage.setItem(
        'applyVehicleProfile',
        JSON.stringify(this.applyVehicleProfile.value)
      );
      this.changeServeyStep.emit('serveytwentythree');
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveytwentyone');
  }
  ngOnInit(): void {}
  get accessPoint() {
    return this.applyVehicleProfile.get('accessPoint');
  }
}
