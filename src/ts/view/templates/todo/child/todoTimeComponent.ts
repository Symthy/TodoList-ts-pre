import { HtmlAccessor } from '../../../../htmlUtils/htmlAccessor';
import { BaseChildComponent } from '../../base/child/baseChildComponent';
import { TemplatePartsHolder } from '../../base/componentTemplateParts';
import {
  IDENTIFIER_TIME,
  TIME_SELECT_EDIT_HTML,
  TIME_SELECT_NORMAL_HTML,
  TODO_ESTIMATE_EDIT_HTML,
  TODO_ESTIMATE_NORMAL_HTML,
  TODO_RESULT_EDIT_HTML,
  TODO_RESULT_NORMAL_HTML,
} from '../todoTemplates';

export class TodoTimeComponent extends BaseChildComponent {
  constructor(
    private type: TodoTimeType extends string ? TodoTimeType : undefined,
    templateParts?: TemplatePartsHolder
  ) {
    super(templateParts);
    this.type = type;
  }

  init(): void {
    if (this.type === 'estimate') {
      this.templateParts = TemplatePartsHolder.create(
        IDENTIFIER_TIME,
        TODO_ESTIMATE_NORMAL_HTML,
        TODO_ESTIMATE_EDIT_HTML
      );
      return;
    }
    if (this.type === 'result') {
      this.templateParts = TemplatePartsHolder.create(
        IDENTIFIER_TIME,
        TODO_RESULT_NORMAL_HTML,
        TODO_RESULT_EDIT_HTML
      );
      return;
    }
    this.templateParts = TemplatePartsHolder.create(
      IDENTIFIER_TIME,
      TIME_SELECT_NORMAL_HTML,
      TIME_SELECT_EDIT_HTML
    );
  }

  protected convertProcess(editingElement: HTMLElement): void {
    convertTimeElem(editingElement, this.templateParts.editStateHtml);
  }

  protected reconvertProcess(editingElement: HTMLElement): void {
    // TODO: ListBoxの値抜きだすconverter実装
    convertResetTimeElem(editingElement, TODO_RESULT_NORMAL_HTML);
  }
}

const TodoTimeTypes = {
  NONE: '',
  ESTIMATE: 'estimate',
  Result: 'result',
} as const;
export type TodoTimeType = typeof TodoTimeTypes[keyof typeof TodoTimeTypes];

function convertTimeElem(elem: HTMLElement, baseHtml: string) {
  const data = HtmlAccessor.getHtmlElement('.js_data', elem).innerText;
  elem.innerHTML = baseHtml;
  const selectElem = HtmlAccessor.getHtmlElement(
    '.js_select',
    elem
  ) as HTMLSelectElement;
  for (let i = 0; i < selectElem.length; i++) {
    if (selectElem.options[i].value === data) {
      selectElem.selectedIndex = i;
    }
  }
}

function convertResetTimeElem(elem: HTMLElement, replaceHtml: string) {
  const selectElem = HtmlAccessor.getHtmlElement(
    'js_select',
    elem
  ) as HTMLSelectElement;
  selectElem.options[selectElem.selectedIndex].value;
  HtmlAccessor.convertElementInnerText(elem, replaceHtml, IDENTIFIER_TIME);
}
