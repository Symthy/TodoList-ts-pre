import {
  ViewEventHandlerRegister,
  ViewEventHandlerSupplier,
} from '../viewEventHandler';

export class WindowHandler implements ViewEventHandlerRegister {
  constructor(private resetEditingHandler: ViewEventHandlerSupplier) {}
  register(): void {
    window.addEventListener('click', this.resetEditingHandler.supply());
  }
}
