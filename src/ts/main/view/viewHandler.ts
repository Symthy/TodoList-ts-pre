import { ViewDisplayer } from './viewDisplayer';
import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';

export class ViewHandler {
  constructor(private _viewDisplayer: ViewDisplayer) {}

  public resistTodoEvent(): void {
    Array.from(document.querySelectorAll('js_todo')).forEach((todo) => {
      todo.addEventListener('onclick', () => {
        console.log('todo click');
      });
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
}
