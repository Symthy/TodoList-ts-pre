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
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var TodoContextMenuHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoContextMenuHandler */ "./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts");
var viewHandlers_1 = __webpack_require__(/*! ./main/view/handler/viewHandlers */ "./src/ts/main/view/handler/viewHandlers.ts");
var TodoComponentHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/TodoComponentHandler */ "./src/ts/main/view/handler/impl/TodoComponentHandler.ts");
var CreateTaskBtnHandler_1 = __webpack_require__(/*! ./main/view/handler/impl/CreateTaskBtnHandler */ "./src/ts/main/view/handler/impl/CreateTaskBtnHandler.ts");
var viewDisplayer_1 = __webpack_require__(/*! ./main/view/viewDisplayer */ "./src/ts/main/view/viewDisplayer.ts");
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewHandlers_1.ViewHandlers.init(new TodoComponentHandler_1.TodoComponentHandler(TodoContextMenuHandler_1.getTodoCtMenuHandler()), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer())).register();
document.body.addEventListener('click', function () {
    htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});


/***/ }),

/***/ "./src/ts/component/decorator/todoDecorator.ts":
/*!*****************************************************!*\
  !*** ./src/ts/component/decorator/todoDecorator.ts ***!
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
var template_1 = __webpack_require__(/*! ../template */ "./src/ts/component/template.ts");
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
                var template = new template_1.Template(modelType);
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

/***/ "./src/ts/component/template.ts":
/*!**************************************!*\
  !*** ./src/ts/component/template.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
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
var todoTemplate = "\n  <div class=\"el_emptyItem\"></div>\n  <div class=\"bl_todo hp_mrl15 hp_prl2\">\n    <div class=\"el_hidden js_todoId\">{{ id }}</div>\n    <div class=\"el_hidden js_todoState\">{{ state }}</div>\n    <div class=\"el_todo_head {{ stateClass }}\"></div>\n    <div class=\"bl_todo_body\">\n      <h3 class=\"el_todoTitle\">\n        Test: Success Task Create by TS Program\n      </h3>\n      <div class=\"bl_todo_times\">\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">created time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">started time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n      </div>\n      <div class=\"bl_todo_status\">\n        <form class=\"bl_todo_progress\">\n          <input type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"10\" oninput=\"document.getElementById('c-output').value=this.value\" />\n          <output id=\"c-output\" class=\"el_label el_label__small\">0</output>\n        </form>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u898B\u7A4D:</p>\n          <p class=\"el_label el_label__small\" name=\"estimateHour\">\n              10 h\n            </p>\n        </div>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u5B9F\u7E3E:</p>\n          <p class=\"el_label el_label__small\" name=\"resultHour\">\n              10 h\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n";


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
var viewHandler_1 = __webpack_require__(/*! ../viewHandler */ "./src/ts/main/view/handler/viewHandler.ts");
var TodoComponentHandler = (function (_super) {
    __extends(TodoComponentHandler, _super);
    function TodoComponentHandler(handler) {
        var _this = _super.call(this) || this;
        _this.subHandlerHolder.add('resisterTodoEvent', handler);
        _this.subHandlerHolder.add('resistTodoObserver', handler);
        return _this;
    }
    TodoComponentHandler.prototype.register = function () {
        this.resisterTodoEvent();
        this.resistTodoObserver();
    };
    TodoComponentHandler.prototype.resisterTodoEvent = function () {
        var _this = this;
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', _this.subHandlerHolder.supply('resisterTodoEvent'));
        });
    };
    TodoComponentHandler.prototype.resistTodoObserver = function () {
        var e_1, _a;
        var _this = this;
        var observer = new MutationObserver(function (records) {
            records.forEach(function (rec) {
                rec.addedNodes.forEach(function (elem) {
                    elem.addEventListener('contextmenu', _this.subHandlerHolder.supply('resistTodoObserver'));
                });
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
    return TodoComponentHandler;
}(viewHandler_1.ExtensionViewHandler));
exports.TodoComponentHandler = TodoComponentHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/main/view/handler/impl/TodoContextMenuHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoCtMenuHandler = exports.TodoContextMenuHandler = void 0;
var todoState_1 = __webpack_require__(/*! ../../../viewmodel/todo/todoState */ "./src/ts/main/viewmodel/todo/todoState.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../../../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../../../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
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
        if (id < 0 || !isTodoState(state)) {
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
function isTodoState(obj) {
    return Object.values(todoState_1.TodoStates).includes(obj);
}
function getTodoCtMenuHandler() {
    return new TodoContextMenuHandler();
}
exports.getTodoCtMenuHandler = getTodoCtMenuHandler;


/***/ }),

/***/ "./src/ts/main/view/handler/viewHandler.ts":
/*!*************************************************!*\
  !*** ./src/ts/main/view/handler/viewHandler.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionViewHandler = void 0;
var ExtensionViewHandler = (function () {
    function ExtensionViewHandler() {
        this.subHandlerHolder = new SubViewHandlerHolder();
    }
    ExtensionViewHandler.prototype.addHandler = function (methodName, handler) {
        this.subHandlerHolder.add(methodName, handler);
        return this;
    };
    ExtensionViewHandler.prototype.getHandler = function (methodName) {
        return this.subHandlerHolder.get(methodName);
    };
    return ExtensionViewHandler;
}());
exports.ExtensionViewHandler = ExtensionViewHandler;
var SubViewHandlerHolder = (function () {
    function SubViewHandlerHolder() {
        this.subHandlers = new Map();
    }
    SubViewHandlerHolder.prototype.add = function (methodName, handler) {
        this.subHandlers.set(methodName, handler);
    };
    SubViewHandlerHolder.prototype.get = function (methodName) {
        var handler = this.subHandlers.get(methodName);
        if (handler) {
            return handler;
        }
        throw Error('');
    };
    SubViewHandlerHolder.prototype.supply = function (methodName) {
        return this.get(methodName).supply();
    };
    return SubViewHandlerHolder;
}());


/***/ }),

/***/ "./src/ts/main/view/handler/viewHandlers.ts":
/*!**************************************************!*\
  !*** ./src/ts/main/view/handler/viewHandlers.ts ***!
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
exports.ViewHandlers = void 0;
var ViewHandlers = (function () {
    function ViewHandlers(args) {
        this.handlers = args;
    }
    ViewHandlers.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ViewHandlers(args);
    };
    ViewHandlers.prototype.register = function () {
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
    return ViewHandlers;
}());
exports.ViewHandlers = ViewHandlers;


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
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
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
            return vmManager.delete(viewModel);
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
var todoDecorator_1 = __webpack_require__(/*! ../../../component/decorator/todoDecorator */ "./src/ts/component/decorator/todoDecorator.ts");
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
        todoDecorator_1.TodoComponent('Todo', '.js_todolist')
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
        this.todolists.get(state).addTodo(todo);
    };
    TodoBoard.prototype.getTodo = function (state, id) {
        var todo = this.todolists.get(state).getTodo(id);
        if (todo) {
            return todo;
        }
        throw new Error('');
    };
    TodoBoard.prototype.deleteTodo = function (state, id) {
        this.todolists.get(state).deleteTodo(id);
    };
    TodoBoard.prototype.updateTodo = function (state, todo) {
        return this.todolists.get(state).updateTodo(todo);
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
exports.TodoStates = void 0;
exports.TodoStates = {
    WAITING: 'Waiting',
    IN_PROGRESS: 'InProgress',
    COMPLETED: 'Completed',
    PENDDING: 'Pending',
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db21wb25lbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy9oYW5kbGVyL3ZpZXdIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvaGFuZGxlci92aWV3SGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlldy92aWV3RGlzcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdmlld1RvZG9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxxRUFBMkI7QUFDM0IsMkpBQWtGO0FBQ2xGLGdMQUErRjtBQUMvRiwrR0FBd0Q7QUFDeEQsdUtBQXVGO0FBQ3ZGLCtIQUFnRTtBQUNoRSxpS0FBcUY7QUFDckYsaUtBQXFGO0FBQ3JGLGtIQUEwRDtBQUUxRCwyQ0FBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSx3REFBMEIsRUFB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TyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFrQjtRQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsT0FBNkM7UUFDbkQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQXNCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQTZDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUE3QlksMENBQWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvYXBwLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwnO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IGdldFRvZG9DdE1lbnVIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci9pbXBsL1RvZG9Db250ZXh0TWVudUhhbmRsZXInO1xuaW1wb3J0IHsgVmlld0hhbmRsZXJzIH0gZnJvbSAnLi9tYWluL3ZpZXcvaGFuZGxlci92aWV3SGFuZGxlcnMnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbXBvbmVudEhhbmRsZXInO1xuaW1wb3J0IHsgQ3JlYXRlVGFza0J0bkhhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy9oYW5kbGVyL2ltcGwvQ3JlYXRlVGFza0J0bkhhbmRsZXInO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXInO1xuXG5WaWV3TW9kZWxTZXJ2aWNlSW1wbC5pbml0KG5ldyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCgpKTtcblxuVmlld0hhbmRsZXJzLmluaXQoXG4gIG5ldyBUb2RvQ29tcG9uZW50SGFuZGxlcihnZXRUb2RvQ3RNZW51SGFuZGxlcigpKSxcbiAgbmV3IENyZWF0ZVRhc2tCdG5IYW5kbGVyKG5ldyBWaWV3RGlzcGxheWVyKCkpXG4pLnJlZ2lzdGVyKCk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9Db250ZXh0TWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUb2RvQ29tcG9uZW50KG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSwgc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogVCkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCB0b2RvID0gYXJncy5maW5kKGltcGxlbWVudHNUb2RvKSBhcyBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAodG9kbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdG9kby53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICAgICAgICBjb25zdCBzdGF0ZVN0eWxlQ2xhc3MgPSBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZSk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKG1vZGVsVHlwZSk7XG4gICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGUgfX0vZywgc3RhdGUpXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGVDbGFzcyB9fS9nLCBzdGF0ZVN0eWxlQ2xhc3MpXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgaWQgfX0vZywgdG9kby5pZCk7XG4gICAgICAgIGNvbnN0IG1vdW50ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLicgKyBzdGF0ZVN0eWxlQ2xhc3MgKyBzZWxlY3RvclxuICAgICAgICApO1xuICAgICAgICBpZiAobW91bnRlZEVsZW1lbnQpIHtcbiAgICAgICAgICBtb3VudGVkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgICB0ZW1wbGF0ZS5nZXRUZW1wbGF0ZUh0bWwoKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbXBsZW1lbnRzVG9kbyhhcmc6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFyZyAhPT0gbnVsbCAmJlxuICAgIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIGFyZy5pZCA9PT0gJ251bWJlcicgJiZcbiAgICB0eXBlb2YgYXJnLm1vZGVsVHlwZSA9PT0gJ3N0cmluZydcbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFN0YXRlQ2xhc3Moc3RhdGU6IFRvZG9TdGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiAnaXNfJyArIHN0YXRlLnRvTG93ZXJDYXNlKCk7XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vbWFpbi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gIHByaXZhdGUgdGVtcGxhdGVIdG1sOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSA9PT0gJ1RvZG8nKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRvZG9UZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRUZW1wbGF0ZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUh0bWw7XG4gIH1cblxuICByZXBsYWNlVGVtcGxhdGUodGFyZ2V0OiBSZWdFeHAsIHJlcGxhY2U6IHN0cmluZyB8IG51bWJlcik6IFRlbXBsYXRlIHtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICByZXBsYWNlID0gU3RyaW5nKHJlcGxhY2UpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlSHRtbCA9IHRoaXMudGVtcGxhdGVIdG1sLnJlcGxhY2UodGFyZ2V0LCByZXBsYWNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCB0b2RvVGVtcGxhdGUgPSBgXG4gIDxkaXYgY2xhc3M9XCJlbF9lbXB0eUl0ZW1cIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJsX3RvZG8gaHBfbXJsMTUgaHBfcHJsMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb0lkXCI+e3sgaWQgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfaGlkZGVuIGpzX3RvZG9TdGF0ZVwiPnt7IHN0YXRlIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX3RvZG9faGVhZCB7eyBzdGF0ZUNsYXNzIH19XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fYm9keVwiPlxuICAgICAgPGgzIGNsYXNzPVwiZWxfdG9kb1RpdGxlXCI+XG4gICAgICAgIFRlc3Q6IFN1Y2Nlc3MgVGFzayBDcmVhdGUgYnkgVFMgUHJvZ3JhbVxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+Y3JlYXRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnN0YXJ0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fc3RhdHVzXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiYmxfdG9kb19wcm9ncmVzc1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIjBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjEwXCIgb25pbnB1dD1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLW91dHB1dCcpLnZhbHVlPXRoaXMudmFsdWVcIiAvPlxuICAgICAgICAgIDxvdXRwdXQgaWQ9XCJjLW91dHB1dFwiIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+MDwvb3V0cHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+6KaL56mNOjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiIG5hbWU9XCJlc3RpbWF0ZUhvdXJcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCIgbmFtZT1cInJlc3VsdEhvdXJcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iLCJleHBvcnQgY2xhc3MgSHRtbEFjY2Vzc29yIHtcbiAgc3RhdGljIGdldEh0bWxFbGVtZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudE51bGxhYmxlPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB8IG51bGwge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudHM8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBBcnJheTxUPiB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfVxuICAgIGlmIChlbGVtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4uLy4uL3ZpZXdEaXNwbGF5ZXInO1xuaW1wb3J0IHsgVmlld0hhbmRsZXIgfSBmcm9tICcuLi92aWV3SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrQnRuSGFuZGxlciBpbXBsZW1lbnRzIFZpZXdIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0Rpc3BsYXllcjogVmlld0Rpc3BsYXllcikge31cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tBcmVhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfY3JlYXRlVGFza0FyZWEnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19jcmVhdGVUYXNrQnRuJyxcbiAgICAgIGNyZWF0ZVRhc2tBcmVhXG4gICAgKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdmlld0Rpc3BsYXllci5kaXNwbGF5SW5wdXRUYXNrQXJlYVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSAnLi4vQ29udGV4dE1lbnVIYW5kbGVyJztcbmltcG9ydCB7IEV4dGVuc2lvblZpZXdIYW5kbGVyIH0gZnJvbSAnLi4vdmlld0hhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudEhhbmRsZXIgZXh0ZW5kcyBFeHRlbnNpb25WaWV3SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXI6IENvbnRleHRNZW51SGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVzaXN0ZXJUb2RvRXZlbnQnLCBoYW5kbGVyKTtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKCdyZXNpc3RUb2RvT2JzZXJ2ZXInLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2lzdGVyVG9kb0V2ZW50KCk7XG4gICAgdGhpcy5yZXNpc3RUb2RvT2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXN0ZXJUb2RvRXZlbnQoKTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG8nKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHkoJ3Jlc2lzdGVyVG9kb0V2ZW50JylcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2lzdFRvZG9PYnNlcnZlcigpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgICByZWNvcmRzLmZvckVhY2goKHJlYykgPT4ge1xuICAgICAgICByZWMuYWRkZWROb2Rlcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHkoJ3Jlc2lzdFRvZG9PYnNlcnZlcicpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBmb3IgKGxldCB0b2RvbGlzdCBvZiBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kb2xpc3QnKSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b2RvbGlzdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9TdGF0ZSwgVG9kb1N0YXRlcyB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSAnLi4vQ29udGV4dE1lbnVIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250ZXh0TWVudUhhbmRsZXIgaW1wbGVtZW50cyBDb250ZXh0TWVudUhhbmRsZXIge1xuICBwcml2YXRlIHRhcmdldFRvZG86IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlV2FpdGluZ0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVQZW5kaW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBkZWxldGVUb2RvRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhcmdldFRvZG8gPSBudWxsO1xuICAgIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29udGV4dE1lbnUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlV2FpdGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdXYWl0aW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdJblByb2dyZXNzJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0NvbXBsZXRlZCcpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnUGVuZGluZycpO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVUb2RvRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVG9kbygpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHkoKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYztcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkNvbnRleHRNZW51KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgY29uc3QgY3RNZW51ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jyk7XG4gICAgY3RNZW51LnN0eWxlLmxlZnQgPSBTdHJpbmcoZXZlbnQucGFnZVgpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUudG9wID0gU3RyaW5nKGV2ZW50LnBhZ2VZKSArICdweCc7XG4gICAgY3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlV2FpdGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VJbnByb2dyZXNzJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUNvbXBsZXRlZCcsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZVBlbmRpbmcnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVQZW5kaW5nRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfbWVudVRvZG9EZWxldGUnLCBjdE1lbnUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kZWxldGVUb2RvRnVuY1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKHN0YXRlOiBUb2RvU3RhdGUpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy50YXJnZXRUb2RvIHx8XG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvU3RhdGUnLCB0aGlzLnRhcmdldFRvZG8pXG4gICAgICAgIC5pbm5lclRleHQgPT09IHN0YXRlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0VG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5yZW1vdmUoKTtcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBpbnB1dFZtID0gdGhpcy5nZW5lcmF0ZVZpZXdNb2RlbCh0aGlzLnRhcmdldFRvZG8sIHN0YXRlKTtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICB2bVNlcnZpY2UuZGVsZXRlVmlld01vZGVsKGlucHV0Vm0pO1xuICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoXG4gICAgICAnVG9kbycsXG4gICAgICB2bUJ1aWxkZXIud2l0aChpbnB1dFZtKS53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KS5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlVG9kbygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0VG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2VG9kb0VtcHR5ID0gdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy50YXJnZXRUb2RvLnJlbW92ZSgpO1xuICAgIHByZXZUb2RvRW1wdHk/LnJlbW92ZSgpO1xuXG4gICAgVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKS5kZWxldGVWaWV3TW9kZWwoXG4gICAgICB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVZpZXdNb2RlbChcbiAgICB0b2RvOiBIVE1MRWxlbWVudCxcbiAgICBzdGF0ZT86IHN0cmluZ1xuICApOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvSWQnLCB0b2RvKS5pbm5lclRleHRcbiAgICApO1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGF0ZSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRvZG8pLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaWQgPCAwIHx8ICFpc1RvZG9TdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgfVxuICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICByZXR1cm4gdm1CdWlsZGVyXG4gICAgICAud2l0aCh7IGlkOiBpZCB9KVxuICAgICAgLndpdGgoeyBtb2RlbFR5cGU6ICdUb2RvJyB9KVxuICAgICAgLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pXG4gICAgICAuYnVpbGQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RvZG9TdGF0ZShvYmo6IGFueSk6IG9iaiBpcyBUb2RvU3RhdGUge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKS5pbmNsdWRlcyhvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0N0TWVudUhhbmRsZXIoKTogQ29udGV4dE1lbnVIYW5kbGVyIHtcbiAgcmV0dXJuIG5ldyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyKCk7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFZpZXdIYW5kbGVyIHtcbiAgcmVnaXN0ZXIoKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4dGVuc2lvblZpZXdIYW5kbGVyIGltcGxlbWVudHMgVmlld0hhbmRsZXIge1xuICBwcm90ZWN0ZWQgc3ViSGFuZGxlckhvbGRlcjogU3ViVmlld0hhbmRsZXJIb2xkZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlciA9IG5ldyBTdWJWaWV3SGFuZGxlckhvbGRlcigpO1xuICB9XG4gIGFic3RyYWN0IHJlZ2lzdGVyKCk6IHZvaWQ7XG4gIGFkZEhhbmRsZXIobWV0aG9kTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBTdWJWaWV3SGFuZGxlcik6IHRoaXMge1xuICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5hZGQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0SGFuZGxlcihtZXRob2ROYW1lOiBzdHJpbmcpOiBTdWJWaWV3SGFuZGxlciB7XG4gICAgcmV0dXJuIHRoaXMuc3ViSGFuZGxlckhvbGRlci5nZXQobWV0aG9kTmFtZSk7XG4gIH1cbn1cblxuY2xhc3MgU3ViVmlld0hhbmRsZXJIb2xkZXIge1xuICBzdWJIYW5kbGVyczogTWFwPFN0cmluZywgU3ViVmlld0hhbmRsZXI+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG4gIGFkZChtZXRob2ROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IFN1YlZpZXdIYW5kbGVyKSB7XG4gICAgdGhpcy5zdWJIYW5kbGVycy5zZXQobWV0aG9kTmFtZSwgaGFuZGxlcik7XG4gIH1cbiAgZ2V0KG1ldGhvZE5hbWU6IHN0cmluZyk6IFN1YlZpZXdIYW5kbGVyIHwgbmV2ZXIge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnN1YkhhbmRsZXJzLmdldChtZXRob2ROYW1lKTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHRocm93IEVycm9yKCcnKTtcbiAgfVxuICBzdXBwbHkobWV0aG9kTmFtZTogc3RyaW5nKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KG1ldGhvZE5hbWUpLnN1cHBseSgpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ViVmlld0hhbmRsZXIge1xuICBzdXBwbHkoKTogRXZlbnRMaXN0ZW5lcjtcbn1cbiIsImltcG9ydCB7IFZpZXdIYW5kbGVyIH0gZnJvbSAnLi92aWV3SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBWaWV3SGFuZGxlcnMgaW1wbGVtZW50cyBWaWV3SGFuZGxlciB7XG4gIHByaXZhdGUgaGFuZGxlcnM6IEFycmF5PFZpZXdIYW5kbGVyPjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihhcmdzOiBWaWV3SGFuZGxlcltdKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGFyZ3M7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXQoLi4uYXJnczogVmlld0hhbmRsZXJbXSk6IFZpZXdIYW5kbGVycyB7XG4gICAgcmV0dXJuIG5ldyBWaWV3SGFuZGxlcnMoYXJncyk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzKSB7XG4gICAgICBoYW5kbGVyLnJlZ2lzdGVyKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RGlzcGxheWVyIHtcbiAgcHVibGljIGRpc3BsYXlJbnB1dFRhc2tBcmVhKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlPEhUTUxJbnB1dEVsZW1lbnQ+KFxuICAgICAgICAnI3JhZGlvQ3JlYXRlVGFza0RldGFpbCdcbiAgICAgICk/LmNoZWNrZWRcbiAgICApIHtcbiAgICAgIC8vIGNvbnN0IGNsYXNzTGlzdCA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2lucHV0VGFza0RldGFpbEFyZWEnKVxuICAgICAgLy8gICAuY2xhc3NMaXN0O1xuICAgICAgLy8gaWYgKGNsYXNzTGlzdC5jb250YWlucygnaXNfaGlkZGVuJykpIHtcbiAgICAgIC8vICAgY2xhc3NMaXN0LnJlbW92ZSgnaXNfaGlkZGVuJyk7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5hZGQoJ2lzX2FjdGl2ZScpO1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKFxuICAgICAgICAnVG9kbydcbiAgICAgICk7XG4gICAgICB2bUJ1aWxkZXIud2l0aCh7IHdvcmtTdGF0ZTogJ1dhaXRpbmcnIH0pO1xuICAgICAgaWYgKHZtQnVpbGRlcikge1xuICAgICAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB2bVNlcnZpY2UuY3JlYXRlVmlld01vZGVsKCdUb2RvJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvLCBpbml0VG9kbyB9IGZyb20gJy4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyIH0gZnJvbSAnLi92aWV3TW9kZWxCdWlsZGVyJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgc3RhdGljIG5ld0luc3RhbmNlKCk6IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWxCdWlsZGVyKHR5cGU/OiBWaWV3TW9kZWxUeXBlKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yKHR5cGUpO1xuICB9XG59XG5cbnR5cGUgQWxsVmlld01vZGVsID0gVmlld01vZGVsICYgVmlld01vZGVsVG9kbztcbnR5cGUgQWxsVmlld01vZGVsS2V5ID0ga2V5b2YgQWxsVmlld01vZGVsO1xuXG5jbGFzcyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJpdmF0ZSBidWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD47XG5cbiAgY29uc3RydWN0b3IobW9kZWxUeXBlPzogVmlld01vZGVsVHlwZSkge1xuICAgIGlmIChtb2RlbFR5cGUpIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUb2RvQnVpbGRlcigpLndpdGgoeyBtb2RlbFR5cGU6IG1vZGVsVHlwZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFZpZXdNb2RlbEJhc2VCdWlsZGVyKCkud2l0aCh7XG4gICAgICAgIG1vZGVsVHlwZTogJ1ZpZXdNb2RlbCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB3aXRoKFxuICAgIGlucHV0OiB7IFtrZXkgaW4gQWxsVmlld01vZGVsS2V5XT86IEFsbFZpZXdNb2RlbFtrZXldIH1cbiAgKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgdGhpcy5idWlsZGVyID0gdGhpcy5idWlsZGVyLndpdGgoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogVmlld01vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKCk7XG4gIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFQgZXh0ZW5kcyBWaWV3TW9kZWw+XG4gIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxUPiwgUGFydGlhbDxWaWV3TW9kZWw+IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGU7XG5cbiAgd2l0aChpbnB1dDogeyBba2V5IGluIGtleW9mIFRdPzogVFtrZXldIH0pOiB0aGlzIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgICB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgICB0aGlzLndpdGhNb2RlbFR5cGUoaW5wdXQubW9kZWxUeXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBba2V5XTogaW5wdXRba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aElkKGlkOiBudW1iZXIpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnaWQnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBpZDogaWQgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aE1vZGVsVHlwZShcbiAgICB0eXBlOiBWaWV3TW9kZWxUeXBlXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdtb2RlbFR5cGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBtb2RlbFR5cGU6IHR5cGUgfSk7XG4gIH1cblxuICBidWlsZCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUluc3RhbmNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VuZXJhdGVJbnN0YW5jZSgpOiBUO1xufVxuXG5jbGFzcyBWaWV3TW9kZWxCYXNlQnVpbGRlciBleHRlbmRzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJvdGVjdGVkIGdlbmVyYXRlSW5zdGFuY2UoKTogVmlld01vZGVsIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWQgPz8gLTE7XG4gICAgY29uc3QgdHlwZTogVmlld01vZGVsVHlwZSA9IHRoaXMubW9kZWxUeXBlID8/ICdWaWV3TW9kZWwnO1xuICAgIGNvbnN0IG9iajogVmlld01vZGVsID0geyBpZDogaWQsIG1vZGVsVHlwZTogdHlwZSB9O1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgIT09ICdpZCcgfHwgcHJvcCAhPT0gJ21vZGVsVHlwZScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3BdOiB0aGlzW3Byb3BdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRWaWV3TW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiAnVG9kbyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gaW5pdFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldE5leHRJZCgpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZ2V0Vmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSwgdmlld01vZGVsPzogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAoIXZtTWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgdmlld01vZGVsID09PSB1bmRlZmluZWRcbiAgICAgID8gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KS5idWlsZCgpKVxuICAgICAgOiB2bU1hbmFnZXIuY3JlYXRlKHZpZXdNb2RlbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLnVwZGF0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBUb2RvQ29tcG9uZW50KCdUb2RvJywgJy5qc190b2RvbGlzdCcpXG5leHBvcnQgY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFZpZXdNb2RlbFRvZG8ge1xuICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICBwcml2YXRlIF9tb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGU7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnRzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZURhdGU6IERhdGU7XG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT86IERhdGU7XG4gIHByaXZhdGUgX2VzdGltYXRlSG91cjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBwcml2YXRlIF9kaXNwbGF5T3JkZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0b2RvQmFzZT86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvID0gaW5pdFRvZG8odG9kb0Jhc2UgPz8ge30pO1xuICAgIHRoaXMuX2lkID0gdG9kby5pZDtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSB0b2RvLm1vZGVsVHlwZTtcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgdGhpcy5fY29udGVudHMgPSB0b2RvLmNvbnRlbnRzO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvLmNyZWF0ZURhdGU7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kby5zdGFydERhdGU7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gdG9kby5lc3RpbWF0ZUhvdXI7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IHRvZG8ucmVzdWx0SG91cjtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSB0b2RvLndvcmtTdGF0ZTtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvLmRpc3BsYXlPcmRlcjtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kbyhiYXNlOiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+KTogVmlld01vZGVsVG9kbyB7XG4gIGNvbnN0IHRhcmdldDogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiA9IHt9O1xuICB0YXJnZXQuaWQgPSBiYXNlPy5pZCA/PyAtMTtcbiAgdGFyZ2V0Lm1vZGVsVHlwZSA9ICdUb2RvJztcbiAgdGFyZ2V0LnRpdGxlID0gYmFzZT8udGl0bGUgPz8gJyc7XG4gIHRhcmdldC5jb250ZW50cyA9IGJhc2U/LmNvbnRlbnRzID8/ICcnO1xuICB0YXJnZXQuY3JlYXRlRGF0ZSA9IGJhc2U/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgdGFyZ2V0LnN0YXJ0RGF0ZSA9IGJhc2U/LnN0YXJ0RGF0ZSA/PyB1bmRlZmluZWQ7XG4gIHRhcmdldC5lc3RpbWF0ZUhvdXIgPSBiYXNlPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgdGFyZ2V0LnJlc3VsdEhvdXIgPSBiYXNlPy5yZXN1bHRIb3VyID8/IDA7XG4gIHRhcmdldC53b3JrU3RhdGUgPSBiYXNlPy53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICB0YXJnZXQuZGlzcGxheU9yZGVyID0gYmFzZT8uZGlzcGxheU9yZGVyID8/IDA7XG4gIHJldHVybiB0YXJnZXQgYXMgVmlld01vZGVsVG9kbztcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb2xpc3QgfSBmcm9tICcuL3RvZG9saXN0JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Cb2FyZCB7XG4gIHByaXZhdGUgdG9kb2xpc3RzOiBNYXA8VG9kb1N0YXRlLCBUb2RvbGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChsZXQgc3RhdGVOYW1lIG9mIE9iamVjdC52YWx1ZXMoVG9kb1N0YXRlcykpIHtcbiAgICAgIHRoaXMudG9kb2xpc3RzLnNldChzdGF0ZU5hbWUsIG5ldyBUb2RvbGlzdChzdGF0ZU5hbWUpKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pIHtcbiAgICB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpIS5hZGRUb2RvKHRvZG8pO1xuICB9XG5cbiAgZ2V0VG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB7XG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmdldFRvZG8oaWQpO1xuICAgIGlmICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgaWQ6IG51bWJlcikge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmRlbGV0ZVRvZG8oaWQpO1xuICB9XG5cbiAgdXBkYXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCB0b2RvOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLnVwZGF0ZVRvZG8odG9kbyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBUb2RvU3RhdGVzID0ge1xuICBXQUlUSU5HOiAnV2FpdGluZycsXG4gIElOX1BST0dSRVNTOiAnSW5Qcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvbGlzdCB7XG4gIHByaXZhdGUgX3RvZG9saXN0OiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGVOYW1lOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl90b2RvbGlzdCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldCB0b2RvbGlzdCgpOiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9saXN0O1xuICB9XG5cbiAgZ2V0IHN0YXRlTmFtZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZU5hbWU7XG4gIH1cblxuICBnZXRUb2RvKGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXQoaWQpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHRoaXMuX3RvZG9saXN0LnZhbHVlcygpKSB7XG4gICAgICAgIGlmIChkZWxUb2RvT3JkZXIgPCB0b2RvLmRpc3BsYXlPcmRlcikge1xuICAgICAgICAgIHRvZG8uZGlzcGxheU9yZGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5kZWxldGUoaWQpO1xuICB9XG5cbiAgdXBkYXRlVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudG9kb2xpc3QuZ2V0KHRvZG8uaWQpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlciBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsVG9kbz4ge1xuICBwcml2YXRlIGZpbmFsSWQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9kb0JvYXJkOiBUb2RvQm9hcmQpIHtcbiAgICB0aGlzLmZpbmFsSWQgPSAwO1xuICB9XG5cbiAgZ2V0TmV4dElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmluYWxJZCArIDE7XG4gIH1cblxuICBjcmVhdGUodm1Nb2RlbDogVmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHZtTW9kZWwpO1xuICAgIGlmICh0b2RvT2JqLmlkID4gdGhpcy5maW5hbElkKSB7XG4gICAgICB0aGlzLmZpbmFsSWQgPSB0b2RvT2JqLmlkO1xuICAgIH1cbiAgICB0aGlzLl90b2RvQm9hcmQuYWRkVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBnZXREYXRhKHRvZG9PYmo6IFZpZXdNb2RlbCAmIHsgd29ya1N0YXRlOiBUb2RvU3RhdGUgfSk6IFZpZXdNb2RlbFRvZG8ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQuZ2V0VG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cblxuICB1cGRhdGUodG9kb09iajogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQudXBkYXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBkZWxldGUodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogdm9pZCB7XG4gICAgdGhpcy5fdG9kb0JvYXJkLmRlbGV0ZVRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmouaWQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9