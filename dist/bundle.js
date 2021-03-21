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
var childComponentHolder_1 = __webpack_require__(/*! ./component/childComponentHolder */ "./src/ts/component/childComponentHolder.ts");
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var CreateTaskBtnHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/CreateTaskBtnHandler */ "./src/ts/main/view/handler/impl/CreateTaskBtnHandler.ts");
var TodoComponentHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoComponentHandler */ "./src/ts/main/view/handler/impl/TodoComponentHandler.ts");
var TodoContextMenuHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoContextMenuHandler */ "./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts");
var todoConvertElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoConvertElementHandler */ "./src/ts/main/view/handler/impl/todoConvertElementHandler.ts");
var todoReconvertElementHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/todoReconvertElementHandler */ "./src/ts/main/view/handler/impl/todoReconvertElementHandler.ts");
var viewEventHandlers_1 = __webpack_require__(/*! ./main/view/handler/viewEventHandlers */ "./src/ts/main/view/handler/viewEventHandlers.ts");
var viewDisplayer_1 = __webpack_require__(/*! ./main/view/viewDisplayer */ "./src/ts/main/view/viewDisplayer.ts");
var viewModelManagerFactoryImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelManagerFactoryImpl */ "./src/ts/main/viewmodel/impl/viewModelManagerFactoryImpl.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var todoCmpHolder = new childComponentHolder_1.ChildComponentHolder();
todoCmpHolder.components = childComponentHolder_1.createTodoChildComponents();
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewEventHandlers_1.ViewEventHandlerRegisters.init(new TodoComponentHandler_1.TodoComponentHandler(new TodoContextMenuHandler_1.TodoContextMenuHandler(), new todoConvertElementHandler_1.TodoConvertElementHandler(todoCmpHolder), new todoReconvertElementHandler_1.TodoReconvertElementHandler(todoCmpHolder)), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer())).register();
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
        if (this.editingElement) {
            this.convertProcess(this.editingElement);
            return;
        }
        throw new Error('Nothing editing element');
    };
    BaseChildComponent.prototype.reconvertComponent = function (value) {
        if (this.editingElement) {
            this.reconvertProcess(this.editingElement, value);
            this.clearEditingElement();
        }
    };
    Object.defineProperty(BaseChildComponent.prototype, "editingElement", {
        get: function () {
            return this._editingElement;
        },
        enumerable: false,
        configurable: true
    });
    BaseChildComponent.prototype.registerEditingElement = function (elem) {
        this._editingElement = elem;
    };
    BaseChildComponent.prototype.clearEditingElement = function () {
        this._editingElement = null;
    };
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
var todoDetailComponent_1 = __webpack_require__(/*! ./todo/child/todoDetailComponent */ "./src/ts/component/todo/child/todoDetailComponent.ts");
var todoTimeComponent_1 = __webpack_require__(/*! ./todo/child/todoTimeComponent */ "./src/ts/component/todo/child/todoTimeComponent.ts");
var todoTitleComponent_1 = __webpack_require__(/*! ./todo/child/todoTitleComponent */ "./src/ts/component/todo/child/todoTitleComponent.ts");
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
exports.TODO_TITLE_EDIT_HTML = "\n        <form class=\"el_todoTitle\" onsubmit=\"return false;\">\n          <p class=\"el_todoTitle hp_pr10\">\n            <input type=\"text\" name=\"title\" class=\"el_textarea js_data\" value=\"{{ title }}\">\n          </p>\n        </form>\n";
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

/***/ "./src/ts/component/todo/child/todoDetailComponent.ts":
/*!************************************************************!*\
  !*** ./src/ts/component/todo/child/todoDetailComponent.ts ***!
  \************************************************************/
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
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

/***/ "./src/ts/component/todo/child/todoTimeComponent.ts":
/*!**********************************************************!*\
  !*** ./src/ts/component/todo/child/todoTimeComponent.ts ***!
  \**********************************************************/
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
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

/***/ "./src/ts/component/todo/child/todoTitleComponent.ts":
/*!***********************************************************!*\
  !*** ./src/ts/component/todo/child/todoTitleComponent.ts ***!
  \***********************************************************/
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../baseChildComponent */ "./src/ts/component/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../componentTemplateParts */ "./src/ts/component/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../../templates/todoTemplates */ "./src/ts/component/templates/todoTemplates.ts");
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
    TodoTitleComponent.prototype.reconvertProcess = function (editingElement, value) {
        htmlAccessor_1.HtmlAccessor.convertElementValue(editingElement, this.templateParts.normalStateHtml, this.templateParts.identify, value);
    };
    return TodoTitleComponent;
}(baseChildComponent_1.BaseChildComponent));
exports.TodoTitleComponent = TodoTitleComponent;


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
    HtmlAccessor.convertElementValue = function (elem, baseHtml, identifier, value) {
        var _a;
        var data = (_a = value !== null && value !== void 0 ? value : HtmlAccessor.getHtmlElement('.js_data', elem).getAttribute('value')) !== null && _a !== void 0 ? _a : '';
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewEventHandler_1 = __webpack_require__(/*! ../viewEventHandler */ "./src/ts/main/view/handler/viewEventHandler.ts");
var TodoComponentHandler = (function (_super) {
    __extends(TodoComponentHandler, _super);
    function TodoComponentHandler(_ctMenuHandler, _convertHandler, _reconvertHandler) {
        var _this = _super.call(this) || this;
        _this.subHandlerHolder.add('registerRightClickEvent', _ctMenuHandler);
        _this.subHandlerHolder.add('registerTodoObserver_context', _ctMenuHandler);
        _this.subHandlerHolder.add('registerTodoObserver_convert', _convertHandler);
        _this.subHandlerHolder.add('registerTodoObserver_reconvert', _reconvertHandler);
        return _this;
    }
    TodoComponentHandler.prototype.register = function () {
        this.registerRightClickEvent();
        this.registerAddTodoObserver();
        this.registerTodoElemEvent();
    };
    TodoComponentHandler.prototype.registerRightClickEvent = function () {
        var _this = this;
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', _this.subHandlerHolder.supply('registerRightClickEvent'));
        });
    };
    TodoComponentHandler.prototype.registerAddTodoObserver = function () {
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
                var todoTitleElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoTitle', todoElem);
                todoTitleElem.addEventListener('keypress', _this.subHandlerHolder.supply('registerTodoObserver_reconvert', 'Title'));
                todoTitleElem.addEventListener('dblclick', _this.subHandlerHolder.supply('registerTodoObserver_convert', 'Title'));
            });
        });
        try {
            for (var _b = __values(htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todolist')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todoList = _c.value;
                observer.observe(todoList, {
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
    TodoComponentHandler.prototype.registerTodoElemEvent = function () {
        var titleElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoTitle');
        titleElem.addEventListener('dblclick', this.subHandlerHolder.supply('registerTodoObserver_convert', 'Title'));
        titleElem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
        titleElem.addEventListener('keypress', this.subHandlerHolder.supply('registerTodoObserver_reconvert', 'Title'));
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
    function TodoConvertElementHandler(childComponents) {
        var _this = this;
        this.childComponents = childComponents;
        this.convertTitleFunc = function (e) {
            _this.convertTitle(e);
        };
        this.convertDetailFunc = function (e) {
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
            return this.convertDetailFunc;
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
        var titleCmp = this.childComponents.getComponent('Title');
        var targetHtmlElem = event.currentTarget;
        titleCmp.registerEditingElement(targetHtmlElem);
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertDetail = function (event) {
        var titleCmp = this.childComponents.getComponent('Detail');
        titleCmp.registerEditingElement(event.currentTarget);
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertEstimateTime = function (event) {
        var titleCmp = this.childComponents.getComponent('EstimateTime');
        titleCmp.registerEditingElement(event.currentTarget);
        titleCmp.convertComponent();
    };
    TodoConvertElementHandler.prototype.convertResultTime = function (event) {
        var titleCmp = this.childComponents.getComponent('ResultTime');
        titleCmp.registerEditingElement(event.currentTarget);
        titleCmp.convertComponent();
    };
    return TodoConvertElementHandler;
}());
exports.TodoConvertElementHandler = TodoConvertElementHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/todoReconvertElementHandler.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/todoReconvertElementHandler.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoReconvertElementHandler = void 0;
var TodoReconvertElementHandler = (function () {
    function TodoReconvertElementHandler(childComponents) {
        var _this = this;
        this.childComponents = childComponents;
        this.reconvertTitleFunc = function (e) {
            _this.reconvertTitle(e);
        };
        this.reconvertDetailFunc = function (e) {
            _this.reconvertDetail(e);
        };
        this.reconvertEstimateTimeFunc = function (e) {
            _this.reconvertEstimateTime(e);
        };
        this.reconvertResultTimeFunc = function (e) {
            _this.reconvertResultTime(e);
        };
    }
    TodoReconvertElementHandler.prototype.supply = function (arg) {
        if (arg === 'Title') {
            return this.reconvertTitleFunc;
        }
        else if (arg === 'Detail') {
            return this.reconvertDetailFunc;
        }
        else if (arg === 'EstimateTime') {
            return this.reconvertEstimateTimeFunc;
        }
        else if (arg === 'ResultTime') {
            return this.reconvertResultTimeFunc;
        }
        throw new Error('');
    };
    TodoReconvertElementHandler.prototype.reconvertTitle = function (event) {
        if (event.key === 'Enter') {
            var titleCmp = this.childComponents.getComponent('Title');
            var target = event.target;
            titleCmp.reconvertComponent(target.value);
            titleCmp.clearEditingElement();
        }
    };
    TodoReconvertElementHandler.prototype.reconvertDetail = function (event) {
        var titleCmp = this.childComponents.getComponent('Detail');
        var target = event.target;
        titleCmp.reconvertComponent(target.value);
        titleCmp.clearEditingElement();
    };
    TodoReconvertElementHandler.prototype.reconvertEstimateTime = function (event) {
        var titleCmp = this.childComponents.getComponent('EstimateTime');
        var target = event.target;
        titleCmp.reconvertComponent(target.value);
        titleCmp.clearEditingElement();
    };
    TodoReconvertElementHandler.prototype.reconvertResultTime = function (event) {
        var titleCmp = this.childComponents.getComponent('ResultTime');
        var target = event.target;
        titleCmp.reconvertComponent(target.value);
        titleCmp.clearEditingElement();
    };
    return TodoReconvertElementHandler;
}());
exports.TodoReconvertElementHandler = TodoReconvertElementHandler;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9iYXNlQ2hpbGRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9jaGlsZENvbXBvbmVudEhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L2NvbXBvbmVudFRlbXBsYXRlUGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3Ivdmlld0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlcy90b2RvVGVtcGxhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby9jaGlsZC90b2RvRGV0YWlsQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby9jaGlsZC90b2RvVGltZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RvZG8vY2hpbGQvdG9kb1RpdGxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnQvdG9kby90b2RvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db21wb25lbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC90b2RvUmVjb252ZXJ0RWxlbWVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL3ZpZXdFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL3ZpZXdFdmVudEhhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3ZpZXdUb2RvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QU03QztJQUVFLHlCQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQWtCO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxPQUE2QztRQUNuRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBNkM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQztBQTdCWSwwQ0FBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9hcHAudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7XG4gIENoaWxkQ29tcG9uZW50SG9sZGVyLFxuICBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzLFxufSBmcm9tICcuL2NvbXBvbmVudC9jaGlsZENvbXBvbmVudEhvbGRlcic7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQ3JlYXRlVGFza0J0bkhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvQ3JlYXRlVGFza0J0bkhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbXBvbmVudEhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb0NvbnRleHRNZW51SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29udGV4dE1lbnVIYW5kbGVyJztcbmltcG9ydCB7IFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvUmVjb252ZXJ0RWxlbWVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb1JlY29udmVydEVsZW1lbnRIYW5kbGVyJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL3ZpZXdFdmVudEhhbmRsZXJzJztcbmltcG9ydCB7IFZpZXdEaXNwbGF5ZXIgfSBmcm9tICcuL21haW4vdmlldy92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIH0gZnJvbSAnLi9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4vdG9kb0VsZW1lbnQnO1xuXG5jb25zdCB0b2RvQ21wSG9sZGVyID0gbmV3IENoaWxkQ29tcG9uZW50SG9sZGVyPFxuICBUb2RvRWxlbWVudCxcbiAgQ29udmVydGlibGVDb21wb25lbnRcbj4oKTtcbnRvZG9DbXBIb2xkZXIuY29tcG9uZW50cyA9IGNyZWF0ZVRvZG9DaGlsZENvbXBvbmVudHMoKTtcblxuLy9jb25zdCB0b2RvUmVzZXRIYW5kbGVyID0gbmV3IFRvZG9SZXNldEVsZW1lbnRIYW5kbGVyKHRvZG9DbXBIb2xkZXIpO1xuVmlld01vZGVsU2VydmljZUltcGwuaW5pdChuZXcgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwoKSk7XG5cblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMuaW5pdChcbiAgbmV3IFRvZG9Db21wb25lbnRIYW5kbGVyKFxuICAgIG5ldyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyKCksXG4gICAgbmV3IFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIoXG4gICAgICB0b2RvQ21wSG9sZGVyXG4gICAgICAvL3RvZG9SZXNldEhhbmRsZXJcbiAgICApLFxuICAgIG5ldyBUb2RvUmVjb252ZXJ0RWxlbWVudEhhbmRsZXIodG9kb0NtcEhvbGRlcilcbiAgKSxcbiAgbmV3IENyZWF0ZVRhc2tCdG5IYW5kbGVyKG5ldyBWaWV3RGlzcGxheWVyKCkpXG4gIC8vbmV3IFdpbmRvd0hhbmRsZXIodG9kb1Jlc2V0SGFuZGxlcilcbikucmVnaXN0ZXIoKTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuIiwiaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb252ZXJ0aWJsZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBfZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJvdGVjdGVkIHRlbXBsYXRlUGFydHM6IFRlbXBsYXRlUGFydHNIb2xkZXI7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gdGVtcGxhdGVQYXJ0cyA/PyBUZW1wbGF0ZVBhcnRzSG9sZGVyLmVtcHR5KCk7XG4gIH1cblxuICBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgY29udmVydENvbXBvbmVudCgpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLmVkaXRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnZlcnRQcm9jZXNzKHRoaXMuZWRpdGluZ0VsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgZWRpdGluZyBlbGVtZW50Jyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICByZWNvbnZlcnRDb21wb25lbnQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlY29udmVydFByb2Nlc3ModGhpcy5lZGl0aW5nRWxlbWVudCwgdmFsdWUpO1xuICAgICAgdGhpcy5jbGVhckVkaXRpbmdFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY29udmVydFByb2Nlc3MoXG4gICAgZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHZhbHVlOiBzdHJpbmdcbiAgKTogdm9pZDtcblxuICBnZXQgZWRpdGluZ0VsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ0VsZW1lbnQ7XG4gIH1cblxuICByZWdpc3RlckVkaXRpbmdFbGVtZW50KGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fZWRpdGluZ0VsZW1lbnQgPSBlbGVtO1xuICB9XG5cbiAgY2xlYXJFZGl0aW5nRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHsgVG9kb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdG9kby9jaGlsZC90b2RvRGV0YWlsQ29tcG9uZW50JztcbmltcG9ydCB7IFRvZG9UaW1lQ29tcG9uZW50IH0gZnJvbSAnLi90b2RvL2NoaWxkL3RvZG9UaW1lQ29tcG9uZW50JztcbmltcG9ydCB7IFRvZG9UaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9kby9jaGlsZC90b2RvVGl0bGVDb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgQ2hpbGRDb21wb25lbnRIb2xkZXI8VCwgQyBleHRlbmRzIENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBDb21wb25lbnRIb2xkZXI8VCwgQz4ge1xuICBwcml2YXRlIF9jb21wb25lbnRzOiBNYXA8VCwgQz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29tcG9uZW50cyA9IG5ldyBNYXA8VCwgQz4oKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudChjb21wb25lbnRUeXBlOiBUKTogQyB8IG5ldmVyIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50cy5oYXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzLmdldChjb21wb25lbnRUeXBlKSE7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDb21wb25lbnQgVHlwZScpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudHMoKTogTWFwPFQsIEM+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50cztcbiAgfVxuXG4gIHNldCBjb21wb25lbnRzKGNvbXBvbmVudHM6IE1hcDxULCBDPikge1xuICAgIHRoaXMuX2NvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzKCk6IE1hcDxcbiAgVG9kb0VsZW1lbnQsXG4gIENvbnZlcnRpYmxlQ29tcG9uZW50XG4+IHtcbiAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBNYXA8VG9kb0VsZW1lbnQsIENvbnZlcnRpYmxlQ29tcG9uZW50PigpO1xuICBjb21wb25lbnRzLnNldCgnVGl0bGUnLCBuZXcgVG9kb1RpdGxlQ29tcG9uZW50KCkpO1xuICBjb21wb25lbnRzLnNldCgnRXN0aW1hdGVUaW1lJywgbmV3IFRvZG9UaW1lQ29tcG9uZW50KCdlc3RpbWF0ZScpKTtcbiAgY29tcG9uZW50cy5zZXQoJ1Jlc3VsdFRpbWUnLCBuZXcgVG9kb1RpbWVDb21wb25lbnQoJ3Jlc3VsdCcpKTtcbiAgY29tcG9uZW50cy5zZXQoJ0RldGFpbCcsIG5ldyBUb2RvRGV0YWlsQ29tcG9uZW50KCkpO1xuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzLnZhbHVlcygpKSB7XG4gICAgY29tcG9uZW50LmluaXQoKTtcbiAgfVxuICByZXR1cm4gY29tcG9uZW50cztcbn1cbiIsImludGVyZmFjZSBDb21wb25lbnRUZW1wbGF0ZVBhcnRzIHtcbiAgaWRlbnRpZnk6IHN0cmluZztcbiAgbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmc7XG4gIGVkaXRTdGF0ZUh0bWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGFydHNIb2xkZXIgaW1wbGVtZW50cyBDb21wb25lbnRUZW1wbGF0ZVBhcnRzIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pZGVudGlmeTogc3RyaW5nLFxuICAgIHByaXZhdGUgX25vcm1hbFN0YXRlSHRtbDogc3RyaW5nLFxuICAgIHByaXZhdGUgX2VkaXRTdGF0ZUh0bWw6IHN0cmluZ1xuICApIHt9XG5cbiAgc3RhdGljIGNyZWF0ZShcbiAgICBpZGVudGlmeTogc3RyaW5nLFxuICAgIG5vcm1hbFN0YXRlSHRtbDogc3RyaW5nLFxuICAgIGVkaXRTdGF0ZUh0bWw6IHN0cmluZ1xuICApOiBUZW1wbGF0ZVBhcnRzSG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUGFydHNIb2xkZXIoaWRlbnRpZnksIG5vcm1hbFN0YXRlSHRtbCwgZWRpdFN0YXRlSHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZW1wdHkoKTogVGVtcGxhdGVQYXJ0c0hvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVBhcnRzSG9sZGVyKCcnLCAnJywgJycpO1xuICB9XG5cbiAgZ2V0IGlkZW50aWZ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkZW50aWZ5O1xuICB9XG5cbiAgZ2V0IG5vcm1hbFN0YXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxTdGF0ZUh0bWw7XG4gIH1cblxuICBnZXQgZWRpdFN0YXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lZGl0U3RhdGVIdG1sO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tICcuLi90b2RvL3RvZG9Db21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld0NvbXBvbmVudChcbiAgbW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLFxuICBzZWxlY3Rvcjogc3RyaW5nXG4pOiBGdW5jdGlvbiB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBhcmdzLmZpbmQoaW1wbGVtZW50c1RvZG8pIGFzIFZpZXdNb2RlbFRvZG8gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgICAgY29uc3QgdG9kb0NtcCA9IG5ldyBUb2RvQ29tcG9uZW50KHRvZG8sIG1vZGVsVHlwZSwgc2VsZWN0b3IpO1xuICAgICAgICAgIHRvZG9DbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW1wbGVtZW50c1RvZG8oYXJnOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhcmcgIT09IG51bGwgJiZcbiAgICB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBhcmcuaWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGFyZy5tb2RlbFR5cGUgPT09ICdzdHJpbmcnXG4gICk7XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gIHByaXZhdGUgdGVtcGxhdGVIdG1sID0gJyc7XG4gIGNvbnN0cnVjdG9yKG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSkge1xuICAgIGlmIChtb2RlbFR5cGUgPT09ICdUb2RvJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZUh0bWwgPSB0b2RvVGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGVtcGxhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVIdG1sO1xuICB9XG5cbiAgcmVwbGFjZVRlbXBsYXRlKHRhcmdldDogUmVnRXhwLCByZXBsYWNlOiBzdHJpbmcgfCBudW1iZXIpOiBUZW1wbGF0ZSB7XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlID09PSAnbnVtYmVyJykge1xuICAgICAgcmVwbGFjZSA9IFN0cmluZyhyZXBsYWNlKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZUh0bWwgPSB0aGlzLnRlbXBsYXRlSHRtbC5yZXBsYWNlKHRhcmdldCwgcmVwbGFjZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgdG9kb1RlbXBsYXRlID0gYFxuICA8ZGl2IGNsYXNzPVwiZWxfZW1wdHlJdGVtXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJibF90b2RvIGhwX21ybDE1IGhwX3BybDIganNfdG9kb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb0lkXCI+e3sgaWQgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfaGlkZGVuIGpzX3RvZG9TdGF0ZVwiPnt7IHN0YXRlIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX3RvZG9faGVhZCB7eyBzdGF0ZUNsYXNzIH19XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImpzX3RvZG9UaXRsZVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJlbF90b2RvVGl0bGUganNfZGF0YVwiPlxuICAgICAgICAgIFRlc3Q6IFN1Y2Nlc3MgVGFzayBDcmVhdGUgYnkgVFMgUHJvZ3JhbVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPmNyZWF0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5zdGFydGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2RldGFpbCBqc190b2RvRGV0YWlsIGlzX2hpZGRlblwiPlxuICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3N0YXR1c1wiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImJsX3RvZG9fcHJvZ3Jlc3NcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIwXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxMFwiIG9uaW5wdXQ9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYy1vdXRwdXQnKS52YWx1ZT10aGlzLnZhbHVlXCIgLz5cbiAgICAgICAgICA8b3V0cHV0IGlkPVwiYy1vdXRwdXRcIiBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPjA8L291dHB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWUganNfdG9kb0VzdGltYXRlVGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+6KaL56mNOjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAgICAgIDEwIGhcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZSBqc190b2RvUmVzdWx0VGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+5a6f57i+OjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbCBqc19kYXRhXCI+XG4gICAgICAgICAgICAgIDEwIGhcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgSURFTlRJRklFUl9USVRMRSA9ICd7eyB0aXRsZSB9fSc7XG5leHBvcnQgY29uc3QgVE9ET19USVRMRV9OT1JNQUxfSFRNTCA9IGBcbiAgICAgICAgPGgzIGNsYXNzPVwiZWxfdG9kb1RpdGxlIGpzX2RhdGFcIj5cbiAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICA8L2gzPlxuYDtcbmV4cG9ydCBjb25zdCBUT0RPX1RJVExFX0VESVRfSFRNTCA9IGBcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJlbF90b2RvVGl0bGVcIiBvbnN1Ym1pdD1cInJldHVybiBmYWxzZTtcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX3RvZG9UaXRsZSBocF9wcjEwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImVsX3RleHRhcmVhIGpzX2RhdGFcIiB2YWx1ZT1cInt7IHRpdGxlIH19XCI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG5gO1xuXG5leHBvcnQgY29uc3QgSURFTlRJRklFUl9ERVRBSUwgPSAne3sgZGV0YWlsIH19JztcbmV4cG9ydCBjb25zdCBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCA9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgIHt7IGRldGFpbCB9fVxuICAgICAgICA8L3A+XG5gO1xuZXhwb3J0IGNvbnN0IFRPRE9fREVUQUlMX0VESVRfSFRNTCA9IGBcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgcm93cz1cIjVcIiBjbGFzcz1cImpzX2RhdGFcIj5cbiAgICAgICAgICAgIHt7IGRldGFpbCB9fVxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZm9ybT5cbmA7XG5cbmV4cG9ydCBjb25zdCBJREVOVElGSUVSX1RJTUUgPSAne3sgdGltZSB9fSc7XG5leHBvcnQgY29uc3QgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICB7eyB0aW1lIH19XG4gICAgICAgICAgICA8L3A+XG5gO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0VMRUNUX0VESVRfSFRNTCA9IGBcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJqc19zZWxlY3RcIiBzaXplPTE+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwLjVoXCI+MC41aDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMWhcIj4xaDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMmhcIj4yaDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM2hcIj4zaDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNGhcIj40aDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNWhcIj41aDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNmhcIj42aDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN2hcIj43aDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMWRheVwiPjFkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEuNWRheVwiPjEuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMmRheVwiPjJkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIuNWRheVwiPjIuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM2RheVwiPjNkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMuNWRheVwiPjMuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNGRheVwiPjRkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQuNWRheVwiPjQuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNWRheVwiPjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUuNWRheVwiPjUuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNmRheVwiPjZkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYuNWRheVwiPjYuNWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN2RheVwiPjdkYXk8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbmA7XG5jb25zdCBUT0RPX0VTVElNQVRFX0hFQUQgPSAnPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7opovnqY06PC9wPic7XG5jb25zdCBUT0RPX1JFU1VMVF9IRUFEID0gJzxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+5a6f57i+OjwvcD4nO1xuXG5leHBvcnQgY29uc3QgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCA9XG4gIFRPRE9fRVNUSU1BVEVfSEVBRCArIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MO1xuZXhwb3J0IGNvbnN0IFRPRE9fUkVTVUxUX05PUk1BTF9IVE1MID1cbiAgVE9ET19SRVNVTFRfSEVBRCArIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MO1xuZXhwb3J0IGNvbnN0IFRPRE9fRVNUSU1BVEVfRURJVF9IVE1MID1cbiAgVE9ET19FU1RJTUFURV9IRUFEICsgVElNRV9TRUxFQ1RfRURJVF9IVE1MO1xuZXhwb3J0IGNvbnN0IFRPRE9fUkVTVUxUX0VESVRfSFRNTCA9IFRPRE9fUkVTVUxUX0hFQUQgKyBUSU1FX1NFTEVDVF9FRElUX0hUTUw7XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5pbXBvcnQge1xuICBJREVOVElGSUVSX0RFVEFJTCxcbiAgVE9ET19ERVRBSUxfRURJVF9IVE1MLFxuICBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCxcbn0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RvZG9UZW1wbGF0ZXMnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0RldGFpbENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGlsZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUGFydHM/OiBUZW1wbGF0ZVBhcnRzSG9sZGVyKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVQYXJ0cyA9IFRlbXBsYXRlUGFydHNIb2xkZXIuY3JlYXRlKFxuICAgICAgSURFTlRJRklFUl9ERVRBSUwsXG4gICAgICBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCxcbiAgICAgIFRPRE9fREVUQUlMX0VESVRfSFRNTFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50SW5uZXJUZXh0KFxuICAgICAgZWRpdGluZ0VsZW1lbnQsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuZWRpdFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5ub3JtYWxTdGF0ZUh0bWwsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5pbXBvcnQge1xuICBJREVOVElGSUVSX1RJTUUsXG4gIFRJTUVfU0VMRUNUX0VESVRfSFRNTCxcbiAgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUwsXG4gIFRPRE9fRVNUSU1BVEVfRURJVF9IVE1MLFxuICBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MLFxuICBUT0RPX1JFU1VMVF9FRElUX0hUTUwsXG4gIFRPRE9fUkVTVUxUX05PUk1BTF9IVE1MLFxufSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvdG9kb1RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvVGltZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGlsZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHlwZTogVG9kb1RpbWVUeXBlIGV4dGVuZHMgc3RyaW5nID8gVG9kb1RpbWVUeXBlIDogdW5kZWZpbmVkLFxuICAgIHRlbXBsYXRlUGFydHM/OiBUZW1wbGF0ZVBhcnRzSG9sZGVyXG4gICkge1xuICAgIHN1cGVyKHRlbXBsYXRlUGFydHMpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdlc3RpbWF0ZScpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cyA9IFRlbXBsYXRlUGFydHNIb2xkZXIuY3JlYXRlKFxuICAgICAgICBJREVOVElGSUVSX1RJTUUsXG4gICAgICAgIFRPRE9fRVNUSU1BVEVfTk9STUFMX0hUTUwsXG4gICAgICAgIFRPRE9fRVNUSU1BVEVfRURJVF9IVE1MXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzdWx0Jykge1xuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgICAgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwsXG4gICAgICAgIFRPRE9fUkVTVUxUX0VESVRfSFRNTFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICBJREVOVElGSUVSX1RJTUUsXG4gICAgICBUSU1FX1NFTEVDVF9OT1JNQUxfSFRNTCxcbiAgICAgIFRJTUVfU0VMRUNUX0VESVRfSFRNTFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29udmVydFRpbWVFbGVtKGVkaXRpbmdFbGVtZW50LCB0aGlzLnRlbXBsYXRlUGFydHMuZWRpdFN0YXRlSHRtbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBMaXN0Qm9444Gu5YCk5oqc44GN44Gg44GZY29udmVydGVy5a6f6KOFXG4gICAgY29udmVydFJlc2V0VGltZUVsZW0oZWRpdGluZ0VsZW1lbnQsIFRPRE9fUkVTVUxUX05PUk1BTF9IVE1MKTtcbiAgfVxufVxuXG5jb25zdCBUb2RvVGltZVR5cGVzID0ge1xuICBOT05FOiAnJyxcbiAgRVNUSU1BVEU6ICdlc3RpbWF0ZScsXG4gIFJlc3VsdDogJ3Jlc3VsdCcsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1RpbWVUeXBlID0gdHlwZW9mIFRvZG9UaW1lVHlwZXNba2V5b2YgdHlwZW9mIFRvZG9UaW1lVHlwZXNdO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGltZUVsZW0oZWxlbTogSFRNTEVsZW1lbnQsIGJhc2VIdG1sOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0YSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2RhdGEnLCBlbGVtKS5pbm5lclRleHQ7XG4gIGVsZW0uaW5uZXJIVE1MID0gYmFzZUh0bWw7XG4gIGNvbnN0IHNlbGVjdEVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgJy5qc19zZWxlY3QnLFxuICAgIGVsZW1cbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNlbGVjdEVsZW0ub3B0aW9uc1tpXS52YWx1ZSA9PT0gZGF0YSkge1xuICAgICAgc2VsZWN0RWxlbS5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFJlc2V0VGltZUVsZW0oZWxlbTogSFRNTEVsZW1lbnQsIHJlcGxhY2VIdG1sOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2VsZWN0RWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAnanNfc2VsZWN0JyxcbiAgICBlbGVtXG4gICkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIHNlbGVjdEVsZW0ub3B0aW9uc1tzZWxlY3RFbGVtLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoZWxlbSwgcmVwbGFjZUh0bWwsIElERU5USUZJRVJfVElNRSk7XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5pbXBvcnQge1xuICBJREVOVElGSUVSX1RJVExFLFxuICBUT0RPX1RJVExFX0VESVRfSFRNTCxcbiAgVE9ET19USVRMRV9OT1JNQUxfSFRNTCxcbn0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RvZG9UZW1wbGF0ZXMnO1xuXG5leHBvcnQgY2xhc3MgVG9kb1RpdGxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVBhcnRzKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICBJREVOVElGSUVSX1RJVExFLFxuICAgICAgVE9ET19USVRMRV9OT1JNQUxfSFRNTCxcbiAgICAgIFRPRE9fVElUTEVfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sLFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmlkZW50aWZ5XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudFZhbHVlKFxuICAgICAgZWRpdGluZ0VsZW1lbnQsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMubm9ybWFsU3RhdGVIdG1sLFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLmlkZW50aWZ5LFxuICAgICAgdmFsdWVcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RvZG9UZW1wbGF0ZXMnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9kbzogVmlld01vZGVsVG9kbyxcbiAgICBwcml2YXRlIG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSxcbiAgICBwcml2YXRlIHNlbGVjdG9yOiBzdHJpbmdcbiAgKSB7fVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnRvZG8ud29ya1N0YXRlID8/ICdXYWl0aW5nJztcbiAgICBjb25zdCBzdGF0ZVN0eWxlQ2xhc3MgPSBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUodGhpcy5tb2RlbFR5cGUpO1xuICAgIHRlbXBsYXRlXG4gICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBzdGF0ZSB9fS9nLCBzdGF0ZSlcbiAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlQ2xhc3MgfX0vZywgc3RhdGVTdHlsZUNsYXNzKVxuICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgaWQgfX0vZywgdGhpcy50b2RvLmlkKTtcbiAgICBjb25zdCBtb3VudGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLicgKyBzdGF0ZVN0eWxlQ2xhc3MgKyB0aGlzLnNlbGVjdG9yXG4gICAgKTtcbiAgICBpZiAobW91bnRlZEVsZW1lbnQpIHtcbiAgICAgIG1vdW50ZWRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICB0ZW1wbGF0ZS5nZXRUZW1wbGF0ZUh0bWwoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFN0YXRlQ2xhc3Moc3RhdGU6IFRvZG9TdGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiAnaXNfJyArIHN0YXRlLnRvTG93ZXJDYXNlKCk7XG59XG4iLCJleHBvcnQgY2xhc3MgSHRtbEFjY2Vzc29yIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50TnVsbGFibGU8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHwgbnVsbCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50czxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IEFycmF5PFQ+IHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0RWxlbWVudElubmVyVGV4dChcbiAgICBlbGVtOiBIVE1MRWxlbWVudCxcbiAgICBiYXNlSHRtbDogc3RyaW5nLFxuICAgIGlkZW50aWZpZXI6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfZGF0YScsIGVsZW0pLmlubmVyVGV4dDtcbiAgICBlbGVtLmlubmVySFRNTCA9IGJhc2VIdG1sLnJlcGxhY2UoaWRlbnRpZmllciwgZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgY29udmVydEVsZW1lbnRWYWx1ZShcbiAgICBlbGVtOiBIVE1MRWxlbWVudCxcbiAgICBiYXNlSHRtbDogc3RyaW5nLFxuICAgIGlkZW50aWZpZXI6IHN0cmluZyxcbiAgICB2YWx1ZT86IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIHZhbHVlID8/XG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19kYXRhJywgZWxlbSkuZ2V0QXR0cmlidXRlKCd2YWx1ZScpID8/XG4gICAgICAnJztcbiAgICBlbGVtLmlubmVySFRNTCA9IGJhc2VIdG1sLnJlcGxhY2UoaWRlbnRpZmllciwgZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdEaXNwbGF5ZXIgfSBmcm9tICcuLi8uLi92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrQnRuSGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdEaXNwbGF5ZXI6IFZpZXdEaXNwbGF5ZXIpIHt9XG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2lzdENyZWF0ZVRhc2tFdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBjcmVhdGVUYXNrQXJlYSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2NyZWF0ZVRhc2tBcmVhJyk7XG4gICAgY29uc3QgY3JlYXRlVGFza0J0biA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfY3JlYXRlVGFza0J0bicsXG4gICAgICBjcmVhdGVUYXNrQXJlYVxuICAgICk7XG4gICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3ZpZXdEaXNwbGF5ZXIuZGlzcGxheUlucHV0VGFza0FyZWFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHtcbiAgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyLFxuICBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXJcbn0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50SGFuZGxlciBleHRlbmRzIEV4dGVuc2lvblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jdE1lbnVIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG4gICAgX2NvbnZlcnRIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG4gICAgX3JlY29udmVydEhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllclxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyUmlnaHRDbGlja0V2ZW50JywgX2N0TWVudUhhbmRsZXIpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnRleHQnLCBfY3RNZW51SGFuZGxlcik7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsIF9jb252ZXJ0SGFuZGxlcik7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZChcbiAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9yZWNvbnZlcnQnLFxuICAgICAgX3JlY29udmVydEhhbmRsZXJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJSaWdodENsaWNrRXZlbnQoKTtcbiAgICB0aGlzLnJlZ2lzdGVyQWRkVG9kb09ic2VydmVyKCk7XG4gICAgdGhpcy5yZWdpc3RlclRvZG9FbGVtRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJSaWdodENsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG8nKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHkoJ3JlZ2lzdGVyUmlnaHRDbGlja0V2ZW50JylcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyQWRkVG9kb09ic2VydmVyKCkge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcbiAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShyZWMuYWRkZWROb2Rlcyk7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtID0gZ2V0VG9kb0VsZW1Gcm9tTm9kZXMobm9kZXMpO1xuICAgICAgICBpZiAoIXRvZG9FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5KCdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb250ZXh0JylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICAgICAnLmpzX3RvZG9UaXRsZScsXG4gICAgICAgICAgdG9kb0VsZW1cbiAgICAgICAgKTtcbiAgICAgICAgdG9kb1RpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdrZXlwcmVzcycsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfcmVjb252ZXJ0JyxcbiAgICAgICAgICAgICdUaXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRvZG9UaXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnZGJsY2xpY2snLFxuICAgICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnZlcnQnLFxuICAgICAgICAgICAgJ1RpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvciAoY29uc3QgdG9kb0xpc3Qgb2YgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG9saXN0JykpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodG9kb0xpc3QsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclRvZG9FbGVtRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgdGl0bGVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1RpdGxlJyk7XG4gICAgdGl0bGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGJsY2xpY2snLFxuICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JyxcbiAgICAgICAgJ1RpdGxlJ1xuICAgICAgKVxuICAgICk7XG4gICAgdGl0bGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICB0aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlwcmVzcycsXG4gICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX3JlY29udmVydCcsXG4gICAgICAgICdUaXRsZSdcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gY29uc3QgZGV0YWlsRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9EZXRhaWwnKTtcbiAgICBjb25zdCBlc3RpbWF0ZVRpbWVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc190b2RvRXN0aW1hdGVUaW1lJ1xuICAgICk7XG4gICAgZXN0aW1hdGVUaW1lRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2RibGNsaWNrJyxcbiAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICdFc3RpbWF0ZVRpbWUnXG4gICAgICApXG4gICAgKTtcbiAgICBlc3RpbWF0ZVRpbWVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdFRpbWVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1Jlc3VsdFRpbWUnKTtcbiAgICByZXN1bHRUaW1lRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2RibGNsaWNrJyxcbiAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICdSZXN1bHRUaW1lJ1xuICAgICAgKVxuICAgICk7XG4gICAgcmVzdWx0VGltZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1ByaW9yaXR5Jyk7XG4gICAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvVXJnZW5jeScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9FbGVtRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBjb25zdCBodG1sRWxlbSA9IG5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbGVtLmNsYXNzTGlzdCAmJiBodG1sRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzX3RvZG8nKSkge1xuICAgICAgcmV0dXJuIGh0bWxFbGVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IFRvZG9TdGF0ZSwgaXNUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9kb0NvbnRleHRNZW51SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIHByaXZhdGUgdGFyZ2V0VG9kbzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIG9wZW5Db250ZXh0TWVudUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVXYWl0aW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZUlucHJvZ3Jlc3NGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGRlbGV0ZVRvZG9GdW5jOiBFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IG51bGw7XG4gICAgdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db250ZXh0TWVudShlKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVXYWl0aW5nRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ1dhaXRpbmcnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0luUHJvZ3Jlc3MnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnQ29tcGxldGVkJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlUGVuZGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdQZW5kaW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZVRvZG9GdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUb2RvKCk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseSgpOiBFdmVudExpc3RlbmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IGUgYXMgTW91c2VFdmVudDtcbiAgICBjb25zdCBjdE1lbnUgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvQ29udGV4dE1lbnUnKTtcbiAgICBjdE1lbnUuc3R5bGUubGVmdCA9IFN0cmluZyhldmVudC5wYWdlWCkgKyAncHgnO1xuICAgIGN0TWVudS5zdHlsZS50b3AgPSBTdHJpbmcoZXZlbnQucGFnZVkpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy50YXJnZXRUb2RvID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKCF0aGlzLnRhcmdldFRvZG8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VXYWl0aW5nJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlV2FpdGluZ0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUlucHJvZ3Jlc3MnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlQ29tcGxldGVkJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlUGVuZGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19tZW51VG9kb0RlbGV0ZScsIGN0TWVudSkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmRlbGV0ZVRvZG9GdW5jXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoc3RhdGU6IFRvZG9TdGF0ZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnRhcmdldFRvZG8gfHxcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRoaXMudGFyZ2V0VG9kbylcbiAgICAgICAgLmlubmVyVGV4dCA9PT0gc3RhdGVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnJlbW92ZSgpO1xuICAgIHRoaXMudGFyZ2V0VG9kby5yZW1vdmUoKTtcbiAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgIGNvbnN0IHRhcmdldFZtID0gdGhpcy5nZW5lcmF0ZVZpZXdNb2RlbCh0aGlzLnRhcmdldFRvZG8pO1xuICAgIGNvbnN0IHZtQnVpbGRlciA9IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5Lm5ld0luc3RhbmNlKCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcigpO1xuICAgIHZtU2VydmljZS5kZWxldGVWaWV3TW9kZWwodGFyZ2V0Vm0pO1xuICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoXG4gICAgICAnVG9kbycsXG4gICAgICB2bUJ1aWxkZXIud2l0aCh0YXJnZXRWbSkud2l0aCh7IHdvcmtTdGF0ZTogc3RhdGUgfSkuYnVpbGQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVRvZG8oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRhcmdldFRvZG8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldlRvZG9FbXB0eSA9IHRoaXMudGFyZ2V0VG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMudGFyZ2V0VG9kby5yZW1vdmUoKTtcbiAgICBwcmV2VG9kb0VtcHR5Py5yZW1vdmUoKTtcblxuICAgIFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCkuZGVsZXRlVmlld01vZGVsKFxuICAgICAgdGhpcy5nZW5lcmF0ZVZpZXdNb2RlbCh0aGlzLnRhcmdldFRvZG8pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVWaWV3TW9kZWwoXG4gICAgdG9kbzogSFRNTEVsZW1lbnQsXG4gICAgc3RhdGU/OiBzdHJpbmdcbiAgKTogVmlld01vZGVsIHwgbmV2ZXIge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0lkJywgdG9kbykuaW5uZXJUZXh0XG4gICAgKTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3RhdGUgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvU3RhdGUnLCB0b2RvKS5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGlkIDwgMCB8fCAhaXNUb2RvU3RhdGUoc3RhdGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICAgIH1cbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKCk7XG4gICAgcmV0dXJuIHZtQnVpbGRlclxuICAgICAgLndpdGgoeyBpZDogaWQgfSlcbiAgICAgIC53aXRoKHsgbW9kZWxUeXBlOiAnVG9kbycgfSlcbiAgICAgIC53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KVxuICAgICAgLmJ1aWxkKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgcHJpdmF0ZSBjb252ZXJ0VGl0bGVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnREZXRhaWxGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoaWxkQ29tcG9uZW50czogQ29tcG9uZW50SG9sZGVyPFRvZG9FbGVtZW50LCBDb252ZXJ0aWJsZUNvbXBvbmVudD4gLy9wcml2YXRlIHJlc2V0RWRpdGluZ0hhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyXG4gICkge1xuICAgIHRoaXMuY29udmVydFRpdGxlRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0VGl0bGUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnREZXRhaWxGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnREZXRhaWwoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnRFc3RpbWF0ZVRpbWUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnZlcnRSZXN1bHRUaW1lRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0UmVzdWx0VGltZShlKTtcbiAgICB9O1xuICB9XG5cbiAgc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICBhcmc6IFRvZG9FbGVtZW50IGV4dGVuZHMgc3RyaW5nID8gVG9kb0VsZW1lbnQgOiB1bmRlZmluZWRcbiAgKTogRXZlbnRMaXN0ZW5lciB8IG5ldmVyIHtcbiAgICBpZiAoYXJnID09PSAnVGl0bGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VGl0bGVGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnRGV0YWlsJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydERldGFpbEZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdFc3RpbWF0ZVRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ1Jlc3VsdFRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmVzdWx0VGltZUZ1bmM7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUaXRsZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnVGl0bGUnKTtcbiAgICBjb25zdCB0YXJnZXRIdG1sRWxlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGl0bGVDbXAucmVnaXN0ZXJFZGl0aW5nRWxlbWVudCh0YXJnZXRIdG1sRWxlbSk7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RGV0YWlsKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdEZXRhaWwnKTtcbiAgICB0aXRsZUNtcC5yZWdpc3RlckVkaXRpbmdFbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHRpdGxlQ21wLmNvbnZlcnRDb21wb25lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVzdGltYXRlVGltZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnRXN0aW1hdGVUaW1lJyk7XG4gICAgdGl0bGVDbXAucmVnaXN0ZXJFZGl0aW5nRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICB0aXRsZUNtcC5jb252ZXJ0Q29tcG9uZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdSZXN1bHRUaW1lJyk7XG4gICAgdGl0bGVDbXAucmVnaXN0ZXJFZGl0aW5nRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICB0aXRsZUNtcC5jb252ZXJ0Q29tcG9uZW50KCk7XG4gIH1cbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvUHJpb3JpdHknKTtcbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvVXJnZW5jeScpO1xufVxuIiwiaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi90b2RvRWxlbWVudCc7XG5pbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIgfSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIFRvZG9SZWNvbnZlcnRFbGVtZW50SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIHByaXZhdGUgcmVjb252ZXJ0VGl0bGVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIHJlY29udmVydERldGFpbEZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgcmVjb252ZXJ0RXN0aW1hdGVUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSByZWNvbnZlcnRSZXN1bHRUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoaWxkQ29tcG9uZW50czogQ29tcG9uZW50SG9sZGVyPFRvZG9FbGVtZW50LCBDb252ZXJ0aWJsZUNvbXBvbmVudD5cbiAgKSB7XG4gICAgdGhpcy5yZWNvbnZlcnRUaXRsZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVjb252ZXJ0VGl0bGUoZSBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMucmVjb252ZXJ0RGV0YWlsRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWNvbnZlcnREZXRhaWwoZSk7XG4gICAgfTtcbiAgICB0aGlzLnJlY29udmVydEVzdGltYXRlVGltZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVjb252ZXJ0RXN0aW1hdGVUaW1lKGUpO1xuICAgIH07XG4gICAgdGhpcy5yZWNvbnZlcnRSZXN1bHRUaW1lRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWNvbnZlcnRSZXN1bHRUaW1lKGUpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgIGFyZzogVG9kb0VsZW1lbnQgZXh0ZW5kcyBzdHJpbmcgPyBUb2RvRWxlbWVudCA6IHVuZGVmaW5lZFxuICApOiBFdmVudExpc3RlbmVyIHwgbmV2ZXIge1xuICAgIGlmIChhcmcgPT09ICdUaXRsZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlY29udmVydFRpdGxlRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ0RldGFpbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlY29udmVydERldGFpbEZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdFc3RpbWF0ZVRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnUmVzdWx0VGltZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlY29udmVydFJlc3VsdFRpbWVGdW5jO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNvbnZlcnRUaXRsZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdUaXRsZScpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICB0aXRsZUNtcC5yZWNvbnZlcnRDb21wb25lbnQodGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRpdGxlQ21wLmNsZWFyRWRpdGluZ0VsZW1lbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlY29udmVydERldGFpbChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnRGV0YWlsJyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGl0bGVDbXAucmVjb252ZXJ0Q29tcG9uZW50KHRhcmdldC52YWx1ZSk7XG4gICAgdGl0bGVDbXAuY2xlYXJFZGl0aW5nRWxlbWVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNvbnZlcnRFc3RpbWF0ZVRpbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ0VzdGltYXRlVGltZScpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRpdGxlQ21wLnJlY29udmVydENvbXBvbmVudCh0YXJnZXQudmFsdWUpO1xuICAgIHRpdGxlQ21wLmNsZWFyRWRpdGluZ0VsZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVjb252ZXJ0UmVzdWx0VGltZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnUmVzdWx0VGltZScpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRpdGxlQ21wLnJlY29udmVydENvbXBvbmVudCh0YXJnZXQudmFsdWUpO1xuICAgIHRpdGxlQ21wLmNsZWFyRWRpdGluZ0VsZW1lbnQoKTtcbiAgfVxuICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9Qcmlvcml0eScpO1xuICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9VcmdlbmN5Jyk7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHJlZ2lzdGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHRlbnNpb25WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJcbiAgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBwcm90ZWN0ZWQgc3ViSGFuZGxlckhvbGRlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIgPSBuZXcgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyKCk7XG4gIH1cbiAgYWJzdHJhY3QgcmVnaXN0ZXIoKTogdm9pZDtcbiAgYWRkSGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcik6IHRoaXMge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0SGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICAgIHJldHVybiB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuZ2V0KG1ldGhvZE5hbWUpO1xuICB9XG59XG5cbmNsYXNzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllckhvbGRlciB7XG4gIHN1YkhhbmRsZXJzOiBNYXA8c3RyaW5nLCBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXI+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG4gIGFkZChtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcikge1xuICAgIHRoaXMuc3ViSGFuZGxlcnMuc2V0KG1ldGhvZE5hbWUsIGhhbmRsZXIpO1xuICB9XG4gIGdldChtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIgfCBuZXZlciB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuc3ViSGFuZGxlcnMuZ2V0KG1ldGhvZE5hbWUpO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoJycpO1xuICB9XG4gIHN1cHBseTxUPihcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZWxlbT86IFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogdW5kZWZpbmVkXG4gICk6IEV2ZW50TGlzdGVuZXIge1xuICAgIHJldHVybiB0aGlzLmdldChtZXRob2ROYW1lKS5zdXBwbHkoZWxlbSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBzdXBwbHk8VD4oYXJnPzogVCBleHRlbmRzIHN0cmluZyA/IFQgOiB1bmRlZmluZWQpOiBFdmVudExpc3RlbmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyXG4gIGV4dGVuZHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgY2FsbDxUPihhcmc/OiBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IHVuZGVmaW5lZCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIgfSBmcm9tICcuL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHByaXZhdGUgaGFuZGxlcnM6IEFycmF5PFZpZXdFdmVudEhhbmRsZXJSZWdpc3Rlcj47XG4gIHByaXZhdGUgY29uc3RydWN0b3IoYXJnczogVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyW10pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gYXJncztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChcbiAgICAuLi5hcmdzOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJbXVxuICApOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzIHtcbiAgICByZXR1cm4gbmV3IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMoYXJncyk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXIucmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFZpZXdEaXNwbGF5ZXIge1xuICBwdWJsaWMgZGlzcGxheUlucHV0VGFza0FyZWEoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGU8SFRNTElucHV0RWxlbWVudD4oXG4gICAgICAgICcjcmFkaW9DcmVhdGVUYXNrRGV0YWlsJ1xuICAgICAgKT8uY2hlY2tlZFxuICAgICkge1xuICAgICAgLy8gY29uc3QgY2xhc3NMaXN0ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfaW5wdXRUYXNrRGV0YWlsQXJlYScpXG4gICAgICAvLyAgIC5jbGFzc0xpc3Q7XG4gICAgICAvLyBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdpc19oaWRkZW4nKSkge1xuICAgICAgLy8gICBjbGFzc0xpc3QucmVtb3ZlKCdpc19oaWRkZW4nKTtcbiAgICAgIC8vICAgY2xhc3NMaXN0LmFkZCgnaXNfYWN0aXZlJyk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICAgICdUb2RvJ1xuICAgICAgKTtcbiAgICAgIHZtQnVpbGRlci53aXRoKHsgd29ya1N0YXRlOiAnV2FpdGluZycgfSk7XG4gICAgICBpZiAodm1CdWlsZGVyKSB7XG4gICAgICAgIGNvbnN0IHZtU2VydmljZSA9IFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoJ1RvZG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIGluaXRUb2RvIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuL3ZpZXdNb2RlbEJ1aWxkZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICBzdGF0aWMgbmV3SW5zdGFuY2UoKTogVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIodHlwZT86IFZpZXdNb2RlbFR5cGUpOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IodHlwZSk7XG4gIH1cbn1cblxudHlwZSBBbGxWaWV3TW9kZWwgPSBWaWV3TW9kZWwgJiBWaWV3TW9kZWxUb2RvO1xudHlwZSBBbGxWaWV3TW9kZWxLZXkgPSBrZXlvZiBBbGxWaWV3TW9kZWw7XG5cbmNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcml2YXRlIGJ1aWxkZXI6IFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPjtcblxuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSkge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKCkud2l0aCh7IG1vZGVsVHlwZTogbW9kZWxUeXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQmFzZUJ1aWxkZXIoKS53aXRoKHtcbiAgICAgICAgbW9kZWxUeXBlOiAnVmlld01vZGVsJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdpdGgoXG4gICAgaW5wdXQ6IHsgW2tleSBpbiBBbGxWaWV3TW9kZWxLZXldPzogQWxsVmlld01vZGVsW2tleV0gfVxuICApOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIud2l0aChpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBWaWV3TW9kZWwge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8VCBleHRlbmRzIFZpZXdNb2RlbD5cbiAgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFQ+LCBQYXJ0aWFsPFZpZXdNb2RlbD4ge1xuICBpZD86IG51bWJlcjtcbiAgbW9kZWxUeXBlPzogVmlld01vZGVsVHlwZTtcblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVF0/OiBUW2tleV0gfSk6IHRoaXMge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgICAgdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgW2tleV06IGlucHV0W2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhJZChpZDogbnVtYmVyKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2lkJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgaWQ6IGlkIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhNb2RlbFR5cGUoXG4gICAgdHlwZTogVmlld01vZGVsVHlwZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnbW9kZWxUeXBlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgbW9kZWxUeXBlOiB0eXBlIH0pO1xuICB9XG5cbiAgYnVpbGQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdlbmVyYXRlSW5zdGFuY2UoKTogVDtcbn1cblxuY2xhc3MgVmlld01vZGVsQmFzZUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkID8/IC0xO1xuICAgIGNvbnN0IHR5cGU6IFZpZXdNb2RlbFR5cGUgPSB0aGlzLm1vZGVsVHlwZSA/PyAnVmlld01vZGVsJztcbiAgICBjb25zdCBvYmo6IFZpZXdNb2RlbCA9IHsgaWQ6IGlkLCBtb2RlbFR5cGU6IHR5cGUgfTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgIT09ICdpZCcgfHwgcHJvcCAhPT0gJ21vZGVsVHlwZScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3BdOiB0aGlzW3Byb3BdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRWaWV3TW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiAnVG9kbyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gaW5pdFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0TmV4dElkKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBnZXRWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSwgdmlld01vZGVsPzogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAoIXZtTWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgdmlld01vZGVsID09PSB1bmRlZmluZWRcbiAgICAgID8gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KS5idWlsZCgpKVxuICAgICAgOiB2bU1hbmFnZXIuY3JlYXRlKHZpZXdNb2RlbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIudXBkYXRlKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3Ivdmlld0NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBWaWV3Q29tcG9uZW50KCdUb2RvJywgJy5qc190b2RvbGlzdCcpXG5leHBvcnQgY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFZpZXdNb2RlbFRvZG8ge1xuICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICBwcml2YXRlIF9tb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGU7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnRzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZURhdGU6IERhdGU7XG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT86IERhdGU7XG4gIHByaXZhdGUgX2VzdGltYXRlSG91cjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBwcml2YXRlIF9kaXNwbGF5T3JkZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0b2RvQmFzZT86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvID0gaW5pdFRvZG8odG9kb0Jhc2UgPz8ge30pO1xuICAgIHRoaXMuX2lkID0gdG9kby5pZDtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSB0b2RvLm1vZGVsVHlwZTtcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgdGhpcy5fY29udGVudHMgPSB0b2RvLmNvbnRlbnRzO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvLmNyZWF0ZURhdGU7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kby5zdGFydERhdGU7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gdG9kby5lc3RpbWF0ZUhvdXI7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IHRvZG8ucmVzdWx0SG91cjtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSB0b2RvLndvcmtTdGF0ZTtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvLmRpc3BsYXlPcmRlcjtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kbyhiYXNlOiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+KTogVmlld01vZGVsVG9kbyB7XG4gIGNvbnN0IHRhcmdldDogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiA9IHt9O1xuICB0YXJnZXQuaWQgPSBiYXNlPy5pZCA/PyAtMTtcbiAgdGFyZ2V0Lm1vZGVsVHlwZSA9ICdUb2RvJztcbiAgdGFyZ2V0LnRpdGxlID0gYmFzZT8udGl0bGUgPz8gJyc7XG4gIHRhcmdldC5jb250ZW50cyA9IGJhc2U/LmNvbnRlbnRzID8/ICcnO1xuICB0YXJnZXQuY3JlYXRlRGF0ZSA9IGJhc2U/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgdGFyZ2V0LnN0YXJ0RGF0ZSA9IGJhc2U/LnN0YXJ0RGF0ZSA/PyB1bmRlZmluZWQ7XG4gIHRhcmdldC5lc3RpbWF0ZUhvdXIgPSBiYXNlPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgdGFyZ2V0LnJlc3VsdEhvdXIgPSBiYXNlPy5yZXN1bHRIb3VyID8/IDA7XG4gIHRhcmdldC53b3JrU3RhdGUgPSBiYXNlPy53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICB0YXJnZXQuZGlzcGxheU9yZGVyID0gYmFzZT8uZGlzcGxheU9yZGVyID8/IDA7XG4gIHJldHVybiB0YXJnZXQgYXMgVmlld01vZGVsVG9kbztcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb2xpc3QgfSBmcm9tICcuL3RvZG9saXN0JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Cb2FyZCB7XG4gIHByaXZhdGUgdG9kb2xpc3RzOiBNYXA8VG9kb1N0YXRlLCBUb2RvbGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgb2YgT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKSkge1xuICAgICAgdGhpcy50b2RvbGlzdHMuc2V0KHN0YXRlTmFtZSwgbmV3IFRvZG9saXN0KHN0YXRlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSk/LmFkZFRvZG8odG9kbyk7XG4gIH1cblxuICBnZXRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRvZG8pIHtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZGVsZXRlVG9kbyhpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHRvZG9saXN0ID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKTtcbiAgICBpZiAodG9kb2xpc3QpIHtcbiAgICAgIHJldHVybiB0b2RvbGlzdC51cGRhdGVUb2RvKHRvZG8pO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBUb2RvU3RhdGVzID0ge1xuICBXQUlUSU5HOiAnV2FpdGluZycsXG4gIElOX1BST0dSRVNTOiAnSW5Qcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RvU3RhdGUoc3RhdGU6IGFueSk6IHN0YXRlIGlzIFRvZG9TdGF0ZSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpLmluY2x1ZGVzKHN0YXRlKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb2xpc3Qge1xuICBwcml2YXRlIF90b2RvbGlzdDogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlTmFtZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fdG9kb2xpc3QgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgdG9kb2xpc3QoKTogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvbGlzdDtcbiAgfVxuXG4gIGdldCBzdGF0ZU5hbWUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVOYW1lO1xuICB9XG5cbiAgZ2V0VG9kbyhpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3QuZ2V0KGlkKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy5fdG9kb2xpc3QudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKGRlbFRvZG9PcmRlciA8IHRvZG8uZGlzcGxheU9yZGVyKSB7XG4gICAgICAgICAgdG9kby5kaXNwbGF5T3JkZXIgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZG9saXN0LmRlbGV0ZShpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50b2RvbGlzdC5nZXQodG9kby5pZCkpIHtcbiAgICAgIHRoaXMudG9kb2xpc3Quc2V0KHRvZG8uaWQsIHRvZG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbywgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvQm9hcmQgfSBmcm9tICcuL3RvZG9Cb2FyZCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlcic7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmlld1RvZG9NYW5hZ2VyIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWxUb2RvPiB7XG4gIHByaXZhdGUgZmluYWxJZDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90b2RvQm9hcmQ6IFRvZG9Cb2FyZCkge1xuICAgIHRoaXMuZmluYWxJZCA9IDA7XG4gIH1cblxuICBnZXROZXh0SWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maW5hbElkICsgMTtcbiAgfVxuXG4gIGNyZWF0ZSh2bU1vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odm1Nb2RlbCk7XG4gICAgaWYgKHRvZG9PYmouaWQgPiB0aGlzLmZpbmFsSWQpIHtcbiAgICAgIHRoaXMuZmluYWxJZCA9IHRvZG9PYmouaWQ7XG4gICAgfVxuICAgIHRoaXMuX3RvZG9Cb2FyZC5hZGRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGdldERhdGEodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC5nZXRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2RvT2JqOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC51cGRhdGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvQm9hcmQuZGVsZXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=