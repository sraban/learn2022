import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './component/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetContainerComponent } from './component/widget-container/widget-container.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'widgets', component: WidgetContainerComponent },
];

@NgModule({
  declarations: [OverviewComponent, WidgetContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
