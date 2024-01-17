import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicModuleLoaderService } from '../../services/dynamic-module-loader.service';
import { VIEW_NAMES } from '../../constants/view-name.constant';

@Component({
  selector: 'wss-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
})
export class WidgetContainerComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;

  constructor(private dynamicLoaderService: DynamicModuleLoaderService, private viewContainerRef: ViewContainerRef) {}

  async ngOnInit() {
    // API Data
    const jsonData = [
      { chartName: 'PI', data: {} },
      { chartName: 'BAR', data: {} },
      { chartName: 'LINE', data: {} },
      { chartName: 'DOUGHNUT', data: {} },
    ];

    for (const entry of jsonData) {
      const selector = VIEW_NAMES[entry.chartName];
      const factory = await this.dynamicLoaderService.createDynamicModule(selector);

      // Create an instance of the dynamic component
      const componentRef = this.viewContainerRef.createComponent(factory);

      // Access the instance of the dynamic component
      const dynamicComponentInstance = componentRef.instance as any;

      // Set properties or perform any other necessary initialization
      dynamicComponentInstance.data = 'Hello from Dynamic Component!';
    }
  }
}
