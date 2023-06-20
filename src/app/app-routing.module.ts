import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { LoginComponent } from './componenets/login/login.component';
import { AddMatchComponent } from './componenets/add-match/add-match.component';
import { AddTeamComponent } from './componenets/add-team/add-team.component';
import { AllMatchesComponent } from './componenets/all-matches/all-matches.component';
import { PlayerComponent } from './componenets/player/player.component';
import { PlayersComponent } from './componenets/players/players.component';
import { AdminComponent } from './componenets/admin/admin.component';
import { MatchInfoComponent } from './componenets/match-info/match-info.component';
import { EditMatchComponent } from './componenets/edit-match/edit-match.component';
import { SearchComponent } from './componenets/search/search.component';
import { WeatherComponent } from './componenets/weather/weather.component';
import { PlayerFormComponent } from './componenets/player-form/player-form.component';


const routes: Routes = [
{path:"" ,component:HomeComponent},
{path:"signin",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"addMatch",component:AddMatchComponent},
{path:"addTeam",component:AddTeamComponent},
{path:"allMatches",component:AllMatchesComponent},
{path:"players",component:PlayersComponent},
{path:"admin",component:AdminComponent},
{path:"matchInfo",component:MatchInfoComponent},
{path:"editMatch/:id",component:EditMatchComponent},
{path:"search",component:SearchComponent},
{path:"weather",component:WeatherComponent},
{path :"addPlayer" , component:PlayerFormComponent},
{path :"editPlayer/:id" , component:PlayerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
