import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServeyService } from 'src/app/services/servey.service';

@Component({
  selector: 'app-servey-four',
  templateUrl: './servey-four.component.html',
  styleUrls: ['./servey-four.component.css'],
})
export class ServeyFourComponent implements OnInit {
  contactForm: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();

  constructor(private serveyService: ServeyService) {
    const formValue = localStorage.getItem('contactForm');
    if (formValue) {
      this.contactForm = new FormGroup({
        first_name: new FormControl(JSON.parse(formValue).first_name, [
          Validators.required,
        ]),
        last_name: new FormControl(JSON.parse(formValue).last_name, [
          Validators.required,
        ]),
        email: new FormControl(JSON.parse(formValue).email, [
          Validators.required,
          Validators.email,
        ]),
        mobile: new FormControl(
          JSON.parse(formValue).mobile,
          Validators.required
        ),
        country: new FormControl(JSON.parse(formValue).country, [
          Validators.required,
        ]),
        interested1: new FormControl(
          JSON.parse(formValue).interested1,
          Validators.required
        ),
        interested2: new FormControl(
          JSON.parse(formValue).interested2,
          Validators.required
        ),
        interested3: new FormControl(
          JSON.parse(formValue).interested3,
          Validators.required
        ),
      });
    } else {
      this.contactForm = new FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        mobile: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        interested1: new FormControl(null, Validators.required),
        interested2: new FormControl(null, Validators.required),
        interested3: new FormControl(null, Validators.required),
      });
    }
  }

  formSubmit() {
    if (this.contactForm.valid) {
      localStorage.setItem(
        'contactForm',
        JSON.stringify(this.contactForm.value)
      );
      const Data = {
        servey_type: 'contact',
        first_name: this.contactForm.value.first_name,
        last_name: this.contactForm.value.last_name,
        email: this.contactForm.value.email,
        mobile: this.contactForm.value.mobile,
        country: this.contactForm.value.country,
        interested: [
          {
            user_interest: this.contactForm.value
              ? 'I want to know more about your solutions'
              : '',
          },
          {
            user_interest: this.contactForm.value
              ? 'I need to understand requirements and capabilities'
              : '',
          },
          {
            user_interest: this.contactForm.value
              ? 'I have a very specific need I need to discuss'
              : '',
          },
        ],
      };
      this.serveyService.contactApi(Data).subscribe((res) => {
        this.changeServeyStep.emit('serveyfive');
      });
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveythree');
  }

  ngOnInit(): void {}

  get first_name() {
    return this.contactForm.get('first_name');
  }

  get last_name() {
    return this.contactForm.get('last_name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  get country() {
    return this.contactForm.get('country');
  }
}
