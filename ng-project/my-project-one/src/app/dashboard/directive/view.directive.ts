import { Directive, Input, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[wssView]',
})
export class ViewDirective {
  constructor(private vcRef: ViewContainerRef) {}

  @Input()
  set view(view: ViewRef) {
    this.vcRef.clear();
    this.vcRef.insert(view);
  }

  ngOnDestroy() {
    this.vcRef.clear();
  }
}
