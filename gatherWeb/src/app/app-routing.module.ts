import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { GameComponent } from './components/game/game.component';
import { AuthGuard } from './components/auth/auth.guard';
import {StatisticsComponent} from "./components/statistics/statistics.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'testguard', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'testgame', component: GameComponent, canActivate: [AuthGuard]},
    {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}
