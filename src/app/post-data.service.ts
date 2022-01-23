import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http:HttpClient) { }
  getPostData(){
    let url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}


