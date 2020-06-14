import { ViewModelTodo } from './todo';
import { TodoBoard } from './todoBoard';
import { ViewModelManager } from '../viewModelManager';
import { TodoState } from './todoState';
import { ViewModel } from '../../viewModel';
import { ViewModelBuilder } from '../../viewModelBuilder';

export class ViewTodoManager implements ViewModelManager<ViewModelTodo> {
  private finalId: number;
  constructor(private _todoBoard: TodoBoard) {
    this.finalId = 0;
  }

  getNextId(): number {
    return this.finalId + 1;
  }

  create(vmModelBuilder: ViewModelBuilder<ViewModelTodo>): void {
    const todoObj = vmModelBuilder.build();
    if (todoObj.id > this.finalId) {
      this.finalId = todoObj.id;
    }
    this._todoBoard.addTodo(todoObj.workState, todoObj);
  }

  getData(todoObj: ViewModel & { workState: TodoState }): ViewModelTodo {
    return this._todoBoard.getTodo(todoObj.workState, todoObj.id);
  }

  update(todoObj: ViewModelTodo): boolean {
    return this._todoBoard.updateTodo(todoObj.workState, todoObj);
  }

  delete(todoObj: ViewModel & { workState: TodoState }): void {
    this._todoBoard.deleteTodo(todoObj.workState, todoObj.id);
  }
}
