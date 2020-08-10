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
var editState = new viewEditModeState_1.ViewEditModeState();
var todoResetHandler = new todoResetElementHandler_1.TodoResetElementHandler(editState);
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewEventHandlers_1.ViewEventHandlerRegisters.init(new TodoComponentHandler_1.TodoComponentHandler(new TodoContextMenuHandler_1.TodoContextMenuHandler(), new todoConvertElementHandler_1.TodoConvertElementHandler(editState, todoResetHandler)), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer()), new windowHandler_1.WindowHandler(todoResetHandler)).register();
document.body.addEventListener('click', function () {
    htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});


/***/ }),

/***/ "./src/ts/component/decorator/todoComponent.ts":
/*!*****************************************************!*\
  !*** ./src/ts/component/decorator/todoComponent.ts ***!
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
exports.TodoComponent = void 0;
var todoTemplate_1 = __webpack_require__(/*! ../todoTemplate */ "./src/ts/component/todoTemplate.ts");
function TodoComponent(modelType, selector) {
    return function (constructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a;
                var _this = _super.apply(this, __spread(args)) || this;
                var todo = args.find(implementsTodo);
                if (todo === undefined) {
                    return _this;
                }
                var state = (_a = todo.workState) !== null && _a !== void 0 ? _a : 'Waiting';
                var stateStyleClass = convertStateClass(state);
                var template = new todoTemplate_1.Template(modelType);
                template
                    .replaceTemplate(/{{ state }}/g, state)
                    .replaceTemplate(/{{ stateClass }}/g, stateStyleClass)
                    .replaceTemplate(/{{ id }}/g, todo.id);
                var mountedElement = document.querySelector('.' + stateStyleClass + selector);
                if (mountedElement) {
                    mountedElement.insertAdjacentHTML('afterbegin', template.getTemplateHtml());
                }
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
exports.TodoComponent = TodoComponent;
function implementsTodo(arg) {
    return (arg !== null &&
        typeof arg === 'object' &&
        typeof arg.id === 'number' &&
        typeof arg.modelType === 'string');
}
function convertStateClass(state) {
    return 'is_' + state.toLowerCase();
}


/***/ }),

/***/ "./src/ts/component/todoTemplate.ts":
/*!******************************************!*\
  !*** ./src/ts/component/todoTemplate.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO_RESULT_EDIT_HTML = exports.TODO_ESTIMATE_EDIT_HTML = exports.TODO_RESULT_NORMAL_HTML = exports.TODO_ESTIMATE_NORMAL_HTML = exports.IDENTIFIER_TIME = exports.TODO_DETAIL_EDIT_HTML = exports.TODO_DETAIL_NORMAL_HTML = exports.IDENTIFIER_DETAIL = exports.TODO_TITLE_EDIT_HTML = exports.TODO_TITLE_NORMAL_HTML = exports.IDENTIFIER_TITLE = exports.Template = void 0;
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
var TIME_SELECT_NORMAL_HTML = "\n          <p class=\"el_label el_label__small js_data\">\n              {{ time }}\n            </p>\n";
var TIME_SELECT_EDIT_HTML = "\n          <form>\n            <select class=\"js_select\" size=1>\n              <option value=\"0.5h\">0.5h</option>\n              <option value=\"1h\">1h</option>\n              <option value=\"2h\">2h</option>\n              <option value=\"3h\">3h</option>\n              <option value=\"4h\">4h</option>\n              <option value=\"5h\">5h</option>\n              <option value=\"6h\">6h</option>\n              <option value=\"7h\">7h</option>\n              <option value=\"1day\">1day</option>\n              <option value=\"1.5day\">1.5day</option>\n              <option value=\"2day\">2day</option>\n              <option value=\"2.5day\">2.5day</option>\n              <option value=\"3day\">3day</option>\n              <option value=\"3.5day\">3.5day</option>\n              <option value=\"4day\">4day</option>\n              <option value=\"4.5day\">4.5day</option>\n              <option value=\"5day\">5day</option>\n              <option value=\"5.5day\">5.5day</option>\n              <option value=\"6day\">6day</option>\n              <option value=\"6.5day\">6.5day</option>\n              <option value=\"7day\">7day</option>\n            </select>\n          </form>\n";
var TODO_ESTIMATE_HEAD = '<p class="el_label el_label__small">見積:</p>';
var TODO_RESULT_HEAD = '<p class="el_label el_label__small">実績:</p>';
exports.TODO_ESTIMATE_NORMAL_HTML = TODO_ESTIMATE_HEAD + TIME_SELECT_NORMAL_HTML;
exports.TODO_RESULT_NORMAL_HTML = TODO_RESULT_HEAD + TIME_SELECT_NORMAL_HTML;
exports.TODO_ESTIMATE_EDIT_HTML = TODO_ESTIMATE_HEAD + TIME_SELECT_EDIT_HTML;
exports.TODO_RESULT_EDIT_HTML = TODO_RESULT_HEAD + TIME_SELECT_EDIT_HTML;


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
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var todoTemplate_1 = __webpack_require__(/*! ../../../../component/todoTemplate */ "./src/ts/component/todoTemplate.ts");
var TodoElements = {
    TITLE: 'Title',
    DETAIL: 'Detail',
    ESTIMATE: 'EstimateTime',
    RESULT: 'ResultTime',
};
var TodoConvertElementHandler = (function () {
    function TodoConvertElementHandler(editState, resetEditingHandler) {
        var _this = this;
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
        this.editState.editingTodoTitle = event.currentTarget;
        htmlAccessor_1.HtmlAccessor.convertElement(this.editState.editingTodoTitle, todoTemplate_1.TODO_TITLE_EDIT_HTML, todoTemplate_1.IDENTIFIER_TITLE);
    };
    TodoConvertElementHandler.prototype.convertDetail = function (event) {
        this.resetEditingHandler.call();
        var elem = event.currentTarget;
        htmlAccessor_1.HtmlAccessor.convertElement(elem, todoTemplate_1.TODO_DETAIL_EDIT_HTML, todoTemplate_1.IDENTIFIER_DETAIL);
    };
    TodoConvertElementHandler.prototype.convertEstimateTime = function (event) {
        this.resetEditingHandler.call();
        var elem = event.currentTarget;
        convertTimeElem(elem, todoTemplate_1.TODO_ESTIMATE_EDIT_HTML);
    };
    TodoConvertElementHandler.prototype.convertResultTime = function (event) {
        this.resetEditingHandler.call();
        var elem = event.currentTarget;
        convertTimeElem(elem, todoTemplate_1.TODO_RESULT_EDIT_HTML);
    };
    return TodoConvertElementHandler;
}());
exports.TodoConvertElementHandler = TodoConvertElementHandler;
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


/***/ }),

/***/ "./src/ts/main/view/handler/impl/todoResetElementHandler.ts":
/*!******************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/todoResetElementHandler.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResetElementHandler = void 0;
var todoTemplate_1 = __webpack_require__(/*! ../../../../component/todoTemplate */ "./src/ts/component/todoTemplate.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var TodoResetElementHandler = (function () {
    function TodoResetElementHandler(editState) {
        var _this = this;
        this.editState = editState;
        this.resetEditModeFunc = function (e) {
            _this.resetEditModeFunc(e);
        };
    }
    TodoResetElementHandler.prototype.supply = function () {
        return this.resetEditModeFunc;
    };
    TodoResetElementHandler.prototype.call = function () {
        this.resetEditMode();
    };
    TodoResetElementHandler.prototype.resetEditMode = function () {
        if (this.editState.isEditingTodoTitle()) {
            htmlAccessor_1.HtmlAccessor.convertElement(this.editState.editingTodoTitle, todoTemplate_1.TODO_TITLE_NORMAL_HTML, todoTemplate_1.IDENTIFIER_TITLE);
            this.editState.resetEditingTodoTitle();
        }
        if (this.editState.isEditingTodoDetail()) {
            htmlAccessor_1.HtmlAccessor.convertElement(this.editState.editingTodoDetail, todoTemplate_1.TODO_DETAIL_NORMAL_HTML, todoTemplate_1.IDENTIFIER_DETAIL);
            this.editState.resetEditingTodoDetail();
        }
        if (this.editState.isEditingTodoEstimate()) {
            convertResetTimeElem(this.editState.editingTodoEstimate, todoTemplate_1.TODO_ESTIMATE_NORMAL_HTML);
            this.editState.resetEditingTodoEstimate();
        }
        if (this.editState.isEditingTodoResult()) {
            convertResetTimeElem(this.editState.editingTodoResult, todoTemplate_1.TODO_RESULT_NORMAL_HTML);
            this.editState.resetEditingTodoResult();
        }
    };
    return TodoResetElementHandler;
}());
exports.TodoResetElementHandler = TodoResetElementHandler;
function convertResetTimeElem(elem, replaceHtml) {
    var selectElem = htmlAccessor_1.HtmlAccessor.getHtmlElement('js_select', elem);
    selectElem.options[selectElem.selectedIndex].value;
    htmlAccessor_1.HtmlAccessor.convertElement(elem, replaceHtml, todoTemplate_1.IDENTIFIER_TIME);
}


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
var todoComponent_1 = __webpack_require__(/*! ../../../component/decorator/todoComponent */ "./src/ts/component/decorator/todoComponent.ts");
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
        todoComponent_1.TodoComponent('Todo', '.js_todolist')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RvZG9UZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9DcmVhdGVUYXNrQnRuSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29tcG9uZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29udGV4dE1lbnVIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL3RvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb1Jlc2V0RWxlbWVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL2ltcGwvd2luZG93SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvdmlld0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L2hhbmRsZXIvdmlld0V2ZW50SGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy92aWV3RGlzcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0VkaXRNb2RlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld01vZGVsQnVpbGRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsTWFuYWdlckZhY3RvcnlJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby92aWV3VG9kb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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Q0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFzQjtRQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUE2QztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBN0JZLDBDQUFlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2FwcC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsTWFuYWdlckZhY3RvcnlJbXBsJztcbmltcG9ydCB7IFRvZG9Db250ZXh0TWVudUhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbnRleHRNZW51SGFuZGxlcic7XG5pbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVycyc7XG5pbXBvcnQgeyBUb2RvQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29tcG9uZW50SGFuZGxlcic7XG5pbXBvcnQgeyBDcmVhdGVUYXNrQnRuSGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC9DcmVhdGVUYXNrQnRuSGFuZGxlcic7XG5pbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBWaWV3RWRpdE1vZGVTdGF0ZSB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdFZGl0TW9kZVN0YXRlJztcbmltcG9ydCB7IFRvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L2hhbmRsZXIvaW1wbC90b2RvUmVzZXRFbGVtZW50SGFuZGxlcic7XG5pbXBvcnQgeyBXaW5kb3dIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL3dpbmRvd0hhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuY29uc3QgZWRpdFN0YXRlID0gbmV3IFZpZXdFZGl0TW9kZVN0YXRlKCk7XG5jb25zdCB0b2RvUmVzZXRIYW5kbGVyID0gbmV3IFRvZG9SZXNldEVsZW1lbnRIYW5kbGVyKGVkaXRTdGF0ZSk7XG5WaWV3TW9kZWxTZXJ2aWNlSW1wbC5pbml0KG5ldyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCgpKTtcblxuVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycy5pbml0KFxuICBuZXcgVG9kb0NvbXBvbmVudEhhbmRsZXIoXG4gICAgbmV3IFRvZG9Db250ZXh0TWVudUhhbmRsZXIoKSxcbiAgICBuZXcgVG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlcihlZGl0U3RhdGUsIHRvZG9SZXNldEhhbmRsZXIpXG4gICksXG4gIG5ldyBDcmVhdGVUYXNrQnRuSGFuZGxlcihuZXcgVmlld0Rpc3BsYXllcigpKSxcbiAgbmV3IFdpbmRvd0hhbmRsZXIodG9kb1Jlc2V0SGFuZGxlcilcbikucmVnaXN0ZXIoKTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4uL3RvZG9UZW1wbGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUb2RvQ29tcG9uZW50KFxuICBtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUsXG4gIHNlbGVjdG9yOiBzdHJpbmdcbik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcgKC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IGFyZ3MuZmluZChpbXBsZW1lbnRzVG9kbykgYXMgVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRvZG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRvZG8ud29ya1N0YXRlID8/ICdXYWl0aW5nJztcbiAgICAgICAgY29uc3Qgc3RhdGVTdHlsZUNsYXNzID0gY29udmVydFN0YXRlQ2xhc3Moc3RhdGUpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShtb2RlbFR5cGUpO1xuICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlIH19L2csIHN0YXRlKVxuICAgICAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlQ2xhc3MgfX0vZywgc3RhdGVTdHlsZUNsYXNzKVxuICAgICAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IGlkIH19L2csIHRvZG8uaWQpO1xuICAgICAgICBjb25zdCBtb3VudGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy4nICsgc3RhdGVTdHlsZUNsYXNzICsgc2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1vdW50ZWRFbGVtZW50KSB7XG4gICAgICAgICAgbW91bnRlZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgdGVtcGxhdGUuZ2V0VGVtcGxhdGVIdG1sKClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW1wbGVtZW50c1RvZG8oYXJnOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhcmcgIT09IG51bGwgJiZcbiAgICB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBhcmcuaWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGFyZy5tb2RlbFR5cGUgPT09ICdzdHJpbmcnXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdGF0ZUNsYXNzKHN0YXRlOiBUb2RvU3RhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gJ2lzXycgKyBzdGF0ZS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwcml2YXRlIHRlbXBsYXRlSHRtbCA9ICcnO1xuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlID09PSAnVG9kbycpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdG9kb1RlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlSHRtbDtcbiAgfVxuXG4gIHJlcGxhY2VUZW1wbGF0ZSh0YXJnZXQ6IFJlZ0V4cCwgcmVwbGFjZTogc3RyaW5nIHwgbnVtYmVyKTogVGVtcGxhdGUge1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcocmVwbGFjZSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdGhpcy50ZW1wbGF0ZUh0bWwucmVwbGFjZSh0YXJnZXQsIHJlcGxhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcbiAgPGRpdiBjbGFzcz1cImVsX2VtcHR5SXRlbVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmxfdG9kbyBocF9tcmwxNSBocF9wcmwyIGpzX3RvZG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfaGlkZGVuIGpzX3RvZG9JZFwiPnt7IGlkIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvU3RhdGVcIj57eyBzdGF0ZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF90b2RvX2hlYWQge3sgc3RhdGVDbGFzcyB9fVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJqc190b2RvVGl0bGVcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiZWxfdG9kb1RpdGxlIGpzX2RhdGFcIj5cbiAgICAgICAgICBUZXN0OiBTdWNjZXNzIFRhc2sgQ3JlYXRlIGJ5IFRTIFByb2dyYW1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5jcmVhdGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+c3RhcnRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19kZXRhaWwganNfdG9kb0RldGFpbCBpc19oaWRkZW5cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19zdGF0dXNcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJibF90b2RvX3Byb2dyZXNzXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiMFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBvbmlucHV0PVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Mtb3V0cHV0JykudmFsdWU9dGhpcy52YWx1ZVwiIC8+XG4gICAgICAgICAgPG91dHB1dCBpZD1cImMtb3V0cHV0XCIgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj4wPC9vdXRwdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lIGpzX3RvZG9Fc3RpbWF0ZVRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWUganNfdG9kb1Jlc3VsdFRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuWun+e4vjo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfVElUTEUgPSAne3sgdGl0bGUgfX0nO1xuZXhwb3J0IGNvbnN0IFRPRE9fVElUTEVfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgIDxoMyBjbGFzcz1cImVsX3RvZG9UaXRsZSBqc19kYXRhXCI+XG4gICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgPC9oMz5cbmA7XG5leHBvcnQgY29uc3QgVE9ET19USVRMRV9FRElUX0hUTUwgPSBgXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZWxfdG9kb1RpdGxlXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF90b2RvVGl0bGUgaHBfcHIxMFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJlbF90ZXh0YXJlYSBqc19kYXRhXCIgdmFsdWU9XCJ7eyB0aXRsZSB9fVwiPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb3JtPlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfREVUQUlMID0gJ3t7IGRldGFpbCB9fSc7XG5leHBvcnQgY29uc3QgVE9ET19ERVRBSUxfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICB7eyBkZXRhaWwgfX1cbiAgICAgICAgPC9wPlxuYDtcbmV4cG9ydCBjb25zdCBUT0RPX0RFVEFJTF9FRElUX0hUTUwgPSBgXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIHJvd3M9XCI1XCIgY2xhc3M9XCJqc19kYXRhXCI+XG4gICAgICAgICAgICB7eyBkZXRhaWwgfX1cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Zvcm0+XG5gO1xuXG5leHBvcnQgY29uc3QgSURFTlRJRklFUl9USU1FID0gJ3t7IHRpbWUgfX0nO1xuY29uc3QgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICB7eyB0aW1lIH19XG4gICAgICAgICAgICA8L3A+XG5gO1xuY29uc3QgVElNRV9TRUxFQ1RfRURJVF9IVE1MID0gYFxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImpzX3NlbGVjdFwiIHNpemU9MT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAuNWhcIj4wLjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxaFwiPjFoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyaFwiPjJoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzaFwiPjNoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0aFwiPjRoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1aFwiPjVoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2aFwiPjZoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3aFwiPjdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxZGF5XCI+MWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMS41ZGF5XCI+MS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyZGF5XCI+MmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMi41ZGF5XCI+Mi41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzZGF5XCI+M2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMy41ZGF5XCI+My41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0ZGF5XCI+NGRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC41ZGF5XCI+NC41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1ZGF5XCI+NWRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNS41ZGF5XCI+NS41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2ZGF5XCI+NmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNi41ZGF5XCI+Ni41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3ZGF5XCI+N2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuYDtcbmNvbnN0IFRPRE9fRVNUSU1BVEVfSEVBRCA9ICc8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+JztcbmNvbnN0IFRPRE9fUkVTVUxUX0hFQUQgPSAnPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPic7XG5cbmV4cG9ydCBjb25zdCBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MID1cbiAgVE9ET19FU1RJTUFURV9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwgPVxuICBUT0RPX1JFU1VMVF9IRUFEICsgVElNRV9TRUxFQ1RfTk9STUFMX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19FU1RJTUFURV9FRElUX0hUTUwgPVxuICBUT0RPX0VTVElNQVRFX0hFQUQgKyBUSU1FX1NFTEVDVF9FRElUX0hUTUw7XG5leHBvcnQgY29uc3QgVE9ET19SRVNVTFRfRURJVF9IVE1MID0gVE9ET19SRVNVTFRfSEVBRCArIFRJTUVfU0VMRUNUX0VESVRfSFRNTDtcbiIsImV4cG9ydCBjbGFzcyBIdG1sQWNjZXNzb3Ige1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQgfCBudWxsIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnRzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogQXJyYXk8VD4ge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3JBbGw8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRFbGVtZW50KFxuICAgIGVsZW06IEhUTUxFbGVtZW50LFxuICAgIGJhc2VIdG1sOiBzdHJpbmcsXG4gICAgaWRlbnRpZmllcjogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19kYXRhJywgZWxlbSkuaW5uZXJUZXh0O1xuICAgIGVsZW0uaW5uZXJIVE1MID0gYmFzZUh0bWwucmVwbGFjZShpZGVudGlmaWVyLCBkYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4uLy4uL3ZpZXdEaXNwbGF5ZXInO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRhc2tCdG5IYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0Rpc3BsYXllcjogVmlld0Rpc3BsYXllcikge31cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tBcmVhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfY3JlYXRlVGFza0FyZWEnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19jcmVhdGVUYXNrQnRuJyxcbiAgICAgIGNyZWF0ZVRhc2tBcmVhXG4gICAgKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdmlld0Rpc3BsYXllci5kaXNwbGF5SW5wdXRUYXNrQXJlYVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEV4dGVuc2lvblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcixcbiAgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyLFxufSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcblxuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuL3RvZG9Db252ZXJ0RWxlbWVudEhhbmRsZXInO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50SGFuZGxlciBleHRlbmRzIEV4dGVuc2lvblZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jdE1lbnVoYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG4gICAgX2NvbnZlcnRIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKCdyZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCcsIF9jdE1lbnVoYW5kbGVyKTtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKCdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb250ZXh0JywgX2N0TWVudWhhbmRsZXIpO1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnZlcnQnLCBfY29udmVydEhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJSaWdodENsaWNrRXZlbnQoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9kb09ic2VydmVyKCk7XG4gICAgdGhpcy5yZWdpc3RlckRvdWRibGVDbGlja0VsZW1FdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kbycpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseSgncmVnaXN0ZXJSaWdodENsaWNrRXZlbnQnKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUb2RvT2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuICAgICAgcmVjb3Jkcy5mb3JFYWNoKChyZWMpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHJlYy5hZGRlZE5vZGVzKTtcbiAgICAgICAgY29uc3QgdG9kb0VsZW0gPSBnZXRUb2RvRWxlbUZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgICAgIGlmICghdG9kb0VsZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHkoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnRleHQnKVxuICAgICAgICApO1xuICAgICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvVGl0bGUnLCB0b2RvRWxlbSkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnZGJsY2xpY2snLFxuICAgICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnZlcnQnLFxuICAgICAgICAgICAgJ1RpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvciAoY29uc3QgdG9kb2xpc3Qgb2YgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG9saXN0JykpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodG9kb2xpc3QsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlckRvdWRibGVDbGlja0VsZW1FdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB0aXRsZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvVGl0bGUnKTtcbiAgICB0aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdkYmxjbGljaycsXG4gICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnZlcnQnLFxuICAgICAgICAnVGl0bGUnXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIGNvbnN0IGRldGFpbEVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvRGV0YWlsJyk7XG4gICAgLy8gY29uc3QgZXN0aW1hdGVUaW1lRWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAvLyAgICcuanNfdG9kb0VzdGltYXRlVGltZSdcbiAgICAvLyApO1xuICAgIC8vIGNvbnN0IHJlc3VsdFRpbWVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1Jlc3VsdFRpbWUnKTtcbiAgICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9Qcmlvcml0eScpO1xuICAgIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1VyZ2VuY3knKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUb2RvRWxlbUZyb21Ob2Rlcyhub2RlczogTm9kZVtdKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgY29uc3QgaHRtbEVsZW0gPSBub2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChodG1sRWxlbS5jbGFzc0xpc3QgJiYgaHRtbEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqc190b2RvJykpIHtcbiAgICAgIHJldHVybiBodG1sRWxlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBUb2RvU3RhdGUsIGlzVG9kb1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250ZXh0TWVudUhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBwcml2YXRlIHRhcmdldFRvZG86IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlV2FpdGluZ0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVQZW5kaW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBkZWxldGVUb2RvRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhcmdldFRvZG8gPSBudWxsO1xuICAgIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29udGV4dE1lbnUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlV2FpdGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdXYWl0aW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdJblByb2dyZXNzJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0NvbXBsZXRlZCcpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnUGVuZGluZycpO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVUb2RvRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVG9kbygpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHkoKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYztcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkNvbnRleHRNZW51KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgY29uc3QgY3RNZW51ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jyk7XG4gICAgY3RNZW51LnN0eWxlLmxlZnQgPSBTdHJpbmcoZXZlbnQucGFnZVgpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUudG9wID0gU3RyaW5nKGV2ZW50LnBhZ2VZKSArICdweCc7XG4gICAgY3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlV2FpdGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VJbnByb2dyZXNzJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUNvbXBsZXRlZCcsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZVBlbmRpbmcnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVQZW5kaW5nRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfbWVudVRvZG9EZWxldGUnLCBjdE1lbnUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kZWxldGVUb2RvRnVuY1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKHN0YXRlOiBUb2RvU3RhdGUpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy50YXJnZXRUb2RvIHx8XG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvU3RhdGUnLCB0aGlzLnRhcmdldFRvZG8pXG4gICAgICAgIC5pbm5lclRleHQgPT09IHN0YXRlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0VG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5yZW1vdmUoKTtcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBpbnB1dFZtID0gdGhpcy5nZW5lcmF0ZVZpZXdNb2RlbCh0aGlzLnRhcmdldFRvZG8sIHN0YXRlKTtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICB2bVNlcnZpY2UuZGVsZXRlVmlld01vZGVsKGlucHV0Vm0pO1xuICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoXG4gICAgICAnVG9kbycsXG4gICAgICB2bUJ1aWxkZXIud2l0aChpbnB1dFZtKS53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KS5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlVG9kbygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0VG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2VG9kb0VtcHR5ID0gdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy50YXJnZXRUb2RvLnJlbW92ZSgpO1xuICAgIHByZXZUb2RvRW1wdHk/LnJlbW92ZSgpO1xuXG4gICAgVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKS5kZWxldGVWaWV3TW9kZWwoXG4gICAgICB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVZpZXdNb2RlbChcbiAgICB0b2RvOiBIVE1MRWxlbWVudCxcbiAgICBzdGF0ZT86IHN0cmluZ1xuICApOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvSWQnLCB0b2RvKS5pbm5lclRleHRcbiAgICApO1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGF0ZSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRvZG8pLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaWQgPCAwIHx8ICFpc1RvZG9TdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgfVxuICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICByZXR1cm4gdm1CdWlsZGVyXG4gICAgICAud2l0aCh7IGlkOiBpZCB9KVxuICAgICAgLndpdGgoeyBtb2RlbFR5cGU6ICdUb2RvJyB9KVxuICAgICAgLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pXG4gICAgICAuYnVpbGQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQge1xuICBUT0RPX1RJVExFX0VESVRfSFRNTCxcbiAgSURFTlRJRklFUl9USVRMRSxcbiAgVE9ET19ERVRBSUxfRURJVF9IVE1MLFxuICBJREVOVElGSUVSX0RFVEFJTCxcbiAgVE9ET19FU1RJTUFURV9FRElUX0hUTUwsXG4gIFRPRE9fUkVTVUxUX0VESVRfSFRNTCxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50L3RvZG9UZW1wbGF0ZSc7XG5pbXBvcnQgeyBWaWV3RWRpdE1vZGVTdGF0ZSB9IGZyb20gJy4uLy4uL3ZpZXdFZGl0TW9kZVN0YXRlJztcbmltcG9ydCB7XG4gIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgVmlld0V2ZW50SGFuZGxlckNhbGxhYmxlU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5jb25zdCBUb2RvRWxlbWVudHMgPSB7XG4gIFRJVExFOiAnVGl0bGUnLFxuICBERVRBSUw6ICdEZXRhaWwnLFxuICBFU1RJTUFURTogJ0VzdGltYXRlVGltZScsXG4gIFJFU1VMVDogJ1Jlc3VsdFRpbWUnLFxufSBhcyBjb25zdDtcbnR5cGUgVG9kb0VsZW1lbnRzVHlwZSA9IHR5cGVvZiBUb2RvRWxlbWVudHM7XG5leHBvcnQgdHlwZSBUb2RvRWxlbWVudCA9IFRvZG9FbGVtZW50c1R5cGVba2V5b2YgVG9kb0VsZW1lbnRzVHlwZV07XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgcHJpdmF0ZSBjb252ZXJ0VGl0bGVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnREZWl0YWxGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVkaXRTdGF0ZTogVmlld0VkaXRNb2RlU3RhdGUsXG4gICAgcHJpdmF0ZSByZXNldEVkaXRpbmdIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllclxuICApIHtcbiAgICB0aGlzLmNvbnZlcnRUaXRsZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydFRpdGxlKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0RGVpdGFsRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0RGV0YWlsKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0UmVzdWx0VGltZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydFJlc3VsdFRpbWUoZSk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgYXJnOiBUb2RvRWxlbWVudCBleHRlbmRzIHN0cmluZyA/IFRvZG9FbGVtZW50IDogdW5kZWZpbmVkXG4gICk6IEV2ZW50TGlzdGVuZXIgfCBuZXZlciB7XG4gICAgaWYgKGFyZyA9PT0gJ1RpdGxlJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRpdGxlRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ0RldGFpbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREZWl0YWxGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnRXN0aW1hdGVUaW1lJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydEVzdGltYXRlVGltZUZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdSZXN1bHRUaW1lJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFJlc3VsdFRpbWVGdW5jO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VGl0bGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5yZXNldEVkaXRpbmdIYW5kbGVyLmNhbGwoKTtcbiAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb1RpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnQoXG4gICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb1RpdGxlLFxuICAgICAgVE9ET19USVRMRV9FRElUX0hUTUwsXG4gICAgICBJREVOVElGSUVSX1RJVExFXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERldGFpbChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IGVsZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudChlbGVtLCBUT0RPX0RFVEFJTF9FRElUX0hUTUwsIElERU5USUZJRVJfREVUQUlMKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVzdGltYXRlVGltZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuY2FsbCgpO1xuICAgIGNvbnN0IGVsZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnZlcnRUaW1lRWxlbShlbGVtLCBUT0RPX0VTVElNQVRFX0VESVRfSFRNTCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSZXN1bHRUaW1lKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucmVzZXRFZGl0aW5nSGFuZGxlci5jYWxsKCk7XG4gICAgY29uc3QgZWxlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29udmVydFRpbWVFbGVtKGVsZW0sIFRPRE9fUkVTVUxUX0VESVRfSFRNTCk7XG4gIH1cbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvUHJpb3JpdHknKTtcbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvVXJnZW5jeScpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VGltZUVsZW0oZWxlbTogSFRNTEVsZW1lbnQsIGJhc2VIdG1sOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0YSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2RhdGEnLCBlbGVtKS5pbm5lclRleHQ7XG4gIGVsZW0uaW5uZXJIVE1MID0gYmFzZUh0bWw7XG4gIGNvbnN0IHNlbGVjdEVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgJy5qc19zZWxlY3QnLFxuICAgIGVsZW1cbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNlbGVjdEVsZW0ub3B0aW9uc1tpXS52YWx1ZSA9PT0gZGF0YSkge1xuICAgICAgc2VsZWN0RWxlbS5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5pbXBvcnQge1xuICBJREVOVElGSUVSX1RJVExFLFxuICBJREVOVElGSUVSX0RFVEFJTCxcbiAgSURFTlRJRklFUl9USU1FLFxuICBUT0RPX1RJVExFX05PUk1BTF9IVE1MLFxuICBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTCxcbiAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgVE9ET19ERVRBSUxfTk9STUFMX0hUTUwsXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudC90b2RvVGVtcGxhdGUnO1xuaW1wb3J0IHsgVmlld0VkaXRNb2RlU3RhdGUgfSBmcm9tICcuLi8uLi92aWV3RWRpdE1vZGVTdGF0ZSc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFRvZG9SZXNldEVsZW1lbnRIYW5kbGVyXG4gIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlckNhbGxhYmxlU3VwcGxpZXIge1xuICBwcml2YXRlIHJlc2V0RWRpdE1vZGVGdW5jOiBFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWRpdFN0YXRlOiBWaWV3RWRpdE1vZGVTdGF0ZSkge1xuICAgIHRoaXMucmVzZXRFZGl0TW9kZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVzZXRFZGl0TW9kZUZ1bmMoZSk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseSgpOiBFdmVudExpc3RlbmVyIHtcbiAgICByZXR1cm4gdGhpcy5yZXNldEVkaXRNb2RlRnVuYztcbiAgfVxuXG4gIGNhbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldEVkaXRNb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWRpdFN0YXRlLmlzRWRpdGluZ1RvZG9UaXRsZSgpKSB7XG4gICAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnQoXG4gICAgICAgIHRoaXMuZWRpdFN0YXRlLmVkaXRpbmdUb2RvVGl0bGUsXG4gICAgICAgIFRPRE9fVElUTEVfTk9STUFMX0hUTUwsXG4gICAgICAgIElERU5USUZJRVJfVElUTEVcbiAgICAgICk7XG4gICAgICB0aGlzLmVkaXRTdGF0ZS5yZXNldEVkaXRpbmdUb2RvVGl0bGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWRpdFN0YXRlLmlzRWRpdGluZ1RvZG9EZXRhaWwoKSkge1xuICAgICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50KFxuICAgICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb0RldGFpbCxcbiAgICAgICAgVE9ET19ERVRBSUxfTk9STUFMX0hUTUwsXG4gICAgICAgIElERU5USUZJRVJfREVUQUlMXG4gICAgICApO1xuICAgICAgdGhpcy5lZGl0U3RhdGUucmVzZXRFZGl0aW5nVG9kb0RldGFpbCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lZGl0U3RhdGUuaXNFZGl0aW5nVG9kb0VzdGltYXRlKCkpIHtcbiAgICAgIGNvbnZlcnRSZXNldFRpbWVFbGVtKFxuICAgICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb0VzdGltYXRlLFxuICAgICAgICBUT0RPX0VTVElNQVRFX05PUk1BTF9IVE1MXG4gICAgICApO1xuICAgICAgdGhpcy5lZGl0U3RhdGUucmVzZXRFZGl0aW5nVG9kb0VzdGltYXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVkaXRTdGF0ZS5pc0VkaXRpbmdUb2RvUmVzdWx0KCkpIHtcbiAgICAgIGNvbnZlcnRSZXNldFRpbWVFbGVtKFxuICAgICAgICB0aGlzLmVkaXRTdGF0ZS5lZGl0aW5nVG9kb1Jlc3VsdCxcbiAgICAgICAgVE9ET19SRVNVTFRfTk9STUFMX0hUTUxcbiAgICAgICk7XG4gICAgICB0aGlzLmVkaXRTdGF0ZS5yZXNldEVkaXRpbmdUb2RvUmVzdWx0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRSZXNldFRpbWVFbGVtKGVsZW06IEhUTUxFbGVtZW50LCByZXBsYWNlSHRtbDogc3RyaW5nKSB7XG4gIGNvbnN0IHNlbGVjdEVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgJ2pzX3NlbGVjdCcsXG4gICAgZWxlbVxuICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBzZWxlY3RFbGVtLm9wdGlvbnNbc2VsZWN0RWxlbS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50KGVsZW0sIHJlcGxhY2VIdG1sLCBJREVOVElGSUVSX1RJTUUpO1xufVxuIiwiaW1wb3J0IHtcbiAgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyLFxuICBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIsXG59IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgV2luZG93SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzZXRFZGl0aW5nSGFuZGxlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyKSB7fVxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0RWRpdGluZ0hhbmRsZXIuc3VwcGx5KCkpO1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHJlZ2lzdGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHRlbnNpb25WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJcbiAgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBwcm90ZWN0ZWQgc3ViSGFuZGxlckhvbGRlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIgPSBuZXcgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVySG9sZGVyKCk7XG4gIH1cbiAgYWJzdHJhY3QgcmVnaXN0ZXIoKTogdm9pZDtcbiAgYWRkSGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcik6IHRoaXMge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0SGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICAgIHJldHVybiB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuZ2V0KG1ldGhvZE5hbWUpO1xuICB9XG59XG5cbmNsYXNzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllckhvbGRlciB7XG4gIHN1YkhhbmRsZXJzOiBNYXA8c3RyaW5nLCBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXI+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG4gIGFkZChtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcikge1xuICAgIHRoaXMuc3ViSGFuZGxlcnMuc2V0KG1ldGhvZE5hbWUsIGhhbmRsZXIpO1xuICB9XG4gIGdldChtZXRob2ROYW1lOiBzdHJpbmcpOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIgfCBuZXZlciB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuc3ViSGFuZGxlcnMuZ2V0KG1ldGhvZE5hbWUpO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoJycpO1xuICB9XG4gIHN1cHBseTxUPihcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgZWxlbT86IFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogdW5kZWZpbmVkXG4gICk6IEV2ZW50TGlzdGVuZXIge1xuICAgIHJldHVybiB0aGlzLmdldChtZXRob2ROYW1lKS5zdXBwbHkoZWxlbSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBzdXBwbHk8VD4oYXJnPzogVCBleHRlbmRzIHN0cmluZyA/IFQgOiB1bmRlZmluZWQpOiBFdmVudExpc3RlbmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFdmVudEhhbmRsZXJDYWxsYWJsZVN1cHBsaWVyXG4gIGV4dGVuZHMgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgY2FsbDxUPihhcmc/OiBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IHVuZGVmaW5lZCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIgfSBmcm9tICcuL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB7XG4gIHByaXZhdGUgaGFuZGxlcnM6IEFycmF5PFZpZXdFdmVudEhhbmRsZXJSZWdpc3Rlcj47XG4gIHByaXZhdGUgY29uc3RydWN0b3IoYXJnczogVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyW10pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gYXJncztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChcbiAgICAuLi5hcmdzOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJbXVxuICApOiBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzIHtcbiAgICByZXR1cm4gbmV3IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMoYXJncyk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXIucmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFZpZXdEaXNwbGF5ZXIge1xuICBwdWJsaWMgZGlzcGxheUlucHV0VGFza0FyZWEoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGU8SFRNTElucHV0RWxlbWVudD4oXG4gICAgICAgICcjcmFkaW9DcmVhdGVUYXNrRGV0YWlsJ1xuICAgICAgKT8uY2hlY2tlZFxuICAgICkge1xuICAgICAgLy8gY29uc3QgY2xhc3NMaXN0ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfaW5wdXRUYXNrRGV0YWlsQXJlYScpXG4gICAgICAvLyAgIC5jbGFzc0xpc3Q7XG4gICAgICAvLyBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdpc19oaWRkZW4nKSkge1xuICAgICAgLy8gICBjbGFzc0xpc3QucmVtb3ZlKCdpc19oaWRkZW4nKTtcbiAgICAgIC8vICAgY2xhc3NMaXN0LmFkZCgnaXNfYWN0aXZlJyk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICAgICdUb2RvJ1xuICAgICAgKTtcbiAgICAgIHZtQnVpbGRlci53aXRoKHsgd29ya1N0YXRlOiAnV2FpdGluZycgfSk7XG4gICAgICBpZiAodm1CdWlsZGVyKSB7XG4gICAgICAgIGNvbnN0IHZtU2VydmljZSA9IFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoJ1RvZG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWV3RWRpdE1vZGVTdGF0ZSB7XG4gIHByaXZhdGUgX2VkaXRpbmdUb2RvVGl0bGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfZWRpdGluZ1RvZG9EZXRhaWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfZWRpdGluZ1RvZG9Fc3RpbWF0ZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9lZGl0aW5nVG9kb1Jlc3VsdDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvVGl0bGUgPSBudWxsO1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvRGV0YWlsID0gbnVsbDtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlID0gbnVsbDtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb1Jlc3VsdCA9IG51bGw7XG4gIH1cblxuICBpc0VkaXRpbmdUb2RvVGl0bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvVGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgaXNFZGl0aW5nVG9kb0RldGFpbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ1RvZG9EZXRhaWwgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgaXNFZGl0aW5nVG9kb0VzdGltYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGlzRWRpdGluZ1RvZG9SZXN1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvUmVzdWx0ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcmVzZXRFZGl0aW5nVG9kb1RpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvVGl0bGUgPSBudWxsO1xuICB9XG4gIHJlc2V0RWRpdGluZ1RvZG9EZXRhaWwoKTogdm9pZCB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9EZXRhaWwgPSBudWxsO1xuICB9XG4gIHJlc2V0RWRpdGluZ1RvZG9Fc3RpbWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlID0gbnVsbDtcbiAgfVxuICByZXNldEVkaXRpbmdUb2RvUmVzdWx0KCk6IHZvaWQge1xuICAgIHRoaXMuX2VkaXRpbmdUb2RvUmVzdWx0ID0gbnVsbDtcbiAgfVxuXG4gIHNldCBlZGl0aW5nVG9kb1RpdGxlKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9UaXRsZSA9IGVsZW07XG4gIH1cbiAgZ2V0IGVkaXRpbmdUb2RvVGl0bGUoKTogSFRNTEVsZW1lbnQgfCBuZXZlciB7XG4gICAgaWYgKHRoaXMuX2VkaXRpbmdUb2RvVGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZGl0aW5nVG9kb1RpdGxlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgZWRpdGluZyB0YXNrIHRpdGxlJyk7XG4gIH1cblxuICBzZXQgZWRpdGluZ1RvZG9EZXRhaWwoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0RldGFpbCA9IGVsZW07XG4gIH1cbiAgZ2V0IGVkaXRpbmdUb2RvRGV0YWlsKCk6IEhUTUxFbGVtZW50IHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9lZGl0aW5nVG9kb0RldGFpbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvRGV0YWlsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgZWRpdGluZyB0YXNrIGRldGFpbCcpO1xuICB9XG5cbiAgc2V0IGVkaXRpbmdUb2RvRXN0aW1hdGUoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9lZGl0aW5nVG9kb0VzdGltYXRlID0gZWxlbTtcbiAgfVxuICBnZXQgZWRpdGluZ1RvZG9Fc3RpbWF0ZSgpOiBIVE1MRWxlbWVudCB8IG5ldmVyIHtcbiAgICBpZiAodGhpcy5fZWRpdGluZ1RvZG9Fc3RpbWF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvRXN0aW1hdGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBlZGl0aW5nIHRhc2sgZXN0aW1hdGUgdGltZScpO1xuICB9XG5cbiAgc2V0IGVkaXRpbmdUb2RvUmVzdWx0KGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fZWRpdGluZ1RvZG9Fc3RpbWF0ZSA9IGVsZW07XG4gIH1cbiAgZ2V0IGVkaXRpbmdUb2RvUmVzdWx0KCk6IEhUTUxFbGVtZW50IHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLl9lZGl0aW5nVG9kb1Jlc3VsdCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VkaXRpbmdUb2RvUmVzdWx0O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgZWRpdGluZyB0YXNrIHJlc3VsdCB0aW1lJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIGluaXRUb2RvIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuL3ZpZXdNb2RlbEJ1aWxkZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICBzdGF0aWMgbmV3SW5zdGFuY2UoKTogVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIodHlwZT86IFZpZXdNb2RlbFR5cGUpOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IodHlwZSk7XG4gIH1cbn1cblxudHlwZSBBbGxWaWV3TW9kZWwgPSBWaWV3TW9kZWwgJiBWaWV3TW9kZWxUb2RvO1xudHlwZSBBbGxWaWV3TW9kZWxLZXkgPSBrZXlvZiBBbGxWaWV3TW9kZWw7XG5cbmNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcml2YXRlIGJ1aWxkZXI6IFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPjtcblxuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSkge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKCkud2l0aCh7IG1vZGVsVHlwZTogbW9kZWxUeXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQmFzZUJ1aWxkZXIoKS53aXRoKHtcbiAgICAgICAgbW9kZWxUeXBlOiAnVmlld01vZGVsJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdpdGgoXG4gICAgaW5wdXQ6IHsgW2tleSBpbiBBbGxWaWV3TW9kZWxLZXldPzogQWxsVmlld01vZGVsW2tleV0gfVxuICApOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIud2l0aChpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBWaWV3TW9kZWwge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8VCBleHRlbmRzIFZpZXdNb2RlbD5cbiAgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFQ+LCBQYXJ0aWFsPFZpZXdNb2RlbD4ge1xuICBpZD86IG51bWJlcjtcbiAgbW9kZWxUeXBlPzogVmlld01vZGVsVHlwZTtcblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVF0/OiBUW2tleV0gfSk6IHRoaXMge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgICAgdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgW2tleV06IGlucHV0W2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhJZChpZDogbnVtYmVyKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2lkJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgaWQ6IGlkIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhNb2RlbFR5cGUoXG4gICAgdHlwZTogVmlld01vZGVsVHlwZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnbW9kZWxUeXBlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgbW9kZWxUeXBlOiB0eXBlIH0pO1xuICB9XG5cbiAgYnVpbGQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdlbmVyYXRlSW5zdGFuY2UoKTogVDtcbn1cblxuY2xhc3MgVmlld01vZGVsQmFzZUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkID8/IC0xO1xuICAgIGNvbnN0IHR5cGU6IFZpZXdNb2RlbFR5cGUgPSB0aGlzLm1vZGVsVHlwZSA/PyAnVmlld01vZGVsJztcbiAgICBjb25zdCBvYmo6IFZpZXdNb2RlbCA9IHsgaWQ6IGlkLCBtb2RlbFR5cGU6IHR5cGUgfTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgIT09ICdpZCcgfHwgcHJvcCAhPT0gJ21vZGVsVHlwZScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3BdOiB0aGlzW3Byb3BdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRWaWV3TW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiAnVG9kbyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gaW5pdFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0TmV4dElkKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBnZXRWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSwgdmlld01vZGVsPzogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAoIXZtTWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgdmlld01vZGVsID09PSB1bmRlZmluZWRcbiAgICAgID8gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KS5idWlsZCgpKVxuICAgICAgOiB2bU1hbmFnZXIuY3JlYXRlKHZpZXdNb2RlbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIudXBkYXRlKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0NvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBUb2RvQ29tcG9uZW50KCdUb2RvJywgJy5qc190b2RvbGlzdCcpXG5leHBvcnQgY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFZpZXdNb2RlbFRvZG8ge1xuICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICBwcml2YXRlIF9tb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGU7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnRzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZURhdGU6IERhdGU7XG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT86IERhdGU7XG4gIHByaXZhdGUgX2VzdGltYXRlSG91cjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBwcml2YXRlIF9kaXNwbGF5T3JkZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0b2RvQmFzZT86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvID0gaW5pdFRvZG8odG9kb0Jhc2UgPz8ge30pO1xuICAgIHRoaXMuX2lkID0gdG9kby5pZDtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSB0b2RvLm1vZGVsVHlwZTtcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgdGhpcy5fY29udGVudHMgPSB0b2RvLmNvbnRlbnRzO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvLmNyZWF0ZURhdGU7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kby5zdGFydERhdGU7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gdG9kby5lc3RpbWF0ZUhvdXI7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IHRvZG8ucmVzdWx0SG91cjtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSB0b2RvLndvcmtTdGF0ZTtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvLmRpc3BsYXlPcmRlcjtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kbyhiYXNlOiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+KTogVmlld01vZGVsVG9kbyB7XG4gIGNvbnN0IHRhcmdldDogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiA9IHt9O1xuICB0YXJnZXQuaWQgPSBiYXNlPy5pZCA/PyAtMTtcbiAgdGFyZ2V0Lm1vZGVsVHlwZSA9ICdUb2RvJztcbiAgdGFyZ2V0LnRpdGxlID0gYmFzZT8udGl0bGUgPz8gJyc7XG4gIHRhcmdldC5jb250ZW50cyA9IGJhc2U/LmNvbnRlbnRzID8/ICcnO1xuICB0YXJnZXQuY3JlYXRlRGF0ZSA9IGJhc2U/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgdGFyZ2V0LnN0YXJ0RGF0ZSA9IGJhc2U/LnN0YXJ0RGF0ZSA/PyB1bmRlZmluZWQ7XG4gIHRhcmdldC5lc3RpbWF0ZUhvdXIgPSBiYXNlPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgdGFyZ2V0LnJlc3VsdEhvdXIgPSBiYXNlPy5yZXN1bHRIb3VyID8/IDA7XG4gIHRhcmdldC53b3JrU3RhdGUgPSBiYXNlPy53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICB0YXJnZXQuZGlzcGxheU9yZGVyID0gYmFzZT8uZGlzcGxheU9yZGVyID8/IDA7XG4gIHJldHVybiB0YXJnZXQgYXMgVmlld01vZGVsVG9kbztcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb2xpc3QgfSBmcm9tICcuL3RvZG9saXN0JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Cb2FyZCB7XG4gIHByaXZhdGUgdG9kb2xpc3RzOiBNYXA8VG9kb1N0YXRlLCBUb2RvbGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgb2YgT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKSkge1xuICAgICAgdGhpcy50b2RvbGlzdHMuc2V0KHN0YXRlTmFtZSwgbmV3IFRvZG9saXN0KHN0YXRlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSk/LmFkZFRvZG8odG9kbyk7XG4gIH1cblxuICBnZXRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRvZG8pIHtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uZGVsZXRlVG9kbyhpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHwgbmV2ZXIge1xuICAgIGNvbnN0IHRvZG9saXN0ID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKTtcbiAgICBpZiAodG9kb2xpc3QpIHtcbiAgICAgIHJldHVybiB0b2RvbGlzdC51cGRhdGVUb2RvKHRvZG8pO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBUb2RvU3RhdGVzID0ge1xuICBXQUlUSU5HOiAnV2FpdGluZycsXG4gIElOX1BST0dSRVNTOiAnSW5Qcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RvU3RhdGUoc3RhdGU6IGFueSk6IHN0YXRlIGlzIFRvZG9TdGF0ZSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpLmluY2x1ZGVzKHN0YXRlKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb2xpc3Qge1xuICBwcml2YXRlIF90b2RvbGlzdDogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlTmFtZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fdG9kb2xpc3QgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgdG9kb2xpc3QoKTogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvbGlzdDtcbiAgfVxuXG4gIGdldCBzdGF0ZU5hbWUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVOYW1lO1xuICB9XG5cbiAgZ2V0VG9kbyhpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3QuZ2V0KGlkKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdGhpcy5fdG9kb2xpc3QudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKGRlbFRvZG9PcmRlciA8IHRvZG8uZGlzcGxheU9yZGVyKSB7XG4gICAgICAgICAgdG9kby5kaXNwbGF5T3JkZXIgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZG9saXN0LmRlbGV0ZShpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50b2RvbGlzdC5nZXQodG9kby5pZCkpIHtcbiAgICAgIHRoaXMudG9kb2xpc3Quc2V0KHRvZG8uaWQsIHRvZG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbywgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvQm9hcmQgfSBmcm9tICcuL3RvZG9Cb2FyZCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlcic7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmlld1RvZG9NYW5hZ2VyIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWxUb2RvPiB7XG4gIHByaXZhdGUgZmluYWxJZDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90b2RvQm9hcmQ6IFRvZG9Cb2FyZCkge1xuICAgIHRoaXMuZmluYWxJZCA9IDA7XG4gIH1cblxuICBnZXROZXh0SWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maW5hbElkICsgMTtcbiAgfVxuXG4gIGNyZWF0ZSh2bU1vZGVsOiBWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCB0b2RvT2JqID0gbmV3IFRvZG8odm1Nb2RlbCk7XG4gICAgaWYgKHRvZG9PYmouaWQgPiB0aGlzLmZpbmFsSWQpIHtcbiAgICAgIHRoaXMuZmluYWxJZCA9IHRvZG9PYmouaWQ7XG4gICAgfVxuICAgIHRoaXMuX3RvZG9Cb2FyZC5hZGRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGdldERhdGEodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC5nZXRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2RvT2JqOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC51cGRhdGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvQm9hcmQuZGVsZXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=