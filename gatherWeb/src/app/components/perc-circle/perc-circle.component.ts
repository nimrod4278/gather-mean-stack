import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-perc-circle',
  templateUrl: './perc-circle.component.html',
  styleUrls: ['./perc-circle.component.css']
})
export class PercCircleComponent implements OnInit, AfterViewInit {

  private perctage: any

  constructor(private http: HttpClient, private authService: AuthService) {
    this.perctage = this.getPrecentage();
  }

  ngOnInit() {
    this.getPrecentage();
  }

  ngAfterViewInit(){

  }

  getPrecentage(){
    const {token} = this.authService.getAuthData();
    const currentPoints = this.http.get<{points: number}>('http://localhost:3000/api/statistics', {headers: {
      Authorization: `Bearer ${token}`
    }}).toPromise().then(res => {
      this.perctage = res.points;
    }).catch(err => {
      console.log(err);
    });
  }



}
