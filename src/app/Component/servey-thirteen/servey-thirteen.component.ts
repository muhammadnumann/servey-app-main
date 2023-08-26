import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-thirteen',
  templateUrl: './servey-thirteen.component.html',
  styleUrls: ['./servey-thirteen.component.css'],
})
export class ServeyThirteenComponent implements OnInit {
  @Output() changeServeyStep = new EventEmitter<any>();

  constructor() {}

  nextButtonClick() {
    this.changeServeyStep.emit('serveyfourteen');
  }
  goBack() {
    this.changeServeyStep.emit('serveytwelve');
  }
  ngOnInit(): void {}
}
