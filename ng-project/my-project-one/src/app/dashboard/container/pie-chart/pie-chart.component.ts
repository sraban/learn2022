import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PieFiltersComponent } from './pi-filters.component';

@Component({
  selector: 'wss-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export default class PieChartComponent {}

@NgModule({
  declarations: [PieChartComponent, PieFiltersComponent],
  imports: [CommonModule],
  bootstrap: [PieChartComponent],
})
export class PieChartModule {}
