/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
var viewModelServiceImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var viewModelManagerFactoryImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelManagerFactoryImpl */ "./src/ts/main/viewmodel/impl/viewModelManagerFactoryImpl.ts");
var TodoContextMenuHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoContextMenuHandler */ "./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts");
var viewEventHandlers_1 = __webpack_require__(/*! ./main/view/handler/viewEventHandlers */ "./src/ts/main/view/handler/viewEventHandlers.ts");
var TodoComponentHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoComponentHandler */ "./src/ts/main/view/handler/impl/TodoComponentHandler.ts");
var CreateTaskBtnHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/CreateTaskBtnHandler */ "./src/ts/main/view/handler/impl/CreateTaskBtnHandler.ts");
var viewDisplayer_1 = __webpack_require__(/*! ./main/view/viewDisplayer */ "./src/ts/main/view/viewDisplayer.ts");
var viewEditModeState_1 = __webpack_require__(/*! ./main/view/viewEditModeState */ "./src/ts/main/view/viewEditModeState.ts");
var todoConvertElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoConvertElementHandler */ "./src/ts/main/view/handler/impl/todoConvertElementHandler.ts");
var todoResetElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoResetElementHandler */ "./src/ts/main/view/handler/impl/todoResetElementHandler.ts");
var windowHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/windowHandler */ "./src/ts/main/view/handler/impl/windowHandler.ts");
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var childComponentHolder_1 = __webpack_require__(/*! ./component/childComponentHolder */ "./src/ts/component/childComponentHolder.ts");
var todoCmpHolder = new childComponentHolder_1.ChildComponentHolder();
todoCmpHolder.components = childComponentHolder_1.createTodoChildComponents();
var editState = new viewEditModeState_1.ViewEditModeState();
var todoResetHandler = new todoResetElementHandler_1.TodoResetElementHandler(todoCmpHolder, editState);
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewEventHandlers_1.ViewEventHandlerRegisters.init(new TodoComponentHandler_1.TodoComponentHandler(new TodoContextMenuHandler_1.TodoContextMenuHandler(), new todoConvertElementHandler_1.TodoConvertElementHandler(todoCmpHolder, editState, todoResetHandler)), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer()), new windowHandler_1.WindowHandler(todoResetHandler)).register();
document.body.addEventListener('click', function () {
    htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});


/***/ }),

/***/ "./src/ts/component/baseChildComponent.ts":
/*!************************************************!*\
  !*** ./src/ts/component/baseChildComponent.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseChildComponent = void 0;
var componentTemplateParts_1 = __webpack_require__(/*! ./componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var BaseChildComponent = (function () {
    function BaseChildComponent(templateParts) {
        this._editingElement = null;
        this.templateParts = templateParts !== null && templateParts !== void 0 ? templateParts : componentTemplateParts_1.TemplatePartsHolder.empty();
    }
    BaseChildComponent.prototype.convertComponent = function () {
        if (this._editingElement) {
            this.convertProcess(this._editingElement);
            return;
        }
        throw new Error('Nothing editing element');
    };
    BaseChildComponent.prototype.reconvertComponent = function () {
        if (this._editingElement) {
            this.reconvertProcess(this._editingElement);
            this._editingElement = null;
        }
    };
    Object.defineProperty(BaseChildComponent.prototype, "editingElement", {
        get: function () {
            return this._editingElement;
        },
        set: function (elem) {
            this._editingElement = elem;
        },
        enumerable: false,
        configurable: true
    });
    return BaseChildComponent;
}());
exports.BaseChildComponent = BaseChildComponent;


/***/ }),

/***/ "./src/ts/component/childComponentHolder.ts":
/*!**************************************************!*\
  !*** ./src/ts/component/childComponentHolder.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoChildComponents = exports.ChildComponentHolder = void 0;
var todoTimeComponent_1 = __webpack_require__(/*! ./todo/todoTimeComponent */ "./src/ts/component/todo/todoTimeComponent.ts");
var todoTitleComponent_1 = __webpack_require__(/*! ./todo/todoTitleComponent */ "./src/ts/component/todo/todoTitleComponent.ts");
var todoDetailComponent_1 = __webpack_require__(/*! ./todo/todoDetailComponent */ "./src/ts/component/todo/todoDetailComponent.ts");
var ChildComponentHolder = (function () {
    function ChildComponentHolder() {
        this._components = new Map();
    }
    ChildComponentHolder.prototype.getComponent = function (componentType) {
        if (this._components.has(componentType)) {
            return this._components.get(componentType);
        }
        throw new Error('Invalid Component Type');
    };
    Object.defineProperty(ChildComponentHolder.prototype, "components", {
        get: function () {
            return this._components;
        },
        set: function (components) {
            this._components = components;
        },
        enumerable: false,
        configurable: true
    });
    return ChildComponentHolder;
}());
exports.ChildComponentHolder = ChildComponentHolder;
function createTodoChildComponents() {
    var e_1, _a;
    var components = new Map();
    components.set('Title', new todoTitleComponent_1.TodoTitleComponent());
    components.set('EstimateTime', new todoTimeComponent_1.TodoTimeComponent('estimate'));
    components.set('ResultTime', new todoTimeComponent_1.TodoTimeComponent('result'));
    components.set('Detail', new todoDetailComponent_1.TodoDetailComponent());
    try {
        for (var _b = __values(components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component = _c.value;
            component.init();
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return components;
}
exports.createTodoChildComponents = createTodoChildComponents;


/***/ }),

/***/ "./src/ts/component/componentTemplateParts.ts":
/*!****************************************************!*\
  !*** ./src/ts/component/componentTemplateParts.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatePartsHolder = void 0;
var TemplatePartsHolder = (function () {
    function TemplatePartsHolder(_identify, _normalStateHtml, _editStateHtml) {
        this._identify = _identify;
        this._normalStateHtml = _normalStateHtml;
        this._editStateHtml = _editStateHtml;
    }
    TemplatePartsHolder.create = function (identify, normalStateHtml, editStateHtml) {
        return new TemplatePartsHolder(identify, normalStateHtml, editStateHtml);
    };
    TemplatePartsHolder.empty = function () {
        return new TemplatePartsHolder('', '', '');
    };
    Object.defineProperty(TemplatePartsHolder.prototype, "identify", {
        get: function () {
            return this._identify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TemplatePartsHolder.prototype, "normalStateHtml", {
        get: function () {
            return this._normalStateHtml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TemplatePartsHolder.prototype, "editStateHtml", {
        get: function () {
            return this._editStateHtml;
        },
        enumerable: false,
        configurable: true
    });
    return TemplatePartsHolder;
}());
exports.TemplatePartsHolder = TemplatePartsHolder;


/***/ }),

/***/ "./src/ts/component/decorator/viewComponent.ts":
/*!*****************************************************!*\
  !*** ./src/ts/component/decorator/viewComponent.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewComponent = void 0;
var todoComponent_1 = __webpack_require__(/*! ../todo/todoComponent */ "./src/ts/component/todo/todoComponent.ts");
function ViewComponent(modelType, selector) {
    return function (constructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                var todo = args.find(implementsTodo);
                if (todo) {
                    var todoCmp = new todoComponent_1.TodoComponent(todo, modelType, selector);
                    todoCmp.init();
                }
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
exports.ViewComponent = ViewComponent;
function implementsTodo(arg) {
    return (arg !== null &&
        typeof arg === 'object' &&
        typeof arg.id === 'number' &&
        typeof arg.modelType === 'string');
}


/***/ }),

/***/ "./src/ts/component/templates/todoTemplates.ts":
/*!*****************************************************!*\
  !*** ./src/ts/component/templates/todoTemplates.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO_RESULT_EDIT_HTML = exports.TODO_ESTIMATE_EDIT_HTML = exports.TODO_RESULT_NORMAL_HTML = exports.TODO_ESTIMATE_NORMAL_HTML = exports.TIME_SELECT_EDIT_HTML = exports.TIME_SELECT_NORMAL_HTML = exports.IDENTIFIER_TIME = exports.TODO_DETAIL_EDIT_HTML = exports.TODO_DETAIL_NORMAL_HTML = exports.IDENTIFIER_DETAIL = exports.TODO_TITLE_EDIT_HTML = exports.TODO_TITLE_NORMAL_HTML = exports.IDENTIFIER_TITLE = exports.Template = void 0;
var Template = (function () {
    function Template(modelType) {
        this.templateHtml = '';
        if (modelType === 'Todo') {
            this.templateHtml = todoTemplate;
        }
    }
    Template.prototype.getTemplateHtml = function () {
        return this.templateHtml;
    };
    Template.prototype.replaceTemplate = function (target, replace) {
        if (typeof replace === 'number') {
            replace = String(replace);
        }
        this.templateHtml = this.templateHtml.replace(target, replace);
        return this;
    };
    return Template;
}());
exports.Template = Template;
var todoTemplate = "\n  <div class=\"el_emptyItem\"></div>\n  <div class=\"bl_todo hp_mrl15 hp_prl2 js_todo\">\n    <div class=\"el_hidden js_todoId\">{{ id }}</div>\n    <div class=\"el_hidden js_todoState\">{{ state }}</div>\n    <div class=\"el_todo_head {{ stateClass }}\"></div>\n    <div class=\"bl_todo_body\">\n      <div class=\"js_todoTitle\">\n        <h3 class=\"el_todoTitle js_data\">\n          Test: Success Task Create by TS Program\n        </h3>\n      </div>\n      <div class=\"bl_todo_times\">\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">created time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">started time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n      </div>\n      <div class=\"bl_todo_detail js_todoDetail is_hidden\">\n        <p class=\"el_label el_label__small\">\n        </p>\n      </div>\n      <div class=\"bl_todo_status\">\n        <form class=\"bl_todo_progress\">\n          <input type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"10\" oninput=\"document.getElementById('c-output').value=this.value\" />\n          <output id=\"c-output\" class=\"el_label el_label__small\">0</output>\n        </form>\n        <div class=\"bl_todo_inputTime js_todoEstimateTime\">\n          <p class=\"el_label el_label__small\">\u898B\u7A4D:</p>\n          <p class=\"el_label el_label__small js_data\">\n              10 h\n            </p>\n        </div>\n        <div class=\"bl_todo_inputTime js_todoResultTime\">\n          <p class=\"el_label el_label__small\">\u5B9F\u7E3E:</p>\n          <p class=\"el_label el_label__small js_data\">\n              10 h\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n";
exports.IDENTIFIER_TITLE = '{{ title }}';
exports.TODO_TITLE_NORMAL_HTML = "\n        <h3 class=\"el_todoTitle js_data\">\n          {{ title }}\n        </h3>\n";
exports.TODO_TITLE_EDIT_HTML = "\n        <form class=\"el_todoTitle\">\n          <p class=\"el_todoTitle hp_pr10\">\n            <input type=\"text\" name=\"title\" class=\"el_textarea js_data\" value=\"{{ title }}\">\n          </p>\n        </form>\n";
exports.IDENTIFIER_DETAIL = '{{ detail }}';
exports.TODO_DETAIL_NORMAL_HTML = "\n        <p class=\"el_label el_label__small js_data\">\n          {{ detail }}\n        </p>\n";
exports.TODO_DETAIL_EDIT_HTML = "\n        <form>\n          <textarea name=\"comment\" rows=\"5\" class=\"js_data\">\n            {{ detail }}\n          </textarea>\n        </form>\n";
exports.IDENTIFIER_TIME = '{{ time }}';
exports.TIME_SELECT_NORMAL_HTML = "\n          <p class=\"el_label el_label__small js_data\">\n              {{ time }}\n            </p>\n";
exports.TIME_SELECT_EDIT_HTML = "\n          <form>\n            <select class=\"js_select\" size=1>\n              <option value=\"0.5h\">0.5h</option>\n              <option value=\"1h\">1h</option>\n              <option value=\"2h\">2h</option>\n              <option value=\"3h\">3h</option>\n              <option value=\"4h\">4h</option>\n              <option value=\"5h\">5h</option>\n              <option value=\"6h\">6h</option>\n              <option value=\"7h\">7h</option>\n              <option value=\"1day\">1day</option>\n              <option value=\"1.5day\">1.5day</option>\n              <option value=\"2day\">2day</option>\n              <option value=\"2.5day\">2.5day</option>\n              <option value=\"3day\">3day</option>\n              <option value=\"3.5day\">3.5day</option>\n              <option value=\"4day\">4day</option>\n              <option value=\"4.5day\">4.5day</option>\n              <option value=\"5day\">5day</option>\n              <option value=\"5.5day\">5.5day</option>\n              <option value=\"6day\">6day</option>\n              <option value=\"6.5day\">6.5day</option>\n              <option value=\"7day\">7day</option>\n            </select>\n          </form>\n";
var TODO_ESTIMATE_HEAD = '<p class="el_label el_label__small">見積:</p>';
var TODO_RESULT_HEAD = '<p class="el_label el_label__small">実績:</p>';
exports.TODO_ESTIMATE_NORMAL_HTML = TODO_ESTIMATE_HEAD + exports.TIME_SELECT_NORMAL_HTML;
exports.TODO_RESULT_NORMAL_HTML = TODO_RESULT_HEAD + exports.TIME_SELECT_NORMAL_HTML;
exports.TODO_ESTIMATE_EDIT_HTML = TODO_ESTIMATE_HEAD + exports.TIME_SELECT_EDIT_HTML;
exports.TODO_RESULT_EDIT_HTML = TODO_RESULT_HEAD + exports.TIME_SELECT_EDIT_HTML;


/***/ }),

/***/ "./src/ts/component/todo/todoComponent.ts":
/*!************************************************!*\
  !*** ./src/ts/component/todo/todoComponent.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
var todoTemplates_1 = __webpack_require__(/*! ../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
var TodoComponent = (function () {
    function TodoComponent(todo, modelType, selector) {
        this.todo = todo;
        this.modelType = modelType;
        this.selector = selector;
    }
    TodoComponent.prototype.init = function () {
        var _a;
        var state = (_a = this.todo.workState) !== null && _a !== void 0 ? _a : 'Waiting';
        var stateStyleClass = convertStateClass(state);
        var template = new todoTemplates_1.Template(this.modelType);
        template
            .replaceTemplate(/{{ state }}/g, state)
            .replaceTemplate(/{{ stateClass }}/g, stateStyleClass)
            .replaceTemplate(/{{ id }}/g, this.todo.id);
        var mountedElement = document.querySelector('.' + stateStyleClass + this.selector);
        if (mountedElement) {
            mountedElement.insertAdjacentHTML('afterbegin', template.getTemplateHtml());
        }
    };
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
function convertStateClass(state) {
    return 'is_' + state.toLowerCase();
}


/***/ }),

/***/ "./src/ts/component/todo/todoDetailComponent.ts":
/*!******************************************************!*\
  !*** ./src/ts/component/todo/todoDetailComponent.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoDetailComponent = void 0;
var todoTemplates_1 = __webpack_require__(/*! ../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var TodoDetailComponent = (function (_super) {
    __extends(TodoDetailComponent, _super);
    function TodoDetailComponent(templateParts) {
        return _super.call(this, templateParts) || this;
    }
    TodoDetailComponent.prototype.init = function () {
        this.templateParts = componentTemplateParts_1.TemplatePartsHolder.create(todoTemplates_1.IDENTIFIER_DETAIL, todoTemplates_1.TODO_DETAIL_NORMAL_HTML, todoTemplates_1.TODO_DETAIL_EDIT_HTML);
    };
    TodoDetailComponent.prototype.convertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElement(editingElement, this.templateParts.editStateHtml, this.templateParts.identify);
    };
    TodoDetailComponent.prototype.reconvertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElement(editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
    };
    return TodoDetailComponent;
}(baseChildComponent_1.BaseChildComponent));
exports.TodoDetailComponent = TodoDetailComponent;


/***/ }),

/***/ "./src/ts/component/todo/todoTimeComponent.ts":
/*!****************************************************!*\
  !*** ./src/ts/component/todo/todoTimeComponent.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTimeComponent = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var todoTemplates_1 = __webpack_require__(/*! ../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var TodoTimeComponent = (function (_super) {
    __extends(TodoTimeComponent, _super);
    function TodoTimeComponent(type, templateParts) {
        var _this = _super.call(this, templateParts) || this;
        _this.type = type;
        _this.type = type;
        return _this;
    }
    TodoTimeComponent.prototype.init = function () {
        if (this.type === 'estimate') {
            this.templateParts = componentTemplateParts_1.TemplatePartsHolder.create(todoTemplates_1.IDENTIFIER_TIME, todoTemplates_1.TODO_ESTIMATE_NORMAL_HTML, todoTemplates_1.TODO_ESTIMATE_EDIT_HTML);
            return;
        }
        if (this.type === 'result') {
            this.templateParts = componentTemplateParts_1.TemplatePartsHolder.create(todoTemplates_1.IDENTIFIER_TIME, todoTemplates_1.TODO_RESULT_NORMAL_HTML, todoTemplates_1.TODO_RESULT_EDIT_HTML);
            return;
        }
        this.templateParts = componentTemplateParts_1.TemplatePartsHolder.create(todoTemplates_1.IDENTIFIER_TIME, todoTemplates_1.TIME_SELECT_NORMAL_HTML, todoTemplates_1.TIME_SELECT_EDIT_HTML);
    };
    TodoTimeComponent.prototype.convertProcess = function (editingElement) {
        convertTimeElem(editingElement, this.templateParts.editStateHtml);
    };
    TodoTimeComponent.prototype.reconvertProcess = function (editingElement) {
        convertResetTimeElem(editingElement, todoTemplates_1.TODO_RESULT_NORMAL_HTML);
    };
    return TodoTimeComponent;
}(baseChildComponent_1.BaseChildComponent));
exports.TodoTimeComponent = TodoTimeComponent;
var TodoTimeTypes = {
    NONE: '',
    ESTIMATE: 'estimate',
    Result: 'result',
};
function convertTimeElem(elem, baseHtml) {
    var data = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_data', elem).innerText;
    elem.innerHTML = baseHtml;
    var selectElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_select', elem);
    for (var i = 0; i < selectElem.length; i++) {
        if (selectElem.options[i].value === data) {
            selectElem.selectedIndex = i;
        }
    }
}
function convertResetTimeElem(elem, replaceHtml) {
    var selectElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('js_select', elem);
    selectElem.options[selectElem.selectedIndex].value;
    htmlAccessor_1.HtmlAccessor.convertElement(elem, replaceHtml, todoTemplates_1.IDENTIFIER_TIME);
}


/***/ }),

/***/ "./src/ts/component/todo/todoTitleComponent.ts":
/*!*****************************************************!*\
  !*** ./src/ts/component/todo/todoTitleComponent.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTitleComponent = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var todoTemplates_1 = __webpack_require__(/*! ../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var TodoTitleComponent = (function (_super) {
    __extends(TodoTitleComponent, _super);
    function TodoTitleComponent(templateParts) {
        return _super.call(this, templateParts) || this;
    }
    TodoTitleComponent.prototype.init = function () {
        this.templateParts = componentTemplateParts_1.TemplatePartsHolder.create(todoTemplates_1.IDENTIFIER_TITLE, todoTemplates_1.TODO_TITLE_NORMAL_HTML, todoTemplates_1.TODO_TITLE_EDIT_HTML);
    };
    TodoTitleComponent.prototype.convertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElement(editingElement, this.templateParts.editStateHtml, this.templateParts.identify);
    };
    TodoTitleComponent.prototype.reconvertComponent = function () {
        if (this._editingElement) {
            htmlAccessor_1.HtmlAccessor.convertElement(this._editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
            this._editingElement = null;
        }
    };
    TodoTitleComponent.prototype.reconvertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElement(editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
    };
    return TodoTitleComponent;
}(baseChildComponent_1.BaseChildComponent));
exports.TodoTitleComponent = TodoTitleComponent;


/***/ }),

/***/ "./src/ts/htmlUtils/htmlAccessor.ts":
/*!******************************************!*\
  !*** ./src/ts/htmlUtils/htmlAccessor.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlAccessor = void 0;
var HtmlAccessor = (function () {
    function HtmlAccessor() {
    }
    HtmlAccessor.getHtmlElement = function (query, rootElem) {
        var elem;
        if (!rootElem) {
            elem = document.querySelector(query);
        }
        else {
            elem = rootElem.querySelector(query);
        }
        if (elem) {
            return elem;
        }
        throw new Error('');
    };
    HtmlAccessor.getHtmlElementNullable = function (query, rootElem) {
        var elem;
        if (!rootElem) {
            elem = document.querySelector(query);
        }
        else {
            elem = rootElem.querySelector(query);
        }
        return elem;
    };
    HtmlAccessor.getHtmlElements = function (query, rootElem) {
        var elem;
        if (!rootElem) {
            elem = document.querySelectorAll(query);
        }
        else {
            elem = rootElem.querySelectorAll(query);
        }
        if (elem.length !== 0) {
            return Array.from(elem);
        }
        throw new Error('');
    };
    HtmlAccessor.convertElement = function (elem, baseHtml, identifier) {
        var data = HtmlAccessor.getHtmlElement('.js_data', elem).innerText;
        elem.innerHTML = baseHtml.replace(identifier, data);
    };
    return HtmlAccessor;
}());
exports.HtmlAccessor = HtmlAccessor;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/CreateTaskBtnHandler.ts":
/*!***************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/CreateTaskBtnHandler.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskBtnHandler = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var CreateTaskBtnHandler = (function () {
    function CreateTaskBtnHandler(_viewDisplayer) {
        this._viewDisplayer = _viewDisplayer;
    }
    CreateTaskBtnHandler.prototype.register = function () {
        this.resistCreateTaskEvent();
    };
    CreateTaskBtnHandler.prototype.resistCreateTaskEvent = function () {
        var createTaskArea = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskArea');
        var createTaskBtn = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskBtn', createTaskArea);
        createTaskBtn.addEventListener('click', this._viewDisplayer.displayInputTaskArea);
    };
    return CreateTaskBtnHandler;
}());
exports.CreateTaskBtnHandler = CreateTaskBtnHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/TodoComponentHandler.ts":
/*!***************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/TodoComponentHandler.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponentHandler = void 0;
var viewEventHandler_1 = __webpack_require__(/*! ../viewEventHandler */ "./src/ts/main/view/handler/viewEventHandler.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var TodoComponentHandler = (function (_super) {
    __extends(TodoComponentHandler, _super);
    function TodoComponentHandler(_ctMenuhandler, _convertHandler) {
        var _this = _super.call(this) || this;
        _this.subHandlerHolder.add('registerRightClickEvent', _ctMenuhandler);
        _this.subHandlerHolder.add('registerTodoObserver_context', _ctMenuhandler);
        _this.subHandlerHolder.add('registerTodoObserver_convert', _convertHandler);
        return _this;
    }
    TodoComponentHandler.prototype.register = function () {
        this.registerRightClickEvent();
        this.registerTodoObserver();
        this.registerDoudbleClickElemEvent();
    };
    TodoComponentHandler.prototype.registerRightClickEvent = function () {
        var _this = this;
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', _this.subHandlerHolder.supply('registerRightClickEvent'));
        });
    };
    TodoComponentHandler.prototype.registerTodoObserver = function () {
        var e_1, _a;
        var _this = this;
        var observer = new MutationObserver(function (records) {
            records.forEach(function (rec) {
                var nodes = Array.from(rec.addedNodes);
                var todoElem = getTodoElemFromNodes(nodes);
                if (!todoElem) {
                    return;
                }
                todoElem.addEventListener('contextmenu', _this.subHandlerHolder.supply('registerTodoObserver_context'));
                htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoTitle', todoElem).addEventListener('dblclick', _this.subHandlerHolder.supply('registerTodoObserver_convert', 'Title'));
            });
        });
        try {
            for (var _b = __values(htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todolist')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todolist = _c.value;
                observer.observe(todolist, {
                    childList: true,
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TodoComponentHandler.prototype.registerDoudbleClickElemEvent = function () {
        var titleElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoTitle');
        titleElem.addEventListener('dblclick', this.subHandlerHolder.supply('registerTodoObserver_convert', 'Title'));
    };
    return TodoComponentHandler;
}(viewEventHandler_1.ExtensionViewEventHandlerRegister));
exports.TodoComponentHandler = TodoComponentHandler;
function getTodoElemFromNodes(nodes) {
    var e_2, _a;
    try {
        for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            var htmlElem = node;
            if (htmlElem.classList && htmlElem.classList.contains('js_todo')) {
                return htmlElem;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return null;
}


/***/ }),

/***/ "./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoContextMenuHandler = void 0;
var todoState_1 = __webpack_require__(/*! ../../../viewmodel/todo/todoState */ "./src/ts/main/viewmodel/todo/todoState.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../../../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../../../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var TodoContextMenuHandler = (function () {
    function TodoContextMenuHandler() {
        var _this = this;
        this.targetTodo = null;
        this.openContextMenuFunc = function (e) {
            _this.openContextMenu(e);
        };
        this.changeStateWaitingFunc = function () {
            _this.changeState('Waiting');
        };
        this.changeStateInprogressFunc = function () {
            _this.changeState('InProgress');
        };
        this.changeStateCompletedFunc = function () {
            _this.changeState('Completed');
        };
        this.changeStatePendingFunc = function () {
            _this.changeState('Pending');
        };
        this.deleteTodoFunc = function () {
            _this.deleteTodo();
        };
    }
    TodoContextMenuHandler.prototype.supply = function () {
        return this.openContextMenuFunc;
    };
    TodoContextMenuHandler.prototype.openContextMenu = function (e) {
        var event = e;
        var ctMenu = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu');
        ctMenu.style.left = String(event.pageX) + 'px';
        ctMenu.style.top = String(event.pageY) + 'px';
        ctMenu.style.display = 'block';
        this.targetTodo = event.currentTarget;
        if (!this.targetTodo) {
            return;
        }
        htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuChangeWaiting', ctMenu).addEventListener('click', this.changeStateWaitingFunc);
        htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuChangeInprogress', ctMenu).addEventListener('click', this.changeStateInprogressFunc);
        htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuChangeCompleted', ctMenu).addEventListener('click', this.changeStateCompletedFunc);
        htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuChangePending', ctMenu).addEventListener('click', this.changeStatePendingFunc);
        htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu).addEventListener('click', this.deleteTodoFunc);
    };
    TodoContextMenuHandler.prototype.changeState = function (state) {
        var _a;
        if (!this.targetTodo ||
            htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoState', this.targetTodo)
                .innerText === state) {
            return;
        }
        (_a = this.targetTodo.previousElementSibling) === null || _a === void 0 ? void 0 : _a.remove();
        this.targetTodo.remove();
        var vmService = viewModelServiceImpl_1.ViewModelServiceImpl.getInstance();
        var inputVm = this.generateViewModel(this.targetTodo, state);
        var vmBuilder = viewModelBuilderFactory_1.ViewModelBuilderFactory.newInstance().createViewModelBuilder();
        vmService.deleteViewModel(inputVm);
        vmService.createViewModel('Todo', vmBuilder.with(inputVm).with({ workState: state }).build());
    };
    TodoContextMenuHandler.prototype.deleteTodo = function () {
        if (!this.targetTodo) {
            return;
        }
        var prevTodoEmpty = this.targetTodo.previousElementSibling;
        this.targetTodo.remove();
        prevTodoEmpty === null || prevTodoEmpty === void 0 ? void 0 : prevTodoEmpty.remove();
        viewModelServiceImpl_1.ViewModelServiceImpl.getInstance().deleteViewModel(this.generateViewModel(this.targetTodo));
    };
    TodoContextMenuHandler.prototype.generateViewModel = function (todo, state) {
        var id = Number(htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoId', todo).innerText);
        if (state === undefined) {
            state = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoState', todo).innerText;
        }
        if (id < 0 || !todoState_1.isTodoState(state)) {
            throw new Error('');
        }
        var vmBuilder = new viewModelBuilderFactory_1.ViewModelBuilderFactory().createViewModelBuilder();
        return vmBuilder
            .with({ id: id })
            .with({ modelType: 'Todo' })
            .with({ workState: state })
            .build();
    };
    return TodoContextMenuHandler;
}());
exports.TodoContextMenuHandler = TodoContextMenuHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/todoConvertElementHandler.ts":
/*!********************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/todoConvertElementHandler.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoConvertElementHandler = void 0;
var TodoConvertElementHandler = (function () {
    function TodoConvertElementHandler(childComponents, editState, resetEditingHandler) {
        var _this = this;
        this.childComponents = childComponents;
        this.editState = editState;
        this.resetEditingHandler = resetEditingHandler;
        this.convertTitleFunc = function (e) {
            _this.convertTitle(e);
        };
        this.convertDeitalFunc = function (e) {
            _this.convertDetail(e);
        };
        this.convertEstimateTimeFunc = function (e) {
            _this.convertEstimateTime(e);
        };
        this.convertResultTimeFunc = function (e) {
            _this.convertResultTime(e);
        };
    }
    TodoConvertElementHandler.prototype.supply = function (arg) {
        if (arg === 'Title') {
            return this.convertTitleFunc;
        }
        else if (arg === 'Detail') {
            return this.convertDeitalFunc;
        }
        else if (arg === 'EstimateTime') {
            return this.convertEstimateTimeFunc;
        }
        else if (arg === 'ResultTime') {
            return this.convertResultTimeFunc;
        }
        throw new Error('');
    };
    TodoConvertElementHandler.prototype.convertTitle = function (event) {
        this.resetEditingHandler.call();
        var titleCmp = this.childComponents.getComponent('Title');
        titleCmp.editingElement = event.currentTarget;
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertDetail = function (event) {
        this.resetEditingHandler.call();
        var titleCmp = this.childComponents.getComponent('Detail');
        titleCmp.editingElement = event.currentTarget;
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertEstimateTime = function (event) {
        this.resetEditingHandler.call();
        var titleCmp = this.childComponents.getComponent('EstimateTime');
        titleCmp.editingElement = event.currentTarget;
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertResultTime = function (event) {
        this.resetEditingHandler.call();
        var titleCmp = this.childComponents.getComponent('ResultTime');
        titleCmp.editingElement = event.currentTarget;
        titleCmp.convertComponent();
    };
    return TodoConvertElementHandler;
}());
exports.TodoConvertElementHandler = TodoConvertElementHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/todoResetElementHandler.ts":
/*!******************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/todoResetElementHandler.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResetElementHandler = void 0;
var TodoResetElementHandler = (function () {
    function TodoResetElementHandler(childComponents, editState) {
        var _this = this;
        this.childComponents = childComponents;
        this.editState = editState;
        this.resetEditModeFunc = function () {
            _this.resetEditMode();
        };
    }
    TodoResetElementHandler.prototype.supply = function () {
        return this.resetEditModeFunc;
    };
    TodoResetElementHandler.prototype.call = function () {
        this.resetEditMode();
    };
    TodoResetElementHandler.prototype.resetEditMode = function () {
        var e_1, _a;
        var it = this.childComponents.components.values();
        try {
            for (var it_1 = __values(it), it_1_1 = it_1.next(); !it_1_1.done; it_1_1 = it_1.next()) {
                var component = it_1_1.value;
                component.reconvertComponent();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (it_1_1 && !it_1_1.done && (_a = it_1.return)) _a.call(it_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return TodoResetElementHandler;
}());
exports.TodoResetElementHandler = TodoResetElementHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/windowHandler.ts":
/*!********************************************************!*\
  !*** ./src/ts/main/view/handler/impl/windowHandler.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowHandler = void 0;
var WindowHandler = (function () {
    function WindowHandler(resetEditingHandler) {
        this.resetEditingHandler = resetEditingHandler;
    }
    WindowHandler.prototype.register = function () {
        window.addEventListener('click', this.resetEditingHandler.supply());
    };
    return WindowHandler;
}());
exports.WindowHandler = WindowHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/viewEventHandler.ts":
/*!******************************************************!*\
  !*** ./src/ts/main/view/handler/viewEventHandler.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionViewEventHandlerRegister = void 0;
var ExtensionViewEventHandlerRegister = (function () {
    function ExtensionViewEventHandlerRegister() {
        this.subHandlerHolder = new ViewEventHandlerSupplierHolder();
    }
    ExtensionViewEventHandlerRegister.prototype.addHandler = function (methodName, handler) {
        this.subHandlerHolder.add(methodName, handler);
        return this;
    };
    ExtensionViewEventHandlerRegister.prototype.getHandler = function (methodName) {
        return this.subHandlerHolder.get(methodName);
    };
    return ExtensionViewEventHandlerRegister;
}());
exports.ExtensionViewEventHandlerRegister = ExtensionViewEventHandlerRegister;
var ViewEventHandlerSupplierHolder = (function () {
    function ViewEventHandlerSupplierHolder() {
        this.subHandlers = new Map();
    }
    ViewEventHandlerSupplierHolder.prototype.add = function (methodName, handler) {
        this.subHandlers.set(methodName, handler);
    };
    ViewEventHandlerSupplierHolder.prototype.get = function (methodName) {
        var handler = this.subHandlers.get(methodName);
        if (handler) {
            return handler;
        }
        throw Error('');
    };
    ViewEventHandlerSupplierHolder.prototype.supply = function (methodName, elem) {
        return this.get(methodName).supply(elem);
    };
    return ViewEventHandlerSupplierHolder;
}());


/***/ }),

/***/ "./src/ts/main/view/handler/viewEventHandlers.ts":
/*!*******************************************************!*\
  !*** ./src/ts/main/view/handler/viewEventHandlers.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewEventHandlerRegisters = void 0;
var ViewEventHandlerRegisters = (function () {
    function ViewEventHandlerRegisters(args) {
        this.handlers = args;
    }
    ViewEventHandlerRegisters.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ViewEventHandlerRegisters(args);
    };
    ViewEventHandlerRegisters.prototype.register = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.handlers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler.register();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return ViewEventHandlerRegisters;
}());
exports.ViewEventHandlerRegisters = ViewEventHandlerRegisters;


/***/ }),

/***/ "./src/ts/main/view/viewDisplayer.ts":
/*!*******************************************!*\
  !*** ./src/ts/main/view/viewDisplayer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewDisplayer = void 0;
var viewModelServiceImpl_1 = __webpack_require__(/*! ../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var ViewDisplayer = (function () {
    function ViewDisplayer() {
    }
    ViewDisplayer.prototype.displayInputTaskArea = function () {
        var _a;
        if ((_a = htmlAccessor_1.HtmlAccessor.getHtmlElementNullable('#radioCreateTaskDetail')) === null || _a === void 0 ? void 0 : _a.checked) {
        }
        else {
            var vmBuilder = new viewModelBuilderFactory_1.ViewModelBuilderFactory().createViewModelBuilder('Todo');
            vmBuilder.with({ workState: 'Waiting' });
            if (vmBuilder) {
                var vmService = viewModelServiceImpl_1.ViewModelServiceImpl.getInstance();
                vmService.createViewModel('Todo');
            }
        }
    };
    return ViewDisplayer;
}());
exports.ViewDisplayer = ViewDisplayer;


/***/ }),

/***/ "./src/ts/main/view/viewEditModeState.ts":
/*!***********************************************!*\
  !*** ./src/ts/main/view/viewEditModeState.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewEditModeState = void 0;
var ViewEditModeState = (function () {
    function ViewEditModeState() {
        this._editingTodoTitle = null;
        this._editingTodoDetail = null;
        this._editingTodoEstimate = null;
        this._editingTodoResult = null;
    }
    ViewEditModeState.prototype.isEditingTodoTitle = function () {
        return this._editingTodoTitle ? true : false;
    };
    ViewEditModeState.prototype.isEditingTodoDetail = function () {
        return this._editingTodoDetail ? true : false;
    };
    ViewEditModeState.prototype.isEditingTodoEstimate = function () {
        return this._editingTodoEstimate ? true : false;
    };
    ViewEditModeState.prototype.isEditingTodoResult = function () {
        return this._editingTodoResult ? true : false;
    };
    ViewEditModeState.prototype.resetEditingTodoTitle = function () {
        this._editingTodoTitle = null;
    };
    ViewEditModeState.prototype.resetEditingTodoDetail = function () {
        this._editingTodoDetail = null;
    };
    ViewEditModeState.prototype.resetEditingTodoEstimate = function () {
        this._editingTodoEstimate = null;
    };
    ViewEditModeState.prototype.resetEditingTodoResult = function () {
        this._editingTodoResult = null;
    };
    Object.defineProperty(ViewEditModeState.prototype, "editingTodoTitle", {
        get: function () {
            if (this._editingTodoTitle) {
                return this._editingTodoTitle;
            }
            throw new Error('Nothing editing task title');
        },
        set: function (elem) {
            this._editingTodoTitle = elem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewEditModeState.prototype, "editingTodoDetail", {
        get: function () {
            if (this._editingTodoDetail) {
                return this._editingTodoDetail;
            }
            throw new Error('Nothing editing task detail');
        },
        set: function (elem) {
            this._editingTodoDetail = elem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewEditModeState.prototype, "editingTodoEstimate", {
        get: function () {
            if (this._editingTodoEstimate) {
                return this._editingTodoEstimate;
            }
            throw new Error('Nothing editing task estimate time');
        },
        set: function (elem) {
            this._editingTodoEstimate = elem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewEditModeState.prototype, "editingTodoResult", {
        get: function () {
            if (this._editingTodoResult) {
                return this._editingTodoResult;
            }
            throw new Error('Nothing editing task result time');
        },
        set: function (elem) {
            this._editingTodoEstimate = elem;
        },
        enumerable: false,
        configurable: true
    });
    return ViewEditModeState;
}());
exports.ViewEditModeState = ViewEditModeState;


/***/ }),

/***/ "./src/ts/main/viewModelBuilderFactory.ts":
/*!************************************************!*\
  !*** ./src/ts/main/viewModelBuilderFactory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewModelBuilderFactory = void 0;
var todo_1 = __webpack_require__(/*! ./viewmodel/todo/todo */ "./src/ts/main/viewmodel/todo/todo.ts");
var ViewModelBuilderFactory = (function () {
    function ViewModelBuilderFactory() {
    }
    ViewModelBuilderFactory.newInstance = function () {
        return new ViewModelBuilderFactory();
    };
    ViewModelBuilderFactory.prototype.createViewModelBuilder = function (type) {
        return new ViewModelBuilderDelegator(type);
    };
    return ViewModelBuilderFactory;
}());
exports.ViewModelBuilderFactory = ViewModelBuilderFactory;
var ViewModelBuilderDelegator = (function () {
    function ViewModelBuilderDelegator(modelType) {
        if (modelType) {
            this.builder = new TodoBuilder().with({ modelType: modelType });
        }
        else {
            this.builder = new ViewModelBaseBuilder().with({
                modelType: 'ViewModel',
            });
        }
    }
    ViewModelBuilderDelegator.prototype.with = function (input) {
        this.builder = this.builder.with(input);
        return this;
    };
    ViewModelBuilderDelegator.prototype.build = function () {
        return this.builder.build();
    };
    return ViewModelBuilderDelegator;
}());
var AbstractViewModelBuilder = (function () {
    function AbstractViewModelBuilder() {
    }
    AbstractViewModelBuilder.prototype.with = function (input) {
        var _a;
        for (var key in input) {
            if (input.id) {
                this.withId(input.id);
            }
            else if (input.modelType) {
                this.withModelType(input.modelType);
            }
            else {
                Object.assign(this, (_a = {}, _a[key] = input[key], _a));
            }
        }
        return this;
    };
    AbstractViewModelBuilder.prototype.withId = function (id) {
        return Object.assign(this, { id: id });
    };
    AbstractViewModelBuilder.prototype.withModelType = function (type) {
        return Object.assign(this, { modelType: type });
    };
    AbstractViewModelBuilder.prototype.build = function () {
        return this.generateInstance();
    };
    return AbstractViewModelBuilder;
}());
var ViewModelBaseBuilder = (function (_super) {
    __extends(ViewModelBaseBuilder, _super);
    function ViewModelBaseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewModelBaseBuilder.prototype.generateInstance = function () {
        var _a;
        var _b, _c;
        var id = (_b = this.id) !== null && _b !== void 0 ? _b : -1;
        var type = (_c = this.modelType) !== null && _c !== void 0 ? _c : 'ViewModel';
        var obj = { id: id, modelType: type };
        for (var prop in this) {
            if (prop !== 'id' || prop !== 'modelType') {
                Object.assign(obj, (_a = {}, _a[prop] = this[prop], _a));
            }
        }
        return obj;
    };
    return ViewModelBaseBuilder;
}(AbstractViewModelBuilder));
var TodoBuilder = (function (_super) {
    __extends(TodoBuilder, _super);
    function TodoBuilder() {
        return _super.call(this) || this;
    }
    TodoBuilder.prototype.with = function (input) {
        if (input.id) {
            return this.withId(input.id);
        }
        if (input.modelType) {
            return this.withModelType(input.modelType);
        }
        if (input.title) {
            return this.withTitle(input.title);
        }
        if (input.contents) {
            return this.withContents(input.contents);
        }
        if (input.createDate) {
            return this.withCreateDate(input.createDate);
        }
        if (input.startDate) {
            return this.withStartDate(input.startDate);
        }
        if (input.estimateHour) {
            return this.withEstimateHour(input.estimateHour);
        }
        if (input.resultHour) {
            return this.withResultHour(input.resultHour);
        }
        if (input.workState) {
            return this.withWorkState(input.workState);
        }
        if (input.displayOrder) {
            return this.withDisplayOrder(input.displayOrder);
        }
        return this;
    };
    TodoBuilder.prototype.withTitle = function (title) {
        return Object.assign(this, { title: title });
    };
    TodoBuilder.prototype.withContents = function (contents) {
        return Object.assign(this, { contents: contents });
    };
    TodoBuilder.prototype.withCreateDate = function (date) {
        return Object.assign(this, { createDate: date });
    };
    TodoBuilder.prototype.withStartDate = function (date) {
        return Object.assign(this, { startDate: date });
    };
    TodoBuilder.prototype.withEstimateHour = function (hour) {
        return Object.assign(this, { estimateHour: hour });
    };
    TodoBuilder.prototype.withResultHour = function (hour) {
        return Object.assign(this, { resultHour: hour });
    };
    TodoBuilder.prototype.withWorkState = function (state) {
        return Object.assign(this, { workState: state });
    };
    TodoBuilder.prototype.withDisplayOrder = function (order) {
        return Object.assign(this, { displayOrder: order });
    };
    TodoBuilder.prototype.getViewModelType = function () {
        return 'Todo';
    };
    TodoBuilder.prototype.generateInstance = function () {
        return todo_1.initTodo(this);
    };
    return TodoBuilder;
}(AbstractViewModelBuilder));


/***/ }),

/***/ "./src/ts/main/viewmodel/impl/viewModelManagerFactoryImpl.ts":
/*!*******************************************************************!*\
  !*** ./src/ts/main/viewmodel/impl/viewModelManagerFactoryImpl.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTodoManagerFactoryImpl = void 0;
var viewTodoManager_1 = __webpack_require__(/*! ../todo/viewTodoManager */ "./src/ts/main/viewmodel/todo/viewTodoManager.ts");
var todoBoard_1 = __webpack_require__(/*! ../todo/todoBoard */ "./src/ts/main/viewmodel/todo/todoBoard.ts");
var ViewTodoManagerFactoryImpl = (function () {
    function ViewTodoManagerFactoryImpl() {
    }
    ViewTodoManagerFactoryImpl.prototype.createViewModelManagers = function () {
        var vmManagers = new Map();
        vmManagers.set('Todo', new viewTodoManager_1.ViewTodoManager(new todoBoard_1.TodoBoard()));
        return vmManagers;
    };
    return ViewTodoManagerFactoryImpl;
}());
exports.ViewTodoManagerFactoryImpl = ViewTodoManagerFactoryImpl;


/***/ }),

/***/ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts":
/*!************************************************************!*\
  !*** ./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewModelServiceImpl = void 0;
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var ViewModelServiceImpl = (function () {
    function ViewModelServiceImpl(_viewModelManagers) {
        this.viewModelManagers = _viewModelManagers;
    }
    ViewModelServiceImpl.init = function (vmManagerfactory) {
        this.instance = new ViewModelServiceImpl(vmManagerfactory.createViewModelManagers());
    };
    ViewModelServiceImpl.prototype.getNextId = function (type) {
        var vmManager = this.viewModelManagers.get(type);
        if (vmManager) {
            return vmManager.getNextId();
        }
        throw new Error('');
    };
    ViewModelServiceImpl.prototype.getViewModel = function (viewModel) {
        var vmManager = this.viewModelManagers.get(viewModel.modelType);
        if (vmManager && vmManager.getData) {
            return vmManager.getData(viewModel);
        }
        throw new Error('');
    };
    ViewModelServiceImpl.prototype.createViewModel = function (type, viewModel) {
        var vmBuilder = viewModelBuilderFactory_1.ViewModelBuilderFactory.newInstance().createViewModelBuilder(type);
        var vmManager = this.viewModelManagers.get(type);
        if (!vmManager) {
            throw new Error('');
        }
        viewModel === undefined
            ? vmManager.create(vmBuilder.with({ id: this.getNextId(type) }).build())
            : vmManager.create(viewModel);
    };
    ViewModelServiceImpl.prototype.updateViewModel = function (viewModel) {
        var vmManager = this.viewModelManagers.get(viewModel.modelType);
        if (vmManager) {
            return vmManager.update(viewModel);
        }
        throw new Error('');
    };
    ViewModelServiceImpl.prototype.deleteViewModel = function (viewModel) {
        var vmManager = this.viewModelManagers.get(viewModel.modelType);
        if (vmManager) {
            vmManager.delete(viewModel);
        }
        throw new Error('');
    };
    ViewModelServiceImpl.getInstance = function () {
        return this.instance;
    };
    return ViewModelServiceImpl;
}());
exports.ViewModelServiceImpl = ViewModelServiceImpl;


/***/ }),

/***/ "./src/ts/main/viewmodel/todo/todo.ts":
/*!********************************************!*\
  !*** ./src/ts/main/viewmodel/todo/todo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTodo = exports.Todo = void 0;
var viewComponent_1 = __webpack_require__(/*! ../../../component/decorator/viewComponent */ "./src/ts/component/decorator/viewComponent.ts");
var Todo = (function () {
    function Todo(todoBase) {
        var todo = initTodo(todoBase !== null && todoBase !== void 0 ? todoBase : {});
        this._id = todo.id;
        this._modelType = todo.modelType;
        this._title = todo.title;
        this._contents = todo.contents;
        this._createDate = todo.createDate;
        this._startDate = todo.startDate;
        this._estimateHour = todo.estimateHour;
        this._resultHour = todo.resultHour;
        this._workState = todo.workState;
        this._displayOrder = todo.displayOrder;
    }
    Todo.prototype.getModelType = function () {
        throw new Error('Method not implemented.');
    };
    Object.defineProperty(Todo.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "modelType", {
        get: function () {
            return this._modelType;
        },
        set: function (modelType) {
            this._modelType = modelType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "contents", {
        get: function () {
            return this._contents;
        },
        set: function (contents) {
            this._contents = contents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "createDate", {
        get: function () {
            return this._createDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: false,
        configurable: true
    });
    Todo.prototype.initStartDate = function () {
        this._startDate = new Date();
    };
    Object.defineProperty(Todo.prototype, "estimateHour", {
        get: function () {
            return this._estimateHour;
        },
        set: function (hour) {
            this._estimateHour = hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "resultHour", {
        get: function () {
            return this._resultHour;
        },
        set: function (hour) {
            this._resultHour = hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "workState", {
        get: function () {
            return this._workState;
        },
        set: function (state) {
            this._workState = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "displayOrder", {
        get: function () {
            return this._displayOrder;
        },
        set: function (order) {
            this._displayOrder = order;
        },
        enumerable: false,
        configurable: true
    });
    Todo = __decorate([
        viewComponent_1.ViewComponent('Todo', '.js_todolist')
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;
function initTodo(base) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var target = {};
    target.id = (_a = base === null || base === void 0 ? void 0 : base.id) !== null && _a !== void 0 ? _a : -1;
    target.modelType = 'Todo';
    target.title = (_b = base === null || base === void 0 ? void 0 : base.title) !== null && _b !== void 0 ? _b : '';
    target.contents = (_c = base === null || base === void 0 ? void 0 : base.contents) !== null && _c !== void 0 ? _c : '';
    target.createDate = (_d = base === null || base === void 0 ? void 0 : base.createDate) !== null && _d !== void 0 ? _d : new Date();
    target.startDate = (_e = base === null || base === void 0 ? void 0 : base.startDate) !== null && _e !== void 0 ? _e : undefined;
    target.estimateHour = (_f = base === null || base === void 0 ? void 0 : base.estimateHour) !== null && _f !== void 0 ? _f : 0;
    target.resultHour = (_g = base === null || base === void 0 ? void 0 : base.resultHour) !== null && _g !== void 0 ? _g : 0;
    target.workState = (_h = base === null || base === void 0 ? void 0 : base.workState) !== null && _h !== void 0 ? _h : 'Waiting';
    target.displayOrder = (_j = base === null || base === void 0 ? void 0 : base.displayOrder) !== null && _j !== void 0 ? _j : 0;
    return target;
}
exports.initTodo = initTodo;


/***/ }),

/***/ "./src/ts/main/viewmodel/todo/todoBoard.ts":
/*!*************************************************!*\
  !*** ./src/ts/main/viewmodel/todo/todoBoard.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoBoard = void 0;
var todoState_1 = __webpack_require__(/*! ./todoState */ "./src/ts/main/viewmodel/todo/todoState.ts");
var todolist_1 = __webpack_require__(/*! ./todolist */ "./src/ts/main/viewmodel/todo/todolist.ts");
var TodoBoard = (function () {
    function TodoBoard() {
        var e_1, _a;
        this.todolists = new Map();
        try {
            for (var _b = __values(Object.values(todoState_1.TodoStates)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var stateName = _c.value;
                this.todolists.set(stateName, new todolist_1.Todolist(stateName));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    TodoBoard.prototype.addTodo = function (state, todo) {
        var _a;
        (_a = this.todolists.get(state)) === null || _a === void 0 ? void 0 : _a.addTodo(todo);
    };
    TodoBoard.prototype.getTodo = function (state, id) {
        var _a;
        var todo = (_a = this.todolists.get(state)) === null || _a === void 0 ? void 0 : _a.getTodo(id);
        if (todo) {
            return todo;
        }
        throw new Error('');
    };
    TodoBoard.prototype.deleteTodo = function (state, id) {
        var _a;
        (_a = this.todolists.get(state)) === null || _a === void 0 ? void 0 : _a.deleteTodo(id);
    };
    TodoBoard.prototype.updateTodo = function (state, todo) {
        var todolist = this.todolists.get(state);
        if (todolist) {
            return todolist.updateTodo(todo);
        }
        throw Error('');
    };
    return TodoBoard;
}());
exports.TodoBoard = TodoBoard;


/***/ }),

/***/ "./src/ts/main/viewmodel/todo/todoState.ts":
/*!*************************************************!*\
  !*** ./src/ts/main/viewmodel/todo/todoState.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTodoState = exports.TodoStates = void 0;
exports.TodoStates = {
    WAITING: 'Waiting',
    IN_PROGRESS: 'InProgress',
    COMPLETED: 'Completed',
    PENDDING: 'Pending',
};
function isTodoState(state) {
    return Object.values(exports.TodoStates).includes(state);
}
exports.isTodoState = isTodoState;


/***/ }),

/***/ "./src/ts/main/viewmodel/todo/todolist.ts":
/*!************************************************!*\
  !*** ./src/ts/main/viewmodel/todo/todolist.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todolist = void 0;
var Todolist = (function () {
    function Todolist(_stateName) {
        this._stateName = _stateName;
        this._todolist = new Map();
    }
    Object.defineProperty(Todolist.prototype, "todolist", {
        get: function () {
            return this._todolist;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todolist.prototype, "stateName", {
        get: function () {
            return this._stateName;
        },
        enumerable: false,
        configurable: true
    });
    Todolist.prototype.getTodo = function (id) {
        return this.todolist.get(id);
    };
    Todolist.prototype.addTodo = function (todo) {
        var e_1, _a;
        try {
            for (var _b = __values(this._todolist.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo_1 = _c.value;
                todo_1.displayOrder += 1;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.todolist.set(todo.id, todo);
    };
    Todolist.prototype.deleteTodo = function (id) {
        var e_2, _a;
        var _b;
        var delTodoOrder = (_b = this.todolist.get(id)) === null || _b === void 0 ? void 0 : _b.displayOrder;
        if (delTodoOrder) {
            try {
                for (var _c = __values(this._todolist.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var todo = _d.value;
                    if (delTodoOrder < todo.displayOrder) {
                        todo.displayOrder -= 1;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.todolist.delete(id);
    };
    Todolist.prototype.updateTodo = function (todo) {
        if (this.todolist.get(todo.id)) {
            this.todolist.set(todo.id, todo);
            return true;
        }
        return false;
    };
    return Todolist;
}());
exports.Todolist = Todolist;


/***/ }),

/***/ "./src/ts/main/viewmodel/todo/viewTodoManager.ts":
/*!*******************************************************!*\
  !*** ./src/ts/main/viewmodel/todo/viewTodoManager.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTodoManager = void 0;
var todo_1 = __webpack_require__(/*! ./todo */ "./src/ts/main/viewmodel/todo/todo.ts");
var ViewTodoManager = (function () {
    function ViewTodoManager(_todoBoard) {
        this._todoBoard = _todoBoard;
        this.finalId = 0;
    }
    ViewTodoManager.prototype.getNextId = function () {
        return this.finalId + 1;
    };
    ViewTodoManager.prototype.create = function (vmModel) {
        var todoObj = new todo_1.Todo(vmModel);
        if (todoObj.id > this.finalId) {
            this.finalId = todoObj.id;
        }
        this._todoBoard.addTodo(todoObj.workState, todoObj);
    };
    ViewTodoManager.prototype.getData = function (todoObj) {
        return this._todoBoard.getTodo(todoObj.workState, todoObj.id);
    };
    ViewTodoManager.prototype.update = function (todoObj) {
        return this._todoBoard.updateTodo(todoObj.workState, todoObj);
    };
    ViewTodoManager.prototype.delete = function (todoObj) {
        this._todoBoard.deleteTodo(todoObj.workState, todoObj.id);
    };
    return ViewTodoManager;
}());
exports.ViewTodoManager = ViewTodoManager;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9iYXNlQ2hpbGRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9jaGlsZENvbXBvbmVudEhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L2NvbXBvbmVudFRlbXBsYXRlUGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3Ivdmlld0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvRGV0YWlsQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvVGltZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RvZG8vdG9kb1RpdGxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db21wb25lbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC90b2RvUmVzZXRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC93aW5kb3dIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy92aWV3RWRpdE1vZGVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3ZpZXdUb2RvTWFuYWdlci50cyJdLCJuYW1lcyI6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SHJCLHVGQUE2QztBQU03QztJQUVFLHlCQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQWtCO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxPQUE2QztRQUNuRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBNkM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQztBQTdCWSwwQ0FBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9hcHAudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIH0gZnJvbSAnLi9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbCc7XG5pbXBvcnQgeyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXInO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvdmlld0V2ZW50SGFuZGxlcnMnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbXBvbmVudEhhbmRsZXInO1xuaW1wb3J0IHsgQ3JlYXRlVGFza0J0bkhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvQ3JlYXRlVGFza0J0bkhhbmRsZXInO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXInO1xuaW1wb3J0IHsgVmlld0VkaXRNb2RlU3RhdGUgfSBmcm9tICcuL21haW4vdmlldy92aWV3RWRpdE1vZGVTdGF0ZSc7XG5pbXBvcnQgeyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL3RvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb1Jlc2V0RWxlbWVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb1Jlc2V0RWxlbWVudEhhbmRsZXInO1xuaW1wb3J0IHsgV2luZG93SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC93aW5kb3dIYW5kbGVyJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQge1xuICBDaGlsZENvbXBvbmVudEhvbGRlcixcbiAgY3JlYXRlVG9kb0NoaWxkQ29tcG9uZW50cyxcbn0gZnJvbSAnLi9jb21wb25lbnQvY2hpbGRDb21wb25lbnRIb2xkZXInO1xuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuL3RvZG9FbGVtZW50JztcblxuY29uc3QgdG9kb0NtcEhvbGRlciA9IG5ldyBDaGlsZENvbXBvbmVudEhvbGRlcjxcbiAgVG9kb0VsZW1lbnQsXG4gIENvbnZlcnRhYmxlQ29tcG9uZW50XG4+KCk7XG50b2RvQ21wSG9sZGVyLmNvbXBvbmVudHMgPSBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzKCk7XG5cbmNvbnN0IGVkaXRTdGF0ZSA9IG5ldyBWaWV3RWRpdE1vZGVTdGF0ZSgpO1xuY29uc3QgdG9kb1Jlc2V0SGFuZGxlciA9IG5ldyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlcih0b2RvQ21wSG9sZGVyLCBlZGl0U3RhdGUpO1xuVmlld01vZGVsU2VydmljZUltcGwuaW5pdChuZXcgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwoKSk7XG5cblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMuaW5pdChcbiAgbmV3IFRvZG9Db21wb25lbnRIYW5kbGVyKFxuICAgIG5ldyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyKCksXG4gICAgbmV3IFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIodG9kb0NtcEhvbGRlciwgZWRpdFN0YXRlLCB0b2RvUmVzZXRIYW5kbGVyKVxuICApLFxuICBuZXcgQ3JlYXRlVGFza0J0bkhhbmRsZXIobmV3IFZpZXdEaXNwbGF5ZXIoKSksXG4gIG5ldyBXaW5kb3dIYW5kbGVyKHRvZG9SZXNldEhhbmRsZXIpXG4pLnJlZ2lzdGVyKCk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9Db250ZXh0TWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb252ZXJ0YWJsZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBfZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJvdGVjdGVkIHRlbXBsYXRlUGFydHM6IFRlbXBsYXRlUGFydHNIb2xkZXI7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gdGVtcGxhdGVQYXJ0cyA/PyBUZW1wbGF0ZVBhcnRzSG9sZGVyLmVtcHR5KCk7XG4gIH1cblxuICBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgY29udmVydENvbXBvbmVudCgpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9lZGl0aW5nRWxlbWVudCkge1xuICAgICAgdGhpcy5jb252ZXJ0UHJvY2Vzcyh0aGlzLl9lZGl0aW5nRWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIGVsZW1lbnQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuXG4gIHJlY29udmVydENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWRpdGluZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVjb252ZXJ0UHJvY2Vzcyh0aGlzLl9lZGl0aW5nRWxlbWVudCk7XG4gICAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICBnZXQgZWRpdGluZ0VsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ0VsZW1lbnQ7XG4gIH1cbiAgc2V0IGVkaXRpbmdFbGVtZW50KGVsZW06IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIHRoaXMuX2VkaXRpbmdFbGVtZW50ID0gZWxlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi90b2RvRWxlbWVudCc7XG5pbXBvcnQgeyBUb2RvVGltZUNvbXBvbmVudCB9IGZyb20gJy4vdG9kby90b2RvVGltZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RvVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kb1RpdGxlQ29tcG9uZW50JztcbmltcG9ydCB7IFRvZG9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kb0RldGFpbENvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDaGlsZENvbXBvbmVudEhvbGRlcjxULCBDIGV4dGVuZHMgQ29tcG9uZW50PlxuICBpbXBsZW1lbnRzIENvbXBvbmVudEhvbGRlcjxULCBDPiB7XG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IE1hcDxULCBDPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb21wb25lbnRzID0gbmV3IE1hcDxULCBDPigpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFQpOiBDIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRzLmhhcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHMuZ2V0KGNvbXBvbmVudFR5cGUpITtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENvbXBvbmVudCBUeXBlJyk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50cygpOiBNYXA8VCwgQz4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzO1xuICB9XG5cbiAgc2V0IGNvbXBvbmVudHMoY29tcG9uZW50czogTWFwPFQsIEM+KSB7XG4gICAgdGhpcy5fY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9DaGlsZENvbXBvbmVudHMoKTogTWFwPFxuICBUb2RvRWxlbWVudCxcbiAgQ29udmVydGFibGVDb21wb25lbnRcbj4ge1xuICBjb25zdCBjb21wb25lbnRzID0gbmV3IE1hcDxUb2RvRWxlbWVudCwgQ29udmVydGFibGVDb21wb25lbnQ+KCk7XG4gIGNvbXBvbmVudHMuc2V0KCdUaXRsZScsIG5ldyBUb2RvVGl0bGVDb21wb25lbnQoKSk7XG4gIGNvbXBvbmVudHMuc2V0KCdFc3RpbWF0ZVRpbWUnLCBuZXcgVG9kb1RpbWVDb21wb25lbnQoJ2VzdGltYXRlJykpO1xuICBjb21wb25lbnRzLnNldCgnUmVzdWx0VGltZScsIG5ldyBUb2RvVGltZUNvbXBvbmVudCgncmVzdWx0JykpO1xuICBjb21wb25lbnRzLnNldCgnRGV0YWlsJywgbmV3IFRvZG9EZXRhaWxDb21wb25lbnQoKSk7XG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICBjb21wb25lbnQuaW5pdCgpO1xuICB9XG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuIiwiaW50ZXJmYWNlIENvbXBvbmVudFRlbXBsYXRlUGFydHMge1xuICBpZGVudGlmeTogc3RyaW5nO1xuICBub3JtYWxTdGF0ZUh0bWw6IHN0cmluZztcbiAgZWRpdFN0YXRlSHRtbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJ0c0hvbGRlciBpbXBsZW1lbnRzIENvbXBvbmVudFRlbXBsYXRlUGFydHMge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2lkZW50aWZ5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZWRpdFN0YXRlSHRtbDogc3RyaW5nXG4gICkge31cblxuICBzdGF0aWMgY3JlYXRlKFxuICAgIGlkZW50aWZ5OiBzdHJpbmcsXG4gICAgbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmcsXG4gICAgZWRpdFN0YXRlSHRtbDogc3RyaW5nXG4gICk6IFRlbXBsYXRlUGFydHNIb2xkZXIge1xuICAgIHJldHVybiBuZXcgVGVtcGxhdGVQYXJ0c0hvbGRlcihpZGVudGlmeSwgbm9ybWFsU3RhdGVIdG1sLCBlZGl0U3RhdGVIdG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSgpOiBUZW1wbGF0ZVBhcnRzSG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUGFydHNIb2xkZXIoJycsICcnLCAnJyk7XG4gIH1cblxuICBnZXQgaWRlbnRpZnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWRlbnRpZnk7XG4gIH1cblxuICBnZXQgbm9ybWFsU3RhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbFN0YXRlSHRtbDtcbiAgfVxuXG4gIGdldCBlZGl0U3RhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRTdGF0ZUh0bWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uL3RvZG8vdG9kb0NvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3Q29tcG9uZW50KFxuICBtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUsXG4gIHNlbGVjdG9yOiBzdHJpbmdcbik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcgKC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IGFyZ3MuZmluZChpbXBsZW1lbnRzVG9kbykgYXMgVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICBjb25zdCB0b2RvQ21wID0gbmV3IFRvZG9Db21wb25lbnQodG9kbywgbW9kZWxUeXBlLCBzZWxlY3Rvcik7XG4gICAgICAgICAgdG9kb0NtcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbXBsZW1lbnRzVG9kbyhhcmc6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFyZyAhPT0gbnVsbCAmJlxuICAgIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIGFyZy5pZCA9PT0gJ251bWJlcicgJiZcbiAgICB0eXBlb2YgYXJnLm1vZGVsVHlwZSA9PT0gJ3N0cmluZydcbiAgKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUh0bWwgPSAnJztcbiAgY29uc3RydWN0b3IobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSA9PT0gJ1RvZG8nKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRvZG9UZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRUZW1wbGF0ZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUh0bWw7XG4gIH1cblxuICByZXBsYWNlVGVtcGxhdGUodGFyZ2V0OiBSZWdFeHAsIHJlcGxhY2U6IHN0cmluZyB8IG51bWJlcik6IFRlbXBsYXRlIHtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICByZXBsYWNlID0gU3RyaW5nKHJlcGxhY2UpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRoaXMudGVtcGxhdGVIdG1sLnJlcGxhY2UodGFyZ2V0LCByZXBsYWNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCB0b2RvVGVtcGxhdGUgPSBgXG4gIDxkaXYgY2xhc3M9XCJlbF9lbXB0eUl0ZW1cIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJsX3RvZG8gaHBfbXJsMTUgaHBfcHJsMiBqc190b2RvXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvSWRcIj57eyBpZCB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb1N0YXRlXCI+e3sgc3RhdGUgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfdG9kb19oZWFkIHt7IHN0YXRlQ2xhc3MgfX1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwianNfdG9kb1RpdGxlXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImVsX3RvZG9UaXRsZSBqc19kYXRhXCI+XG4gICAgICAgICAgVGVzdDogU3VjY2VzcyBUYXNrIENyZWF0ZSBieSBUUyBQcm9ncmFtXG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+Y3JlYXRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnN0YXJ0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fZGV0YWlsIGpzX3RvZG9EZXRhaWwgaXNfaGlkZGVuXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fc3RhdHVzXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiYmxfdG9kb19wcm9ncmVzc1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIjBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjEwXCIgb25pbnB1dD1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLW91dHB1dCcpLnZhbHVlPXRoaXMudmFsdWVcIiAvPlxuICAgICAgICAgIDxvdXRwdXQgaWQ9XCJjLW91dHB1dFwiIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+MDwvb3V0cHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZSBqc190b2RvRXN0aW1hdGVUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7opovnqY06PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lIGpzX3RvZG9SZXN1bHRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBJREVOVElGSUVSX1RJVExFID0gJ3t7IHRpdGxlIH19JztcbmV4cG9ydCBjb25zdCBUT0RPX1RJVExFX05PUk1BTF9IVE1MID0gYFxuICAgICAgICA8aDMgY2xhc3M9XCJlbF90b2RvVGl0bGUganNfZGF0YVwiPlxuICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgIDwvaDM+XG5gO1xuZXhwb3J0IGNvbnN0IFRPRE9fVElUTEVfRURJVF9IVE1MID0gYFxuICAgICAgICA8Zm9ybSBjbGFzcz1cImVsX3RvZG9UaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfdG9kb1RpdGxlIGhwX3ByMTBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiZWxfdGV4dGFyZWEganNfZGF0YVwiIHZhbHVlPVwie3sgdGl0bGUgfX1cIj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZm9ybT5cbmA7XG5cbmV4cG9ydCBjb25zdCBJREVOVElGSUVSX0RFVEFJTCA9ICd7eyBkZXRhaWwgfX0nO1xuZXhwb3J0IGNvbnN0IFRPRE9fREVUQUlMX05PUk1BTF9IVE1MID0gYFxuICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAge3sgZGV0YWlsIH19XG4gICAgICAgIDwvcD5cbmA7XG5leHBvcnQgY29uc3QgVE9ET19ERVRBSUxfRURJVF9IVE1MID0gYFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiByb3dzPVwiNVwiIGNsYXNzPVwianNfZGF0YVwiPlxuICAgICAgICAgICAge3sgZGV0YWlsIH19XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9mb3JtPlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfVElNRSA9ICd7eyB0aW1lIH19JztcbmV4cG9ydCBjb25zdCBUSU1FX1NFTEVDVF9OT1JNQUxfSFRNTCA9IGBcbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAgICAgIHt7IHRpbWUgfX1cbiAgICAgICAgICAgIDwvcD5cbmA7XG5leHBvcnQgY29uc3QgVElNRV9TRUxFQ1RfRURJVF9IVE1MID0gYFxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImpzX3NlbGVjdFwiIHNpemU9MT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAuNWhcIj4wLjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxaFwiPjFoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyaFwiPjJoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzaFwiPjNoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0aFwiPjRoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1aFwiPjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2aFwiPjZoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3aFwiPjdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxZGF5XCI+MWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMS41ZGF5XCI+MS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyZGF5XCI+MmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMi41ZGF5XCI+Mi41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzZGF5XCI+M2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMy41ZGF5XCI+My41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0ZGF5XCI+NGRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC41ZGF5XCI+NC41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1ZGF5XCI+NWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNS41ZGF5XCI+NS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2ZGF5XCI+NmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNi41ZGF5XCI+Ni41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3ZGF5XCI+N2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuYDtcbmNvbnN0IFRPRE9fRVNUSU1BVEVfSEVBRCA9ICc8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+JztcbmNvbnN0IFRPRE9fUkVTVUxUX0hFQUQgPSAnPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPic7XG5cbmV4cG9ydCBjb25zdCBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MID1cbiAgVE9ET19FU1RJTUFURV9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwgPVxuICBUT0RPX1JFU1VMVF9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19FU1RJTUFURV9FRElUX0hUTUwgPVxuICBUT0RPX0VTVElNQVRFX0hFQUQgKyBUSU1FX1NFTEVDVF9FRElUX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfRURJVF9IVE1MID0gVE9ET19SRVNVTFRfSEVBRCArIFRJTUVfU0VMRUNUX0VESVRfSFRNTDtcbiIsImltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9kb1RlbXBsYXRlcyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2RvOiBWaWV3TW9kZWxUb2RvLFxuICAgIHByaXZhdGUgbW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLFxuICAgIHByaXZhdGUgc2VsZWN0b3I6IHN0cmluZ1xuICApIHt9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMudG9kby53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICAgIGNvbnN0IHN0YXRlU3R5bGVDbGFzcyA9IGNvbnZlcnRTdGF0ZUNsYXNzKHN0YXRlKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0aGlzLm1vZGVsVHlwZSk7XG4gICAgdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlIH19L2csIHN0YXRlKVxuICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGVDbGFzcyB9fS9nLCBzdGF0ZVN0eWxlQ2xhc3MpXG4gICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBpZCB9fS9nLCB0aGlzLnRvZG8uaWQpO1xuICAgIGNvbnN0IG1vdW50ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuJyArIHN0YXRlU3R5bGVDbGFzcyArIHRoaXMuc2VsZWN0b3JcbiAgICApO1xuICAgIGlmIChtb3VudGVkRWxlbWVudCkge1xuICAgICAgbW91bnRlZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgIHRlbXBsYXRlLmdldFRlbXBsYXRlSHRtbCgpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZTogVG9kb1N0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdpc18nICsgc3RhdGUudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7XG4gIElERU5USUZJRVJfREVUQUlMLFxuICBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCxcbiAgVE9ET19ERVRBSUxfRURJVF9IVE1MLFxufSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9kb1RlbXBsYXRlcyc7XG5pbXBvcnQgeyBCYXNlQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlQ2hpbGRDb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudFRlbXBsYXRlUGFydHMnO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVBhcnRzKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICBJREVOVElGSUVSX0RFVEFJTCxcbiAgICAgIFRPRE9fREVUQUlMX05PUk1BTF9IVE1MLFxuICAgICAgVE9ET19ERVRBSUxfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sLFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmlkZW50aWZ5XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudChcbiAgICAgIGVkaXRpbmdFbGVtZW50LFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLm5vcm1hbFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQmFzZUNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZUNoaWxkQ29tcG9uZW50JztcbmltcG9ydCB7XG4gIElERU5USUZJRVJfVElNRSxcbiAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgVE9ET19FU1RJTUFURV9FRElUX0hUTUwsXG4gIFRPRE9fUkVTVUxUX0VESVRfSFRNTCxcbiAgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwsXG4gIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICBUSU1FX1NFTEVDVF9FRElUX0hUTUwsXG59IGZyb20gJy4uL3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzJztcbmltcG9ydCB7IFRlbXBsYXRlUGFydHNIb2xkZXIgfSBmcm9tICcuLi9jb21wb25lbnRUZW1wbGF0ZVBhcnRzJztcblxuZXhwb3J0IGNsYXNzIFRvZG9UaW1lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0eXBlOiBUb2RvVGltZVR5cGUgZXh0ZW5kcyBzdHJpbmcgPyBUb2RvVGltZVR5cGUgOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXJcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2VzdGltYXRlJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgICAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19FU1RJTUFURV9FRElUX0hUTUxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXN1bHQnKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgICAgSURFTlRJRklFUl9USU1FLFxuICAgICAgICBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19SRVNVTFRfRURJVF9IVE1MXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICAgICAgVElNRV9TRUxFQ1RfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb252ZXJ0VGltZUVsZW0oZWRpdGluZ0VsZW1lbnQsIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIFRPRE86IExpc3RCb3jjga7lgKTmipzjgY3jgaDjgZljb252ZXJ0ZXLlrp/oo4VcbiAgICBjb252ZXJ0UmVzZXRUaW1lRWxlbShlZGl0aW5nRWxlbWVudCwgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwpO1xuICB9XG59XG5cbmNvbnN0IFRvZG9UaW1lVHlwZXMgPSB7XG4gIE5PTkU6ICcnLFxuICBFU1RJTUFURTogJ2VzdGltYXRlJyxcbiAgUmVzdWx0OiAncmVzdWx0Jyxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUb2RvVGltZVR5cGUgPSB0eXBlb2YgVG9kb1RpbWVUeXBlc1trZXlvZiB0eXBlb2YgVG9kb1RpbWVUeXBlc107XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgYmFzZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfZGF0YScsIGVsZW0pLmlubmVyVGV4dDtcbiAgZWxlbS5pbm5lckhUTUwgPSBiYXNlSHRtbDtcbiAgY29uc3Qgc2VsZWN0RWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAnLmpzX3NlbGVjdCcsXG4gICAgZWxlbVxuICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdEVsZW0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2VsZWN0RWxlbS5vcHRpb25zW2ldLnZhbHVlID09PSBkYXRhKSB7XG4gICAgICBzZWxlY3RFbGVtLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UmVzZXRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgcmVwbGFjZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBzZWxlY3RFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICdqc19zZWxlY3QnLFxuICAgIGVsZW1cbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgc2VsZWN0RWxlbS5vcHRpb25zW3NlbGVjdEVsZW0uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudChlbGVtLCByZXBsYWNlSHRtbCwgSURFTlRJRklFUl9USU1FKTtcbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHtcbiAgSURFTlRJRklFUl9USVRMRSxcbiAgVE9ET19USVRMRV9FRElUX0hUTUwsXG4gIFRPRE9fVElUTEVfTk9STUFMX0hUTUwsXG59IGZyb20gJy4uL3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvVGl0bGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hpbGRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVBhcnRzPzogVGVtcGxhdGVQYXJ0c0hvbGRlcikge1xuICAgIHN1cGVyKHRlbXBsYXRlUGFydHMpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgIElERU5USUZJRVJfVElUTEUsXG4gICAgICBUT0RPX1RJVExFX05PUk1BTF9IVE1MLFxuICAgICAgVE9ET19USVRMRV9FRElUX0hUTUxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudChcbiAgICAgIGVkaXRpbmdFbGVtZW50LFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmVkaXRTdGF0ZUh0bWwsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICApO1xuICB9XG5cbiAgcmVjb252ZXJ0Q29tcG9uZW50KCk6IHZvaWQge1xuICAgIC8vIFRPRE86IFRleHRBcmVh44Gu5YCk5oqc44GN44Gg44GZY29udmVydGVy5a6f6KOFXG4gICAgaWYgKHRoaXMuX2VkaXRpbmdFbGVtZW50KSB7XG4gICAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2VkaXRpbmdFbGVtZW50LFxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFydHMubm9ybWFsU3RhdGVIdG1sLFxuICAgICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICAgICk7XG4gICAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50KFxuICAgICAgZWRpdGluZ0VsZW1lbnQsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMubm9ybWFsU3RhdGVIdG1sLFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmlkZW50aWZ5XG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEh0bWxBY2Nlc3NvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudE51bGxhYmxlPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB8IG51bGwge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudHM8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBBcnJheTxUPiB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfVxuICAgIGlmIChlbGVtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgY29udmVydEVsZW1lbnQoXG4gICAgZWxlbTogSFRNTEVsZW1lbnQsXG4gICAgYmFzZUh0bWw6IHN0cmluZyxcbiAgICBpZGVudGlmaWVyOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2RhdGEnLCBlbGVtKS5pbm5lclRleHQ7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBiYXNlSHRtbC5yZXBsYWNlKGlkZW50aWZpZXIsIGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi4vLi4vdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIgfSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGFza0J0bkhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3RGlzcGxheWVyOiBWaWV3RGlzcGxheWVyKSB7fVxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2lzdENyZWF0ZVRhc2tFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY3JlYXRlVGFza0FyZWEgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19jcmVhdGVUYXNrQXJlYScpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX2NyZWF0ZVRhc2tCdG4nLFxuICAgICAgY3JlYXRlVGFza0FyZWFcbiAgICApO1xuICAgIGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLl92aWV3RGlzcGxheWVyLmRpc3BsYXlJbnB1dFRhc2tBcmVhXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyLFxuICBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3RvZG9FbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnRIYW5kbGVyIGV4dGVuZHMgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2N0TWVudWhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgICBfY29udmVydEhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllclxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyUmlnaHRDbGlja0V2ZW50JywgX2N0TWVudWhhbmRsZXIpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnRleHQnLCBfY3RNZW51aGFuZGxlcik7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsIF9jb252ZXJ0SGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJUb2RvT2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRG91ZGJsZUNsaWNrRWxlbUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUmlnaHRDbGlja0V2ZW50KCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudHMoJy5qc190b2RvJykuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5KCdyZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCcpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclRvZG9PYnNlcnZlcigpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgICByZWNvcmRzLmZvckVhY2goKHJlYykgPT4ge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20ocmVjLmFkZGVkTm9kZXMpO1xuICAgICAgICBjb25zdCB0b2RvRWxlbSA9IGdldFRvZG9FbGVtRnJvbU5vZGVzKG5vZGVzKTtcbiAgICAgICAgaWYgKCF0b2RvRWxlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b2RvRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseSgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udGV4dCcpXG4gICAgICAgICk7XG4gICAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9UaXRsZScsIHRvZG9FbGVtKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdkYmxjbGljaycsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICAgICAnVGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCB0b2RvbGlzdCBvZiBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kb2xpc3QnKSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b2RvbGlzdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyRG91ZGJsZUNsaWNrRWxlbUV2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHRpdGxlRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9UaXRsZScpO1xuICAgIHRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2RibGNsaWNrJyxcbiAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICdUaXRsZSdcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gY29uc3QgZGV0YWlsRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9EZXRhaWwnKTtcbiAgICAvLyBjb25zdCBlc3RpbWF0ZVRpbWVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgIC8vICAgJy5qc190b2RvRXN0aW1hdGVUaW1lJ1xuICAgIC8vICk7XG4gICAgLy8gY29uc3QgcmVzdWx0VGltZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvUmVzdWx0VGltZScpO1xuICAgIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1ByaW9yaXR5Jyk7XG4gICAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvVXJnZW5jeScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9FbGVtRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBjb25zdCBodG1sRWxlbSA9IG5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbGVtLmNsYXNzTGlzdCAmJiBodG1sRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzX3RvZG8nKSkge1xuICAgICAgcmV0dXJuIGh0bWxFbGVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IFRvZG9TdGF0ZSwgaXNUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9kb0NvbnRleHRNZW51SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIHByaXZhdGUgdGFyZ2V0VG9kbzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIG9wZW5Db250ZXh0TWVudUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVXYWl0aW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZUlucHJvZ3Jlc3NGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGRlbGV0ZVRvZG9GdW5jOiBFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IG51bGw7XG4gICAgdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db250ZXh0TWVudShlKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVXYWl0aW5nRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ1dhaXRpbmcnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0luUHJvZ3Jlc3MnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnQ29tcGxldGVkJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlUGVuZGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdQZW5kaW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZVRvZG9GdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUb2RvKCk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseSgpOiBFdmVudExpc3RlbmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IGUgYXMgTW91c2VFdmVudDtcbiAgICBjb25zdCBjdE1lbnUgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvQ29udGV4dE1lbnUnKTtcbiAgICBjdE1lbnUuc3R5bGUubGVmdCA9IFN0cmluZyhldmVudC5wYWdlWCkgKyAncHgnO1xuICAgIGN0TWVudS5zdHlsZS50b3AgPSBTdHJpbmcoZXZlbnQucGFnZVkpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy50YXJnZXRUb2RvID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKCF0aGlzLnRhcmdldFRvZG8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VXYWl0aW5nJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlV2FpdGluZ0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUlucHJvZ3Jlc3MnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlQ29tcGxldGVkJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlUGVuZGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19tZW51VG9kb0RlbGV0ZScsIGN0TWVudSkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRlbGV0ZVRvZG9GdW5jXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoc3RhdGU6IFRvZG9TdGF0ZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnRhcmdldFRvZG8gfHxcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRoaXMudGFyZ2V0VG9kbylcbiAgICAgICAgLmlubmVyVGV4dCA9PT0gc3RhdGVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnJlbW92ZSgpO1xuICAgIHRoaXMudGFyZ2V0VG9kby5yZW1vdmUoKTtcbiAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgIGNvbnN0IGlucHV0Vm0gPSB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbywgc3RhdGUpO1xuICAgIGNvbnN0IHZtQnVpbGRlciA9IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5Lm5ld0luc3RhbmNlKCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcigpO1xuICAgIHZtU2VydmljZS5kZWxldGVWaWV3TW9kZWwoaW5wdXRWbSk7XG4gICAgdm1TZXJ2aWNlLmNyZWF0ZVZpZXdNb2RlbChcbiAgICAgICdUb2RvJyxcbiAgICAgIHZtQnVpbGRlci53aXRoKGlucHV0Vm0pLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pLmJ1aWxkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVUb2RvKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZUb2RvRW1wdHkgPSB0aGlzLnRhcmdldFRvZG8ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgcHJldlRvZG9FbXB0eT8ucmVtb3ZlKCk7XG5cbiAgICBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpLmRlbGV0ZVZpZXdNb2RlbChcbiAgICAgIHRoaXMuZ2VuZXJhdGVWaWV3TW9kZWwodGhpcy50YXJnZXRUb2RvKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVmlld01vZGVsKFxuICAgIHRvZG86IEhUTUxFbGVtZW50LFxuICAgIHN0YXRlPzogc3RyaW5nXG4gICk6IFZpZXdNb2RlbCB8IG5ldmVyIHtcbiAgICBjb25zdCBpZCA9IE51bWJlcihcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9JZCcsIHRvZG8pLmlubmVyVGV4dFxuICAgICk7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0YXRlID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1N0YXRlJywgdG9kbykuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGlmIChpZCA8IDAgfHwgIWlzVG9kb1N0YXRlKHN0YXRlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgY29uc3Qgdm1CdWlsZGVyID0gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcigpO1xuICAgIHJldHVybiB2bUJ1aWxkZXJcbiAgICAgIC53aXRoKHsgaWQ6IGlkIH0pXG4gICAgICAud2l0aCh7IG1vZGVsVHlwZTogJ1RvZG8nIH0pXG4gICAgICAud2l0aCh7IHdvcmtTdGF0ZTogc3RhdGUgfSlcbiAgICAgIC5idWlsZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3RWRpdE1vZGVTdGF0ZSB9IGZyb20gJy4uLy4uL3ZpZXdFZGl0TW9kZVN0YXRlJztcbmltcG9ydCB7XG4gIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgVmlld0V2ZW50SGFuZGxlckNhbGxhYmxlU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi90b2RvRWxlbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgcHJpdmF0ZSBjb252ZXJ0VGl0bGVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnREZWl0YWxGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoaWxkQ29tcG9uZW50czogQ29tcG9uZW50SG9sZGVyPFRvZG9FbGVtZW50LCBDb252ZXJ0YWJsZUNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBlZGl0U3RhdGU6IFZpZXdFZGl0TW9kZVN0YXRlLFxuICAgIHByaXZhdGUgcmVzZXRFZGl0aW5nSGFuZGxlcjogVmlld0V2ZW50SGFuZGxlckNhbGxhYmxlU3VwcGxpZXJcbiAgKSB7XG4gICAgdGhpcy5jb252ZXJ0VGl0bGVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnRUaXRsZShlKTtcbiAgICB9O1xuICAgIHRoaXMuY29udmVydERlaXRhbEZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydERldGFpbChlKTtcbiAgICB9O1xuICAgIHRoaXMuY29udmVydEVzdGltYXRlVGltZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydEVzdGltYXRlVGltZShlKTtcbiAgICB9O1xuICAgIHRoaXMuY29udmVydFJlc3VsdFRpbWVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnRSZXN1bHRUaW1lKGUpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgIGFyZzogVG9kb0VsZW1lbnQgZXh0ZW5kcyBzdHJpbmcgPyBUb2RvRWxlbWVudCA6IHVuZGVmaW5lZFxuICApOiBFdmVudExpc3RlbmVyIHwgbmV2ZXIge1xuICAgIGlmIChhcmcgPT09ICdUaXRsZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUaXRsZUZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdEZXRhaWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RGVpdGFsRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ0VzdGltYXRlVGltZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnUmVzdWx0VGltZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSZXN1bHRUaW1lRnVuYztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRpdGxlKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucmVzZXRFZGl0aW5nSGFuZGxlci5jYWxsKCk7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ1RpdGxlJyk7XG4gICAgdGl0bGVDbXAuZWRpdGluZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRpdGxlQ21wLmNvbnZlcnRDb21wb25lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERldGFpbChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdEZXRhaWwnKTtcbiAgICB0aXRsZUNtcC5lZGl0aW5nRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RXN0aW1hdGVUaW1lKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucmVzZXRFZGl0aW5nSGFuZGxlci5jYWxsKCk7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ0VzdGltYXRlVGltZScpO1xuICAgIHRpdGxlQ21wLmVkaXRpbmdFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICB0aXRsZUNtcC5jb252ZXJ0Q29tcG9uZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucmVzZXRFZGl0aW5nSGFuZGxlci5jYWxsKCk7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ1Jlc3VsdFRpbWUnKTtcbiAgICB0aXRsZUNtcC5lZGl0aW5nRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG4gIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1ByaW9yaXR5Jyk7XG4gIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1VyZ2VuY3knKTtcbn1cbiIsImltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBWaWV3RWRpdE1vZGVTdGF0ZSB9IGZyb20gJy4uLy4uL3ZpZXdFZGl0TW9kZVN0YXRlJztcbmltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9kb0VsZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgVG9kb1Jlc2V0RWxlbWVudEhhbmRsZXJcbiAgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllciB7XG4gIHByaXZhdGUgcmVzZXRFZGl0TW9kZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGlsZENvbXBvbmVudHM6IENvbXBvbmVudEhvbGRlcjxUb2RvRWxlbWVudCwgQ29udmVydGFibGVDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgZWRpdFN0YXRlOiBWaWV3RWRpdE1vZGVTdGF0ZVxuICApIHtcbiAgICB0aGlzLnJlc2V0RWRpdE1vZGVGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEVkaXRNb2RlKCk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseSgpOiBFdmVudExpc3RlbmVyIHtcbiAgICByZXR1cm4gdGhpcy5yZXNldEVkaXRNb2RlRnVuYztcbiAgfVxuXG4gIGNhbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldEVkaXRNb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgY29uc3QgaXQgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5jb21wb25lbnRzLnZhbHVlcygpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGl0KSB7XG4gICAgICBjb21wb25lbnQucmVjb252ZXJ0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuZWRpdFN0YXRlLmlzRWRpdGluZ1RvZG9UaXRsZSgpKSB7XG4gICAgLy8gICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnQoXG4gICAgLy8gICAgIHRoaXMuZWRpdFN0YXRlLmVkaXRpbmdUb2RvVGl0bGUsXG4gICAgLy8gICAgIFRPRE9fVElUTEVfTk9STUFMX0hUTUwsXG4gICAgLy8gICAgIElERU5USUZJRVJfVElUTEVcbiAgICAvLyAgICk7XG4gICAgLy8gICB0aGlzLmVkaXRTdGF0ZS5yZXNldEVkaXRpbmdUb2RvVGl0bGUoKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuZWRpdFN0YXRlLmlzRWRpdGluZ1RvZG9EZXRhaWwoKSkge1xuICAgIC8vICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50KFxuICAgIC8vICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb0RldGFpbCxcbiAgICAvLyAgICAgVE9ET19ERVRBSUxfTk9STUFMX0hUTUwsXG4gICAgLy8gICAgIElERU5USUZJRVJfREVUQUlMXG4gICAgLy8gICApO1xuICAgIC8vICAgdGhpcy5lZGl0U3RhdGUucmVzZXRFZGl0aW5nVG9kb0RldGFpbCgpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5lZGl0U3RhdGUuaXNFZGl0aW5nVG9kb0VzdGltYXRlKCkpIHtcbiAgICAvLyAgIGNvbnZlcnRSZXNldFRpbWVFbGVtKFxuICAgIC8vICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb0VzdGltYXRlLFxuICAgIC8vICAgICBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MXG4gICAgLy8gICApO1xuICAgIC8vICAgdGhpcy5lZGl0U3RhdGUucmVzZXRFZGl0aW5nVG9kb0VzdGltYXRlKCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLmVkaXRTdGF0ZS5pc0VkaXRpbmdUb2RvUmVzdWx0KCkpIHtcbiAgICAvLyAgIGNvbnZlcnRSZXNldFRpbWVFbGVtKFxuICAgIC8vICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb1Jlc3VsdCxcbiAgICAvLyAgICAgVE9ET19SRVNVTFRfTk9STUFMX0hUTUxcbiAgICAvLyAgICk7XG4gICAgLy8gICB0aGlzLmVkaXRTdGF0ZS5yZXNldEVkaXRpbmdUb2RvUmVzdWx0KCk7XG4gICAgLy8gfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIsXG4gIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbn0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBXaW5kb3dIYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNldEVkaXRpbmdIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIpIHt9XG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzZXRFZGl0aW5nSGFuZGxlci5zdXBwbHkoKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgcmVnaXN0ZXIoKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4dGVuc2lvblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlclxuICBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHByb3RlY3RlZCBzdWJIYW5kbGVySG9sZGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXJIb2xkZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlciA9IG5ldyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXJIb2xkZXIoKTtcbiAgfVxuICBhYnN0cmFjdCByZWdpc3RlcigpOiB2b2lkO1xuICBhZGRIYW5kbGVyKG1ldGhvZE5hbWU6IHN0cmluZywgaGFuZGxlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyKTogdGhpcyB7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZChtZXRob2ROYW1lLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXRIYW5kbGVyKG1ldGhvZE5hbWU6IHN0cmluZyk6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gICAgcmV0dXJuIHRoaXMuc3ViSGFuZGxlckhvbGRlci5nZXQobWV0aG9kTmFtZSk7XG4gIH1cbn1cblxuY2xhc3MgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyIHtcbiAgc3ViSGFuZGxlcnM6IE1hcDxzdHJpbmcsIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcj47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3ViSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgYWRkKG1ldGhvZE5hbWU6IHN0cmluZywgaGFuZGxlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyKSB7XG4gICAgdGhpcy5zdWJIYW5kbGVycy5zZXQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gIH1cbiAgZ2V0KG1ldGhvZE5hbWU6IHN0cmluZyk6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB8IG5ldmVyIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5zdWJIYW5kbGVycy5nZXQobWV0aG9kTmFtZSk7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignJyk7XG4gIH1cbiAgc3VwcGx5PFQ+KFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgICBlbGVtPzogVCBleHRlbmRzIHN0cmluZyA/IFQgOiB1bmRlZmluZWRcbiAgKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KG1ldGhvZE5hbWUpLnN1cHBseShlbGVtKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIHN1cHBseTxUPihhcmc/OiBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IHVuZGVmaW5lZCk6IEV2ZW50TGlzdGVuZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0V2ZW50SGFuZGxlckNhbGxhYmxlU3VwcGxpZXJcbiAgZXh0ZW5kcyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBjYWxsPFQ+KGFyZz86IFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogdW5kZWZpbmVkKTogdm9pZDtcbn1cbiIsImltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB9IGZyb20gJy4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgcHJpdmF0ZSBoYW5kbGVyczogQXJyYXk8Vmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyPjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihhcmdzOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJbXSkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBhcmdzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0KFxuICAgIC4uLmFyZ3M6IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcltdXG4gICk6IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMge1xuICAgIHJldHVybiBuZXcgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyhhcmdzKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcigpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycykge1xuICAgICAgaGFuZGxlci5yZWdpc3RlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuLi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuXG5leHBvcnQgY2xhc3MgVmlld0Rpc3BsYXllciB7XG4gIHB1YmxpYyBkaXNwbGF5SW5wdXRUYXNrQXJlYSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAgICAgJyNyYWRpb0NyZWF0ZVRhc2tEZXRhaWwnXG4gICAgICApPy5jaGVja2VkXG4gICAgKSB7XG4gICAgICAvLyBjb25zdCBjbGFzc0xpc3QgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19pbnB1dFRhc2tEZXRhaWxBcmVhJylcbiAgICAgIC8vICAgLmNsYXNzTGlzdDtcbiAgICAgIC8vIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2lzX2hpZGRlbicpKSB7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5yZW1vdmUoJ2lzX2hpZGRlbicpO1xuICAgICAgLy8gICBjbGFzc0xpc3QuYWRkKCdpc19hY3RpdmUnKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgdm1CdWlsZGVyID0gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcihcbiAgICAgICAgJ1RvZG8nXG4gICAgICApO1xuICAgICAgdm1CdWlsZGVyLndpdGgoeyB3b3JrU3RhdGU6ICdXYWl0aW5nJyB9KTtcbiAgICAgIGlmICh2bUJ1aWxkZXIpIHtcbiAgICAgICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdm1TZXJ2aWNlLmNyZWF0ZVZpZXdNb2RlbCgnVG9kbycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZXdFZGl0TW9kZVN0YXRlIHtcbiAgcHJpdmF0ZSBfZWRpdGluZ1RvZG9UaXRsZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9lZGl0aW5nVG9kb0RldGFpbDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9lZGl0aW5nVG9kb0VzdGltYXRlOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgX2VkaXRpbmdUb2RvUmVzdWx0OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9UaXRsZSA9IG51bGw7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9EZXRhaWwgPSBudWxsO1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvRXN0aW1hdGUgPSBudWxsO1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvUmVzdWx0ID0gbnVsbDtcbiAgfVxuXG4gIGlzRWRpdGluZ1RvZG9UaXRsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9UaXRsZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBpc0VkaXRpbmdUb2RvRGV0YWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lZGl0aW5nVG9kb0RldGFpbCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBpc0VkaXRpbmdUb2RvRXN0aW1hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvRXN0aW1hdGUgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgaXNFZGl0aW5nVG9kb1Jlc3VsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9SZXN1bHQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICByZXNldEVkaXRpbmdUb2RvVGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9UaXRsZSA9IG51bGw7XG4gIH1cbiAgcmVzZXRFZGl0aW5nVG9kb0RldGFpbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0RldGFpbCA9IG51bGw7XG4gIH1cbiAgcmVzZXRFZGl0aW5nVG9kb0VzdGltYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvRXN0aW1hdGUgPSBudWxsO1xuICB9XG4gIHJlc2V0RWRpdGluZ1RvZG9SZXN1bHQoKTogdm9pZCB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9SZXN1bHQgPSBudWxsO1xuICB9XG5cbiAgc2V0IGVkaXRpbmdUb2RvVGl0bGUoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb1RpdGxlID0gZWxlbTtcbiAgfVxuICBnZXQgZWRpdGluZ1RvZG9UaXRsZSgpOiBIVE1MRWxlbWVudCB8IG5ldmVyIHtcbiAgICBpZiAodGhpcy5fZWRpdGluZ1RvZG9UaXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvVGl0bGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIHRhc2sgdGl0bGUnKTtcbiAgfVxuXG4gIHNldCBlZGl0aW5nVG9kb0RldGFpbChlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvRGV0YWlsID0gZWxlbTtcbiAgfVxuICBnZXQgZWRpdGluZ1RvZG9EZXRhaWwoKTogSFRNTEVsZW1lbnQgfCBuZXZlciB7XG4gICAgaWYgKHRoaXMuX2VkaXRpbmdUb2RvRGV0YWlsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9EZXRhaWw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIHRhc2sgZGV0YWlsJyk7XG4gIH1cblxuICBzZXQgZWRpdGluZ1RvZG9Fc3RpbWF0ZShlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvRXN0aW1hdGUgPSBlbGVtO1xuICB9XG4gIGdldCBlZGl0aW5nVG9kb0VzdGltYXRlKCk6IEhUTUxFbGVtZW50IHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9Fc3RpbWF0ZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3RoaW5nIGVkaXRpbmcgdGFzayBlc3RpbWF0ZSB0aW1lJyk7XG4gIH1cblxuICBzZXQgZWRpdGluZ1RvZG9SZXN1bHQoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlID0gZWxlbTtcbiAgfVxuICBnZXQgZWRpdGluZ1RvZG9SZXN1bHQoKTogSFRNTEVsZW1lbnQgfCBuZXZlciB7XG4gICAgaWYgKHRoaXMuX2VkaXRpbmdUb2RvUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9SZXN1bHQ7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIHRhc2sgcmVzdWx0IHRpbWUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbywgaW5pdFRvZG8gfSBmcm9tICcuL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlciB9IGZyb20gJy4vdmlld01vZGVsQnVpbGRlcic7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB7XG4gIHN0YXRpYyBuZXdJbnN0YW5jZSgpOiBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpO1xuICB9XG5cbiAgY3JlYXRlVmlld01vZGVsQnVpbGRlcih0eXBlPzogVmlld01vZGVsVHlwZSk6IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3Ige1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckRlbGVnYXRvcih0eXBlKTtcbiAgfVxufVxuXG50eXBlIEFsbFZpZXdNb2RlbCA9IFZpZXdNb2RlbCAmIFZpZXdNb2RlbFRvZG87XG50eXBlIEFsbFZpZXdNb2RlbEtleSA9IGtleW9mIEFsbFZpZXdNb2RlbDtcblxuY2xhc3MgVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciBpbXBsZW1lbnRzIFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByaXZhdGUgYnVpbGRlcjogVmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlKSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVG9kb0J1aWxkZXIoKS53aXRoKHsgbW9kZWxUeXBlOiBtb2RlbFR5cGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCYXNlQnVpbGRlcigpLndpdGgoe1xuICAgICAgICBtb2RlbFR5cGU6ICdWaWV3TW9kZWwnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgd2l0aChcbiAgICBpbnB1dDogeyBba2V5IGluIEFsbFZpZXdNb2RlbEtleV0/OiBBbGxWaWV3TW9kZWxba2V5XSB9XG4gICk6IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3Ige1xuICAgIHRoaXMuYnVpbGRlciA9IHRoaXMuYnVpbGRlci53aXRoKGlucHV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IFZpZXdNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxUIGV4dGVuZHMgVmlld01vZGVsPlxuICBpbXBsZW1lbnRzIFZpZXdNb2RlbEJ1aWxkZXI8VD4sIFBhcnRpYWw8Vmlld01vZGVsPiB7XG4gIGlkPzogbnVtYmVyO1xuICBtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlO1xuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBrZXlvZiBUXT86IFRba2V5XSB9KTogdGhpcyB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgICB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgICB0aGlzLndpdGhNb2RlbFR5cGUoaW5wdXQubW9kZWxUeXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBba2V5XTogaW5wdXRba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aElkKGlkOiBudW1iZXIpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnaWQnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBpZDogaWQgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aE1vZGVsVHlwZShcbiAgICB0eXBlOiBWaWV3TW9kZWxUeXBlXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdtb2RlbFR5cGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBtb2RlbFR5cGU6IHR5cGUgfSk7XG4gIH1cblxuICBidWlsZCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUluc3RhbmNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VuZXJhdGVJbnN0YW5jZSgpOiBUO1xufVxuXG5jbGFzcyBWaWV3TW9kZWxCYXNlQnVpbGRlciBleHRlbmRzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJvdGVjdGVkIGdlbmVyYXRlSW5zdGFuY2UoKTogVmlld01vZGVsIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWQgPz8gLTE7XG4gICAgY29uc3QgdHlwZTogVmlld01vZGVsVHlwZSA9IHRoaXMubW9kZWxUeXBlID8/ICdWaWV3TW9kZWwnO1xuICAgIGNvbnN0IG9iajogVmlld01vZGVsID0geyBpZDogaWQsIG1vZGVsVHlwZTogdHlwZSB9O1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAocHJvcCAhPT0gJ2lkJyB8fCBwcm9wICE9PSAnbW9kZWxUeXBlJykge1xuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgeyBbcHJvcF06IHRoaXNbcHJvcF0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuY2xhc3MgVG9kb0J1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsVG9kbz5cbiAgaW1wbGVtZW50cyBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBrZXlvZiBWaWV3TW9kZWxUb2RvXT86IFZpZXdNb2RlbFRvZG9ba2V5XSB9KTogdGhpcyB7XG4gICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQubW9kZWxUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFRpdGxlKGlucHV0LnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNvbnRlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoQ29udGVudHMoaW5wdXQuY29udGVudHMpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuY3JlYXRlRGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENyZWF0ZURhdGUoaW5wdXQuY3JlYXRlRGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5zdGFydERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhTdGFydERhdGUoaW5wdXQuc3RhcnREYXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmVzdGltYXRlSG91cikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aEVzdGltYXRlSG91cihpbnB1dC5lc3RpbWF0ZUhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQucmVzdWx0SG91cikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFJlc3VsdEhvdXIoaW5wdXQucmVzdWx0SG91cik7XG4gICAgfVxuICAgIGlmIChpbnB1dC53b3JrU3RhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhXb3JrU3RhdGUoaW5wdXQud29ya1N0YXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmRpc3BsYXlPcmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aERpc3BsYXlPcmRlcihpbnB1dC5kaXNwbGF5T3JkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgd2l0aFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAndGl0bGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyB0aXRsZTogdGl0bGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoQ29udGVudHMoXG4gICAgY29udGVudHM6IHN0cmluZ1xuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnY29udGVudHMnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBjb250ZW50czogY29udGVudHMgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoQ3JlYXRlRGF0ZShkYXRlOiBEYXRlKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NyZWF0ZURhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBjcmVhdGVEYXRlOiBkYXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFN0YXJ0RGF0ZShkYXRlOiBEYXRlKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3N0YXJ0RGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHN0YXJ0RGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhFc3RpbWF0ZUhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdlc3RpbWF0ZUhvdXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBlc3RpbWF0ZUhvdXI6IGhvdXIgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoUmVzdWx0SG91cihcbiAgICBob3VyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3Jlc3VsdEhvdXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyByZXN1bHRIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFdvcmtTdGF0ZShcbiAgICBzdGF0ZTogVG9kb1N0YXRlXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICd3b3JrU3RhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyB3b3JrU3RhdGU6IHN0YXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aERpc3BsYXlPcmRlcihcbiAgICBvcmRlcjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdkaXNwbGF5T3JkZXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBkaXNwbGF5T3JkZXI6IG9yZGVyIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFZpZXdNb2RlbFR5cGUoKTogVmlld01vZGVsVHlwZSB7XG4gICAgcmV0dXJuICdUb2RvJztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbFRvZG8ge1xuICAgIHJldHVybiBpbml0VG9kbyh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVmlld1RvZG9NYW5hZ2VyIH0gZnJvbSAnLi4vdG9kby92aWV3VG9kb01hbmFnZXInO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBUb2RvQm9hcmQgfSBmcm9tICcuLi90b2RvL3RvZG9Cb2FyZCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSB7XG4gIGNyZWF0ZVZpZXdNb2RlbE1hbmFnZXJzKCk6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+IHtcbiAgICBjb25zdCB2bU1hbmFnZXJzID0gbmV3IE1hcCgpO1xuICAgIHZtTWFuYWdlcnMuc2V0KCdUb2RvJywgbmV3IFZpZXdUb2RvTWFuYWdlcihuZXcgVG9kb0JvYXJkKCkpKTtcbiAgICByZXR1cm4gdm1NYW5hZ2VycztcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsU2VydmljZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi8uLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIFZpZXdNb2RlbFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVmlld01vZGVsU2VydmljZTtcbiAgdmlld01vZGVsTWFuYWdlcnM6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PlxuICApIHtcbiAgICB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzID0gX3ZpZXdNb2RlbE1hbmFnZXJzO1xuICB9XG5cbiAgc3RhdGljIGluaXQodm1NYW5hZ2VyZmFjdG9yeTogVmlld01vZGVsTWFuYWdlckZhY3RvcnkpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXdNb2RlbFNlcnZpY2VJbXBsKFxuICAgICAgdm1NYW5hZ2VyZmFjdG9yeS5jcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dElkKHR5cGU6IFZpZXdNb2RlbFR5cGUpOiBudW1iZXIgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXROZXh0SWQoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGdldFZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCk6IFZpZXdNb2RlbCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyICYmIHZtTWFuYWdlci5nZXREYXRhKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldERhdGEodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbCh0eXBlOiBWaWV3TW9kZWxUeXBlLCB2aWV3TW9kZWw/OiBWaWV3TW9kZWwpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtQnVpbGRlciA9IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5Lm5ld0luc3RhbmNlKCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcihcbiAgICAgIHR5cGVcbiAgICApO1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICghdm1NYW5hZ2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICAgIH1cbiAgICB2aWV3TW9kZWwgPT09IHVuZGVmaW5lZFxuICAgICAgPyB2bU1hbmFnZXIuY3JlYXRlKHZtQnVpbGRlci53aXRoKHsgaWQ6IHRoaXMuZ2V0TmV4dElkKHR5cGUpIH0pLmJ1aWxkKCkpXG4gICAgICA6IHZtTWFuYWdlci5jcmVhdGUodmlld01vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCk6IGJvb2xlYW4gfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci51cGRhdGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGRlbGV0ZVZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCk6IHZvaWQgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgdm1NYW5hZ2VyLmRlbGV0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFZpZXdNb2RlbFNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L2RlY29yYXRvci92aWV3Q29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld01vZGVsVG9kbyBleHRlbmRzIFZpZXdNb2RlbCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IERhdGU7XG4gIHN0YXJ0RGF0ZT86IERhdGU7XG4gIGVzdGltYXRlSG91cjogbnVtYmVyO1xuICByZXN1bHRIb3VyOiBudW1iZXI7XG4gIHdvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBkaXNwbGF5T3JkZXI6IG51bWJlcjtcbn1cblxuQFZpZXdDb21wb25lbnQoJ1RvZG8nLCAnLmpzX3RvZG9saXN0JylcbmV4cG9ydCBjbGFzcyBUb2RvIGltcGxlbWVudHMgVmlld01vZGVsVG9kbyB7XG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XG4gIHByaXZhdGUgX21vZGVsVHlwZTogVmlld01vZGVsVHlwZTtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGVudHM6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfc3RhcnREYXRlPzogRGF0ZTtcbiAgcHJpdmF0ZSBfZXN0aW1hdGVIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdEhvdXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29ya1N0YXRlOiBUb2RvU3RhdGU7XG4gIHByaXZhdGUgX2Rpc3BsYXlPcmRlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvZG9CYXNlPzogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiAmIFZpZXdNb2RlbCkge1xuICAgIGNvbnN0IHRvZG8gPSBpbml0VG9kbyh0b2RvQmFzZSA/PyB7fSk7XG4gICAgdGhpcy5faWQgPSB0b2RvLmlkO1xuICAgIHRoaXMuX21vZGVsVHlwZSA9IHRvZG8ubW9kZWxUeXBlO1xuICAgIHRoaXMuX3RpdGxlID0gdG9kby50aXRsZTtcbiAgICB0aGlzLl9jb250ZW50cyA9IHRvZG8uY29udGVudHM7XG4gICAgdGhpcy5fY3JlYXRlRGF0ZSA9IHRvZG8uY3JlYXRlRGF0ZTtcbiAgICB0aGlzLl9zdGFydERhdGUgPSB0b2RvLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSB0b2RvLmVzdGltYXRlSG91cjtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gdG9kby5yZXN1bHRIb3VyO1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHRvZG8ud29ya1N0YXRlO1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IHRvZG8uZGlzcGxheU9yZGVyO1xuICB9XG4gIGdldE1vZGVsVHlwZSgpOiAnVG9kbycgfCAnU29ydExhYmVsJyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZChpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgfVxuXG4gIGdldCBtb2RlbFR5cGUoKTogVmlld01vZGVsVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsVHlwZTtcbiAgfVxuICBzZXQgbW9kZWxUeXBlKG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSkge1xuICAgIHRoaXMuX21vZGVsVHlwZSA9IG1vZGVsVHlwZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgY29udGVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudHM7XG4gIH1cbiAgc2V0IGNvbnRlbnRzKGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50cyA9IGNvbnRlbnRzO1xuICB9XG5cbiAgZ2V0IGNyZWF0ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGU7XG4gIH1cblxuICBnZXQgc3RhcnREYXRlKCk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGFydERhdGU7XG4gIH1cbiAgaW5pdFN0YXJ0RGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGVzdGltYXRlSG91cigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lc3RpbWF0ZUhvdXI7XG4gIH1cbiAgc2V0IGVzdGltYXRlSG91cihob3VyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSBob3VyO1xuICB9XG5cbiAgZ2V0IHJlc3VsdEhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0SG91cjtcbiAgfVxuICBzZXQgcmVzdWx0SG91cihob3VyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCB3b3JrU3RhdGUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya1N0YXRlO1xuICB9XG4gIHNldCB3b3JrU3RhdGUoc3RhdGU6IFRvZG9TdGF0ZSkge1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlPcmRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5T3JkZXI7XG4gIH1cbiAgc2V0IGRpc3BsYXlPcmRlcihvcmRlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlzcGxheU9yZGVyID0gb3JkZXI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUb2RvKGJhc2U6IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4pOiBWaWV3TW9kZWxUb2RvIHtcbiAgY29uc3QgdGFyZ2V0OiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+ID0ge307XG4gIHRhcmdldC5pZCA9IGJhc2U/LmlkID8/IC0xO1xuICB0YXJnZXQubW9kZWxUeXBlID0gJ1RvZG8nO1xuICB0YXJnZXQudGl0bGUgPSBiYXNlPy50aXRsZSA/PyAnJztcbiAgdGFyZ2V0LmNvbnRlbnRzID0gYmFzZT8uY29udGVudHMgPz8gJyc7XG4gIHRhcmdldC5jcmVhdGVEYXRlID0gYmFzZT8uY3JlYXRlRGF0ZSA/PyBuZXcgRGF0ZSgpO1xuICB0YXJnZXQuc3RhcnREYXRlID0gYmFzZT8uc3RhcnREYXRlID8/IHVuZGVmaW5lZDtcbiAgdGFyZ2V0LmVzdGltYXRlSG91ciA9IGJhc2U/LmVzdGltYXRlSG91ciA/PyAwO1xuICB0YXJnZXQucmVzdWx0SG91ciA9IGJhc2U/LnJlc3VsdEhvdXIgPz8gMDtcbiAgdGFyZ2V0LndvcmtTdGF0ZSA9IGJhc2U/LndvcmtTdGF0ZSA/PyAnV2FpdGluZyc7XG4gIHRhcmdldC5kaXNwbGF5T3JkZXIgPSBiYXNlPy5kaXNwbGF5T3JkZXIgPz8gMDtcbiAgcmV0dXJuIHRhcmdldCBhcyBWaWV3TW9kZWxUb2RvO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUsIFRvZG9TdGF0ZXMgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUb2RvbGlzdCB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0JvYXJkIHtcbiAgcHJpdmF0ZSB0b2RvbGlzdHM6IE1hcDxUb2RvU3RhdGUsIFRvZG9saXN0PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9saXN0cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBvZiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0cy5zZXQoc3RhdGVOYW1lLCBuZXcgVG9kb2xpc3Qoc3RhdGVOYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCB0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uYWRkVG9kbyh0b2RvKTtcbiAgfVxuXG4gIGdldFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgaWQ6IG51bWJlcik6IFZpZXdNb2RlbFRvZG8ge1xuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpPy5nZXRUb2RvKGlkKTtcbiAgICBpZiAodG9kbykge1xuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpPy5kZWxldGVUb2RvKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4gfCBuZXZlciB7XG4gICAgY29uc3QgdG9kb2xpc3QgPSB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpO1xuICAgIGlmICh0b2RvbGlzdCkge1xuICAgICAgcmV0dXJuIHRvZG9saXN0LnVwZGF0ZVRvZG8odG9kbyk7XG4gICAgfVxuICAgIHRocm93IEVycm9yKCcnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFRvZG9TdGF0ZXMgPSB7XG4gIFdBSVRJTkc6ICdXYWl0aW5nJyxcbiAgSU5fUFJPR1JFU1M6ICdJblByb2dyZXNzJyxcbiAgQ09NUExFVEVEOiAnQ29tcGxldGVkJyxcbiAgUEVORERJTkc6ICdQZW5kaW5nJyxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUb2RvU3RhdGUgPSB0eXBlb2YgVG9kb1N0YXRlc1trZXlvZiB0eXBlb2YgVG9kb1N0YXRlc107XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZG9TdGF0ZShzdGF0ZTogYW55KTogc3RhdGUgaXMgVG9kb1N0YXRlIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoVG9kb1N0YXRlcykuaW5jbHVkZXMoc3RhdGUpO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvbGlzdCB7XG4gIHByaXZhdGUgX3RvZG9saXN0OiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGVOYW1lOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl90b2RvbGlzdCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldCB0b2RvbGlzdCgpOiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9saXN0O1xuICB9XG5cbiAgZ2V0IHN0YXRlTmFtZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZU5hbWU7XG4gIH1cblxuICBnZXRUb2RvKGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXQoaWQpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRoaXMuX3RvZG9saXN0LnZhbHVlcygpKSB7XG4gICAgICB0b2RvLmRpc3BsYXlPcmRlciArPSAxO1xuICAgIH1cbiAgICB0aGlzLnRvZG9saXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oaWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRlbFRvZG9PcmRlciA9IHRoaXMudG9kb2xpc3QuZ2V0KGlkKT8uZGlzcGxheU9yZGVyO1xuICAgIGlmIChkZWxUb2RvT3JkZXIpIHtcbiAgICAgIGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoZGVsVG9kb09yZGVyIDwgdG9kby5kaXNwbGF5T3JkZXIpIHtcbiAgICAgICAgICB0b2RvLmRpc3BsYXlPcmRlciAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3QuZGVsZXRlKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRvZG9saXN0LmdldCh0b2RvLmlkKSkge1xuICAgICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvLCBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4vdG9kb0JvYXJkJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3VG9kb01hbmFnZXIgaW1wbGVtZW50cyBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbFRvZG8+IHtcbiAgcHJpdmF0ZSBmaW5hbElkOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvZG9Cb2FyZDogVG9kb0JvYXJkKSB7XG4gICAgdGhpcy5maW5hbElkID0gMDtcbiAgfVxuXG4gIGdldE5leHRJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbmFsSWQgKyAxO1xuICB9XG5cbiAgY3JlYXRlKHZtTW9kZWw6IFZpZXdNb2RlbCk6IHZvaWQge1xuICAgIGNvbnN0IHRvZG9PYmogPSBuZXcgVG9kbyh2bU1vZGVsKTtcbiAgICBpZiAodG9kb09iai5pZCA+IHRoaXMuZmluYWxJZCkge1xuICAgICAgdGhpcy5maW5hbElkID0gdG9kb09iai5pZDtcbiAgICB9XG4gICAgdGhpcy5fdG9kb0JvYXJkLmFkZFRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmopO1xuICB9XG5cbiAgZ2V0RGF0YSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kb0JvYXJkLmdldFRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmouaWQpO1xuICB9XG5cbiAgdXBkYXRlKHRvZG9PYmo6IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kb0JvYXJkLnVwZGF0ZVRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmopO1xuICB9XG5cbiAgZGVsZXRlKHRvZG9PYmo6IFZpZXdNb2RlbCAmIHsgd29ya1N0YXRlOiBUb2RvU3RhdGUgfSk6IHZvaWQge1xuICAgIHRoaXMuX3RvZG9Cb2FyZC5kZWxldGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==