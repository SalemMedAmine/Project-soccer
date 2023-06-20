import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators}  from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup ;
  matches:any;
  constructor(private formBuilder:FormBuilder,
    private matchService:MatchService) { }

  ngOnInit() {this.searchForm= this.formBuilder.group({
    scoreOne:["",[Validators.required]],
    scoreTwo:["",[Validators.required]],
   
  })
  }
  search(){

    this.matchService.searchMatch(this.searchForm.value).subscribe(
      (response)=>{
        console.log("here return from BE",response.findedMatch);
        this.matches=response.findedMatch
        
      }
    );
  }

}
