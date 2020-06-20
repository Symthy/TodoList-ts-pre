import { ViewModelTodo, Todo } from './viewmodel/todo/todo';
import { ViewModelBuilder } from './viewModelBuilder';
import { TodoState } from './viewmodel/todo/todoState';
import { ViewModel } from './viewModel';
import { ViewModelType } from './viewmodel/viewModelType';

export class ViewModelBuilderFactory {
  createViewModelBuilder(
    type: ViewModelType
  ): ViewModelBuilder<ViewModel> | undefined {
    if (type === 'Todo') {
      return new TodoBuilder().with('modelType', type);
    }
    return;
  }
}

abstract class ViewModelBuilderImpl<T extends ViewModel>
  implements ViewModelBuilder<T> {
  modelType?: ViewModelType;

  abstract with(propertyName: keyof T, value: any): this;

  protected withId(id: number): this & Pick<ViewModelTodo, 'id'> {
    return Object.assign(this, { id: id });
  }

  protected withModelType(
    type: ViewModelType
  ): this & Pick<ViewModelTodo, 'modelType'> {
    return Object.assign(this, { modelType: type });
  }

  build(): T {
    return this.generateInstance();
  }

  abstract getModelType(): ViewModelType;

  protected abstract generateInstance(): T;
}

class TodoBuilder extends ViewModelBuilderImpl<ViewModelTodo>
  implements Partial<ViewModelTodo> {
  constructor() {
    super();
  }

  with(propertyName: keyof ViewModelTodo, value: any): this {
    if (propertyName === 'id') {
      return this.withId(value);
    }
    if (propertyName === 'modelType') {
      return this.withModelType(value);
    }
    if (propertyName === 'title') {
      return this.withTitle(value);
    }
    if (propertyName === 'contents') {
      return this.withContents(value);
    }
    if (propertyName === 'createDate') {
      return this.withCreateDate(value);
    }
    if (propertyName === 'startDate') {
      return this.withStartDate(value);
    }
    if (propertyName === 'estimateHour') {
      return this.withEstimateHour(value);
    }
    if (propertyName === 'resultHour') {
      return this.withResultHour(value);
    }
    if (propertyName === 'workState') {
      return this.withWorkState(value);
    }
    if (propertyName === 'displayOrder') {
      return this.withDisplayOrder(value);
    }
    return this;
  }

  private withTitle(title: string): this & Pick<ViewModelTodo, 'title'> {
    return Object.assign(this, { title: title });
  }
  private withContents(
    contents: string
  ): this & Pick<ViewModelTodo, 'contents'> {
    return Object.assign(this, { contents: contents });
  }
  private withCreateDate(date: Date): this & Pick<ViewModelTodo, 'createDate'> {
    return Object.assign(this, { createDate: date });
  }
  private withStartDate(date: Date): this & Pick<ViewModelTodo, 'startDate'> {
    return Object.assign(this, { startDate: date });
  }
  private withEstimateHour(
    hour: number
  ): this & Pick<ViewModelTodo, 'estimateHour'> {
    return Object.assign(this, { estimateHour: hour });
  }
  private withResultHour(
    hour: number
  ): this & Pick<ViewModelTodo, 'resultHour'> {
    return Object.assign(this, { resultHour: hour });
  }
  private withWorkState(
    state: TodoState
  ): this & Pick<ViewModelTodo, 'workState'> {
    return Object.assign(this, { workState: state });
  }
  private withDisplayOrder(
    order: number
  ): this & Pick<ViewModelTodo, 'displayOrder'> {
    return Object.assign(this, { displayOrder: order });
  }

  getModelType(): ViewModelType {
    return 'Todo';
  }
  generateInstance(this: ViewModel): ViewModelTodo {
    return new Todo(this);
  }
}
