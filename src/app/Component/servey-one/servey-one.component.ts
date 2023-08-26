import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servey-one',
  templateUrl: './servey-one.component.html',
  styleUrls: ['./servey-one.component.css'],
})
export class ServeyOneComponent implements OnInit {
  radioValue: any;
  formOne: FormGroup;
  routerLink: any;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor(private router: Router) {
    this.radioValue = 'quote';
    this.formOne = new FormGroup({
      serveyOneRadio: new FormControl('quote', Validators.required),
    });
  }

  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  formSubmit() {
    if (this.formOne.valid) {
      this.changeServeyStep.emit('serveytwo');
      localStorage.setItem(
        'serveyOneRadioValue',
        this.formOne.value.serveyOneRadio
      );
    }
  }

  ngOnInit(): void {}

  get serveyOneRadio() {
    return this.formOne.get('serveyOneRadio');
  }
}
