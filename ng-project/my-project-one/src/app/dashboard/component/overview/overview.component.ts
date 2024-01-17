import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicLoaderService } from '../../services/dynamic-loader.service';
import { VIEW_NAMES } from '../../constants/view-name.constant';

@Component({
  selector: 'wss-overview-container',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;

  constructor(private dynamicLoaderService: DynamicLoaderService) {}

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
      const componentType = await this.dynamicLoaderService.loadComponent(selector);
      // Now you can dynamically create and use the componentType
      // For example, you can create a component dynamically:
      // const componentRef =
      this.createComponentDynamically(componentType);

      // componentRef.instance.data = entry.data;
      // Do something with the dynamically created componentRef
    }
  }

  private createComponentDynamically(componentType: Type<any>) {
    // const componentRef =
    this.dynamicContainer.createComponent(componentType);

    // Logic to create and attach the component dynamically
    // You can use ViewContainerRef and ComponentFactoryResolver for this
  }

  //   private elements: Array<{ view: ViewRef, component: WidgetComponent}>=[];
  //   private WidgetClasses = {
  //      'ChartWidget': ChartWidget,
  //      'DataWidget': DataWidget
  //  }

  //  @ViewChild(DynamicComponent) dynamicComponent:DynamicComponent;
  //   addComponent(widget: string ): void{
  //     let component = this.dynamicComponent.addComponent(this.WidgetClasses[widget]);
  //     let view: ViewRef = this.dynamicComponent.container.detach(0);
  //     this.elements.push({view,component});
  //   }
}
