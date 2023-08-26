import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-nine',
  templateUrl: './servey-nine.component.html',
  styleUrls: ['./servey-nine.component.css'],
})
export class ServeyNineComponent implements OnInit {
  radioValue: any;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {
    const formValue = localStorage.getItem('pedestrianAccess');
    if (formValue) {
      this.radioValue = formValue;
    } else {
      this.radioValue = 'Lares(indoor) Kit';
    }
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  nextButtonClick() {
    localStorage.setItem('pedestrianAccess', this.radioValue);
    this.changeServeyStep.emit('serveyten');
  }
  goBack() {
    this.changeServeyStep.emit('serveyeight');
  }

  ngOnInit(): void {}
}
