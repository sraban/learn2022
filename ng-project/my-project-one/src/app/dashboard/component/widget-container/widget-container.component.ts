import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicSimpleLoaderService } from '../../services/dynamic-simple-loader.service';
import { VIEW_NAMES } from '../../constants/view-name.constant';

@Component({
  selector: 'wss-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
})
export class WidgetContainerComponent implements AfterViewInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;

  constructor(private dynamicSimpleLoaderService: DynamicSimpleLoaderService) {}

  async ngAfterViewInit() {
    // API Data
    const jsonData = [
      { chartName: 'PI', data: {} },
      { chartName: 'BAR', data: {} },
      { chartName: 'LINE', data: {} },
    ];

    this.dynamicContainer.clear();

    for (const entry of jsonData) {
      const selector = VIEW_NAMES[entry.chartName];
      const factory = await this.dynamicSimpleLoaderService.createDynamicComponent(selector);

      // Create an instance of the dynamic component
      const compRef: ComponentRef<any> = this.dynamicContainer.createComponent(factory);

      // Access the instance of the dynamic component
      const dynamicComponentInstance: any = compRef.instance;

      // Set properties or perform any other necessary initialization
      dynamicComponentInstance.data = 'Hello from Dynamic Component!';
    }
  }
}
