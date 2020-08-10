import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';
import {
  TODO_TITLE_EDIT_HTML,
  IDENTIFIER_TITLE,
  TODO_DETAIL_EDIT_HTML,
  IDENTIFIER_DETAIL,
  TODO_ESTIMATE_EDIT_HTML,
  TODO_RESULT_EDIT_HTML,
} from '../../../../component/todoTemplate';
import { ViewEditModeState } from '../../viewEditModeState';
import {
  ViewEventHandlerSupplier,
  ViewEventHandlerCallableSupplier,
} from '../viewEventHandler';

const TodoElements = {
  TITLE: 'Title',
  DETAIL: 'Detail',
  ESTIMATE: 'EstimateTime',
  RESULT: 'ResultTime',
} as const;
type TodoElementsType = typeof TodoElements;
export type TodoElement = TodoElementsType[keyof TodoElementsType];

export class TodoConvertElementHandler implements ViewEventHandlerSupplier {
  private convertTitleFunc: EventListener;
  private convertDeitalFunc: EventListener;
  private convertEstimateTimeFunc: EventListener;
  private convertResultTimeFunc: EventListener;

  constructor(
    private editState: ViewEditModeState,
    private resetEditingHandler: ViewEventHandlerCallableSupplier
  ) {
    this.convertTitleFunc = (e: Event) => {
      this.convertTitle(e);
    };
    this.convertDeitalFunc = (e: Event) => {
      this.convertDetail(e);
    };
    this.convertEstimateTimeFunc = (e: Event) => {
      this.convertEstimateTime(e);
    };
    this.convertResultTimeFunc = (e: Event) => {
      this.convertResultTime(e);
    };
  }

  supply<TodoElement>(
    arg: TodoElement extends string ? TodoElement : undefined
  ): EventListener | never {
    if (arg === 'Title') {
      return this.convertTitleFunc;
    } else if (arg === 'Detail') {
      return this.convertDeitalFunc;
    } else if (arg === 'EstimateTime') {
      return this.convertEstimateTimeFunc;
    } else if (arg === 'ResultTime') {
      return this.convertResultTimeFunc;
    }
    throw new Error('');
  }

  private convertTitle(event: Event) {
    this.resetEditingHandler.call();
    this.editState.editingTodoTitle = event.currentTarget as HTMLElement;
    HtmlAccessor.convertElement(
      this.editState.editingTodoTitle,
      TODO_TITLE_EDIT_HTML,
      IDENTIFIER_TITLE
    );
  }

  private convertDetail(event: Event) {
    this.resetEditingHandler.call();
    const elem = event.currentTarget as HTMLElement;
    HtmlAccessor.convertElement(elem, TODO_DETAIL_EDIT_HTML, IDENTIFIER_DETAIL);
  }

  private convertEstimateTime(event: Event) {
    this.resetEditingHandler.call();
    const elem = event.currentTarget as HTMLElement;
    convertTimeElem(elem, TODO_ESTIMATE_EDIT_HTML);
  }

  private convertResultTime(event: Event) {
    this.resetEditingHandler.call();
    const elem = event.currentTarget as HTMLElement;
    convertTimeElem(elem, TODO_RESULT_EDIT_HTML);
  }
  // HtmlAccessor.getHtmlElementNullable('.js_todoPriority');
  // HtmlAccessor.getHtmlElementNullable('.js_todoUrgency');
}

function convertTimeElem(elem: HTMLElement, baseHtml: string) {
  const data = HtmlAccessor.getHtmlElement('.js_data', elem).innerText;
  elem.innerHTML = baseHtml;
  const selectElem = HtmlAccessor.getHtmlElement(
    '.js_select',
    elem
  ) as HTMLSelectElement;
  for (let i = 0; i < selectElem.length; i++) {
    if (selectElem.options[i].value === data) {
      selectElem.selectedIndex = i;
    }
  }
}
