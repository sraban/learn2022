import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicSimpleLoaderService {
  constructor() {}

  async createDynamicComponent(selector: string) {
    const dynamicComponent = await import(`../container/${selector}/${selector}.component`).then((module) => {
      return module.default;
    });

    return dynamicComponent;
  }

  // @To Del
  componentToAddOnlyforUnderstanding() {
    //---const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    // Create an instance of the dynamic component
    // const componentRef = this.viewContainerRef.createComponent(factory);
    // Access the instance of the dynamic component
    // const dynamicComponentInstance = componentRef.instance;
    // Set properties or perform any other necessary initialization
    // dynamicComponentInstance.message = 'Hello from Dynamic Component!';
  }
}
