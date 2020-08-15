import { ViewModelTodo } from '../../main/viewmodel/todo/todo';
import { ViewModelType } from '../../main/viewmodel/viewModelType';
import { TodoComponent } from '../todo/todoComponent';

export function ViewComponent(
  modelType: ViewModelType,
  selector: string
): Function {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const todo = args.find(implementsTodo) as ViewModelTodo | undefined;
        if (todo) {
          const todoCmp = new TodoComponent(todo, modelType, selector);
          todoCmp.init();
        }
      }
    };
  };
}

function implementsTodo(arg: any): boolean {
  return (
    arg !== null &&
    typeof arg === 'object' &&
    typeof arg.id === 'number' &&
    typeof arg.modelType === 'string'
  );
}
