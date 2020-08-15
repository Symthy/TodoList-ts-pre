import { ViewEventHandlerCallableSupplier } from '../viewEventHandler';
import { ViewEditModeState } from '../../viewEditModeState';
import { TodoElement } from '../../../../todoElement';

export class TodoResetElementHandler
  implements ViewEventHandlerCallableSupplier {
  private resetEditModeFunc: EventListener;

  constructor(
    private childComponents: ComponentHolder<TodoElement, ConvertableComponent>,
    private editState: ViewEditModeState
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

    // if (this.editState.isEditingTodoTitle()) {
    //   HtmlAccessor.convertElement(
    //     this.editState.editingTodoTitle,
    //     TODO_TITLE_NORMAL_HTML,
    //     IDENTIFIER_TITLE
    //   );
    //   this.editState.resetEditingTodoTitle();
    // }
    // if (this.editState.isEditingTodoDetail()) {
    //   HtmlAccessor.convertElement(
    //     this.editState.editingTodoDetail,
    //     TODO_DETAIL_NORMAL_HTML,
    //     IDENTIFIER_DETAIL
    //   );
    //   this.editState.resetEditingTodoDetail();
    // }
    // if (this.editState.isEditingTodoEstimate()) {
    //   convertResetTimeElem(
    //     this.editState.editingTodoEstimate,
    //     TODO_ESTIMATE_NORMAL_HTML
    //   );
    //   this.editState.resetEditingTodoEstimate();
    // }
    // if (this.editState.isEditingTodoResult()) {
    //   convertResetTimeElem(
    //     this.editState.editingTodoResult,
    //     TODO_RESULT_NORMAL_HTML
    //   );
    //   this.editState.resetEditingTodoResult();
    // }
  }
}
