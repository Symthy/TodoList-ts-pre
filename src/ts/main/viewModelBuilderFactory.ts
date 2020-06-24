import { ViewModelTodo, Todo } from './viewmodel/todo/todo';
import { ViewModelBuilder } from './viewModelBuilder';
import { TodoState } from './viewmodel/todo/todoState';
import { ViewModel } from './viewModel';
import { ViewModelType } from './viewmodel/viewModelType';

export class ViewModelBuilderFactory {
  static newInstance(): ViewModelBuilderFactory {
    return new ViewModelBuilderFactory();
  }

  createViewModelBuilder(type?: ViewModelType): ViewModelBuilderAdapter {
    return new ViewModelBuilderAdapter(type);
  }
}

type AllViewModel = ViewModel & ViewModelTodo;
type AllViewModelKey = keyof ViewModelTodo;

class ViewModelBuilderAdapter {
  private builder: ViewModelBuilder<ViewModel | ViewModelTodo>;
  constructor(private modelType?: ViewModelType) {
    if (this.modelType) {
      this.builder = new TodoBuilder().with({ modelType: this.modelType });
    } else {
      this.builder = new ViewModelBaseBuilder().with({
        modelType: 'ViewModel',
      });
    }
  }

  with(input: { [key in AllViewModelKey]?: AllViewModel[key] }) {
    return this.builder.with(input);
  }
}

abstract class AbstractViewModelBuilder<T extends ViewModel>
  implements ViewModelBuilder<T> {
  id?: number;
  modelType?: ViewModelType;

  with(input: { [key in keyof T]?: T[key] }): this {
    if (input.id) {
      this.withId(input.id);
    }
    if (input.modelType) {
      this.withModelType(input.modelType);
    }
    return this;
  }

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

  protected abstract generateInstance(): T;
}

class ViewModelBaseBuilder extends AbstractViewModelBuilder<ViewModel> {
  getModelType(): ViewModelType {
    return 'ViewModel';
  }
  protected generateInstance(): ViewModel {
    const id = this.id ?? -1;
    const type: ViewModelType = 'ViewModel';
    return { id: id, modelType: type };
  }
}

class TodoBuilder extends AbstractViewModelBuilder<ViewModelTodo>
  implements Partial<ViewModelTodo> {
  constructor() {
    super();
  }

  with(input: { [key in keyof ViewModelTodo]?: ViewModelTodo[key] }): this {
    if (input.id) {
      return this.withId(input.id);
    }
    if (input.modelType) {
      return this.withModelType(input.modelType);
    }
    if (input.title) {
      return this.withTitle(input.title);
    }
    if (input.contents) {
      return this.withContents(input.contents);
    }
    if (input.createDate) {
      return this.withCreateDate(input.createDate);
    }
    if (input.startDate) {
      return this.withStartDate(input.startDate);
    }
    if (input.estimateHour) {
      return this.withEstimateHour(input.estimateHour);
    }
    if (input.resultHour) {
      return this.withResultHour(input.resultHour);
    }
    if (input.workState) {
      return this.withWorkState(input.workState);
    }
    if (input.displayOrder) {
      return this.withDisplayOrder(input.displayOrder);
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
