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
var todoConvertElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoConvertElementHandler */ "./src/ts/main/view/handler/impl/todoConvertElementHandler.ts");
var todoResetElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoResetElementHandler */ "./src/ts/main/view/handler/impl/todoResetElementHandler.ts");
var windowHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/windowHandler */ "./src/ts/main/view/handler/impl/windowHandler.ts");
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var childComponentHolder_1 = __webpack_require__(/*! ./component/childComponentHolder */ "./src/ts/component/childComponentHolder.ts");
var todoCmpHolder = new childComponentHolder_1.ChildComponentHolder();
todoCmpHolder.components = childComponentHolder_1.createTodoChildComponents();
var todoResetHandler = new todoResetElementHandler_1.TodoResetElementHandler(todoCmpHolder);
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewEventHandlers_1.ViewEventHandlerRegisters.init(new TodoComponentHandler_1.TodoComponentHandler(new TodoContextMenuHandler_1.TodoContextMenuHandler(), new todoConvertElementHandler_1.TodoConvertElementHandler(todoCmpHolder, todoResetHandler)), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer()), new windowHandler_1.WindowHandler(todoResetHandler)).register();
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
        htmlAccessor_1.HtmlAccessor.convertElementInnerText(editingElement, this.templateParts.editStateHtml, this.templateParts.identify);
    };
    TodoDetailComponent.prototype.reconvertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElementInnerText(editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
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
    htmlAccessor_1.HtmlAccessor.convertElementInnerText(elem, replaceHtml, todoTemplates_1.IDENTIFIER_TIME);
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
        htmlAccessor_1.HtmlAccessor.convertElementInnerText(editingElement, this.templateParts.editStateHtml, this.templateParts.identify);
    };
    TodoTitleComponent.prototype.reconvertComponent = function () {
        if (this._editingElement) {
            htmlAccessor_1.HtmlAccessor.convertElementValue(this._editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
            this._editingElement = null;
        }
    };
    TodoTitleComponent.prototype.reconvertProcess = function (editingElement) {
        htmlAccessor_1.HtmlAccessor.convertElementInnerText(editingElement, this.templateParts.normalStateHtml, this.templateParts.identify);
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
    HtmlAccessor.convertElementInnerText = function (elem, baseHtml, identifier) {
        var data = HtmlAccessor.getHtmlElement('.js_data', elem).innerText;
        elem.innerHTML = baseHtml.replace(identifier, data);
    };
    HtmlAccessor.convertElementValue = function (elem, baseHtml, identifier) {
        var _a;
        var data = (_a = HtmlAccessor.getHtmlElement('.js_data', elem).getAttribute('value')) !== null && _a !== void 0 ? _a : '';
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
        titleElem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
        var estimateTimeElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoEstimateTime');
        estimateTimeElem.addEventListener('dblclick', this.subHandlerHolder.supply('registerTodoObserver_convert', 'EstimateTime'));
        estimateTimeElem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
        var resultTimeElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoResultTime');
        resultTimeElem.addEventListener('dblclick', this.subHandlerHolder.supply('registerTodoObserver_convert', 'ResultTime'));
        resultTimeElem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
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
        var targetVm = this.generateViewModel(this.targetTodo);
        var vmBuilder = viewModelBuilderFactory_1.ViewModelBuilderFactory.newInstance().createViewModelBuilder();
        vmService.deleteViewModel(targetVm);
        vmService.createViewModel('Todo', vmBuilder.with(targetVm).with({ workState: state }).build());
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
    function TodoConvertElementHandler(childComponents, resetEditingHandler) {
        var _this = this;
        this.childComponents = childComponents;
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
    function TodoResetElementHandler(childComponents) {
        var _this = this;
        this.childComponents = childComponents;
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
            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9iYXNlQ2hpbGRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9jaGlsZENvbXBvbmVudEhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L2NvbXBvbmVudFRlbXBsYXRlUGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3Ivdmlld0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvRGV0YWlsQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvVGltZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RvZG8vdG9kb1RpdGxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db21wb25lbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC90b2RvUmVzZXRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC93aW5kb3dIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld01vZGVsQnVpbGRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsTWFuYWdlckZhY3RvcnlJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby92aWV3VG9kb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsT0FBNkM7UUFDbkQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQXNCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQTZDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUE3QlksMENBQWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvYXBwLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwnO1xuaW1wb3J0IHsgVG9kb0NvbnRleHRNZW51SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29udGV4dE1lbnVIYW5kbGVyJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL3ZpZXdFdmVudEhhbmRsZXJzJztcbmltcG9ydCB7IFRvZG9Db21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db21wb25lbnRIYW5kbGVyJztcbmltcG9ydCB7IENyZWF0ZVRhc2tCdG5IYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyJztcbmltcG9ydCB7IFZpZXdEaXNwbGF5ZXIgfSBmcm9tICcuL21haW4vdmlldy92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC90b2RvUmVzZXRFbGVtZW50SGFuZGxlcic7XG5pbXBvcnQgeyBXaW5kb3dIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL3dpbmRvd0hhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7XG4gIENoaWxkQ29tcG9uZW50SG9sZGVyLFxuICBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzLFxufSBmcm9tICcuL2NvbXBvbmVudC9jaGlsZENvbXBvbmVudEhvbGRlcic7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4vdG9kb0VsZW1lbnQnO1xuXG5jb25zdCB0b2RvQ21wSG9sZGVyID0gbmV3IENoaWxkQ29tcG9uZW50SG9sZGVyPFxuICBUb2RvRWxlbWVudCxcbiAgQ29udmVydGFibGVDb21wb25lbnRcbj4oKTtcbnRvZG9DbXBIb2xkZXIuY29tcG9uZW50cyA9IGNyZWF0ZVRvZG9DaGlsZENvbXBvbmVudHMoKTtcblxuY29uc3QgdG9kb1Jlc2V0SGFuZGxlciA9IG5ldyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlcih0b2RvQ21wSG9sZGVyKTtcblZpZXdNb2RlbFNlcnZpY2VJbXBsLmluaXQobmV3IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsKCkpO1xuXG5WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzLmluaXQoXG4gIG5ldyBUb2RvQ29tcG9uZW50SGFuZGxlcihcbiAgICBuZXcgVG9kb0NvbnRleHRNZW51SGFuZGxlcigpLFxuICAgIG5ldyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyKHRvZG9DbXBIb2xkZXIsIHRvZG9SZXNldEhhbmRsZXIpXG4gICksXG4gIG5ldyBDcmVhdGVUYXNrQnRuSGFuZGxlcihuZXcgVmlld0Rpc3BsYXllcigpKSxcbiAgbmV3IFdpbmRvd0hhbmRsZXIodG9kb1Jlc2V0SGFuZGxlcilcbikucmVnaXN0ZXIoKTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb252ZXJ0YWJsZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBfZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJvdGVjdGVkIHRlbXBsYXRlUGFydHM6IFRlbXBsYXRlUGFydHNIb2xkZXI7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gdGVtcGxhdGVQYXJ0cyA/PyBUZW1wbGF0ZVBhcnRzSG9sZGVyLmVtcHR5KCk7XG4gIH1cblxuICBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgY29udmVydENvbXBvbmVudCgpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9lZGl0aW5nRWxlbWVudCkge1xuICAgICAgdGhpcy5jb252ZXJ0UHJvY2Vzcyh0aGlzLl9lZGl0aW5nRWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIGVsZW1lbnQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuXG4gIHJlY29udmVydENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWRpdGluZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVjb252ZXJ0UHJvY2Vzcyh0aGlzLl9lZGl0aW5nRWxlbWVudCk7XG4gICAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICBnZXQgZWRpdGluZ0VsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ0VsZW1lbnQ7XG4gIH1cbiAgc2V0IGVkaXRpbmdFbGVtZW50KGVsZW06IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIHRoaXMuX2VkaXRpbmdFbGVtZW50ID0gZWxlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi90b2RvRWxlbWVudCc7XG5pbXBvcnQgeyBUb2RvVGltZUNvbXBvbmVudCB9IGZyb20gJy4vdG9kby90b2RvVGltZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RvVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kb1RpdGxlQ29tcG9uZW50JztcbmltcG9ydCB7IFRvZG9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kb0RldGFpbENvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDaGlsZENvbXBvbmVudEhvbGRlcjxULCBDIGV4dGVuZHMgQ29tcG9uZW50PlxuICBpbXBsZW1lbnRzIENvbXBvbmVudEhvbGRlcjxULCBDPiB7XG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IE1hcDxULCBDPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb21wb25lbnRzID0gbmV3IE1hcDxULCBDPigpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFQpOiBDIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9jb21wb25lbnRzLmhhcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHMuZ2V0KGNvbXBvbmVudFR5cGUpITtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENvbXBvbmVudCBUeXBlJyk7XG4gIH1cblxuICBnZXQgY29tcG9uZW50cygpOiBNYXA8VCwgQz4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzO1xuICB9XG5cbiAgc2V0IGNvbXBvbmVudHMoY29tcG9uZW50czogTWFwPFQsIEM+KSB7XG4gICAgdGhpcy5fY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9DaGlsZENvbXBvbmVudHMoKTogTWFwPFxuICBUb2RvRWxlbWVudCxcbiAgQ29udmVydGFibGVDb21wb25lbnRcbj4ge1xuICBjb25zdCBjb21wb25lbnRzID0gbmV3IE1hcDxUb2RvRWxlbWVudCwgQ29udmVydGFibGVDb21wb25lbnQ+KCk7XG4gIGNvbXBvbmVudHMuc2V0KCdUaXRsZScsIG5ldyBUb2RvVGl0bGVDb21wb25lbnQoKSk7XG4gIGNvbXBvbmVudHMuc2V0KCdFc3RpbWF0ZVRpbWUnLCBuZXcgVG9kb1RpbWVDb21wb25lbnQoJ2VzdGltYXRlJykpO1xuICBjb21wb25lbnRzLnNldCgnUmVzdWx0VGltZScsIG5ldyBUb2RvVGltZUNvbXBvbmVudCgncmVzdWx0JykpO1xuICBjb21wb25lbnRzLnNldCgnRGV0YWlsJywgbmV3IFRvZG9EZXRhaWxDb21wb25lbnQoKSk7XG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICBjb21wb25lbnQuaW5pdCgpO1xuICB9XG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuIiwiaW50ZXJmYWNlIENvbXBvbmVudFRlbXBsYXRlUGFydHMge1xuICBpZGVudGlmeTogc3RyaW5nO1xuICBub3JtYWxTdGF0ZUh0bWw6IHN0cmluZztcbiAgZWRpdFN0YXRlSHRtbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJ0c0hvbGRlciBpbXBsZW1lbnRzIENvbXBvbmVudFRlbXBsYXRlUGFydHMge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2lkZW50aWZ5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZWRpdFN0YXRlSHRtbDogc3RyaW5nXG4gICkge31cblxuICBzdGF0aWMgY3JlYXRlKFxuICAgIGlkZW50aWZ5OiBzdHJpbmcsXG4gICAgbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmcsXG4gICAgZWRpdFN0YXRlSHRtbDogc3RyaW5nXG4gICk6IFRlbXBsYXRlUGFydHNIb2xkZXIge1xuICAgIHJldHVybiBuZXcgVGVtcGxhdGVQYXJ0c0hvbGRlcihpZGVudGlmeSwgbm9ybWFsU3RhdGVIdG1sLCBlZGl0U3RhdGVIdG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSgpOiBUZW1wbGF0ZVBhcnRzSG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUGFydHNIb2xkZXIoJycsICcnLCAnJyk7XG4gIH1cblxuICBnZXQgaWRlbnRpZnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWRlbnRpZnk7XG4gIH1cblxuICBnZXQgbm9ybWFsU3RhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25vcm1hbFN0YXRlSHRtbDtcbiAgfVxuXG4gIGdldCBlZGl0U3RhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRTdGF0ZUh0bWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uL3RvZG8vdG9kb0NvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3Q29tcG9uZW50KFxuICBtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUsXG4gIHNlbGVjdG9yOiBzdHJpbmdcbik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcgKC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IGFyZ3MuZmluZChpbXBsZW1lbnRzVG9kbykgYXMgVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICBjb25zdCB0b2RvQ21wID0gbmV3IFRvZG9Db21wb25lbnQodG9kbywgbW9kZWxUeXBlLCBzZWxlY3Rvcik7XG4gICAgICAgICAgdG9kb0NtcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbXBsZW1lbnRzVG9kbyhhcmc6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFyZyAhPT0gbnVsbCAmJlxuICAgIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIGFyZy5pZCA9PT0gJ251bWJlcicgJiZcbiAgICB0eXBlb2YgYXJnLm1vZGVsVHlwZSA9PT0gJ3N0cmluZydcbiAgKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUh0bWwgPSAnJztcbiAgY29uc3RydWN0b3IobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSA9PT0gJ1RvZG8nKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRvZG9UZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRUZW1wbGF0ZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUh0bWw7XG4gIH1cblxuICByZXBsYWNlVGVtcGxhdGUodGFyZ2V0OiBSZWdFeHAsIHJlcGxhY2U6IHN0cmluZyB8IG51bWJlcik6IFRlbXBsYXRlIHtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICByZXBsYWNlID0gU3RyaW5nKHJlcGxhY2UpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRoaXMudGVtcGxhdGVIdG1sLnJlcGxhY2UodGFyZ2V0LCByZXBsYWNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCB0b2RvVGVtcGxhdGUgPSBgXG4gIDxkaXYgY2xhc3M9XCJlbF9lbXB0eUl0ZW1cIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJsX3RvZG8gaHBfbXJsMTUgaHBfcHJsMiBqc190b2RvXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvSWRcIj57eyBpZCB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb1N0YXRlXCI+e3sgc3RhdGUgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfdG9kb19oZWFkIHt7IHN0YXRlQ2xhc3MgfX1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwianNfdG9kb1RpdGxlXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImVsX3RvZG9UaXRsZSBqc19kYXRhXCI+XG4gICAgICAgICAgVGVzdDogU3VjY2VzcyBUYXNrIENyZWF0ZSBieSBUUyBQcm9ncmFtXG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+Y3JlYXRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnN0YXJ0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fZGV0YWlsIGpzX3RvZG9EZXRhaWwgaXNfaGlkZGVuXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fc3RhdHVzXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiYmxfdG9kb19wcm9ncmVzc1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIjBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjEwXCIgb25pbnB1dD1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLW91dHB1dCcpLnZhbHVlPXRoaXMudmFsdWVcIiAvPlxuICAgICAgICAgIDxvdXRwdXQgaWQ9XCJjLW91dHB1dFwiIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+MDwvb3V0cHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZSBqc190b2RvRXN0aW1hdGVUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7opovnqY06PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lIGpzX3RvZG9SZXN1bHRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBJREVOVElGSUVSX1RJVExFID0gJ3t7IHRpdGxlIH19JztcbmV4cG9ydCBjb25zdCBUT0RPX1RJVExFX05PUk1BTF9IVE1MID0gYFxuICAgICAgICA8aDMgY2xhc3M9XCJlbF90b2RvVGl0bGUganNfZGF0YVwiPlxuICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgIDwvaDM+XG5gO1xuZXhwb3J0IGNvbnN0IFRPRE9fVElUTEVfRURJVF9IVE1MID0gYFxuICAgICAgICA8Zm9ybSBjbGFzcz1cImVsX3RvZG9UaXRsZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfdG9kb1RpdGxlIGhwX3ByMTBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiZWxfdGV4dGFyZWEganNfZGF0YVwiIHZhbHVlPVwie3sgdGl0bGUgfX1cIj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZm9ybT5cbmA7XG5cbmV4cG9ydCBjb25zdCBJREVOVElGSUVSX0RFVEFJTCA9ICd7eyBkZXRhaWwgfX0nO1xuZXhwb3J0IGNvbnN0IFRPRE9fREVUQUlMX05PUk1BTF9IVE1MID0gYFxuICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAge3sgZGV0YWlsIH19XG4gICAgICAgIDwvcD5cbmA7XG5leHBvcnQgY29uc3QgVE9ET19ERVRBSUxfRURJVF9IVE1MID0gYFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiByb3dzPVwiNVwiIGNsYXNzPVwianNfZGF0YVwiPlxuICAgICAgICAgICAge3sgZGV0YWlsIH19XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9mb3JtPlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfVElNRSA9ICd7eyB0aW1lIH19JztcbmV4cG9ydCBjb25zdCBUSU1FX1NFTEVDVF9OT1JNQUxfSFRNTCA9IGBcbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAgICAgIHt7IHRpbWUgfX1cbiAgICAgICAgICAgIDwvcD5cbmA7XG5leHBvcnQgY29uc3QgVElNRV9TRUxFQ1RfRURJVF9IVE1MID0gYFxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImpzX3NlbGVjdFwiIHNpemU9MT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAuNWhcIj4wLjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxaFwiPjFoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyaFwiPjJoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzaFwiPjNoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0aFwiPjRoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1aFwiPjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2aFwiPjZoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3aFwiPjdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxZGF5XCI+MWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMS41ZGF5XCI+MS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyZGF5XCI+MmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMi41ZGF5XCI+Mi41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzZGF5XCI+M2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMy41ZGF5XCI+My41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0ZGF5XCI+NGRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC41ZGF5XCI+NC41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1ZGF5XCI+NWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNS41ZGF5XCI+NS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2ZGF5XCI+NmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNi41ZGF5XCI+Ni41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3ZGF5XCI+N2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuYDtcbmNvbnN0IFRPRE9fRVNUSU1BVEVfSEVBRCA9ICc8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+JztcbmNvbnN0IFRPRE9fUkVTVUxUX0hFQUQgPSAnPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPic7XG5cbmV4cG9ydCBjb25zdCBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MID1cbiAgVE9ET19FU1RJTUFURV9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwgPVxuICBUT0RPX1JFU1VMVF9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19FU1RJTUFURV9FRElUX0hUTUwgPVxuICBUT0RPX0VTVElNQVRFX0hFQUQgKyBUSU1FX1NFTEVDVF9FRElUX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfRURJVF9IVE1MID0gVE9ET19SRVNVTFRfSEVBRCArIFRJTUVfU0VMRUNUX0VESVRfSFRNTDtcbiIsImltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9kb1RlbXBsYXRlcyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2RvOiBWaWV3TW9kZWxUb2RvLFxuICAgIHByaXZhdGUgbW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLFxuICAgIHByaXZhdGUgc2VsZWN0b3I6IHN0cmluZ1xuICApIHt9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMudG9kby53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICAgIGNvbnN0IHN0YXRlU3R5bGVDbGFzcyA9IGNvbnZlcnRTdGF0ZUNsYXNzKHN0YXRlKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSh0aGlzLm1vZGVsVHlwZSk7XG4gICAgdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlIH19L2csIHN0YXRlKVxuICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGVDbGFzcyB9fS9nLCBzdGF0ZVN0eWxlQ2xhc3MpXG4gICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBpZCB9fS9nLCB0aGlzLnRvZG8uaWQpO1xuICAgIGNvbnN0IG1vdW50ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuJyArIHN0YXRlU3R5bGVDbGFzcyArIHRoaXMuc2VsZWN0b3JcbiAgICApO1xuICAgIGlmIChtb3VudGVkRWxlbWVudCkge1xuICAgICAgbW91bnRlZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgIHRlbXBsYXRlLmdldFRlbXBsYXRlSHRtbCgpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZTogVG9kb1N0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdpc18nICsgc3RhdGUudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7XG4gIElERU5USUZJRVJfREVUQUlMLFxuICBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCxcbiAgVE9ET19ERVRBSUxfRURJVF9IVE1MLFxufSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9kb1RlbXBsYXRlcyc7XG5pbXBvcnQgeyBCYXNlQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlQ2hpbGRDb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudFRlbXBsYXRlUGFydHMnO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVBhcnRzKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICBJREVOVElGSUVSX0RFVEFJTCxcbiAgICAgIFRPRE9fREVUQUlMX05PUk1BTF9IVE1MLFxuICAgICAgVE9ET19ERVRBSUxfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sLFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmlkZW50aWZ5XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudElubmVyVGV4dChcbiAgICAgIGVkaXRpbmdFbGVtZW50LFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLm5vcm1hbFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQmFzZUNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZUNoaWxkQ29tcG9uZW50JztcbmltcG9ydCB7XG4gIElERU5USUZJRVJfVElNRSxcbiAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgVE9ET19FU1RJTUFURV9FRElUX0hUTUwsXG4gIFRPRE9fUkVTVUxUX0VESVRfSFRNTCxcbiAgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwsXG4gIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICBUSU1FX1NFTEVDVF9FRElUX0hUTUwsXG59IGZyb20gJy4uL3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzJztcbmltcG9ydCB7IFRlbXBsYXRlUGFydHNIb2xkZXIgfSBmcm9tICcuLi9jb21wb25lbnRUZW1wbGF0ZVBhcnRzJztcblxuZXhwb3J0IGNsYXNzIFRvZG9UaW1lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0eXBlOiBUb2RvVGltZVR5cGUgZXh0ZW5kcyBzdHJpbmcgPyBUb2RvVGltZVR5cGUgOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXJcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2VzdGltYXRlJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgICAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19FU1RJTUFURV9FRElUX0hUTUxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXN1bHQnKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgICAgSURFTlRJRklFUl9USU1FLFxuICAgICAgICBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19SRVNVTFRfRURJVF9IVE1MXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICAgICAgVElNRV9TRUxFQ1RfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb252ZXJ0VGltZUVsZW0oZWRpdGluZ0VsZW1lbnQsIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIFRPRE86IExpc3RCb3jjga7lgKTmipzjgY3jgaDjgZljb252ZXJ0ZXLlrp/oo4VcbiAgICBjb252ZXJ0UmVzZXRUaW1lRWxlbShlZGl0aW5nRWxlbWVudCwgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwpO1xuICB9XG59XG5cbmNvbnN0IFRvZG9UaW1lVHlwZXMgPSB7XG4gIE5PTkU6ICcnLFxuICBFU1RJTUFURTogJ2VzdGltYXRlJyxcbiAgUmVzdWx0OiAncmVzdWx0Jyxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUb2RvVGltZVR5cGUgPSB0eXBlb2YgVG9kb1RpbWVUeXBlc1trZXlvZiB0eXBlb2YgVG9kb1RpbWVUeXBlc107XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgYmFzZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfZGF0YScsIGVsZW0pLmlubmVyVGV4dDtcbiAgZWxlbS5pbm5lckhUTUwgPSBiYXNlSHRtbDtcbiAgY29uc3Qgc2VsZWN0RWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAnLmpzX3NlbGVjdCcsXG4gICAgZWxlbVxuICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdEVsZW0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2VsZWN0RWxlbS5vcHRpb25zW2ldLnZhbHVlID09PSBkYXRhKSB7XG4gICAgICBzZWxlY3RFbGVtLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UmVzZXRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgcmVwbGFjZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBzZWxlY3RFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICdqc19zZWxlY3QnLFxuICAgIGVsZW1cbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgc2VsZWN0RWxlbS5vcHRpb25zW3NlbGVjdEVsZW0uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudElubmVyVGV4dChlbGVtLCByZXBsYWNlSHRtbCwgSURFTlRJRklFUl9USU1FKTtcbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHtcbiAgSURFTlRJRklFUl9USVRMRSxcbiAgVE9ET19USVRMRV9FRElUX0hUTUwsXG4gIFRPRE9fVElUTEVfTk9STUFMX0hUTUwsXG59IGZyb20gJy4uL3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvVGl0bGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hpbGRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVBhcnRzPzogVGVtcGxhdGVQYXJ0c0hvbGRlcikge1xuICAgIHN1cGVyKHRlbXBsYXRlUGFydHMpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgIElERU5USUZJRVJfVElUTEUsXG4gICAgICBUT0RPX1RJVExFX05PUk1BTF9IVE1MLFxuICAgICAgVE9ET19USVRMRV9FRElUX0hUTUxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudElubmVyVGV4dChcbiAgICAgIGVkaXRpbmdFbGVtZW50LFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmVkaXRTdGF0ZUh0bWwsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICApO1xuICB9XG5cbiAgcmVjb252ZXJ0Q29tcG9uZW50KCk6IHZvaWQge1xuICAgIC8vIFRPRE86IFRleHRBcmVh44Gu5YCk5oqc44GN44Gg44GZY29udmVydGVy5a6f6KOFXG4gICAgaWYgKHRoaXMuX2VkaXRpbmdFbGVtZW50KSB7XG4gICAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRWYWx1ZShcbiAgICAgICAgdGhpcy5fZWRpdGluZ0VsZW1lbnQsXG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5ub3JtYWxTdGF0ZUh0bWwsXG4gICAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2VkaXRpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5ub3JtYWxTdGF0ZUh0bWwsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSHRtbEFjY2Vzc29yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50TnVsbGFibGU8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHwgbnVsbCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50czxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IEFycmF5PFQ+IHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0RWxlbWVudElubmVyVGV4dChcbiAgICBlbGVtOiBIVE1MRWxlbWVudCxcbiAgICBiYXNlSHRtbDogc3RyaW5nLFxuICAgIGlkZW50aWZpZXI6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfZGF0YScsIGVsZW0pLmlubmVyVGV4dDtcbiAgICBlbGVtLmlubmVySFRNTCA9IGJhc2VIdG1sLnJlcGxhY2UoaWRlbnRpZmllciwgZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgY29udmVydEVsZW1lbnRWYWx1ZShcbiAgICBlbGVtOiBIVE1MRWxlbWVudCxcbiAgICBiYXNlSHRtbDogc3RyaW5nLFxuICAgIGlkZW50aWZpZXI6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2RhdGEnLCBlbGVtKS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPz8gJyc7XG4gICAgZWxlbS5pbm5lckhUTUwgPSBiYXNlSHRtbC5yZXBsYWNlKGlkZW50aWZpZXIsIGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi4vLi4vdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIgfSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGFza0J0bkhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3RGlzcGxheWVyOiBWaWV3RGlzcGxheWVyKSB7fVxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2lzdENyZWF0ZVRhc2tFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY3JlYXRlVGFza0FyZWEgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19jcmVhdGVUYXNrQXJlYScpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX2NyZWF0ZVRhc2tCdG4nLFxuICAgICAgY3JlYXRlVGFza0FyZWFcbiAgICApO1xuICAgIGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLl92aWV3RGlzcGxheWVyLmRpc3BsYXlJbnB1dFRhc2tBcmVhXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyLFxuICBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3RvZG9FbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnRIYW5kbGVyIGV4dGVuZHMgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2N0TWVudWhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgICBfY29udmVydEhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllclxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyUmlnaHRDbGlja0V2ZW50JywgX2N0TWVudWhhbmRsZXIpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnRleHQnLCBfY3RNZW51aGFuZGxlcik7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsIF9jb252ZXJ0SGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJUb2RvT2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRG91ZGJsZUNsaWNrRWxlbUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUmlnaHRDbGlja0V2ZW50KCk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudHMoJy5qc190b2RvJykuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5KCdyZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCcpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclRvZG9PYnNlcnZlcigpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgICByZWNvcmRzLmZvckVhY2goKHJlYykgPT4ge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20ocmVjLmFkZGVkTm9kZXMpO1xuICAgICAgICBjb25zdCB0b2RvRWxlbSA9IGdldFRvZG9FbGVtRnJvbU5vZGVzKG5vZGVzKTtcbiAgICAgICAgaWYgKCF0b2RvRWxlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b2RvRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseSgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udGV4dCcpXG4gICAgICAgICk7XG4gICAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9UaXRsZScsIHRvZG9FbGVtKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdkYmxjbGljaycsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICAgICAnVGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCB0b2RvbGlzdCBvZiBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kb2xpc3QnKSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b2RvbGlzdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyRG91ZGJsZUNsaWNrRWxlbUV2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHRpdGxlRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9UaXRsZScpO1xuICAgIHRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2RibGNsaWNrJyxcbiAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICdUaXRsZSdcbiAgICAgIClcbiAgICApO1xuICAgIHRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBkZXRhaWxFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0RldGFpbCcpO1xuICAgIGNvbnN0IGVzdGltYXRlVGltZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX3RvZG9Fc3RpbWF0ZVRpbWUnXG4gICAgKTtcbiAgICBlc3RpbWF0ZVRpbWVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGJsY2xpY2snLFxuICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JyxcbiAgICAgICAgJ0VzdGltYXRlVGltZSdcbiAgICAgIClcbiAgICApO1xuICAgIGVzdGltYXRlVGltZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0VGltZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvUmVzdWx0VGltZScpO1xuICAgIHJlc3VsdFRpbWVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGJsY2xpY2snLFxuICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JyxcbiAgICAgICAgJ1Jlc3VsdFRpbWUnXG4gICAgICApXG4gICAgKTtcbiAgICByZXN1bHRUaW1lRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvUHJpb3JpdHknKTtcbiAgICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9VcmdlbmN5Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0VsZW1Gcm9tTm9kZXMobm9kZXM6IE5vZGVbXSk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGh0bWxFbGVtID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsZW0uY2xhc3NMaXN0ICYmIGh0bWxFbGVtLmNsYXNzTGlzdC5jb250YWlucygnanNfdG9kbycpKSB7XG4gICAgICByZXR1cm4gaHRtbEVsZW07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlLCBpc1RvZG9TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRUb2RvOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgb3BlbkNvbnRleHRNZW51RnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlUGVuZGluZ0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgZGVsZXRlVG9kb0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXJnZXRUb2RvID0gbnVsbDtcbiAgICB0aGlzLm9wZW5Db250ZXh0TWVudUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMub3BlbkNvbnRleHRNZW51KGUpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnV2FpdGluZycpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZUlucHJvZ3Jlc3NGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnSW5Qcm9ncmVzcycpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdDb21wbGV0ZWQnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVQZW5kaW5nRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ1BlbmRpbmcnKTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlVG9kb0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlbGV0ZVRvZG8oKTtcbiAgICB9O1xuICB9XG5cbiAgc3VwcGx5KCk6IEV2ZW50TGlzdGVuZXIge1xuICAgIHJldHVybiB0aGlzLm9wZW5Db250ZXh0TWVudUZ1bmM7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Db250ZXh0TWVudShlOiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0gZSBhcyBNb3VzZUV2ZW50O1xuICAgIGNvbnN0IGN0TWVudSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9Db250ZXh0TWVudScpO1xuICAgIGN0TWVudS5zdHlsZS5sZWZ0ID0gU3RyaW5nKGV2ZW50LnBhZ2VYKSArICdweCc7XG4gICAgY3RNZW51LnN0eWxlLnRvcCA9IFN0cmluZyhldmVudC5wYWdlWSkgKyAncHgnO1xuICAgIGN0TWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnRhcmdldFRvZG8gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoIXRoaXMudGFyZ2V0VG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZVdhaXRpbmcnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVXYWl0aW5nRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlSW5wcm9ncmVzcycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZUlucHJvZ3Jlc3NGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VDb21wbGV0ZWQnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VQZW5kaW5nJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlUGVuZGluZ0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX21lbnVUb2RvRGVsZXRlJywgY3RNZW51KS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZGVsZXRlVG9kb0Z1bmNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShzdGF0ZTogVG9kb1N0YXRlKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudGFyZ2V0VG9kbyB8fFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1N0YXRlJywgdGhpcy50YXJnZXRUb2RvKVxuICAgICAgICAuaW5uZXJUZXh0ID09PSBzdGF0ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldFRvZG8ucHJldmlvdXNFbGVtZW50U2libGluZz8ucmVtb3ZlKCk7XG4gICAgdGhpcy50YXJnZXRUb2RvLnJlbW92ZSgpO1xuICAgIGNvbnN0IHZtU2VydmljZSA9IFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgdGFyZ2V0Vm0gPSB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbyk7XG4gICAgY29uc3Qgdm1CdWlsZGVyID0gVmlld01vZGVsQnVpbGRlckZhY3RvcnkubmV3SW5zdGFuY2UoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKCk7XG4gICAgdm1TZXJ2aWNlLmRlbGV0ZVZpZXdNb2RlbCh0YXJnZXRWbSk7XG4gICAgdm1TZXJ2aWNlLmNyZWF0ZVZpZXdNb2RlbChcbiAgICAgICdUb2RvJyxcbiAgICAgIHZtQnVpbGRlci53aXRoKHRhcmdldFZtKS53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KS5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlVG9kbygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0VG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2VG9kb0VtcHR5ID0gdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy50YXJnZXRUb2RvLnJlbW92ZSgpO1xuICAgIHByZXZUb2RvRW1wdHk/LnJlbW92ZSgpO1xuXG4gICAgVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKS5kZWxldGVWaWV3TW9kZWwoXG4gICAgICB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVZpZXdNb2RlbChcbiAgICB0b2RvOiBIVE1MRWxlbWVudCxcbiAgICBzdGF0ZT86IHN0cmluZ1xuICApOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvSWQnLCB0b2RvKS5pbm5lclRleHRcbiAgICApO1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGF0ZSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRvZG8pLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaWQgPCAwIHx8ICFpc1RvZG9TdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgfVxuICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICByZXR1cm4gdm1CdWlsZGVyXG4gICAgICAud2l0aCh7IGlkOiBpZCB9KVxuICAgICAgLndpdGgoeyBtb2RlbFR5cGU6ICdUb2RvJyB9KVxuICAgICAgLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pXG4gICAgICAuYnVpbGQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyLFxuICBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllcixcbn0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3RvZG9FbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBwcml2YXRlIGNvbnZlcnRUaXRsZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY29udmVydERlaXRhbEZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY29udmVydEVzdGltYXRlVGltZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY29udmVydFJlc3VsdFRpbWVGdW5jOiBFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hpbGRDb21wb25lbnRzOiBDb21wb25lbnRIb2xkZXI8VG9kb0VsZW1lbnQsIENvbnZlcnRhYmxlQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHJlc2V0RWRpdGluZ0hhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyXG4gICkge1xuICAgIHRoaXMuY29udmVydFRpdGxlRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0VGl0bGUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnREZWl0YWxGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnREZXRhaWwoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnRFc3RpbWF0ZVRpbWUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnRSZXN1bHRUaW1lRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0UmVzdWx0VGltZShlKTtcbiAgICB9O1xuICB9XG5cbiAgc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICBhcmc6IFRvZG9FbGVtZW50IGV4dGVuZHMgc3RyaW5nID8gVG9kb0VsZW1lbnQgOiB1bmRlZmluZWRcbiAgKTogRXZlbnRMaXN0ZW5lciB8IG5ldmVyIHtcbiAgICBpZiAoYXJnID09PSAnVGl0bGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VGl0bGVGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnRGV0YWlsJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydERlaXRhbEZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdFc3RpbWF0ZVRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ1Jlc3VsdFRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmVzdWx0VGltZUZ1bmM7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUaXRsZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdUaXRsZScpO1xuICAgIHRpdGxlQ21wLmVkaXRpbmdFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICB0aXRsZUNtcC5jb252ZXJ0Q29tcG9uZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnREZXRhaWwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yZXNldEVkaXRpbmdIYW5kbGVyLmNhbGwoKTtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnRGV0YWlsJyk7XG4gICAgdGl0bGVDbXAuZWRpdGluZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRpdGxlQ21wLmNvbnZlcnRDb21wb25lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVzdGltYXRlVGltZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdFc3RpbWF0ZVRpbWUnKTtcbiAgICB0aXRsZUNtcC5lZGl0aW5nRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmVzdWx0VGltZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdSZXN1bHRUaW1lJyk7XG4gICAgdGl0bGVDbXAuZWRpdGluZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRpdGxlQ21wLmNvbnZlcnRDb21wb25lbnQoKTtcbiAgfVxuICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9Qcmlvcml0eScpO1xuICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9VcmdlbmN5Jyk7XG59XG4iLCJpbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi90b2RvRWxlbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlclxuICBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyIHtcbiAgcHJpdmF0ZSByZXNldEVkaXRNb2RlRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoaWxkQ29tcG9uZW50czogQ29tcG9uZW50SG9sZGVyPFRvZG9FbGVtZW50LCBDb252ZXJ0YWJsZUNvbXBvbmVudD5cbiAgKSB7XG4gICAgdGhpcy5yZXNldEVkaXRNb2RlRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRFZGl0TW9kZSgpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHkoKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMucmVzZXRFZGl0TW9kZUZ1bmM7XG4gIH1cblxuICBjYWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRFZGl0TW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIGNvbnN0IGl0ID0gdGhpcy5jaGlsZENvbXBvbmVudHMuY29tcG9uZW50cy52YWx1ZXMoKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBpdCkge1xuICAgICAgY29tcG9uZW50LnJlY29udmVydENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyLFxuICBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgV2luZG93SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzZXRFZGl0aW5nSGFuZGxlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyKSB7fVxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuc3VwcGx5KCkpO1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHJlZ2lzdGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHRlbnNpb25WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJcbiAgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBwcm90ZWN0ZWQgc3ViSGFuZGxlckhvbGRlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIgPSBuZXcgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyKCk7XG4gIH1cbiAgYWJzdHJhY3QgcmVnaXN0ZXIoKTogdm9pZDtcbiAgYWRkSGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcik6IHRoaXMge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0SGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICAgIHJldHVybiB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuZ2V0KG1ldGhvZE5hbWUpO1xuICB9XG59XG5cbmNsYXNzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllckhvbGRlciB7XG4gIHN1YkhhbmRsZXJzOiBNYXA8c3RyaW5nLCBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXI+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG4gIGFkZChtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcikge1xuICAgIHRoaXMuc3ViSGFuZGxlcnMuc2V0KG1ldGhvZE5hbWUsIGhhbmRsZXIpO1xuICB9XG4gIGdldChtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIgfCBuZXZlciB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuc3ViSGFuZGxlcnMuZ2V0KG1ldGhvZE5hbWUpO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoJycpO1xuICB9XG4gIHN1cHBseTxUPihcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZWxlbT86IFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogdW5kZWZpbmVkXG4gICk6IEV2ZW50TGlzdGVuZXIge1xuICAgIHJldHVybiB0aGlzLmdldChtZXRob2ROYW1lKS5zdXBwbHkoZWxlbSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBzdXBwbHk8VD4oYXJnPzogVCBleHRlbmRzIHN0cmluZyA/IFQgOiB1bmRlZmluZWQpOiBFdmVudExpc3RlbmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyXG4gIGV4dGVuZHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgY2FsbDxUPihhcmc/OiBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IHVuZGVmaW5lZCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIgfSBmcm9tICcuL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHByaXZhdGUgaGFuZGxlcnM6IEFycmF5PFZpZXdFdmVudEhhbmRsZXJSZWdpc3Rlcj47XG4gIHByaXZhdGUgY29uc3RydWN0b3IoYXJnczogVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyW10pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gYXJncztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChcbiAgICAuLi5hcmdzOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJbXVxuICApOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzIHtcbiAgICByZXR1cm4gbmV3IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMoYXJncyk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXIucmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFZpZXdEaXNwbGF5ZXIge1xuICBwdWJsaWMgZGlzcGxheUlucHV0VGFza0FyZWEoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGU8SFRNTElucHV0RWxlbWVudD4oXG4gICAgICAgICcjcmFkaW9DcmVhdGVUYXNrRGV0YWlsJ1xuICAgICAgKT8uY2hlY2tlZFxuICAgICkge1xuICAgICAgLy8gY29uc3QgY2xhc3NMaXN0ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfaW5wdXRUYXNrRGV0YWlsQXJlYScpXG4gICAgICAvLyAgIC5jbGFzc0xpc3Q7XG4gICAgICAvLyBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdpc19oaWRkZW4nKSkge1xuICAgICAgLy8gICBjbGFzc0xpc3QucmVtb3ZlKCdpc19oaWRkZW4nKTtcbiAgICAgIC8vICAgY2xhc3NMaXN0LmFkZCgnaXNfYWN0aXZlJyk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICAgICdUb2RvJ1xuICAgICAgKTtcbiAgICAgIHZtQnVpbGRlci53aXRoKHsgd29ya1N0YXRlOiAnV2FpdGluZycgfSk7XG4gICAgICBpZiAodm1CdWlsZGVyKSB7XG4gICAgICAgIGNvbnN0IHZtU2VydmljZSA9IFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoJ1RvZG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIGluaXRUb2RvIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuL3ZpZXdNb2RlbEJ1aWxkZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICBzdGF0aWMgbmV3SW5zdGFuY2UoKTogVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIodHlwZT86IFZpZXdNb2RlbFR5cGUpOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IodHlwZSk7XG4gIH1cbn1cblxudHlwZSBBbGxWaWV3TW9kZWwgPSBWaWV3TW9kZWwgJiBWaWV3TW9kZWxUb2RvO1xudHlwZSBBbGxWaWV3TW9kZWxLZXkgPSBrZXlvZiBBbGxWaWV3TW9kZWw7XG5cbmNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcml2YXRlIGJ1aWxkZXI6IFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPjtcblxuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSkge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKCkud2l0aCh7IG1vZGVsVHlwZTogbW9kZWxUeXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQmFzZUJ1aWxkZXIoKS53aXRoKHtcbiAgICAgICAgbW9kZWxUeXBlOiAnVmlld01vZGVsJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdpdGgoXG4gICAgaW5wdXQ6IHsgW2tleSBpbiBBbGxWaWV3TW9kZWxLZXldPzogQWxsVmlld01vZGVsW2tleV0gfVxuICApOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIud2l0aChpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBWaWV3TW9kZWwge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8VCBleHRlbmRzIFZpZXdNb2RlbD5cbiAgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFQ+LCBQYXJ0aWFsPFZpZXdNb2RlbD4ge1xuICBpZD86IG51bWJlcjtcbiAgbW9kZWxUeXBlPzogVmlld01vZGVsVHlwZTtcblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVF0/OiBUW2tleV0gfSk6IHRoaXMge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgICAgdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgW2tleV06IGlucHV0W2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhJZChpZDogbnVtYmVyKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2lkJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgaWQ6IGlkIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhNb2RlbFR5cGUoXG4gICAgdHlwZTogVmlld01vZGVsVHlwZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnbW9kZWxUeXBlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgbW9kZWxUeXBlOiB0eXBlIH0pO1xuICB9XG5cbiAgYnVpbGQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdlbmVyYXRlSW5zdGFuY2UoKTogVDtcbn1cblxuY2xhc3MgVmlld01vZGVsQmFzZUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkID8/IC0xO1xuICAgIGNvbnN0IHR5cGU6IFZpZXdNb2RlbFR5cGUgPSB0aGlzLm1vZGVsVHlwZSA/PyAnVmlld01vZGVsJztcbiAgICBjb25zdCBvYmo6IFZpZXdNb2RlbCA9IHsgaWQ6IGlkLCBtb2RlbFR5cGU6IHR5cGUgfTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgIT09ICdpZCcgfHwgcHJvcCAhPT0gJ21vZGVsVHlwZScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3BdOiB0aGlzW3Byb3BdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRWaWV3TW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiAnVG9kbyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gaW5pdFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0TmV4dElkKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBnZXRWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSwgdmlld01vZGVsPzogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAoIXZtTWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgdmlld01vZGVsID09PSB1bmRlZmluZWRcbiAgICAgID8gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KS5idWlsZCgpKVxuICAgICAgOiB2bU1hbmFnZXIuY3JlYXRlKHZpZXdNb2RlbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIudXBkYXRlKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3Ivdmlld0NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBWaWV3Q29tcG9uZW50KCdUb2RvJywgJy5qc190b2RvbGlzdCcpXG5leHBvcnQgY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFZpZXdNb2RlbFRvZG8ge1xuICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICBwcml2YXRlIF9tb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGU7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnRzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZURhdGU6IERhdGU7XG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT86IERhdGU7XG4gIHByaXZhdGUgX2VzdGltYXRlSG91cjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBwcml2YXRlIF9kaXNwbGF5T3JkZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0b2RvQmFzZT86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvID0gaW5pdFRvZG8odG9kb0Jhc2UgPz8ge30pO1xuICAgIHRoaXMuX2lkID0gdG9kby5pZDtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSB0b2RvLm1vZGVsVHlwZTtcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgdGhpcy5fY29udGVudHMgPSB0b2RvLmNvbnRlbnRzO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvLmNyZWF0ZURhdGU7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kby5zdGFydERhdGU7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gdG9kby5lc3RpbWF0ZUhvdXI7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IHRvZG8ucmVzdWx0SG91cjtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSB0b2RvLndvcmtTdGF0ZTtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvLmRpc3BsYXlPcmRlcjtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kbyhiYXNlOiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+KTogVmlld01vZGVsVG9kbyB7XG4gIGNvbnN0IHRhcmdldDogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiA9IHt9O1xuICB0YXJnZXQuaWQgPSBiYXNlPy5pZCA/PyAtMTtcbiAgdGFyZ2V0Lm1vZGVsVHlwZSA9ICdUb2RvJztcbiAgdGFyZ2V0LnRpdGxlID0gYmFzZT8udGl0bGUgPz8gJyc7XG4gIHRhcmdldC5jb250ZW50cyA9IGJhc2U/LmNvbnRlbnRzID8/ICcnO1xuICB0YXJnZXQuY3JlYXRlRGF0ZSA9IGJhc2U/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgdGFyZ2V0LnN0YXJ0RGF0ZSA9IGJhc2U/LnN0YXJ0RGF0ZSA/PyB1bmRlZmluZWQ7XG4gIHRhcmdldC5lc3RpbWF0ZUhvdXIgPSBiYXNlPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgdGFyZ2V0LnJlc3VsdEhvdXIgPSBiYXNlPy5yZXN1bHRIb3VyID8/IDA7XG4gIHRhcmdldC53b3JrU3RhdGUgPSBiYXNlPy53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICB0YXJnZXQuZGlzcGxheU9yZGVyID0gYmFzZT8uZGlzcGxheU9yZGVyID8/IDA7XG4gIHJldHVybiB0YXJnZXQgYXMgVmlld01vZGVsVG9kbztcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb2xpc3QgfSBmcm9tICcuL3RvZG9saXN0JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Cb2FyZCB7XG4gIHByaXZhdGUgdG9kb2xpc3RzOiBNYXA8VG9kb1N0YXRlLCBUb2RvbGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgb2YgT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKSkge1xuICAgICAgdGhpcy50b2RvbGlzdHMuc2V0KHN0YXRlTmFtZSwgbmV3IFRvZG9saXN0KHN0YXRlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSk/LmFkZFRvZG8odG9kbyk7XG4gIH1cblxuICBnZXRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRvZG8pIHtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZGVsZXRlVG9kbyhpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHRvZG9saXN0ID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKTtcbiAgICBpZiAodG9kb2xpc3QpIHtcbiAgICAgIHJldHVybiB0b2RvbGlzdC51cGRhdGVUb2RvKHRvZG8pO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBUb2RvU3RhdGVzID0ge1xuICBXQUlUSU5HOiAnV2FpdGluZycsXG4gIElOX1BST0dSRVNTOiAnSW5Qcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RvU3RhdGUoc3RhdGU6IGFueSk6IHN0YXRlIGlzIFRvZG9TdGF0ZSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpLmluY2x1ZGVzKHN0YXRlKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb2xpc3Qge1xuICBwcml2YXRlIF90b2RvbGlzdDogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlTmFtZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fdG9kb2xpc3QgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgdG9kb2xpc3QoKTogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvbGlzdDtcbiAgfVxuXG4gIGdldCBzdGF0ZU5hbWUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVOYW1lO1xuICB9XG5cbiAgZ2V0VG9kbyhpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3QuZ2V0KGlkKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy5fdG9kb2xpc3QudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKGRlbFRvZG9PcmRlciA8IHRvZG8uZGlzcGxheU9yZGVyKSB7XG4gICAgICAgICAgdG9kby5kaXNwbGF5T3JkZXIgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZG9saXN0LmRlbGV0ZShpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50b2RvbGlzdC5nZXQodG9kby5pZCkpIHtcbiAgICAgIHRoaXMudG9kb2xpc3Quc2V0KHRvZG8uaWQsIHRvZG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbywgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvQm9hcmQgfSBmcm9tICcuL3RvZG9Cb2FyZCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlcic7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmlld1RvZG9NYW5hZ2VyIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWxUb2RvPiB7XG4gIHByaXZhdGUgZmluYWxJZDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90b2RvQm9hcmQ6IFRvZG9Cb2FyZCkge1xuICAgIHRoaXMuZmluYWxJZCA9IDA7XG4gIH1cblxuICBnZXROZXh0SWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maW5hbElkICsgMTtcbiAgfVxuXG4gIGNyZWF0ZSh2bU1vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odm1Nb2RlbCk7XG4gICAgaWYgKHRvZG9PYmouaWQgPiB0aGlzLmZpbmFsSWQpIHtcbiAgICAgIHRoaXMuZmluYWxJZCA9IHRvZG9PYmouaWQ7XG4gICAgfVxuICAgIHRoaXMuX3RvZG9Cb2FyZC5hZGRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGdldERhdGEodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC5nZXRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2RvT2JqOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC51cGRhdGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvQm9hcmQuZGVsZXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=