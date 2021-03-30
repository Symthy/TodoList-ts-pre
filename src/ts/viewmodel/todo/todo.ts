import { ViewComponent } from '../../view/decorator/viewComponent';
import { ViewModel } from '../viewModel';
import { ViewModelType } from '../viewModelType';
import { TodoState } from './todoState';

export interface ViewModelTodo extends ViewModel {
  title: string;
  contents: string;
  createDate: Date;
  startDate?: Date;
  estimateHour: number;
  resultHour: number;
  workState: TodoState;
  displayOrder: number;
}

@ViewComponent('Todo', '.js_todolist')
export class Todo implements ViewModelTodo {
  private _id: number;
  private _modelType: ViewModelType;
  private _title: string;
  private _contents: string;
  private _createDate: Date;
  private _startDate?: Date;
  private _estimateHour: number;
  private _resultHour: number;
  private _workState: TodoState;
  private _displayOrder: number;

  constructor(todoBase?: Partial<ViewModelTodo> & ViewModel) {
    const todo = initTodo(todoBase ?? {});
    this._id = todo.id;
    this._modelType = todo.modelType;
    this._title = todo.title;
    this._contents = todo.contents;
    this._createDate = todo.createDate;
    this._startDate = todo.startDate;
    this._estimateHour = todo.estimateHour;
    this._resultHour = todo.resultHour;
    this._workState = todo.workState;
    this._displayOrder = todo.displayOrder;
  }
  getModelType(): 'Todo' | 'SortLabel' {
    throw new Error('Method not implemented.');
  }

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get modelType(): ViewModelType {
    return this._modelType;
  }
  set modelType(modelType: ViewModelType) {
    this._modelType = modelType;
  }

  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get contents(): string {
    return this._contents;
  }
  set contents(contents: string) {
    this._contents = contents;
  }

  get createDate(): Date {
    return this._createDate;
  }

  get startDate(): Date | undefined {
    return this._startDate;
  }
  initStartDate(): void {
    this._startDate = new Date();
  }

  get estimateHour(): number {
    return this._estimateHour;
  }
  set estimateHour(hour: number) {
    this._estimateHour = hour;
  }

  get resultHour(): number {
    return this._resultHour;
  }
  set resultHour(hour: number) {
    this._resultHour = hour;
  }

  get workState(): TodoState {
    return this._workState;
  }
  set workState(state: TodoState) {
    this._workState = state;
  }

  get displayOrder(): number {
    return this._displayOrder;
  }
  set displayOrder(order: number) {
    this._displayOrder = order;
  }
}

export function initTodo(base: Partial<ViewModelTodo>): ViewModelTodo {
  const target: Partial<ViewModelTodo> = {};
  target.id = base?.id ?? -1;
  target.modelType = 'Todo';
  target.title = base?.title ?? '';
  target.contents = base?.contents ?? '';
  target.createDate = base?.createDate ?? new Date();
  target.startDate = base?.startDate ?? undefined;
  target.estimateHour = base?.estimateHour ?? 0;
  target.resultHour = base?.resultHour ?? 0;
  target.workState = base?.workState ?? 'Waiting';
  target.displayOrder = base?.displayOrder ?? 0;
  return target as ViewModelTodo;
}
