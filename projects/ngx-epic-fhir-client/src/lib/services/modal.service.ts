import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class ModalService {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly injector: Injector,
    private readonly applicationRef: ApplicationRef
  ) {}

  present<T>(componentSymbol: Type<T>, componentProperties: Partial<T>) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(componentSymbol)
      .create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    Object.keys(componentProperties).forEach(
      (key) =>
        ((componentRef.instance as any)[key] = (componentProperties as any)[
          key
        ])
    );

    this.document.body.appendChild(domElem);
    const dialog = this.document.getElementById(
      'serverModal'
    ) as HTMLDialogElement;
    (dialog as any).showModal();
    return {
      domElem,
      instance: componentRef.instance,
    };
  }

  dismiss(domElem: HTMLElement) {
    domElem?.remove();
  }
}
