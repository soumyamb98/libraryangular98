import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';



// import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';
import { UpdateauthorsComponent } from './updateauthors/updateauthors.component';
import { AuthoriseService } from './authorise.service';

import { BooksserviveService } from './booksservive.service';
import { AuthorservicaService } from './authorservica.service';


import { MrouteguardGuard } from './mrouteguard.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AuthorsComponent,
    BooksComponent,
    AddbooksComponent,
    AddauthorsComponent,
    SignupComponent,
    UpdatebooksComponent,
    UpdateauthorsComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthoriseService, MrouteguardGuard, BooksserviveService, AuthorservicaService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
