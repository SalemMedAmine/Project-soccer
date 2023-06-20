import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab:any=[
    {playerName:"messi",playerNbr:3,position:"ATK"},
    {playerName:"Cristiano",playerNbr:7,position:"FRWD"}];
  constructor() { }

  ngOnInit() {
  }

}
