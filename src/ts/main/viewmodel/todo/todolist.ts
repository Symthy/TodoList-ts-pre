import { ViewModelTodo } from './todo';
import { TodoState } from './todoState';

export class Todolist {
  private _todolist: Map<number, ViewModelTodo>;
  constructor(private _stateName: TodoState) {
    this._todolist = new Map();
  }

  get todolist(): Map<number, ViewModelTodo> {
    return this._todolist;
  }

  get stateName(): TodoState {
    return this._stateName;
  }

  getTodo(id: number): ViewModelTodo | undefined {
    return this.todolist.get(id);
  }

  addTodo(todo: ViewModelTodo): void {
    for (let todo of this._todolist.values()) {
      todo.displayOrder += 1;
    }
    this.todolist.set(todo.id, todo);
  }

  deleteTodo(id: number): void {
    const delTodoOrder = this.todolist.get(id)?.displayOrder;
    if (delTodoOrder) {
      for (let todo of this._todolist.values()) {
        if (delTodoOrder < todo.displayOrder) {
          todo.displayOrder -= 1;
        }
      }
    }
    this.todolist.delete(id);
  }

  updateTodo(todo: ViewModelTodo): boolean {
    if (this.todolist.get(todo.id)) {
      this.todolist.set(todo.id, todo);
      return true;
    }
    return false;
  }
}
