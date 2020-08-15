import {
  IDENTIFIER_DETAIL,
  TODO_DETAIL_NORMAL_HTML,
  TODO_DETAIL_EDIT_HTML,
} from '../templates/todoTemplates';
import { BaseChildComponent } from '../baseChildComponent';
import { TemplatePartsHolder } from '../componentTemplateParts';
import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';

export class TodoDetailComponent extends BaseChildComponent {
  constructor(templateParts?: TemplatePartsHolder) {
    super(templateParts);
  }

  init(): void {
    this.templateParts = TemplatePartsHolder.create(
      IDENTIFIER_DETAIL,
      TODO_DETAIL_NORMAL_HTML,
      TODO_DETAIL_EDIT_HTML
    );
  }

  protected convertProcess(editingElement: HTMLElement): void {
    HtmlAccessor.convertElement(
      editingElement,
      this.templateParts.editStateHtml,
      this.templateParts.identify
    );
  }

  protected reconvertProcess(editingElement: HTMLElement): void {
    HtmlAccessor.convertElement(
      editingElement,
      this.templateParts.normalStateHtml,
      this.templateParts.identify
    );
  }
}
