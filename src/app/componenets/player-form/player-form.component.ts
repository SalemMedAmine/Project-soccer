import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
playerForm:FormGroup;
player:any={};
id:any;
title:string="Add PLayer";
  constructor(private activatedRoute:ActivatedRoute,
    private playerService :PlayerService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
this.title="Edit Player"
      
    }
   
  }
  addPlayer(){
    console.log("Here Palyer obj" ,this.player   );
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe();
    } else {
      this.playerService.addPlayer(this.player).subscribe();
    }
  }
}
