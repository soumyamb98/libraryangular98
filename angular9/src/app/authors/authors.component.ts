import { Component, OnInit } from '@angular/core';
import { AuthorservicaService } from '../authorservica.service';
import { Router } from '@angular/router';
import { AuthoriseService } from '../authorise.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(public auth:AuthoriseService, public router:Router,public authorservica:AuthorservicaService) { }

  authors=[{
    authorsId:"",
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl: ''
  }]
  

  ngOnInit(): void {
    this.authorservica.getauthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }

  
  editauthor(author:any)
  {
    // console.log(author._id)
    // localStorage.setItem("editauthorId", author._id.toString());
    
    localStorage.setItem("editauthorId", author._id.toString());
    var x = localStorage.getItem('editauthorId')
    console.log(x);
    this.router.navigate(['updateauthors']);

  }
  deleteauthor(author:any)
  {
    this.authorservica.deleteauthors(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }

}
