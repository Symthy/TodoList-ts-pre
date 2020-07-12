import { ViewEventHandlerRegister } from './viewEventHandler';

export class ViewEventHandlerRegisters implements ViewEventHandlerRegister {
  private handlers: Array<ViewEventHandlerRegister>;
  private constructor(args: ViewEventHandlerRegister[]) {
    this.handlers = args;
  }

  public static init(
    ...args: ViewEventHandlerRegister[]
  ): ViewEventHandlerRegisters {
    return new ViewEventHandlerRegisters(args);
  }

  public register(): void {
    for (const handler of this.handlers) {
      handler.register();
    }
  }
}
