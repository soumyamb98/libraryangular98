import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksserviveService } from '../booksservive.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private booksservice:BooksserviveService,private router: Router) { }

  books= {
    booksId:'',
    title: '',
    author:'',
    genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl:''}


  ngOnInit(): void {
  }




  addbooks()
  {    
    this.booksservice.postbooks(this.books);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}
