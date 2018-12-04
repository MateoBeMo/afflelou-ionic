import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
   // Pie
   @Input() pieChartLabels: string[];
   @Input() pieChartData: number[];
   @Input() colors: any[];
   @Output() clickChart = new EventEmitter();


   public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

   // events
   public chartClicked(e: any): void {
     this.clickChart.emit(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
