import { TodoState } from './todoState';
import { TodoComponent } from '../../../component/decorator/todoDecorator';
import { ViewModel } from '../../viewModel';
import { ViewModelType } from '../viewModelType';

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

@TodoComponent('Todo', '.js_todolist')
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

  constructor(todo?: Partial<ViewModelTodo> & ViewModel) {
    this._id = todo?.id ?? -1;
    this._modelType = 'Todo';
    this._title = todo?.title ?? '';
    this._contents = todo?.contents ?? '';
    this._createDate = todo?.createDate ?? new Date();
    this._startDate = todo?.startDate ?? undefined;
    this._estimateHour = todo?.estimateHour ?? 0;
    this._resultHour = todo?.resultHour ?? 0;
    this._workState = todo?.workState ?? 'Waiting';
    this._displayOrder = todo?.displayOrder ?? 0;
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
