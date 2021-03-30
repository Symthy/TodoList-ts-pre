import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';
import { BaseChildComponent } from '../../base/child/baseChildComponent';
import { TemplatePartsHolder } from '../../base/componentTemplateParts';
import {
  IDENTIFIER_TITLE,
  TODO_TITLE_EDIT_HTML,
  TODO_TITLE_NORMAL_HTML,
} from '../todoTemplates';

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

  protected reconvertProcess(editingElement: HTMLElement, value: string): void {
    HtmlAccessor.convertElementValue(
      editingElement,
      this.templateParts.normalStateHtml,
      this.templateParts.identify,
      value
    );
  }
}
