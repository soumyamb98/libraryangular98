import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';


import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})


export class AuthoriseService {
  private loginurl = 'http://localhost/5000/'
  
  constructor(private http:HttpClient) { }
  submitRegister(body:any){
    return this.http.post('http://localhost:5000/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this.http.post('http://localhost:5000/users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this.http.get('http://localhost:5000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }




//   loginuser(user: any) {
//     return this.httpdata.post<any>(this.loginurl, (user));
//   }
  loggedIn()
  {
    return !!localStorage.getItem('token')
//   }
//   getToken()
//   {
//     return localStorage.getItem('token')
//   }
}
