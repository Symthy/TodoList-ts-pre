import { ViewModelType } from '../main/viewmodel/viewModelType';

export class Template {
  private templateHtml: string = '';
  constructor(modelType: ViewModelType) {
    if (modelType === 'Todo') {
      this.templateHtml = todoTemplate;
    }
  }

  getTemplateHtml(): string {
    return this.templateHtml;
  }

  replaceTemplate(target: RegExp, replace: string | number): Template {
    if (typeof replace === 'number') {
      replace = String(replace);
    }
    this.templateHtml = this.templateHtml.replace(target, replace);
    return this;
  }
}

const todoTemplate = `
  <div class="el_emptyItem"></div>
  <div class="bl_todo hp_mrl15 hp_prl2">
    <div class="el_hidden js_todoId">{{ id }}</div>
    <div class="el_hidden js_todoState">Waiting</div>
    <div class="el_todo_head {{ state }}"></div>
    <div class="bl_todo_body">
      <h3 class="el_todoTitle">
        Test: Success Task Create by TS Program
      </h3>
      <div class="bl_todo_times">
        <div class="bl_todo_time">
          <p class="el_label el_label__xxsmall">created time:</p>
          <time class="el_label el_label__xxsmall">xx/xx/xx xx:xx</time>
        </div>
        <div class="bl_todo_time">
          <p class="el_label el_label__xxsmall">started time:</p>
          <time class="el_label el_label__xxsmall">xx/xx/xx xx:xx</time>
        </div>
      </div>
      <div class="bl_todo_status">
        <form class="bl_todo_progress">
          <input type="range" value="0" min="0" max="100" step="10" oninput="document.getElementById('c-output').value=this.value" />
          <output id="c-output" class="el_label el_label__small">0</output>
        </form>
        <div class="bl_todo_inputTime">
          <p class="el_label el_label__small">見積:</p>
          <p class="el_label el_label__small" name="estimateHour">
              10 h
            </p>
        </div>
        <div class="bl_todo_inputTime">
          <p class="el_label el_label__small">実績:</p>
          <p class="el_label el_label__small" name="resultHour">
              10 h
            </p>
        </div>
      </div>
    </div>
  </div>
`;
