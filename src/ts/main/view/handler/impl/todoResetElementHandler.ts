import { TodoElement } from '../../../../todoElement';
import { ViewEventHandlerCallableSupplier } from '../viewEventHandler';

export class TodoResetElementHandler
  implements ViewEventHandlerCallableSupplier {
  private resetEditModeFunc: EventListener;

  constructor(
    private childComponents: ComponentHolder<TodoElement, ConvertibleComponent>
  ) {
    this.resetEditModeFunc = () => {
      this.resetEditMode();
    };
  }

  supply(): EventListener {
    return this.resetEditModeFunc;
  }

  call(): void {
    this.resetEditMode();
  }

  private resetEditMode(): void {
    const it = this.childComponents.components.values();
    for (const component of it) {
      component.reconvertComponent('');
    }
  }
}
