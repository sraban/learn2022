import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'wss-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export default class LineChartComponent {}

@NgModule({
  declarations: [LineChartComponent],
  imports: [CommonModule],
  bootstrap: [LineChartComponent],
})
export class LineChartModule {}
