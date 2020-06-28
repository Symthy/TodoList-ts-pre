import { ViewDisplayer } from './viewDisplayer';
import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';
import { ViewModelServiceImpl } from '../viewmodel/impl/viewModelServiceImpl';
import { ViewModelBuilderFactory } from '../viewModelBuilderFactory';
import { TodoState, TodoStates } from '../viewmodel/todo/todoState';

export class ViewHandler {
  constructor(private _viewDisplayer: ViewDisplayer) {}

  public resistTodoEvent(): void {
    HtmlAccessor.getHtmlElements('.js_todo').forEach((todo) => {
      todo.addEventListener('contextmenu', todoContextMenuFunc);
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
    const observer = new MutationObserver(function (records) {
      records.forEach((rec) => {
        rec.addedNodes.forEach((elem) => {
          elem.addEventListener(
            'contextmenu',
            todoContextMenuFunc as EventListener
          );
        });
      });
    });
    observer.observe(HtmlAccessor.getHtmlElement('.js_todolist'), {
      childList: true,
    });
  }
}

function todoContextMenuFunc(event: MouseEvent) {
  const ctMenu = HtmlAccessor.getHtmlElement('.js_todoContextMenu');
  ctMenu.style.left = String(event.pageX) + 'px';
  ctMenu.style.top = String(event.pageY) + 'px';
  ctMenu.style.display = 'block';
  const todo = event.currentTarget as Element;
  const prevEmptyElem = todo.previousElementSibling;
  const menuDel = HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu);
  menuDel.removeEventListener('click', deleteTodoFunc());
  menuDel.addEventListener('click', deleteTodoFunc(todo));

  function deleteTodoFunc(todo?: Element): any {
    return () => {
      if (!todo) {
        return;
      }
      todo.remove();
      prevEmptyElem?.remove();

      let id = -1;
      let state = '';
      for (let elem of Array.from(todo.children)) {
        if (elem.classList.contains('js_todoId')) {
          id = Number(elem.textContent);
        }
        if (elem.classList.contains('js_todoState')) {
          state = elem.textContent ?? '';
        }
      }

      const isTodoState = (obj: any): obj is TodoState => {
        return Object.values(TodoStates).includes(obj);
      };
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
    };
  }
}
