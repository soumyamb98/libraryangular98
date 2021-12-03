import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoriseService } from './authorise.service';



@Injectable({
  providedIn: 'root'
})
export class MrouteguardGuard implements CanActivate {




  constructor(private auth: AuthoriseService, private router: Router) { }
  canActivate(): boolean {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   console.log("true");
    //   return true;
    // }
    if (this.auth.loggedIn()) {
      console.log('true');
      return true
    }
    else {
      this.router.navigate(['/'])
      return false
    }
  }
  
}
