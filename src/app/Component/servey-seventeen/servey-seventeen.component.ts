import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-seventeen',
  templateUrl: './servey-seventeen.component.html',
  styleUrls: ['./servey-seventeen.component.css'],
})
export class ServeySeventeenComponent implements OnInit {
  radioValue: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('CheckOutLPRCamera');
    if (formValue) {
      console.log('CheckOutLPRCamera changed value: ' + formValue);
      this.radioValue = formValue;
    } else {
      this.radioValue = 'Axis';
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };
  nextButtonClick() {
    localStorage.setItem('CheckOutLPRCamera', this.radioValue);
    this.changeServeyStep.emit('serveyeighteen');
  }
  goBack() {
    this.changeServeyStep.emit('serveysixteen');
  }

  ngOnInit(): void {}
}
