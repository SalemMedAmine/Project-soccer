import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // Express server destination adresse 
matchURL:string="http://localhost:3000/api/matches"
  constructor(private httpClient:HttpClient) { }
  getAllMatches(){
    return this.httpClient.get<{matches:any,message:string}>(this.matchURL);

  }
  GetMatchByID(x){
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${x}`);
    // return this.httpClient.get(this.matchURL+"/"+x);

  }
  deleteMatch(y){
   return this.httpClient.delete(`${this.matchURL}/${y}`);
  }

  addMatch(matchObj){
    return this.httpClient.post(this.matchURL,matchObj);

  }

  editMatch(newMatch){
return this.httpClient.put(this.matchURL,newMatch);
  }

  searchMatch(obj){
    return this.httpClient.post<{findedMatch:any}>(`${this.matchURL}/searchMatches`,obj);
  }
}
