// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule
 } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

// Components Import
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { from } from 'rxjs';
import { AuthInterceptor } from './components/auth/auth-interceptor';
import { GameComponent } from './components/game/game.component';
import {PercCircleComponent} from "./components/perc-circle/perc-circle.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    GameComponent,
    PercCircleComponent,
    StatisticsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
