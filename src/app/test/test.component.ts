import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  posts:Array<any>;
 // public name = "Praneet";
  constructor(private postS:PostServiceService){
       this.posts=postS.postList;
  }

  ngOnInit(){
    
  }

}
