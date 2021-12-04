import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthorservicaService {

  item= {
    authorsId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl:''
    // imageUrl: ''
  }
  constructor(private http: HttpClient) { }


  getauthor(id: any) {
    
    console.log(id);
    return this.http.get("http://localhost:5000/authors/" + id);
  }
  getauthors(){
    return this.http.get("http://localhost:5000/authors")
  }

  postauthors(item:any){   
    return this.http.post("http://localhost:5000/authors/insert",{item})
    .subscribe(data =>{console.log(data)})
  }
  deleteauthors(id:any){

    return this.http.delete("http://localhost:5000/authors/remove/"+id)
  }


  updateauthors(author: any) {
    console.log(author); 
    console.log('authors update')
    return this.http.put("http://localhost:5000/authors/update", author)
      .subscribe(data => { console.log(data) })
    
  }





}
