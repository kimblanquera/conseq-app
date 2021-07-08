import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ChartData } from 'src/app/models/chart-data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  position: LegendPosition = LegendPosition.Below;
  view: [number, number] = [0,0]

  @Input() results: ChartData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.view = [450, 450];
  }

}
