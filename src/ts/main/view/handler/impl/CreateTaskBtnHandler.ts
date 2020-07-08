import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';
import { ViewDisplayer } from '../../viewDisplayer';
import { ViewHandler } from '../viewHandler';

export class CreateTaskBtnHandler implements ViewHandler {
  constructor(private _viewDisplayer: ViewDisplayer) {}
  register(): void {
    this.resistCreateTaskEvent();
  }

  private resistCreateTaskEvent(): void {
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
