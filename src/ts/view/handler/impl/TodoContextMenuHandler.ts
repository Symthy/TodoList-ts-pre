import { HtmlAccessor } from '../../../htmlUtils/htmlAccessor';
import { ViewModelServiceImpl } from '../../../viewmodel/service/viewModelServiceImpl';
import { isTodoState, TodoState } from '../../../viewmodel/todo/todoState';
import { ViewModel } from '../../../viewmodel/viewModel';
import { ViewModelBuilderFactory } from '../../../viewmodel/viewModelBuilderFactory';
import { ViewEventHandlerSupplier } from '../viewEventHandler';

export class TodoContextMenuHandler implements ViewEventHandlerSupplier {
  private targetTodo: HTMLElement | null;
  private openContextMenuFunc: EventListener;
  private changeStateWaitingFunc: EventListener;
  private changeStateInprogressFunc: EventListener;
  private changeStateCompletedFunc: EventListener;
  private changeStatePendingFunc: EventListener;
  private deleteTodoFunc: EventListener;

  constructor() {
    this.targetTodo = null;
    this.openContextMenuFunc = (e: Event) => {
      this.openContextMenu(e);
    };
    this.changeStateWaitingFunc = () => {
      this.changeState('Waiting');
    };
    this.changeStateInprogressFunc = () => {
      this.changeState('InProgress');
    };
    this.changeStateCompletedFunc = () => {
      this.changeState('Completed');
    };
    this.changeStatePendingFunc = () => {
      this.changeState('Pending');
    };
    this.deleteTodoFunc = () => {
      this.deleteTodo();
    };
  }

  supply(): EventListener {
    return this.openContextMenuFunc;
  }

  private openContextMenu(e: Event): void {
    const event = e as MouseEvent;
    const ctMenu = HtmlAccessor.getHtmlElement('.js_todoContextMenu');
    ctMenu.style.left = String(event.pageX) + 'px';
    ctMenu.style.top = String(event.pageY) + 'px';
    ctMenu.style.display = 'block';
    this.targetTodo = event.currentTarget as HTMLElement | null;
    if (!this.targetTodo) {
      return;
    }

    HtmlAccessor.getHtmlElement(
      '.js_menuChangeWaiting',
      ctMenu
    ).addEventListener('click', this.changeStateWaitingFunc);
    HtmlAccessor.getHtmlElement(
      '.js_menuChangeInprogress',
      ctMenu
    ).addEventListener('click', this.changeStateInprogressFunc);
    HtmlAccessor.getHtmlElement(
      '.js_menuChangeCompleted',
      ctMenu
    ).addEventListener('click', this.changeStateCompletedFunc);
    HtmlAccessor.getHtmlElement(
      '.js_menuChangePending',
      ctMenu
    ).addEventListener('click', this.changeStatePendingFunc);
    HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu).addEventListener(
      'click',
      this.deleteTodoFunc
    );
  }

  private changeState(state: TodoState): void {
    if (
      !this.targetTodo ||
      HtmlAccessor.getHtmlElement('.js_todoState', this.targetTodo)
        .innerText === state
    ) {
      return;
    }
    this.targetTodo.previousElementSibling?.remove();
    this.targetTodo.remove();
    const vmService = ViewModelServiceImpl.getInstance();
    const targetVm = this.generateViewModel(this.targetTodo);
    const vmBuilder = ViewModelBuilderFactory.newInstance().createViewModelBuilder();
    vmService.deleteViewModel(targetVm);
    vmService.createViewModel(
      'Todo',
      vmBuilder.with(targetVm).with({ workState: state }).build()
    );
  }

  private deleteTodo(): void {
    if (!this.targetTodo) {
      return;
    }
    const prevTodoEmpty = this.targetTodo.previousElementSibling;
    this.targetTodo.remove();
    prevTodoEmpty?.remove();

    ViewModelServiceImpl.getInstance().deleteViewModel(
      this.generateViewModel(this.targetTodo)
    );
  }

  private generateViewModel(
    todo: HTMLElement,
    state?: string
  ): ViewModel | never {
    const id = Number(
      HtmlAccessor.getHtmlElement('.js_todoId', todo).innerText
    );
    if (state === undefined) {
      state = HtmlAccessor.getHtmlElement('.js_todoState', todo).innerText;
    }

    if (id < 0 || !isTodoState(state)) {
      throw new Error('');
    }
    const vmBuilder = new ViewModelBuilderFactory().createViewModelBuilder();
    return vmBuilder
      .with({ id: id })
      .with({ modelType: 'Todo' })
      .with({ workState: state })
      .build();
  }
}
