import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articles:any=[
  {titel:"titel1", description:"descritpion 1",date:"07/05/2023",img:"assets/images/img_1.jpg"},
  {titel:"titel2", description:"descritpion 2",date:"05/05/2023",img:"assets/images/img_2.jpg"},
  {titel:"titel2", description:"descritpion 2",date:"05/05/2023",img:"assets/images/img_2.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
