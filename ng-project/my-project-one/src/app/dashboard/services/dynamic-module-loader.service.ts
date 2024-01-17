import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicModuleLoaderService {
  constructor() {}

  async createDynamicModule(selector: string) {
    const dynamicComponent = await import(`../container/${selector}/${selector}.component`).then((module) => {
      return module.default;
    });

    return dynamicComponent;
  }

  // @To Del
  componentToAddOnlyforUnderstanding() {
    // Create an instance of the dynamic component
    //const componentRef = this.viewContainerRef.createComponent(factory);
    // Access the instance of the dynamic component
    //const dynamicComponentInstance = componentRef.instance;
    // Set properties or perform any other necessary initialization
    // dynamicComponentInstance.message = 'Hello from Dynamic Component!';
  }
}
