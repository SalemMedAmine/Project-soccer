import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
matches:any=[{scoreOne:1,scoreTwo:4,teamOne:"CA",teamTwo:"EST"},
{scoreOne:5,scoreTwo:3,teamOne:"milan",teamTwo:"juve"},
{scoreOne:0,scoreTwo:0,teamOne:"CA",teamTwo:"EST"},];
  constructor() { }

  ngOnInit() {
  }

}
