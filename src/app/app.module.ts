import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { CupEventComponent } from './componenets/cup-event/cup-event.component';
import { ResultComponent } from './componenets/result/result.component';
import { NewsComponent } from './componenets/news/news.component';
import { StatsComponent } from './componenets/stats/stats.component';
import { BlogComponent } from './componenets/blog/blog.component';
import { InfoComponent } from './componenets/info/info.component';
import { ArticleComponent } from './componenets/article/article.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { AddMatchComponent } from './componenets/add-match/add-match.component';
import { AddTeamComponent } from './componenets/add-team/add-team.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { AllMatchesComponent } from './componenets/all-matches/all-matches.component';
import { PlayerComponent } from './componenets/player/player.component';
import { PlayersComponent } from './componenets/players/players.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './componenets/admin/admin.component';
import { MatchesTableComponent } from './componenets/matches-table/matches-table.component';
import { TeamsTableComponent } from './componenets/teams-table/teams-table.component';
import { PlayersTableComponent } from './componenets/players-table/players-table.component';
import { MatchInfoComponent } from './componenets/match-info/match-info.component';
import { EditMatchComponent } from './componenets/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './componenets/search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './componenets/weather/weather.component';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { PlayerFormComponent } from './componenets/player-form/player-form.component';
import { ProfileComponent } from './componenets/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    LoginComponent,
    AddMatchComponent,
    AddTeamComponent,
    SignupComponent,
    AllMatchesComponent,
    PlayerComponent,
    PlayersComponent,
    AdminComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    AsterixPipe,
    SearchComponent,
    WeatherComponent,
    MyfilterPipe,
    PlayerFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
