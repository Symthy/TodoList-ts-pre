import { ViewHandler } from './viewHandler';

export class ViewHandlers implements ViewHandler {
  private handlers: Array<ViewHandler>;
  private constructor(args: ViewHandler[]) {
    this.handlers = args;
  }

  public static init(...args: ViewHandler[]): ViewHandlers {
    return new ViewHandlers(args);
  }

  public register(): void {
    for (let handler of this.handlers) {
      handler.register();
    }
  }
}
