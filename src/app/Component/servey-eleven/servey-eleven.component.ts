import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-eleven',
  templateUrl: './servey-eleven.component.html',
  styleUrls: ['./servey-eleven.component.css'],
})
export class ServeyElevenComponent implements OnInit {
  radioValue: any;
  wantTobuyHardware: any;
  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('pedestrianAccess2');
    if (formValue) {
      this.radioValue = JSON.parse(formValue).text;
      this.wantTobuyHardware = JSON.parse(formValue).wantTobuyHardware;
    } else {
      this.radioValue = 'quote';
      this.wantTobuyHardware = 'I want to purchase the hardware';
    }
  }
  wantTobuyHardwareChecked(value: any) {
    this.wantTobuyHardware = value;
  }

  nextButtonClick() {
    localStorage.setItem(
      'pedestrianAccess2',
      JSON.stringify({
        text: this.radioValue,
        wantTobuyHardware: this.wantTobuyHardware,
      })
    );
    this.changeServeyStep.emit('serveytwelve');
  }
  goBack() {
    this.changeServeyStep.emit('serveyten');
  }

  ngOnInit(): void {}
}
