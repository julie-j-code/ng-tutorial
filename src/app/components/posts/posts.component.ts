import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../../post-data.service";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts:any=[];

  constructor(private service: PostDataService) {
    this.service.getPostData().subscribe(data => {
      // console.log(data);
      this.allPosts=data;
    })
  }


  ngOnInit(): void {
  }

}
