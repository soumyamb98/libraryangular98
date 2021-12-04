// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor } from '@angular/common/http';


// import { MrouteguardGuard } from './mrouteguard.guard';
// import { AuthoriseService } from './authorise.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor{

  
//   constructor(private injector: Injector) { }
//   intercept(req: any, nxt: any)
//   {
    
//     let authService = this.injector.get(AuthoriseService);
//     let tokenizedReq = req.clone(
//       {
//       setHeaders: {
//         Authorization: `Bearer $(authService.getToken())`
//       }
//       })
    
    
    
//     return nxt.handle(tokenizedReq)
//   }
// }
