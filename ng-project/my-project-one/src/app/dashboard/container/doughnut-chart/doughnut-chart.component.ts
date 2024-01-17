import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'wss-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export default class DoughnutChartComponent {}

@NgModule({
  declarations: [DoughnutChartComponent],
  imports: [CommonModule],
  bootstrap: [DoughnutChartComponent],
})
export class DoughnutChartModule {}
