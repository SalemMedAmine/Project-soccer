import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string="http://localhost:3000/api/teams"
  constructor(private  httpClient:HttpClient) {  }
  
getAllTeams(){
    return this.httpClient.get(this.teamURL);

}
GetTeamByID(x){
  return this.httpClient.get(`${this.teamURL}/${x}`);
  // return this.httpClient.get(this.matchURL+"/"+x);

}

deleteTeam(y){
  return this.httpClient.delete(`${this.teamURL}/${y}`);
 }

 addTeam(teamObj){
   return this.httpClient.post(this.teamURL,teamObj);
 }

}

