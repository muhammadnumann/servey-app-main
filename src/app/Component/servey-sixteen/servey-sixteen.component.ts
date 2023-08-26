import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-sixteen',
  templateUrl: './servey-sixteen.component.html',
  styleUrls: ['./servey-sixteen.component.css'],
})
export class ServeySixteenComponent implements OnInit {
  radioValue: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('CheckinLPRCamera');
    if (formValue) {
      this.radioValue = formValue;
    } else {
      this.radioValue = 'Axis';
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };
  nextButtonClick() {
    localStorage.setItem('CheckinLPRCamera', this.radioValue);
    this.changeServeyStep.emit('serveyseventeen');
  }
  goBack() {
    this.changeServeyStep.emit('serveyfifteen');
  }
  ngOnInit(): void {}
}
