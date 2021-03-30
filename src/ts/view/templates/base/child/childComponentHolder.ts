import { TodoElement } from '../../../todoElement';
import { TodoDetailComponent } from '../../todo/child/todoDetailComponent';
import { TodoTimeComponent } from '../../todo/child/todoTimeComponent';
import { TodoTitleComponent } from '../../todo/child/todoTitleComponent';

export class ChildComponentHolder<T, C extends Component>
  implements ComponentHolder<T, C> {
  private _components: Map<T, C>;

  constructor() {
    this._components = new Map<T, C>();
  }

  getComponent(componentType: T): C | never {
    if (this._components.has(componentType)) {
      return this._components.get(componentType)!;
    }
    throw new Error('Invalid Component Type');
  }

  get components(): Map<T, C> {
    return this._components;
  }

  set components(components: Map<T, C>) {
    this._components = components;
  }
}

export function createTodoChildComponents(): Map<
  TodoElement,
  ConvertibleComponent
> {
  const components = new Map<TodoElement, ConvertibleComponent>();
  components.set('Title', new TodoTitleComponent());
  components.set('EstimateTime', new TodoTimeComponent('estimate'));
  components.set('ResultTime', new TodoTimeComponent('result'));
  components.set('Detail', new TodoDetailComponent());
  for (const component of components.values()) {
    component.init();
  }
  return components;
}
