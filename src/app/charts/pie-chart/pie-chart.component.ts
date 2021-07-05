import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'src/app/models/chart-data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() results: ChartData[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
