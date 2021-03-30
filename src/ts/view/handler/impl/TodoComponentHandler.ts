import { HtmlAccessor } from '../../../htmlUtils/htmlAccessor';
import { TodoElement } from '../../todoElement';
import {
  ExtensionViewEventHandlerRegister,
  ViewEventHandlerSupplier,
} from '../viewEventHandler';

export class TodoComponentHandler extends ExtensionViewEventHandlerRegister {
  constructor(
    _ctMenuHandler: ViewEventHandlerSupplier,
    _convertHandler: ViewEventHandlerSupplier,
    _reconvertHandler: ViewEventHandlerSupplier
  ) {
    super();
    this.subHandlerHolder.add('registerRightClickEvent', _ctMenuHandler);
    this.subHandlerHolder.add('registerTodoObserver_context', _ctMenuHandler);
    this.subHandlerHolder.add('registerTodoObserver_convert', _convertHandler);
    this.subHandlerHolder.add(
      'registerTodoObserver_reconvert',
      _reconvertHandler
    );
  }

  public register(): void {
    this.registerRightClickEvent();
    this.registerAddTodoObserver();
    this.registerTodoElemEvent();
  }

  private registerRightClickEvent(): void {
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener(
        'contextmenu',
        this.subHandlerHolder.supply('registerRightClickEvent')
      );
    });
  }

  private registerAddTodoObserver() {
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
        const todoTitleElem = HtmlAccessor.getHtmlElement(
          '.js_todoTitle',
          todoElem
        );
        todoTitleElem.addEventListener(
          'keypress',
          this.subHandlerHolder.supply<TodoElement>(
            'registerTodoObserver_reconvert',
            'Title'
          )
        );
        todoTitleElem.addEventListener(
          'dblclick',
          this.subHandlerHolder.supply<TodoElement>(
            'registerTodoObserver_convert',
            'Title'
          )
        );
      });
    });
    for (const todoList of HtmlAccessor.getHtmlElements('.js_todolist')) {
      observer.observe(todoList, {
        childList: true,
      });
    }
  }

  private registerTodoElemEvent(): void {
    const titleElem = HtmlAccessor.getHtmlElement('.js_todoTitle');
    titleElem.addEventListener(
      'dblclick',
      this.subHandlerHolder.supply<TodoElement>(
        'registerTodoObserver_convert',
        'Title'
      )
    );
    titleElem.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    titleElem.addEventListener(
      'keypress',
      this.subHandlerHolder.supply<TodoElement>(
        'registerTodoObserver_reconvert',
        'Title'
      )
    );

    // const detailElem = HtmlAccessor.getHtmlElement('.js_todoDetail');
    const estimateTimeElem = HtmlAccessor.getHtmlElement(
      '.js_todoEstimateTime'
    );
    estimateTimeElem.addEventListener(
      'dblclick',
      this.subHandlerHolder.supply<TodoElement>(
        'registerTodoObserver_convert',
        'EstimateTime'
      )
    );
    estimateTimeElem.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    const resultTimeElem = HtmlAccessor.getHtmlElement('.js_todoResultTime');
    resultTimeElem.addEventListener(
      'dblclick',
      this.subHandlerHolder.supply<TodoElement>(
        'registerTodoObserver_convert',
        'ResultTime'
      )
    );
    resultTimeElem.addEventListener('click', (event) => {
      event.stopPropagation();
    });
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
