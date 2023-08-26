import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-fifteen',
  templateUrl: './servey-fifteen.component.html',
  styleUrls: ['./servey-fifteen.component.css'],
})
export class ServeyFifteenComponent implements OnInit {
  radioValue: any;
  wantTobuyHardware: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('ReadingdeviceForm');
    if (formValue) {
      this.radioValue = JSON.parse(formValue).text;
      this.wantTobuyHardware = JSON.parse(formValue).wantTobuyHardware;
    } else {
      this.radioValue = 'LPR camera & license';
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
      'ReadingdeviceForm',
      JSON.stringify({
        text: this.radioValue,
        wantTobuyHardware: this.wantTobuyHardware,
      })
    );
    this.changeServeyStep.emit('serveysixteen');
  }
  goBack() {
    this.changeServeyStep.emit('serveyfourteen');
  }
  ngOnInit(): void {}
}
