import { TemplatePartsHolder } from '../componentTemplateParts';

export abstract class BaseChildComponent implements ConvertibleComponent {
  protected _editingElement: HTMLElement | null;
  protected templateParts: TemplatePartsHolder;

  constructor(templateParts?: TemplatePartsHolder) {
    this._editingElement = null;
    this.templateParts = templateParts ?? TemplatePartsHolder.empty();
  }

  abstract init(): void;

  convertComponent(): void | never {
    if (this.editingElement) {
      this.convertProcess(this.editingElement);
      return;
    }
    throw new Error('Nothing editing element');
  }

  protected abstract convertProcess(editingElement: HTMLElement): void;

  reconvertComponent(value: string): void {
    if (this.editingElement) {
      this.reconvertProcess(this.editingElement, value);
      this.clearEditingElement();
    }
  }

  protected abstract reconvertProcess(
    editingElement: HTMLElement,
    value: string
  ): void;

  get editingElement(): HTMLElement | null {
    return this._editingElement;
  }

  registerEditingElement(elem: HTMLElement) {
    this._editingElement = elem;
  }

  clearEditingElement(): void {
    this._editingElement = null;
  }
}
