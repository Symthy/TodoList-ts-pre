import { TodoState } from '../../main/viewmodel/todo/todoState';
import { ViewModelTodo } from '../../main/viewmodel/todo/todo';
import { Template } from '../templates/todoTemplates';
import { ViewModelType } from '../../main/viewmodel/viewModelType';

export class TodoComponent implements Component {
  constructor(
    private todo: ViewModelTodo,
    private modelType: ViewModelType,
    private selector: string
  ) {}

  init(): void {
    const state = this.todo.workState ?? 'Waiting';
    const stateStyleClass = convertStateClass(state);
    const template = new Template(this.modelType);
    template
      .replaceTemplate(/{{ state }}/g, state)
      .replaceTemplate(/{{ stateClass }}/g, stateStyleClass)
      .replaceTemplate(/{{ id }}/g, this.todo.id);
    const mountedElement = document.querySelector(
      '.' + stateStyleClass + this.selector
    );
    if (mountedElement) {
      mountedElement.insertAdjacentHTML(
        'afterbegin',
        template.getTemplateHtml()
      );
    }
  }
}

function convertStateClass(state: TodoState): string {
  return 'is_' + state.toLowerCase();
}
