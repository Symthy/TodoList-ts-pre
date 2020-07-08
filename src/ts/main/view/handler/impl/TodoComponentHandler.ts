import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';
import { ContextMenuHandler } from '../ContextMenuHandler';
import { ExtensionViewHandler } from '../viewHandler';

export class TodoComponentHandler extends ExtensionViewHandler {
  constructor(handler: ContextMenuHandler) {
    super();
    this.subHandlerHolder.add('resisterTodoEvent', handler);
    this.subHandlerHolder.add('resistTodoObserver', handler);
  }

  public register(): void {
    this.resisterTodoEvent();
    this.resistTodoObserver();
  }

  private resisterTodoEvent(): void {
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener(
        'contextmenu',
        this.subHandlerHolder.supply('resisterTodoEvent')
      );
    });
  }

  private resistTodoObserver() {
    const observer = new MutationObserver((records) => {
      records.forEach((rec) => {
        rec.addedNodes.forEach((elem) => {
          elem.addEventListener(
            'contextmenu',
            this.subHandlerHolder.supply('resistTodoObserver')
          );
        });
      });
    });
    for (let todolist of HtmlAccessor.getHtmlElements('.js_todolist')) {
      observer.observe(todolist, {
        childList: true,
      });
    }
  }
}
