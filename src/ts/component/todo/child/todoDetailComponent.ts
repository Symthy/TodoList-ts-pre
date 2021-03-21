import { HtmlAccessor } from '../../../htmlUtils/htmlAccessor';
import { BaseChildComponent } from '../../baseChildComponent';
import { TemplatePartsHolder } from '../../componentTemplateParts';
import {
  IDENTIFIER_DETAIL,

  TODO_DETAIL_EDIT_HTML, TODO_DETAIL_NORMAL_HTML
} from '../../templates/todoTemplates';

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
    HtmlAccessor.convertElementInnerText(
      editingElement,
      this.templateParts.editStateHtml,
      this.templateParts.identify
    );
  }

  protected reconvertProcess(editingElement: HTMLElement): void {
    HtmlAccessor.convertElementInnerText(
      editingElement,
      this.templateParts.normalStateHtml,
      this.templateParts.identify
    );
  }
}
