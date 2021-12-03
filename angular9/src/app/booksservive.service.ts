import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksserviveService {




  item = {
    booksId:'',
    title: '',
        author:'',
        genre: '',
        // image: [''],
        // imageUrl: ['']
    imageUrl:''
    // imageUrl: ''
  }
  
  constructor(private httpdata: HttpClient) { }
  
  postbooks(item: any) {
    console.log{"postbooks()"}
    return this.httpdata.post("http://localhost:5000/books/insert",{item})
    .subscribe(data =>{console.log(data)})
    // return this.httpdata.post<any>("http://localhost:5000/books/insert", item).pipe(map((res: any) => {
    //   return res;
    // }))
  }

  getbooks() {
    return this.httpdata.get("http://localhost:5000/books")
    // return this.httpdata.get<any>("http://localhost:5000/books").pipe(map((res: any) => {
    //   return res;
    // }))
  }
  getbook(id: any) {
    return this.httpdata.get("http://localhost:5000/books" + id);
    // return this.httpdata.get("http://localhost:5000/"+id);
    // return this.httpdata.get<any>("http://localhost:5000/books").pipe(map((res: any) => {
    //   return res;
    // }))
  }
  
  // updatebooks(books: any, id:any){
  //   return this.httpdata.put<any>("http://localhost:5000/books/update"+ id, books).pipe(map((res: any) => {
  //   return res;
  // }))
  // }
  updatebooks(book: any) {
    console.log('books update')
    return this.httpdata.put("http://localhost:5000/books/update", book)
    .subscribe(data =>{console.log(data)})
  //   return this.httpdata.put<any>("http://localhost:5000/books/update"+ id, books).pipe(map((res: any) => {
  //   return res;
  // }))
  }
  // updatebooks(books: any){
  //   return this.httpdata.get<any>("http://localhost:5000/books/insert"+ id, books).pipe(map((res: any) => {
  //   return res;
  // }))
  // }
  deletebooks(id: number) {

    return this.httpdata.delete("http://localhost:5000/books/remove/"+id)
    // return this.httpdata.delete<any>("http://localhost:5000/books/remove/:id"+ id).pipe(map((res: any) => {
    //   return res;
    // }))    

  }



}
