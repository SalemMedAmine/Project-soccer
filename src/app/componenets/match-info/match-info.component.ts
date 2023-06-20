import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
findedMAtch:any;

  constructor(private matchService:MatchService) { }

  ngOnInit() {
    let id =localStorage.getItem("id");
//     let matches=JSON.parse(localStorage.getItem("matches")||"[]");
//     for (let i = 0; i < matches.length; i++) {
// if (matches[i].id==id) {
//   this.findedMAtch=matches[i];
//   break;
  
// }      
//     }
this.matchService.GetMatchByID(id).subscribe(
  (response)=>{
    console.log("here response from BE",response.match  );
    this.findedMAtch=response.match;
    
  }
)

  }

}
