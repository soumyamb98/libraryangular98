import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorservicaService } from '../authorservica.service';

@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {

  constructor(private router: Router, private authorsservica:AuthorservicaService) { }

  authors= {
    authorsId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
    imageUrl: ''
  }


  ngOnInit(): void { }
  
  addauthors(){    
    this.authorsservica.postauthors(this.authors);
    console.log("addauthors()");    
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
