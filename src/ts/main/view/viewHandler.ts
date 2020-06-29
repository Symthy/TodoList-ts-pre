import { ViewDisplayer } from './viewDisplayer';
import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';
import { ViewModelServiceImpl } from '../viewmodel/impl/viewModelServiceImpl';
import { ViewModelBuilderFactory } from '../viewModelBuilderFactory';
import { TodoState, TodoStates } from '../viewmodel/todo/todoState';

export class ViewHandler {
  constructor(private _viewDisplayer: ViewDisplayer) {}

  public resistTodoEvent(): void {
    const ctMenuHandler = new ContextMenuHandler();
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener('contextmenu', ctMenuHandler.openContextMenuFunc);
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
    const ctMenuHandler = new ContextMenuHandler();
    const observer = new MutationObserver(function (records) {
      records.forEach((rec) => {
        rec.addedNodes.forEach((elem) => {
          elem.addEventListener(
            'contextmenu',
            ctMenuHandler.openContextMenuFunc
          );
        });
      });
    });
    observer.observe(HtmlAccessor.getHtmlElement('.js_todolist'), {
      childList: true,
    });
  }
}

class ContextMenuHandler {
  private delTodo: Element | null;
  public openContextMenuFunc: EventListener;
  public deleteTodoFunc: EventListener;
  constructor() {
    this.delTodo = null;
    this.openContextMenuFunc = (e: Event) => {
      this.openContextMenu(e);
    };
    this.deleteTodoFunc = () => {
      this.deleteTodo();
    };
  }

  private openContextMenu(e: Event): void {
    const event = e as MouseEvent;
    const ctMenu = HtmlAccessor.getHtmlElement('.js_todoContextMenu');
    ctMenu.style.left = String(event.pageX) + 'px';
    ctMenu.style.top = String(event.pageY) + 'px';
    ctMenu.style.display = 'block';
    this.delTodo = event.currentTarget as Element | null;
    if (!this.delTodo) {
      return;
    }
    const menuDel = HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu);
    menuDel.addEventListener('click', this.deleteTodoFunc);
  }

  private deleteTodo(): void {
    if (!this.delTodo) {
      return;
    }
    const prevTodoEmpty = this.delTodo.previousElementSibling;
    this.delTodo.remove();
    prevTodoEmpty?.remove();

    let id = -1;
    let state = '';
    for (let childElem of Array.from(this.delTodo.children)) {
      if (childElem.classList.contains('js_todoId')) {
        id = Number(childElem.textContent);
      }
      if (childElem.classList.contains('js_todoState')) {
        state = childElem.textContent ?? '';
      }
    }

    if (id < 0 || !isTodoState(state)) {
      return;
    }
    const vmBuilder = new ViewModelBuilderFactory().createViewModelBuilder();
    const vmService = ViewModelServiceImpl.getInstance();
    const vm = vmBuilder
      .with({ id: id })
      .with({ modelType: 'Todo' })
      .with({ workState: state })
      .build();
    vmService.deleteViewModel(vm);
  }
}

function isTodoState(obj: any): obj is TodoState {
  return Object.values(TodoStates).includes(obj);
}
