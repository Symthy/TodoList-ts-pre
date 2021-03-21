import { TodoElement } from '../../../../todoElement';
import {
  ViewEventHandlerCallableSupplier, ViewEventHandlerSupplier
} from '../viewEventHandler';

export class TodoConvertElementHandler implements ViewEventHandlerSupplier {
  private convertTitleFunc: EventListener;
  private convertDetailFunc: EventListener;
  private convertEstimateTimeFunc: EventListener;
  private convertResultTimeFunc: EventListener;

  constructor(
    private childComponents: ComponentHolder<TodoElement, ConvertibleComponent>,
    private resetEditingHandler: ViewEventHandlerCallableSupplier
  ) {
    this.convertTitleFunc = (e: Event) => {
      this.convertTitle(e);
    };
    this.convertDetailFunc = (e: Event) => {
      this.convertDetail(e);
    };
    this.convertEstimateTimeFunc = (e: Event) => {
      this.convertEstimateTime(e);
    };
    this.convertResultTimeFunc = (e: Event) => {
      this.convertResultTime(e);
    };
  }

  supply<TodoElement>(
    arg: TodoElement extends string ? TodoElement : undefined
  ): EventListener | never {
    if (arg === 'Title') {
      return this.convertTitleFunc;
    } else if (arg === 'Detail') {
      return this.convertDetailFunc;
    } else if (arg === 'EstimateTime') {
      return this.convertEstimateTimeFunc;
    } else if (arg === 'ResultTime') {
      return this.convertResultTimeFunc;
    }
    throw new Error('');
  }

  private convertTitle(event: Event) {
    this.resetEditingHandler.call();
    const titleCmp = this.childComponents.getComponent('Title');
    titleCmp.editingElement = event.currentTarget as HTMLElement;
    titleCmp.convertComponent();
  }

  private convertDetail(event: Event) {
    this.resetEditingHandler.call();
    const titleCmp = this.childComponents.getComponent('Detail');
    titleCmp.editingElement = event.currentTarget as HTMLElement;
    titleCmp.convertComponent();
  }

  private convertEstimateTime(event: Event) {
    this.resetEditingHandler.call();
    const titleCmp = this.childComponents.getComponent('EstimateTime');
    titleCmp.editingElement = event.currentTarget as HTMLElement;
    titleCmp.convertComponent();
  }

  private convertResultTime(event: Event) {
    this.resetEditingHandler.call();
    const titleCmp = this.childComponents.getComponent('ResultTime');
    titleCmp.editingElement = event.currentTarget as HTMLElement;
    titleCmp.convertComponent();
  }
  // HtmlAccessor.getHtmlElementNullable('.js_todoPriority');
  // HtmlAccessor.getHtmlElementNullable('.js_todoUrgency');
}
