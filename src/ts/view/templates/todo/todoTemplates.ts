import { ViewModelType } from '../../../viewmodel/viewModelType';

export class Template {
  private templateHtml = '';
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
  <div class="bl_todo hp_mrl15 hp_prl2 js_todo">
    <div class="el_hidden js_todoId">{{ id }}</div>
    <div class="el_hidden js_todoState">{{ state }}</div>
    <div class="el_todo_head {{ stateClass }}"></div>
    <div class="bl_todo_body">
      <div class="js_todoTitle">
        <h3 class="el_todoTitle js_data">
          Test: Success Task Create by TS Program
        </h3>
      </div>
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
      <div class="bl_todo_detail js_todoDetail is_hidden">
        <p class="el_label el_label__small">
        </p>
      </div>
      <div class="bl_todo_status">
        <form class="bl_todo_progress">
          <input type="range" value="0" min="0" max="100" step="10" oninput="document.getElementById('c-output').value=this.value" />
          <output id="c-output" class="el_label el_label__small">0</output>
        </form>
        <div class="bl_todo_inputTime js_todoEstimateTime">
          <p class="el_label el_label__small">見積:</p>
          <p class="el_label el_label__small js_data">
              10 h
            </p>
        </div>
        <div class="bl_todo_inputTime js_todoResultTime">
          <p class="el_label el_label__small">実績:</p>
          <p class="el_label el_label__small js_data">
              10 h
            </p>
        </div>
      </div>
    </div>
  </div>
`;

export const IDENTIFIER_TITLE = '{{ title }}';
export const TODO_TITLE_NORMAL_HTML = `
        <h3 class="el_todoTitle js_data">
          {{ title }}
        </h3>
`;
export const TODO_TITLE_EDIT_HTML = `
        <form class="el_todoTitle" onsubmit="return false;">
          <p class="el_todoTitle hp_pr10">
            <input type="text" name="title" class="el_textarea js_data" value="{{ title }}">
          </p>
        </form>
`;

export const IDENTIFIER_DETAIL = '{{ detail }}';
export const TODO_DETAIL_NORMAL_HTML = `
        <p class="el_label el_label__small js_data">
          {{ detail }}
        </p>
`;
export const TODO_DETAIL_EDIT_HTML = `
        <form>
          <textarea name="comment" rows="5" class="js_data">
            {{ detail }}
          </textarea>
        </form>
`;

export const IDENTIFIER_TIME = '{{ time }}';
export const TIME_SELECT_NORMAL_HTML = `
          <p class="el_label el_label__small js_data">
              {{ time }}
            </p>
`;
export const TIME_SELECT_EDIT_HTML = `
          <form>
            <select class="js_select" size=1>
              <option value="0.5h">0.5h</option>
              <option value="1h">1h</option>
              <option value="2h">2h</option>
              <option value="3h">3h</option>
              <option value="4h">4h</option>
              <option value="5h">5h</option>
              <option value="6h">6h</option>
              <option value="7h">7h</option>
              <option value="1day">1day</option>
              <option value="1.5day">1.5day</option>
              <option value="2day">2day</option>
              <option value="2.5day">2.5day</option>
              <option value="3day">3day</option>
              <option value="3.5day">3.5day</option>
              <option value="4day">4day</option>
              <option value="4.5day">4.5day</option>
              <option value="5day">5day</option>
              <option value="5.5day">5.5day</option>
              <option value="6day">6day</option>
              <option value="6.5day">6.5day</option>
              <option value="7day">7day</option>
            </select>
          </form>
`;
const TODO_ESTIMATE_HEAD = '<p class="el_label el_label__small">見積:</p>';
const TODO_RESULT_HEAD = '<p class="el_label el_label__small">実績:</p>';

export const TODO_ESTIMATE_NORMAL_HTML =
  TODO_ESTIMATE_HEAD + TIME_SELECT_NORMAL_HTML;
export const TODO_RESULT_NORMAL_HTML =
  TODO_RESULT_HEAD + TIME_SELECT_NORMAL_HTML;
export const TODO_ESTIMATE_EDIT_HTML =
  TODO_ESTIMATE_HEAD + TIME_SELECT_EDIT_HTML;
export const TODO_RESULT_EDIT_HTML = TODO_RESULT_HEAD + TIME_SELECT_EDIT_HTML;
