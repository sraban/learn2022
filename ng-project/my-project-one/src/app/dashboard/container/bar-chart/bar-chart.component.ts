import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'wss-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export default class BarChartComponent {}

@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule],
  bootstrap: [BarChartComponent],
})
export class BarChartModule {}
