import { ViewDisplayer } from '../../viewDisplayer';
import { ViewEventHandlerRegister } from '../viewEventHandler';
import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';

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
