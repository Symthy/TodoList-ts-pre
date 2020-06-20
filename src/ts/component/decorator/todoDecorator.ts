import { ViewModelTodo } from '../../main/viewmodel/todo/todo';
import { TodoState } from '../../main/viewmodel/todo/todoState';
import { Template } from '../template';

export function TodoComponent(template: Template, selector: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const todo = args.find(implementsTodo) as ViewModelTodo | undefined;
        if (todo === undefined) {
          return;
        }

        const styleClassName = convertStateClass(todo.workState ?? 'Waiting');
        template
          .replaceTemplate(/{{ state }}/g, styleClassName)
          .replaceTemplate(/{{ id }}/g, todo.id);
        const mountedElement = document.querySelector(selector);
        if (mountedElement) {
          mountedElement.insertAdjacentHTML(
            'afterbegin',
            template.getTemplateHtml()
          );
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

function convertStateClass(state: TodoState): string {
  return 'is_' + state.toLowerCase();
}
