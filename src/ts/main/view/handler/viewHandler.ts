export interface ViewHandler {
  register(): void;
}

export abstract class ExtensionViewHandler implements ViewHandler {
  protected subHandlerHolder: SubViewHandlerHolder;
  constructor() {
    this.subHandlerHolder = new SubViewHandlerHolder();
  }
  abstract register(): void;
  addHandler(methodName: string, handler: SubViewHandler): this {
    this.subHandlerHolder.add(methodName, handler);
    return this;
  }
  getHandler(methodName: string): SubViewHandler {
    return this.subHandlerHolder.get(methodName);
  }
}

class SubViewHandlerHolder {
  subHandlers: Map<String, SubViewHandler>;
  constructor() {
    this.subHandlers = new Map();
  }
  add(methodName: string, handler: SubViewHandler) {
    this.subHandlers.set(methodName, handler);
  }
  get(methodName: string): SubViewHandler | never {
    const handler = this.subHandlers.get(methodName);
    if (handler) {
      return handler;
    }
    throw Error('');
  }
  supply(methodName: string): EventListener {
    return this.get(methodName).supply();
  }
}

export interface SubViewHandler {
  supply(): EventListener;
}
