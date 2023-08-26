import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-ten',
  templateUrl: './servey-ten.component.html',
  styleUrls: ['./servey-ten.component.css'],
})
export class ServeyTenComponent implements OnInit {
  radioValue: any;

  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('turnstileTypeFrom');
    if (formValue) {
      this.radioValue = JSON.parse(formValue).text;
    } else {
      this.radioValue = 'One side Turnstile';
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  nextButtonClick() {
    localStorage.setItem(
      'turnstileTypeFrom',
      JSON.stringify({ text: this.radioValue, count: 1 })
    );
    this.changeServeyStep.emit('serveyeleven');
  }
  goBack() {
    this.changeServeyStep.emit('serveynine');
  }
  ngOnInit(): void {}
}
