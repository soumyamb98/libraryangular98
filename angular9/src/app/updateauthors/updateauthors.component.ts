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
    authorsId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl: ''
  
  }
  constructor(private router:Router, private authorsservice:AuthorservicaService) { }

  ngOnInit(): void {
    let authorsId = localStorage.getItem("editauthorsId");
    this.authorsservice.getauthor(authorsId).subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
  updateauthors()
  {    
    this.authorsservice.updateauthors(this.authors);   
    alert("Success");
    this.router.navigate(['authors']);
  }
}
