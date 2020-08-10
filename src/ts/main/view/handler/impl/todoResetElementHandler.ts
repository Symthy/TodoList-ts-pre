import { ViewEventHandlerCallableSupplier } from '../viewEventHandler';
import {
  IDENTIFIER_TITLE,
  IDENTIFIER_DETAIL,
  IDENTIFIER_TIME,
  TODO_TITLE_NORMAL_HTML,
  TODO_RESULT_NORMAL_HTML,
  TODO_ESTIMATE_NORMAL_HTML,
  TODO_DETAIL_NORMAL_HTML,
} from '../../../../component/todoTemplate';
import { ViewEditModeState } from '../../viewEditModeState';
import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';

export class TodoResetElementHandler
  implements ViewEventHandlerCallableSupplier {
  private resetEditModeFunc: EventListener;

  constructor(private editState: ViewEditModeState) {
    this.resetEditModeFunc = (e: Event) => {
      this.resetEditModeFunc(e);
    };
  }

  supply(): EventListener {
    return this.resetEditModeFunc;
  }

  call(): void {
    this.resetEditMode();
  }

  private resetEditMode(): void {
    if (this.editState.isEditingTodoTitle()) {
      HtmlAccessor.convertElement(
        this.editState.editingTodoTitle,
        TODO_TITLE_NORMAL_HTML,
        IDENTIFIER_TITLE
      );
      this.editState.resetEditingTodoTitle();
    }
    if (this.editState.isEditingTodoDetail()) {
      HtmlAccessor.convertElement(
        this.editState.editingTodoDetail,
        TODO_DETAIL_NORMAL_HTML,
        IDENTIFIER_DETAIL
      );
      this.editState.resetEditingTodoDetail();
    }
    if (this.editState.isEditingTodoEstimate()) {
      convertResetTimeElem(
        this.editState.editingTodoEstimate,
        TODO_ESTIMATE_NORMAL_HTML
      );
      this.editState.resetEditingTodoEstimate();
    }
    if (this.editState.isEditingTodoResult()) {
      convertResetTimeElem(
        this.editState.editingTodoResult,
        TODO_RESULT_NORMAL_HTML
      );
      this.editState.resetEditingTodoResult();
    }
  }
}

function convertResetTimeElem(elem: HTMLElement, replaceHtml: string) {
  const selectElem = HtmlAccessor.getHtmlElement(
    'js_select',
    elem
  ) as HTMLSelectElement;
  selectElem.options[selectElem.selectedIndex].value;
  HtmlAccessor.convertElement(elem, replaceHtml, IDENTIFIER_TIME);
}
