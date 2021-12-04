import { Component, OnInit } from '@angular/core';
import { AuthorservicaService } from '../authorservica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthors',
  templateUrl: './updateauthors.component.html',
  styleUrls: ['./updateauthors.component.css']
})
export class UpdateauthorsComponent implements OnInit {
  authors= {
    // authorsId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
    imageUrl: ''
  }
  constructor(private router:Router, private authorsservice:AuthorservicaService) { }

  ngOnInit(): void {
    let authorsId = localStorage.getItem('editauthorId')
    console.log(authorsId)
    this.authorsservice.getauthor(authorsId).subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors)
  })
  }
  updateauthors()
  {   
    
    this.authorsservice.updateauthors(this.authors);   
    alert("Success");
    this.router.navigate(['authors']);
  }
}
