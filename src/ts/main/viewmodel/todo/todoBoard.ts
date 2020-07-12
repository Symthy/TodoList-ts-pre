import { ViewModelTodo } from './todo';
import { TodoState, TodoStates } from './todoState';
import { Todolist } from './todolist';

export class TodoBoard {
  private todolists: Map<TodoState, Todolist>;

  constructor() {
    this.todolists = new Map();
    for (const stateName of Object.values(TodoStates)) {
      this.todolists.set(stateName, new Todolist(stateName));
    }
  }

  addTodo(state: TodoState, todo: ViewModelTodo): void {
    this.todolists.get(state)?.addTodo(todo);
  }

  getTodo(state: TodoState, id: number): ViewModelTodo {
    const todo = this.todolists.get(state)?.getTodo(id);
    if (todo) {
      return todo;
    }
    throw new Error('');
  }

  deleteTodo(state: TodoState, id: number): void {
    this.todolists.get(state)?.deleteTodo(id);
  }

  updateTodo(state: TodoState, todo: ViewModelTodo): boolean | never {
    const todolist = this.todolists.get(state);
    if (todolist) {
      return todolist.updateTodo(todo);
    }
    throw Error('');
  }
}
