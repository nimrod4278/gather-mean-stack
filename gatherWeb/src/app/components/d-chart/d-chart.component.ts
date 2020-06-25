import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-chart',
  templateUrl: './d-chart.component.html',
  styleUrls: ['./d-chart.component.css']
})
export class DChartComponent implements OnInit {
  public doughnutChartLabels = ['Nimrod', 'Almog', 'Adi', 'May', 'Maya', ''];
  public doughnutChartData = [120, 150, 180, 90, 100, 200];
  public doughnutChartType = 'doughnut';
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#EB4886', '#875EC0', '#FFB92D', '#F96968', '#37227A', '#BFA2B0'],
      borderWidth: 2,
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
