import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksserviveService } from '../booksservive.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent implements OnInit {
  books= {
    booksId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl: ''
  
  }
  constructor(private router:Router, private booksservice:BooksserviveService) { }

  ngOnInit(): void {

    let booksId = localStorage.getItem("editbooksId");
    this.booksservice.getbook(booksId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  updatebooks()
  {    
    this.booksservice.updatebooks(this.books);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
