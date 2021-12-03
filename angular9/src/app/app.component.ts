import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { AuthoriseService } from './authorise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(public auth: AuthoriseService, private router: Router) { }

  logoutuser() {
    localStorage.removeItem('token')
    this.router.navigate(['/']);
  }
}
