import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servey-three',
  templateUrl: './servey-three.component.html',
  styleUrls: ['./servey-three.component.css'],
})
export class ServeyThreeComponent implements OnInit {
  optionValue: any;
  aggre: any;
  @Output() changeServeyStep = new EventEmitter<any>();

  constructor(private router: Router) {
    this.optionValue = localStorage.getItem('serveyOneRadioValue');
    this.aggre = false;
  }

  aggreeTerms(event: any) {
    this.aggre = event.target.checked;
  }

  checkNext() {
    if (this.optionValue === 'quote' && this.aggre === true) {
      this.changeServeyStep.emit('serveysix');
    } else if (this.optionValue === 'contact' && this.aggre === true) {
      this.changeServeyStep.emit('serveyfour');
    }
  }
  goBack() {
    this.changeServeyStep.emit('serveytwo');
  }

  ngOnInit(): void {}
}
