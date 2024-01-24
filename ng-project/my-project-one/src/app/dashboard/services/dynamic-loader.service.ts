import { Compiler, Injectable, Injector, NgModuleRef, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicLoaderService {
  constructor(
    private compiler: Compiler,
    private injector: Injector,
  ) {}

  async loadModule(selectorName: string, moduleName: string): Promise<NgModuleRef<any>> {
    const moduleType = await import(`../container/${selectorName}/${selectorName}.component`).then(
      (m) => m[moduleName],
    );
    const moduleFactory = await this.compiler.compileModuleAsync(moduleType);
    return moduleFactory.create(this.injector);
  }

  async loadComponent(selector: string): Promise<Type<any>> {
    const selectorClass = selector
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    const moduleName = `${selectorClass}Module`;
    const module = await this.loadModule(selector, moduleName);
    const componentName = (module as any)._bootstrapComponents[0] || `${selectorClass}Component`;
    return module.componentFactoryResolver.resolveComponentFactory(componentName).componentType;
  }
}
