import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder} from '@angular/forms';
// import { booksdata } from './books.model';
import { BooksserviveService } from '../booksservive.service';
import { Router } from '@angular/router';
import { AuthoriseService } from '../authorise.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // formValue!: FormGroup
  // booksModelObj: booksdata = new booksdata
  
  // constructor(private formbuilder: FormBuilder, private booksservice:BooksserviveService, private router:Router) { }
  constructor(public auth:AuthoriseService,public booksservice:BooksserviveService, public router:Router) { }

  // books: any
  
  books= [{
    booksId:"",
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl: ''
  
  }]
  

  ngOnInit(): void {





    this.booksservice.getbooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })

    
    // video
    // this.formValue = this.formbuilder.group({
    //   books:[{
    //     title: [''],
    //     author:[''] ,
    //     genre: [''],
    //     // image: [''],
    //     imageUrl: ['']
    //   }]
    // })
  }
  

  // video
  // addbooks(){
  //   this.booksModelObj.title = this.formValue.value.title;
  //   this.booksModelObj.author = this.formValue.value.author;
  //   this.booksModelObj.genre = this.formValue.value.genre;
  //   // this.booksModelObj.image = this.formValue.value.image;
  //   this.booksModelObj.imageUrl = this.formValue.value.imageUrl;

    // this.booksservice.postbooks(this.booksModelObj).subscribe(res => {
    //   console.log(res);
    //   alert("books added ");
    // }, err => {
    //   "ot added"
    // })
  // }

  updatebooks(book:any)
  { 
    localStorage.setItem("editbookId", book._id.toString());
    var x = localStorage.getItem("editbookId")
    console.log(x)
    this.router.navigate(['updatebooks']);

  }
  deletebooks(book: any) {
    this.booksservice.deletebooks(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })


  }


}
