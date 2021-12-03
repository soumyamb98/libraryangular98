import { Component, OnInit } from '@angular/core';
import { AuthoriseService } from '../authorise.service';
import { Router, ActivatedRoute ,RouterModule } from '@angular/router';
// import {  } from '@angular/forms';
import { Injectable, Injector } from '@angular/core';
import {  AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // user = {
  //   username: '',
  //   password: ''
  // }
  
  // user = {
  //   username: '',
  //   password: ''
  // }
  
  loginForm: FormGroup;
  constructor(private _myservice:AuthoriseService , private router:Router,private _activatedRoute: ActivatedRoute) { this.loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });}

  ngOnInit(): void {
  }
  // isValid(controlName: string | (string | number)[]) {
  //   return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  // }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/home']);
          },
          error => { }
        );
    }
  }

 
  movetoregister() {
    this.router.navigate(['/signup'], { relativeTo: this._activatedRoute });
  }
}
//   loginuser() {
//     this.authorise.loginuser(this.user)
//     .subscribe(
//       res => {
//         localStorage.setItem('token', res.token)
//         this.router.navigate(['/home'])
//       },
//       err => {
//         console.log(err);
//         this.router.navigate(['/'])
//       }
//     ) 
//   }
// }
