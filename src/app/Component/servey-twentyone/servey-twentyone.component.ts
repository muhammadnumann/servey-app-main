import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-twentyone',
  templateUrl: './servey-twentyone.component.html',
  styleUrls: ['./servey-twentyone.component.css'],
})
export class ServeyTwentyoneComponent implements OnInit {
  radioValue: any;
  wantTobuyHardware: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('VehicleAccessForm');
    if (formValue) {
      this.radioValue = JSON.parse(formValue).text;
      this.wantTobuyHardware = JSON.parse(formValue).wantTobuyHardware;
    } else {
      this.radioValue = 'One 4 m Barrier';
      this.wantTobuyHardware = 'I want to purchase the hardware';
    }
  }
  wantTobuyHardwareChecked(value: any) {
    this.wantTobuyHardware = value;
  }
  checkedRadio = (value: any) => {
    this.radioValue = value;
  };
  nextButtonClick() {
    localStorage.setItem(
      'VehicleAccessForm',
      JSON.stringify({
        text: this.radioValue,
        wantTobuyHardware: this.wantTobuyHardware,
      })
    );
    this.changeServeyStep.emit('serveytwentythree');
  }

  ngOnInit(): void {}
}
