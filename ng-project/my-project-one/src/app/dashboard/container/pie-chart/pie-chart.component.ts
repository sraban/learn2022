import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'wss-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export default class PieChartComponent {}

@NgModule({
  declarations: [PieChartComponent],
  imports: [CommonModule],
  bootstrap: [PieChartComponent],
})
export class PieChartModule {}
