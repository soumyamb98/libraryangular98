import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';
import { AuthoriseService } from '../authorise.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: FormGroup;

  successMessage: String = '';
  constructor(private _myservice: AuthoriseService,
    private router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.myform = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      
      cnfpass: new FormControl(null, this.passValidator)
    });
    // this.myform.controls.password.valueChanges
    //   .subscribe(
    //     x => this.myform.controls.cnfpass.updateValueAndValidity());


  }

  ngOnInit(): void {}
  // isValid(controlName:any) {
  //   return this.myform.get(controlName).invalid && this.myform.get(controlName).touched;
  // }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;
      
      const passControl = control.root.get('password');
      if (passControl) { const passValue = passControl.value;
        if ( passValue === '') {
          return {
            isError: true};
        }
      }
    } return null;
  }
 register() {
    console.log(this.myform.value);

    if (this.myform.valid) {
      this._myservice.submitRegister(this.myform.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'SOme error'
        );
    }
  }

  movetologin() {
    this.router.navigate(['/'], { relativeTo: this._activatedRoute });
  }
}
