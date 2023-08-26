import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servey-eight',
  templateUrl: './servey-eight.component.html',
  styleUrls: ['./servey-eight.component.css'],
})
export class ServeyEightComponent implements OnInit {
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor() {}

  nextButtonClicked() {
    this.changeServeyStep.emit('serveynine');
  }
  goBack() {
    this.changeServeyStep.emit('serveyseven');
  }
  ngOnInit(): void {}
}
