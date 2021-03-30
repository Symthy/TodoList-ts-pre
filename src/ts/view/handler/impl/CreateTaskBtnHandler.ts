import { HtmlAccessor } from '../../../htmlUtils/htmlAccessor';
import { ViewDisplayer } from '../../viewDisplayer';
import { ViewEventHandlerRegister } from '../viewEventHandler';

export class CreateTaskBtnHandler implements ViewEventHandlerRegister {
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
