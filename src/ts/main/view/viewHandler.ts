import { ViewDisplayer } from './viewDisplayer';
import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';
import { ContextMenuHandler } from './ContextMenuHandler';

export class ViewHandler {
  constructor(
    private _viewDisplayer: ViewDisplayer,
    private _ctMenuHandler: ContextMenuHandler
  ) {}

  public resistTodoEvent(): void {
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener(
        'contextmenu',
        this._ctMenuHandler.openContextMenuFunc
      );
    });
  }

  public resistCreateTaskEvent(): void {
    const createTaskArea = HtmlAccessor.getHtmlElement('.js_createTaskArea');
    const createTaskBtn = HtmlAccessor.getHtmlElement(
      '.js_createTaskBtn',
      createTaskArea
    );
    createTaskBtn.addEventListener(
      'click',
      this._viewDisplayer.displayInputTaskArea
    );
  }

  public resistTodoObserver() {
    const observer = new MutationObserver((records) => {
      records.forEach((rec) => {
        rec.addedNodes.forEach((elem) => {
          elem.addEventListener(
            'contextmenu',
            this._ctMenuHandler.openContextMenuFunc
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
