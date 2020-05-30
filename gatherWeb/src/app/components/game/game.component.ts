import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }
  

  ngOnInit() {
  }

  onStartGame(){
    console.log('starting game');
    const {token} = this.authService.getAuthData();
    const res = this.http.get('http://localhost:3000/api/games', { headers: {
      Authorization: `Bearer ${token}`
    }}).toPromise().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

}
