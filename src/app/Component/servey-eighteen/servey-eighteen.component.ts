import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-eighteen',
  templateUrl: './servey-eighteen.component.html',
  styleUrls: ['./servey-eighteen.component.css'],
})
export class ServeyEighteenComponent implements OnInit {
  radioValue: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('LPRLicenseForm');
    if (formValue) {
      this.radioValue = formValue;
    } else {
      this.radioValue = 'NumberOK';
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };
  nextButtonClick() {
    localStorage.setItem('LPRLicenseForm', this.radioValue);
    this.changeServeyStep.emit('serveynineteen');
  }
  goBack() {
    this.changeServeyStep.emit('serveyseventeen');
  }
  ngOnInit(): void {}
}
