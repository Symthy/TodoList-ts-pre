export interface ViewEventHandlerRegister {
  register(): void;
}

export abstract class ExtensionViewEventHandlerRegister
  implements ViewEventHandlerRegister {
  protected subHandlerHolder: ViewEventHandlerSupplierHolder;
  constructor() {
    this.subHandlerHolder = new ViewEventHandlerSupplierHolder();
  }
  abstract register(): void;
  addHandler(methodName: string, handler: ViewEventHandlerSupplier): this {
    this.subHandlerHolder.add(methodName, handler);
    return this;
  }
  getHandler(methodName: string): ViewEventHandlerSupplier {
    return this.subHandlerHolder.get(methodName);
  }
}

class ViewEventHandlerSupplierHolder {
  subHandlers: Map<string, ViewEventHandlerSupplier>;
  constructor() {
    this.subHandlers = new Map();
  }
  add(methodName: string, handler: ViewEventHandlerSupplier) {
    this.subHandlers.set(methodName, handler);
  }
  get(methodName: string): ViewEventHandlerSupplier | never {
    const handler = this.subHandlers.get(methodName);
    if (handler) {
      return handler;
    }
    throw Error('');
  }
  supply<T>(
    methodName: string,
    elem?: T extends string ? T : undefined
  ): EventListener {
    return this.get(methodName).supply(elem);
  }
}

export interface ViewEventHandlerSupplier {
  supply<T>(arg?: T extends string ? T : undefined): EventListener;
}

export interface ViewEventHandlerCallableSupplier
  extends ViewEventHandlerSupplier {
  call<T>(arg?: T extends string ? T : undefined): void;
}
