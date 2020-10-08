
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {
  // myform: FormGroup;
  // userName: FormControl;
  // userSurname: FormControl;
  // userIdType: FormControl;
  // userIdNumber: FormControl;
  // userPassword: FormControl;
  // userConfirmPass: FormControl;
  // userEmail: FormControl;
  // userPhone: FormControl;
  // userCountry: FormControl;
  // userProvince: FormControl;
  // userCanton: FormControl;
  // userDistrict: FormControl;
  // userAddress: FormControl;

  // constructor(public navCtrl: NavController,
  //   public formBuilder: FormBuilder, ) {
  //   this.createFormControls();
  //   this.createForm(formBuilder);
  // }
  constructor(private router : Router, private formBuilder: FormBuilder){}

  // createFormControls() {
  //   this.userName = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userSurname = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userIdType = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userIdNumber = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userPassword = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(16)]);
  //   this.userConfirmPass = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(16)]);
  //   this.userEmail = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userPhone = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userCountry = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userProvince = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userCanton = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userDistrict = new FormControl('', [
  //     Validators.required]
  //   );
  //   this.userAddress = new FormControl('', [
  //     Validators.required]
  //   );
  // }
  // createForm(fb: FormBuilder) {
  //   this.myform = fb.group({
  //     userName: this.userName,
  //     userSurname: this.userSurname,
  //     userIdType: this.userIdType,
  //     userIdNumber: this.userIdNumber,
  //     userPassword: this.userPassword,
  //     userConfirmPass: this.userConfirmPass,
  //     userEmail: this.userEmail,
  //     userPhone: this.userPhone,
  //     userCountry: this.userCountry,
  //     userProvince: this.userProvince,
  //     userCanton: this.userCanton,
  //     userDistrict: this.userDistrict,
  //     userAddress: this.userAddress
  //   });
  // }

  ngOnInit() {
  }

  evento(){
    this.router.navigate(['home']);
  }
  // redirectTo(){
  //   this.navCtrl.navigateRoot('login');
  // }
  onClickFunction(event) {
    console.log('Event caught');
  } 

  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(20)]]
    // email: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
    //   ]
    // ],
    // phone: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
    //   ]
    // ]
  });
}
