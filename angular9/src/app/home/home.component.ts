import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoriseService } from '../authorise.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Library';
  

  username = '';

  

  constructor(private myService:AuthoriseService,
    private _router: Router) {
    
      this.myService.getUserName()
      .subscribe(
        data => this.username= data.toString(),
        error => this._router.navigate(['/'])
      )
    }

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
