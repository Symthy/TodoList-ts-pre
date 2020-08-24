import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';
import {
  IDENTIFIER_TITLE,
  TODO_TITLE_EDIT_HTML,
  TODO_TITLE_NORMAL_HTML,
} from '../templates/todoTemplates';
import { BaseChildComponent } from '../baseChildComponent';
import { TemplatePartsHolder } from '../componentTemplateParts';

export class TodoTitleComponent extends BaseChildComponent {
  constructor(templateParts?: TemplatePartsHolder) {
    super(templateParts);
  }

  init(): void {
    this.templateParts = TemplatePartsHolder.create(
      IDENTIFIER_TITLE,
      TODO_TITLE_NORMAL_HTML,
      TODO_TITLE_EDIT_HTML
    );
  }

  protected convertProcess(editingElement: HTMLElement): void {
    HtmlAccessor.convertElementInnerText(
      editingElement,
      this.templateParts.editStateHtml,
      this.templateParts.identify
    );
  }

  reconvertComponent(): void {
    // TODO: TextAreaの値抜きだすconverter実装
    if (this._editingElement) {
      HtmlAccessor.convertElementValue(
        this._editingElement,
        this.templateParts.normalStateHtml,
        this.templateParts.identify
      );
      this._editingElement = null;
    }
  }

  protected reconvertProcess(editingElement: HTMLElement): void {
    HtmlAccessor.convertElementInnerText(
      editingElement,
      this.templateParts.normalStateHtml,
      this.templateParts.identify
    );
  }
}
