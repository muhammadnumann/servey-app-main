import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-fourteen',
  templateUrl: './servey-fourteen.component.html',
  styleUrls: ['./servey-fourteen.component.css'],
})
export class ServeyFourteenComponent implements OnInit {
  radioValue: any;
  wantTobuyHardware: any;
  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('TriggerServeyForm');
    if (formValue) {
      this.radioValue = JSON.parse(formValue).text;
      this.wantTobuyHardware = JSON.parse(formValue).wantTobuyHardware;
    } else {
      this.radioValue = 'Manual';
      this.wantTobuyHardware = 'I want to purchase the hardware';
    }
  }
  wantTobuyHardwareChecked(value: any) {
    this.wantTobuyHardware = value;
  }

  nextButtonClick() {
    localStorage.setItem(
      'TriggerServeyForm',
      JSON.stringify({
        text: this.radioValue,
        wantTobuyHardware: this.wantTobuyHardware,
      })
    );
    this.changeServeyStep.emit('serveyfifteen');
  }

  goBack() {
    this.changeServeyStep.emit('serveythirteen');
  }

  ngOnInit(): void {}
}
