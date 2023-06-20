import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://loclahost:3000/api/players"
  constructor(private  httpClient:HttpClient) {  }
  
getAllplayers(){
    return this.httpClient.get<{playersTab:any}>(this.playerURL);

}
GetplayerByID(x){
  return this.httpClient.get<{player:any}>(`${this.playerURL}/${x}`);
  // return this.httpClient.get(this.matchURL+"/"+x);

}

deleteplayer(y){
  return this.httpClient.delete(`${this.playerURL}/${y}`);
 }

 addPlayer(playerObj){
   return this.httpClient.post<{msg:string}>(this.playerURL,playerObj);
 }
 editPlayer(newPlayer){
  return this.httpClient.put<{msg:string}>(this.playerURL,newPlayer);
}

}


