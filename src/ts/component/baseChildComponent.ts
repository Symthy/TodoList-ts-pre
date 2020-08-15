import { HtmlAccessor } from '../htmlUtils/htmlAccessor';
import { TemplatePartsHolder } from './componentTemplateParts';

export abstract class BaseChildComponent implements ConvertableComponent {
  protected _editingElement: HTMLElement | null;
  protected templateParts: TemplatePartsHolder;

  constructor(templateParts?: TemplatePartsHolder) {
    this._editingElement = null;
    this.templateParts = templateParts ?? TemplatePartsHolder.empty();
  }

  abstract init(): void;

  convertComponent(): void | never {
    if (this._editingElement) {
      this.convertProcess(this._editingElement);
      return;
    }
    throw new Error('Nothing editing element');
  }

  protected abstract convertProcess(editingElement: HTMLElement): void;

  reconvertComponent(): void {
    if (this._editingElement) {
      this.reconvertProcess(this._editingElement);
      this._editingElement = null;
    }
  }

  protected abstract reconvertProcess(editingElement: HTMLElement): void;

  get editingElement(): HTMLElement | null {
    return this._editingElement;
  }
  set editingElement(elem: HTMLElement | null) {
    this._editingElement = elem;
  }
}
