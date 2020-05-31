import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perc-circle',
  templateUrl: './perc-circle.component.html',
  styleUrls: ['./perc-circle.component.css']
})
export class PercCircleComponent implements OnInit {

  perctage: number;

  constructor() { }

  ngOnInit() {
    this.perctage = 30;
  }

}
