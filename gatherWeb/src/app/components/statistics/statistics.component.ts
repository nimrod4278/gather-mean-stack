import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],

})
export class StatisticsComponent implements OnInit {
  buzzersToGo: number;
  buzzersToday: number;
  buzzersWeek: number;
  buzzerGeneral: number;
  data: [];

  constructor() { }

  ngOnInit() {
    this.buzzersToGo = 347;
    this.buzzersToday = 20;
    this.buzzersWeek = 143;
    this.buzzerGeneral = 764;
  }

}
