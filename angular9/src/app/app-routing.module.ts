import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MrouteguardGuard } from './mrouteguard.guard';
import { UpdateauthorsComponent } from './updateauthors/updateauthors.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';



const routes: Routes = [
  {
    path: '', component: LoginComponent,
    
    // children: [
  //   { path: 'signup', component: SignupComponent }]
  }, { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }, { path: 'authors', component: AuthorsComponent }, { path: 'books', component: BooksComponent }, {
    path: 'addbooks',
    // canActivate: [MrouteguardGuard],
      component: AddbooksComponent
  }, { path: 'addauthors', component: AddauthorsComponent }, {path:'updateauthors', component: UpdateauthorsComponent},{path:'updatebooks', component:UpdatebooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
