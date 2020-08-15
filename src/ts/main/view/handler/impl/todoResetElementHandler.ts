import { ViewEventHandlerCallableSupplier } from '../viewEventHandler';
import { TodoElement } from '../../../../todoElement';

export class TodoResetElementHandler
  implements ViewEventHandlerCallableSupplier {
  private resetEditModeFunc: EventListener;

  constructor(
    private childComponents: ComponentHolder<TodoElement, ConvertableComponent>
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
      component.reconvertComponent();
    }
  }
}
