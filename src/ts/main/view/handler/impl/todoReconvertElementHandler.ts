import { TodoElement } from '../../../../todoElement';
import { ViewEventHandlerSupplier } from '../viewEventHandler';

export class TodoReconvertElementHandler implements ViewEventHandlerSupplier {
  private reconvertTitleFunc: EventListener;
  private reconvertDetailFunc: EventListener;
  private reconvertEstimateTimeFunc: EventListener;
  private reconvertResultTimeFunc: EventListener;

  constructor(
    private childComponents: ComponentHolder<TodoElement, ConvertibleComponent>
  ) {
    this.reconvertTitleFunc = (e: Event) => {
      this.reconvertTitle(e as KeyboardEvent);
    };
    this.reconvertDetailFunc = (e: Event) => {
      this.reconvertDetail(e);
    };
    this.reconvertEstimateTimeFunc = (e: Event) => {
      this.reconvertEstimateTime(e);
    };
    this.reconvertResultTimeFunc = (e: Event) => {
      this.reconvertResultTime(e);
    };
  }

  supply<TodoElement>(
    arg: TodoElement extends string ? TodoElement : undefined
  ): EventListener | never {
    if (arg === 'Title') {
      return this.reconvertTitleFunc;
    } else if (arg === 'Detail') {
      return this.reconvertDetailFunc;
    } else if (arg === 'EstimateTime') {
      return this.reconvertEstimateTimeFunc;
    } else if (arg === 'ResultTime') {
      return this.reconvertResultTimeFunc;
    }
    throw new Error('');
  }

  private reconvertTitle(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const titleCmp = this.childComponents.getComponent('Title');
      const target = event.target as HTMLInputElement;
      titleCmp.reconvertComponent(target.value);
      titleCmp.clearEditingElement();
    }
  }

  private reconvertDetail(event: Event) {
    const titleCmp = this.childComponents.getComponent('Detail');
    const target = event.target as HTMLInputElement;
    titleCmp.reconvertComponent(target.value);
    titleCmp.clearEditingElement();
  }

  private reconvertEstimateTime(event: Event) {
    const titleCmp = this.childComponents.getComponent('EstimateTime');
    const target = event.target as HTMLInputElement;
    titleCmp.reconvertComponent(target.value);
    titleCmp.clearEditingElement();
  }

  private reconvertResultTime(event: Event) {
    const titleCmp = this.childComponents.getComponent('ResultTime');
    const target = event.target as HTMLInputElement;
    titleCmp.reconvertComponent(target.value);
    titleCmp.clearEditingElement();
  }
  // HtmlAccessor.getHtmlElementNullable('.js_todoPriority');
  // HtmlAccessor.getHtmlElementNullable('.js_todoUrgency');
}
