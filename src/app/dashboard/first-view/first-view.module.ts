import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './first-view.routing';
import { Routes, RouterModule } from '@angular/router';

import { FirstViewComponent } from '../first-view/first-view.component';


import { BarChartComponent } from '../first-view/bar-chart/bar-chart.component';
import { PieChartComponent } from '../first-view/pie-chart/pie-chart.component';

import { SharedModule } from '../../../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule, FormsModule, routing, SharedModule, ChartsModule, RouterModule
  ],
  declarations: [FirstViewComponent, BarChartComponent, PieChartComponent],
})
export class FirstViewModule { }
