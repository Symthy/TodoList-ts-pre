import {
  ExtensionViewEventHandlerRegister,
  ViewEventHandlerSupplier,
} from '../viewEventHandler';

import { TodoElement } from './todoConvertElementHandler';
import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';

export class TodoComponentHandler extends ExtensionViewEventHandlerRegister {
  constructor(
    _ctMenuhandler: ViewEventHandlerSupplier,
    _convertHandler: ViewEventHandlerSupplier
  ) {
    super();
    this.subHandlerHolder.add('registerRightClickEvent', _ctMenuhandler);
    this.subHandlerHolder.add('registerTodoObserver_context', _ctMenuhandler);
    this.subHandlerHolder.add('registerTodoObserver_convert', _convertHandler);
  }

  public register(): void {
    this.registerRightClickEvent();
    this.registerTodoObserver();
    this.registerDoudbleClickElemEvent();
  }

  private registerRightClickEvent(): void {
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener(
        'contextmenu',
        this.subHandlerHolder.supply('registerRightClickEvent')
      );
    });
  }

  private registerTodoObserver() {
    const observer = new MutationObserver((records) => {
      records.forEach((rec) => {
        const nodes = Array.from(rec.addedNodes);
        const todoElem = getTodoElemFromNodes(nodes);
        if (!todoElem) {
          return;
        }
        todoElem.addEventListener(
          'contextmenu',
          this.subHandlerHolder.supply('registerTodoObserver_context')
        );
        HtmlAccessor.getHtmlElement('.js_todoTitle', todoElem).addEventListener(
          'dblclick',
          this.subHandlerHolder.supply<TodoElement>(
            'registerTodoObserver_convert',
            'Title'
          )
        );
      });
    });
    for (const todolist of HtmlAccessor.getHtmlElements('.js_todolist')) {
      observer.observe(todolist, {
        childList: true,
      });
    }
  }

  private registerDoudbleClickElemEvent(): void {
    const titleElem = HtmlAccessor.getHtmlElement('.js_todoTitle');
    titleElem.addEventListener(
      'dblclick',
      this.subHandlerHolder.supply<TodoElement>(
        'registerTodoObserver_convert',
        'Title'
      )
    );

    // const detailElem = HtmlAccessor.getHtmlElement('.js_todoDetail');
    // const estimateTimeElem = HtmlAccessor.getHtmlElement(
    //   '.js_todoEstimateTime'
    // );
    // const resultTimeElem = HtmlAccessor.getHtmlElement('.js_todoResultTime');
    // HtmlAccessor.getHtmlElementNullable('.js_todoPriority');
    // HtmlAccessor.getHtmlElementNullable('.js_todoUrgency');
  }
}

function getTodoElemFromNodes(nodes: Node[]): HTMLElement | null {
  for (const node of nodes) {
    const htmlElem = node as HTMLElement;
    if (htmlElem.classList && htmlElem.classList.contains('js_todo')) {
      return htmlElem;
    }
  }
  return null;
}
