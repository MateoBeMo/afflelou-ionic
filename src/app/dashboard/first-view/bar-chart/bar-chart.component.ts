import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageStadistics } from '../../../../shared/interfaces/language-stadistics';
import { Chartinfo } from '../../../interfaces/chart-info';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() barChartLabels: string[] = [];
  @Input() barChartType: string;
  @Input() barChartLegend: boolean;
  @Input() colors: any[];

  @Input() barChartData: any[] = [];



  constructor() { }

  ngOnInit() {
  }

   // events
   public chartClicked(e: any): void {
   // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
