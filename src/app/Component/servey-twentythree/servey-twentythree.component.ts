import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServeyService } from 'src/app/services/servey.service';

@Component({
  selector: 'app-servey-twentythree',
  templateUrl: './servey-twentythree.component.html',
  styleUrls: ['./servey-twentythree.component.css'],
})
export class ServeyTwentythreeComponent implements OnInit {
  radioValue: any;
  allFormsData: any;
  qouteForm: any;
  accessPointArray: any;
  pedestrianAccess: any;
  turnstileTypeFrom: any;
  pedestrianAccess2: any;
  VehicleAccessForm: any;
  TriggerServeyForm: any;
  ReadingdeviceForm: any;
  CheckinLPRCamera: any;
  CheckOutLPRCamera: any;
  LPRLicenseForm: any;
  applyVehicleProfile: any;
  QouteDeliveryForm: FormGroup;
  @Output() changeServeyStep = new EventEmitter<any>();
  constructor(private serveyService: ServeyService) {
    const qouteForm = localStorage.getItem('qouteForm');
    const accessPointArray = localStorage.getItem('accessPointArrayForm');
    const pedestrianAccess = localStorage.getItem('pedestrianAccess');
    const turnstileTypeFrom = localStorage.getItem('turnstileTypeFrom');
    const pedestrianAccess2 = localStorage.getItem('pedestrianAccess2');
    const VehicleAccessForm = localStorage.getItem('VehicleAccessForm');
    const TriggerServeyForm = localStorage.getItem('TriggerServeyForm');
    const ReadingdeviceForm = localStorage.getItem('ReadingdeviceForm');
    const CheckinLPRCamera = localStorage.getItem('CheckinLPRCamera');
    const CheckOutLPRCamera = localStorage.getItem('CheckOutLPRCamera');
    const LPRLicenseForm = localStorage.getItem('LPRLicenseForm');
    const applyVehicleProfile = localStorage.getItem('applyVehicleProfile');
    if (applyVehicleProfile) {
      this.applyVehicleProfile = JSON.parse(applyVehicleProfile);
    }
    if (LPRLicenseForm) {
      this.LPRLicenseForm = LPRLicenseForm;
    }
    if (CheckOutLPRCamera) {
      this.CheckOutLPRCamera = CheckOutLPRCamera;
    }
    if (CheckinLPRCamera) {
      this.CheckinLPRCamera = CheckinLPRCamera;
    }
    if (ReadingdeviceForm) {
      this.ReadingdeviceForm = JSON.parse(ReadingdeviceForm);
    }
    if (TriggerServeyForm) {
      this.TriggerServeyForm = JSON.parse(TriggerServeyForm);
    }
    if (VehicleAccessForm) {
      this.VehicleAccessForm = JSON.parse(VehicleAccessForm);
    }
    if (pedestrianAccess2) {
      this.pedestrianAccess2 = JSON.parse(pedestrianAccess2);
    }
    if (qouteForm) {
      this.qouteForm = JSON.parse(qouteForm);
    }
    if (accessPointArray) {
      this.accessPointArray = JSON.parse(accessPointArray);
    }
    if (pedestrianAccess) {
      this.pedestrianAccess = pedestrianAccess;
    }
    if (turnstileTypeFrom) {
      this.turnstileTypeFrom = turnstileTypeFrom;
    }

    const formValue = localStorage.getItem('QouteDeliveryForm');
    if (formValue) {
      this.QouteDeliveryForm = new FormGroup({
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
      });
    } else {
      this.QouteDeliveryForm = new FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        mobile: new FormControl(null, Validators.required),
      });
    }

    this.allFormsData = {};
  }

  formSubmit() {
    if (this.QouteDeliveryForm.valid) {
      const Data = {
        servey_type: 'qoute',
        first_name: this.QouteDeliveryForm.value.first_name,
        last_name: this.QouteDeliveryForm.value.last_name,
        email: this.QouteDeliveryForm.value.email,
        mobile: this.QouteDeliveryForm.value.mobile,
        country: this.qouteForm.country,
        location_name: this.qouteForm.location_name,
        city: this.qouteForm.city,
        location_type: this.qouteForm.type,
        access_point_array: [this.accessPointArray],
        available_hardware: this.pedestrianAccess,
        available_integration: 'available_integration',
        physical_barrier: this.VehicleAccessForm.text,
        physical_barrier_type: this.VehicleAccessForm.wantTobuyHardware,
        turnstile_array: [this.turnstileTypeFrom],
        pedestrian_profile_array: [this.pedestrianAccess2],
        tigger_name: this.TriggerServeyForm.text,
        trigger_type: this.TriggerServeyForm.wantTobuyHardware,
        reading_device: this.ReadingdeviceForm.text,
        reading_device_type: this.ReadingdeviceForm.wantTobuyHardware,
        lpr_camera_entry_name: this.CheckinLPRCamera,
        lpr_camera_exit_name: this.CheckOutLPRCamera,
        lpr_license_name: this.LPRLicenseForm,
        lpr_entry_front_license: this.LPRLicenseForm,
        lpr_entry_rear_license: this.LPRLicenseForm,
        lpr_exit_front_license: this.LPRLicenseForm,
        lpr_exit_rear_license: this.LPRLicenseForm,
        vehicle_access_hardware_name: this.applyVehicleProfile.accessPoint,
        vehicle_access_hardware_type: this.applyVehicleProfile.type,
        vehicle_access_profile_array: [this.pedestrianAccess2],
      };

      localStorage.setItem(
        'QouteDeliveryForm',
        JSON.stringify(this.QouteDeliveryForm.value)
      );

      this.serveyService.qouteApi(Data).subscribe((res) => {
        this.changeServeyStep.emit('serveytwentyfour');
      });
    }
  }

  goBack() {
    this.changeServeyStep.emit('serveyone');
  }
  checkedRadio = (value: any) => {
    this.radioValue = value;
  };

  ngOnInit(): void {}

  get first_name() {
    return this.QouteDeliveryForm.get('first_name');
  }

  get last_name() {
    return this.QouteDeliveryForm.get('last_name');
  }
  get email() {
    return this.QouteDeliveryForm.get('email');
  }
  get mobile() {
    return this.QouteDeliveryForm.get('mobile');
  }
}
