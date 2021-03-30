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
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var CreateTaskBtnHandler_1 = __webpack_require__(/*! ./view/handler/impl/CreateTaskBtnHandler */ "./src/ts/view/handler/impl/CreateTaskBtnHandler.ts");
var TodoComponentHandler_1 = __webpack_require__(/*! ./view/handler/impl/TodoComponentHandler */ "./src/ts/view/handler/impl/TodoComponentHandler.ts");
var TodoContextMenuHandler_1 = __webpack_require__(/*! ./view/handler/impl/TodoContextMenuHandler */ "./src/ts/view/handler/impl/TodoContextMenuHandler.ts");
var todoConvertElementHandler_1 = __webpack_require__(/*! ./view/handler/impl/todoConvertElementHandler */ "./src/ts/view/handler/impl/todoConvertElementHandler.ts");
var todoReconvertElementHandler_1 = __webpack_require__(/*! ./view/handler/impl/todoReconvertElementHandler */ "./src/ts/view/handler/impl/todoReconvertElementHandler.ts");
var viewEventHandlers_1 = __webpack_require__(/*! ./view/handler/viewEventHandlers */ "./src/ts/view/handler/viewEventHandlers.ts");
var childComponentHolder_1 = __webpack_require__(/*! ./view/templates/base/child/childComponentHolder */ "./src/ts/view/templates/base/child/childComponentHolder.ts");
var viewDisplayer_1 = __webpack_require__(/*! ./view/viewDisplayer */ "./src/ts/view/viewDisplayer.ts");
var viewModelManagerFactoryImpl_1 = __webpack_require__(/*! ./viewmodel/manager/viewModelManagerFactoryImpl */ "./src/ts/viewmodel/manager/viewModelManagerFactoryImpl.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ./viewmodel/service/viewModelServiceImpl */ "./src/ts/viewmodel/service/viewModelServiceImpl.ts");
var todoCmpHolder = new childComponentHolder_1.ChildComponentHolder();
todoCmpHolder.components = childComponentHolder_1.createTodoChildComponents();
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
viewEventHandlers_1.ViewEventHandlerRegisters.init(new TodoComponentHandler_1.TodoComponentHandler(new TodoContextMenuHandler_1.TodoContextMenuHandler(), new todoConvertElementHandler_1.TodoConvertElementHandler(todoCmpHolder), new todoReconvertElementHandler_1.TodoReconvertElementHandler(todoCmpHolder)), new CreateTaskBtnHandler_1.CreateTaskBtnHandler(new viewDisplayer_1.ViewDisplayer())).register();
document.body.addEventListener('click', function () {
    htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});


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

/***/ "./src/ts/view/decorator/viewComponent.ts":
/*!************************************************!*\
  !*** ./src/ts/view/decorator/viewComponent.ts ***!
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
var todoComponent_1 = __webpack_require__(/*! ../templates/todo/todoComponent */ "./src/ts/view/templates/todo/todoComponent.ts");
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

/***/ "./src/ts/view/handler/impl/CreateTaskBtnHandler.ts":
/*!**********************************************************!*\
  !*** ./src/ts/view/handler/impl/CreateTaskBtnHandler.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskBtnHandler = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
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

/***/ "./src/ts/view/handler/impl/TodoComponentHandler.ts":
/*!**********************************************************!*\
  !*** ./src/ts/view/handler/impl/TodoComponentHandler.ts ***!
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewEventHandler_1 = __webpack_require__(/*! ../viewEventHandler */ "./src/ts/view/handler/viewEventHandler.ts");
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

/***/ "./src/ts/view/handler/impl/TodoContextMenuHandler.ts":
/*!************************************************************!*\
  !*** ./src/ts/view/handler/impl/TodoContextMenuHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoContextMenuHandler = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../../../viewmodel/service/viewModelServiceImpl */ "./src/ts/viewmodel/service/viewModelServiceImpl.ts");
var todoState_1 = __webpack_require__(/*! ../../../viewmodel/todo/todoState */ "./src/ts/viewmodel/todo/todoState.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../../../viewmodel/viewModelBuilderFactory */ "./src/ts/viewmodel/viewModelBuilderFactory.ts");
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

/***/ "./src/ts/view/handler/impl/todoConvertElementHandler.ts":
/*!***************************************************************!*\
  !*** ./src/ts/view/handler/impl/todoConvertElementHandler.ts ***!
  \***************************************************************/
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

/***/ "./src/ts/view/handler/impl/todoReconvertElementHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/view/handler/impl/todoReconvertElementHandler.ts ***!
  \*****************************************************************/
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

/***/ "./src/ts/view/handler/viewEventHandler.ts":
/*!*************************************************!*\
  !*** ./src/ts/view/handler/viewEventHandler.ts ***!
  \*************************************************/
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

/***/ "./src/ts/view/handler/viewEventHandlers.ts":
/*!**************************************************!*\
  !*** ./src/ts/view/handler/viewEventHandlers.ts ***!
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

/***/ "./src/ts/view/templates/base/child/baseChildComponent.ts":
/*!****************************************************************!*\
  !*** ./src/ts/view/templates/base/child/baseChildComponent.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseChildComponent = void 0;
var componentTemplateParts_1 = __webpack_require__(/*! ../componentTemplateParts */ "./src/ts/view/templates/base/componentTemplateParts.ts");
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

/***/ "./src/ts/view/templates/base/child/childComponentHolder.ts":
/*!******************************************************************!*\
  !*** ./src/ts/view/templates/base/child/childComponentHolder.ts ***!
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
exports.createTodoChildComponents = exports.ChildComponentHolder = void 0;
var todoDetailComponent_1 = __webpack_require__(/*! ../../todo/child/todoDetailComponent */ "./src/ts/view/templates/todo/child/todoDetailComponent.ts");
var todoTimeComponent_1 = __webpack_require__(/*! ../../todo/child/todoTimeComponent */ "./src/ts/view/templates/todo/child/todoTimeComponent.ts");
var todoTitleComponent_1 = __webpack_require__(/*! ../../todo/child/todoTitleComponent */ "./src/ts/view/templates/todo/child/todoTitleComponent.ts");
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

/***/ "./src/ts/view/templates/base/componentTemplateParts.ts":
/*!**************************************************************!*\
  !*** ./src/ts/view/templates/base/componentTemplateParts.ts ***!
  \**************************************************************/
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

/***/ "./src/ts/view/templates/todo/child/todoDetailComponent.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/view/templates/todo/child/todoDetailComponent.ts ***!
  \*****************************************************************/
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../base/child/baseChildComponent */ "./src/ts/view/templates/base/child/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../base/componentTemplateParts */ "./src/ts/view/templates/base/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../todoTemplates */ "./src/ts/view/templates/todo/todoTemplates.ts");
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

/***/ "./src/ts/view/templates/todo/child/todoTimeComponent.ts":
/*!***************************************************************!*\
  !*** ./src/ts/view/templates/todo/child/todoTimeComponent.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTimeComponent = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../base/child/baseChildComponent */ "./src/ts/view/templates/base/child/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../base/componentTemplateParts */ "./src/ts/view/templates/base/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../todoTemplates */ "./src/ts/view/templates/todo/todoTemplates.ts");
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

/***/ "./src/ts/view/templates/todo/child/todoTitleComponent.ts":
/*!****************************************************************!*\
  !*** ./src/ts/view/templates/todo/child/todoTitleComponent.ts ***!
  \****************************************************************/
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
var htmlAccessor_1 = __webpack_require__(/*! ../../../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var baseChildComponent_1 = __webpack_require__(/*! ../../base/child/baseChildComponent */ "./src/ts/view/templates/base/child/baseChildComponent.ts");
var componentTemplateParts_1 = __webpack_require__(/*! ../../base/componentTemplateParts */ "./src/ts/view/templates/base/componentTemplateParts.ts");
var todoTemplates_1 = __webpack_require__(/*! ../todoTemplates */ "./src/ts/view/templates/todo/todoTemplates.ts");
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

/***/ "./src/ts/view/templates/todo/todoComponent.ts":
/*!*****************************************************!*\
  !*** ./src/ts/view/templates/todo/todoComponent.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
var todoTemplates_1 = __webpack_require__(/*! ./todoTemplates */ "./src/ts/view/templates/todo/todoTemplates.ts");
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

/***/ "./src/ts/view/templates/todo/todoTemplates.ts":
/*!*****************************************************!*\
  !*** ./src/ts/view/templates/todo/todoTemplates.ts ***!
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

/***/ "./src/ts/view/viewDisplayer.ts":
/*!**************************************!*\
  !*** ./src/ts/view/viewDisplayer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewDisplayer = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../viewmodel/service/viewModelServiceImpl */ "./src/ts/viewmodel/service/viewModelServiceImpl.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewmodel/viewModelBuilderFactory */ "./src/ts/viewmodel/viewModelBuilderFactory.ts");
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

/***/ "./src/ts/viewmodel/manager/viewModelManagerFactoryImpl.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/viewmodel/manager/viewModelManagerFactoryImpl.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTodoManagerFactoryImpl = void 0;
var todoBoard_1 = __webpack_require__(/*! ../todo/todoBoard */ "./src/ts/viewmodel/todo/todoBoard.ts");
var viewTodoManager_1 = __webpack_require__(/*! ../todo/viewTodoManager */ "./src/ts/viewmodel/todo/viewTodoManager.ts");
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

/***/ "./src/ts/viewmodel/service/viewModelServiceImpl.ts":
/*!**********************************************************!*\
  !*** ./src/ts/viewmodel/service/viewModelServiceImpl.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewModelServiceImpl = void 0;
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewModelBuilderFactory */ "./src/ts/viewmodel/viewModelBuilderFactory.ts");
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

/***/ "./src/ts/viewmodel/todo/todo.ts":
/*!***************************************!*\
  !*** ./src/ts/viewmodel/todo/todo.ts ***!
  \***************************************/
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
var viewComponent_1 = __webpack_require__(/*! ../../view/decorator/viewComponent */ "./src/ts/view/decorator/viewComponent.ts");
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

/***/ "./src/ts/viewmodel/todo/todoBoard.ts":
/*!********************************************!*\
  !*** ./src/ts/viewmodel/todo/todoBoard.ts ***!
  \********************************************/
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
var todoState_1 = __webpack_require__(/*! ./todoState */ "./src/ts/viewmodel/todo/todoState.ts");
var todolist_1 = __webpack_require__(/*! ./todolist */ "./src/ts/viewmodel/todo/todolist.ts");
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

/***/ "./src/ts/viewmodel/todo/todoState.ts":
/*!********************************************!*\
  !*** ./src/ts/viewmodel/todo/todoState.ts ***!
  \********************************************/
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

/***/ "./src/ts/viewmodel/todo/todolist.ts":
/*!*******************************************!*\
  !*** ./src/ts/viewmodel/todo/todolist.ts ***!
  \*******************************************/
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

/***/ "./src/ts/viewmodel/todo/viewTodoManager.ts":
/*!**************************************************!*\
  !*** ./src/ts/viewmodel/todo/viewTodoManager.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTodoManager = void 0;
var todo_1 = __webpack_require__(/*! ./todo */ "./src/ts/viewmodel/todo/todo.ts");
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


/***/ }),

/***/ "./src/ts/viewmodel/viewModelBuilderFactory.ts":
/*!*****************************************************!*\
  !*** ./src/ts/viewmodel/viewModelBuilderFactory.ts ***!
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
exports.ViewModelBuilderFactory = void 0;
var todo_1 = __webpack_require__(/*! ../viewmodel/todo/todo */ "./src/ts/viewmodel/todo/todo.ts");
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2h0bWxVdGlscy9odG1sQWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXcvZGVjb3JhdG9yL3ZpZXdDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXcvaGFuZGxlci9pbXBsL0NyZWF0ZVRhc2tCdG5IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3L2hhbmRsZXIvaW1wbC9Ub2RvQ29tcG9uZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbnRleHRNZW51SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy9oYW5kbGVyL2ltcGwvdG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy9oYW5kbGVyL2ltcGwvdG9kb1JlY29udmVydEVsZW1lbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3L2hhbmRsZXIvdmlld0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy9oYW5kbGVyL3ZpZXdFdmVudEhhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3L3RlbXBsYXRlcy9iYXNlL2NoaWxkL2Jhc2VDaGlsZENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy90ZW1wbGF0ZXMvYmFzZS9jaGlsZC9jaGlsZENvbXBvbmVudEhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy90ZW1wbGF0ZXMvYmFzZS9jb21wb25lbnRUZW1wbGF0ZVBhcnRzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3L3RlbXBsYXRlcy90b2RvL2NoaWxkL3RvZG9EZXRhaWxDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXcvdGVtcGxhdGVzL3RvZG8vY2hpbGQvdG9kb1RpbWVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXcvdGVtcGxhdGVzL3RvZG8vY2hpbGQvdG9kb1RpdGxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3L3RlbXBsYXRlcy90b2RvL3RvZG9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXcvdGVtcGxhdGVzL3RvZG8vdG9kb1RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlldy92aWV3RGlzcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3bW9kZWwvbWFuYWdlci92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXdtb2RlbC9zZXJ2aWNlL3ZpZXdNb2RlbFNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aWV3bW9kZWwvdG9kby90b2RvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3ZpZXdtb2RlbC90b2RvL3ZpZXdUb2RvTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlld21vZGVsL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7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LE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ08sbUNBQWEsR0FBckIsVUFBc0IsSUFBVTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNPLHNDQUFnQixHQUF4QixVQUNFLElBQVk7UUFFWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNPLG9DQUFjLEdBQXRCLFVBQ0UsSUFBWTtRQUVaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ08sbUNBQWEsR0FBckIsVUFDRSxLQUFnQjtRQUVoQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNPLHNDQUFnQixHQUF4QixVQUNFLEtBQWE7UUFFYixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLHNDQUFnQixHQUExQjtRQUNFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxzQ0FBZ0IsR0FBMUI7UUFDRSxPQUFPLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLENBbEZ5Qix3QkFBd0IsR0FrRmpEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2FwcC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IENyZWF0ZVRhc2tCdG5IYW5kbGVyIH0gZnJvbSAnLi92aWV3L2hhbmRsZXIvaW1wbC9DcmVhdGVUYXNrQnRuSGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvQ29tcG9uZW50SGFuZGxlciB9IGZyb20gJy4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbXBvbmVudEhhbmRsZXInO1xuaW1wb3J0IHsgVG9kb0NvbnRleHRNZW51SGFuZGxlciB9IGZyb20gJy4vdmlldy9oYW5kbGVyL2ltcGwvVG9kb0NvbnRleHRNZW51SGFuZGxlcic7XG5pbXBvcnQgeyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyIH0gZnJvbSAnLi92aWV3L2hhbmRsZXIvaW1wbC90b2RvQ29udmVydEVsZW1lbnRIYW5kbGVyJztcbmltcG9ydCB7IFRvZG9SZWNvbnZlcnRFbGVtZW50SGFuZGxlciB9IGZyb20gJy4vdmlldy9oYW5kbGVyL2ltcGwvdG9kb1JlY29udmVydEVsZW1lbnRIYW5kbGVyJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMgfSBmcm9tICcuL3ZpZXcvaGFuZGxlci92aWV3RXZlbnRIYW5kbGVycyc7XG5pbXBvcnQge1xuICBDaGlsZENvbXBvbmVudEhvbGRlcixcbiAgY3JlYXRlVG9kb0NoaWxkQ29tcG9uZW50c1xufSBmcm9tICcuL3ZpZXcvdGVtcGxhdGVzL2Jhc2UvY2hpbGQvY2hpbGRDb21wb25lbnRIb2xkZXInO1xuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuL3ZpZXcvdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vdmlldy92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIH0gZnJvbSAnLi92aWV3bW9kZWwvbWFuYWdlci92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuL3ZpZXdtb2RlbC9zZXJ2aWNlL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcblxuY29uc3QgdG9kb0NtcEhvbGRlciA9IG5ldyBDaGlsZENvbXBvbmVudEhvbGRlcjxcbiAgVG9kb0VsZW1lbnQsXG4gIENvbnZlcnRpYmxlQ29tcG9uZW50XG4+KCk7XG50b2RvQ21wSG9sZGVyLmNvbXBvbmVudHMgPSBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzKCk7XG5cbi8vY29uc3QgdG9kb1Jlc2V0SGFuZGxlciA9IG5ldyBUb2RvUmVzZXRFbGVtZW50SGFuZGxlcih0b2RvQ21wSG9sZGVyKTtcblZpZXdNb2RlbFNlcnZpY2VJbXBsLmluaXQobmV3IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsKCkpO1xuXG5WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzLmluaXQoXG4gIG5ldyBUb2RvQ29tcG9uZW50SGFuZGxlcihcbiAgICBuZXcgVG9kb0NvbnRleHRNZW51SGFuZGxlcigpLFxuICAgIG5ldyBUb2RvQ29udmVydEVsZW1lbnRIYW5kbGVyKFxuICAgICAgdG9kb0NtcEhvbGRlclxuICAgICAgLy90b2RvUmVzZXRIYW5kbGVyXG4gICAgKSxcbiAgICBuZXcgVG9kb1JlY29udmVydEVsZW1lbnRIYW5kbGVyKHRvZG9DbXBIb2xkZXIpXG4gICksXG4gIG5ldyBDcmVhdGVUYXNrQnRuSGFuZGxlcihuZXcgVmlld0Rpc3BsYXllcigpKVxuICAvL25ldyBXaW5kb3dIYW5kbGVyKHRvZG9SZXNldEhhbmRsZXIpXG4pLnJlZ2lzdGVyKCk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9Db250ZXh0TWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbiIsImV4cG9ydCBjbGFzcyBIdG1sQWNjZXNzb3Ige1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQgfCBudWxsIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnRzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogQXJyYXk8VD4ge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3JBbGw8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRFbGVtZW50SW5uZXJUZXh0KFxuICAgIGVsZW06IEhUTUxFbGVtZW50LFxuICAgIGJhc2VIdG1sOiBzdHJpbmcsXG4gICAgaWRlbnRpZmllcjogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19kYXRhJywgZWxlbSkuaW5uZXJUZXh0O1xuICAgIGVsZW0uaW5uZXJIVE1MID0gYmFzZUh0bWwucmVwbGFjZShpZGVudGlmaWVyLCBkYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0RWxlbWVudFZhbHVlKFxuICAgIGVsZW06IEhUTUxFbGVtZW50LFxuICAgIGJhc2VIdG1sOiBzdHJpbmcsXG4gICAgaWRlbnRpZmllcjogc3RyaW5nLFxuICAgIHZhbHVlPzogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgdmFsdWUgPz9cbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2RhdGEnLCBlbGVtKS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPz9cbiAgICAgICcnO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gYmFzZUh0bWwucmVwbGFjZShpZGVudGlmaWVyLCBkYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uLy4uL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9kby90b2RvQ29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdDb21wb25lbnQoXG4gIG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSxcbiAgc2VsZWN0b3I6IHN0cmluZ1xuKTogRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24gPFQgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBhcmdzLmZpbmQoaW1wbGVtZW50c1RvZG8pIGFzIFZpZXdNb2RlbFRvZG8gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgICAgY29uc3QgdG9kb0NtcCA9IG5ldyBUb2RvQ29tcG9uZW50KHRvZG8sIG1vZGVsVHlwZSwgc2VsZWN0b3IpO1xuICAgICAgICAgIHRvZG9DbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW1wbGVtZW50c1RvZG8oYXJnOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhcmcgIT09IG51bGwgJiZcbiAgICB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBhcmcuaWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGFyZy5tb2RlbFR5cGUgPT09ICdzdHJpbmcnXG4gICk7XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdEaXNwbGF5ZXIgfSBmcm9tICcuLi8uLi92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGFza0J0bkhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3RGlzcGxheWVyOiBWaWV3RGlzcGxheWVyKSB7IH1cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tBcmVhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfY3JlYXRlVGFza0FyZWEnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19jcmVhdGVUYXNrQnRuJyxcbiAgICAgIGNyZWF0ZVRhc2tBcmVhXG4gICAgKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdmlld0Rpc3BsYXllci5kaXNwbGF5SW5wdXRUYXNrQXJlYVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVG9kb0VsZW1lbnQgfSBmcm9tICcuLi8uLi90b2RvRWxlbWVudCc7XG5pbXBvcnQge1xuICBFeHRlbnNpb25WaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIsXG4gIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllclxufSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnRIYW5kbGVyIGV4dGVuZHMgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2N0TWVudUhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgICBfY29udmVydEhhbmRsZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllcixcbiAgICBfcmVjb252ZXJ0SGFuZGxlcjogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVnaXN0ZXJSaWdodENsaWNrRXZlbnQnLCBfY3RNZW51SGFuZGxlcik7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLmFkZCgncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udGV4dCcsIF9jdE1lbnVIYW5kbGVyKTtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKCdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JywgX2NvbnZlcnRIYW5kbGVyKTtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKFxuICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX3JlY29udmVydCcsXG4gICAgICBfcmVjb252ZXJ0SGFuZGxlclxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJBZGRUb2RvT2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9kb0VsZW1FdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJpZ2h0Q2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kbycpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseSgncmVnaXN0ZXJSaWdodENsaWNrRXZlbnQnKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJBZGRUb2RvT2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuICAgICAgcmVjb3Jkcy5mb3JFYWNoKChyZWMpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHJlYy5hZGRlZE5vZGVzKTtcbiAgICAgICAgY29uc3QgdG9kb0VsZW0gPSBnZXRUb2RvRWxlbUZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgICAgIGlmICghdG9kb0VsZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHkoJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnRleHQnKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGVFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgICAgICcuanNfdG9kb1RpdGxlJyxcbiAgICAgICAgICB0b2RvRWxlbVxuICAgICAgICApO1xuICAgICAgICB0b2RvVGl0bGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2tleXByZXNzJyxcbiAgICAgICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICAgICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9yZWNvbnZlcnQnLFxuICAgICAgICAgICAgJ1RpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdG9kb1RpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdkYmxjbGljaycsXG4gICAgICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfY29udmVydCcsXG4gICAgICAgICAgICAnVGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCB0b2RvTGlzdCBvZiBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kb2xpc3QnKSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b2RvTGlzdCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyVG9kb0VsZW1FdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB0aXRsZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvVGl0bGUnKTtcbiAgICB0aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdkYmxjbGljaycsXG4gICAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICAgICAgJ3JlZ2lzdGVyVG9kb09ic2VydmVyX2NvbnZlcnQnLFxuICAgICAgICAnVGl0bGUnXG4gICAgICApXG4gICAgKTtcbiAgICB0aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleXByZXNzJyxcbiAgICAgIHRoaXMuc3ViSGFuZGxlckhvbGRlci5zdXBwbHk8VG9kb0VsZW1lbnQ+KFxuICAgICAgICAncmVnaXN0ZXJUb2RvT2JzZXJ2ZXJfcmVjb252ZXJ0JyxcbiAgICAgICAgJ1RpdGxlJ1xuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBjb25zdCBkZXRhaWxFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0RldGFpbCcpO1xuICAgIGNvbnN0IGVzdGltYXRlVGltZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX3RvZG9Fc3RpbWF0ZVRpbWUnXG4gICAgKTtcbiAgICBlc3RpbWF0ZVRpbWVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGJsY2xpY2snLFxuICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JyxcbiAgICAgICAgJ0VzdGltYXRlVGltZSdcbiAgICAgIClcbiAgICApO1xuICAgIGVzdGltYXRlVGltZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0VGltZUVsZW0gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvUmVzdWx0VGltZScpO1xuICAgIHJlc3VsdFRpbWVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGJsY2xpY2snLFxuICAgICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyLnN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgICAgICdyZWdpc3RlclRvZG9PYnNlcnZlcl9jb252ZXJ0JyxcbiAgICAgICAgJ1Jlc3VsdFRpbWUnXG4gICAgICApXG4gICAgKTtcbiAgICByZXN1bHRUaW1lRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvUHJpb3JpdHknKTtcbiAgICAvLyBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZSgnLmpzX3RvZG9VcmdlbmN5Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0VsZW1Gcm9tTm9kZXMobm9kZXM6IE5vZGVbXSk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGh0bWxFbGVtID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsZW0uY2xhc3NMaXN0ICYmIGh0bWxFbGVtLmNsYXNzTGlzdC5jb250YWlucygnanNfdG9kbycpKSB7XG4gICAgICByZXR1cm4gaHRtbEVsZW07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC9zZXJ2aWNlL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IGlzVG9kb1N0YXRlLCBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIgfSBmcm9tICcuLi92aWV3RXZlbnRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250ZXh0TWVudUhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBwcml2YXRlIHRhcmdldFRvZG86IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIGNoYW5nZVN0YXRlV2FpdGluZ0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgY2hhbmdlU3RhdGVQZW5kaW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBkZWxldGVUb2RvRnVuYzogRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhcmdldFRvZG8gPSBudWxsO1xuICAgIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vcGVuQ29udGV4dE1lbnUoZSk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlV2FpdGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdXYWl0aW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdJblByb2dyZXNzJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlQ29tcGxldGVkRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0NvbXBsZXRlZCcpO1xuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZVBlbmRpbmdGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnUGVuZGluZycpO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVUb2RvRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVG9kbygpO1xuICAgIH07XG4gIH1cblxuICBzdXBwbHkoKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMub3BlbkNvbnRleHRNZW51RnVuYztcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkNvbnRleHRNZW51KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgY29uc3QgY3RNZW51ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jyk7XG4gICAgY3RNZW51LnN0eWxlLmxlZnQgPSBTdHJpbmcoZXZlbnQucGFnZVgpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUudG9wID0gU3RyaW5nKGV2ZW50LnBhZ2VZKSArICdweCc7XG4gICAgY3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlV2FpdGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VJbnByb2dyZXNzJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUNvbXBsZXRlZCcsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZVBlbmRpbmcnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVQZW5kaW5nRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfbWVudVRvZG9EZWxldGUnLCBjdE1lbnUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kZWxldGVUb2RvRnVuY1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKHN0YXRlOiBUb2RvU3RhdGUpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy50YXJnZXRUb2RvIHx8XG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvU3RhdGUnLCB0aGlzLnRhcmdldFRvZG8pXG4gICAgICAgIC5pbm5lclRleHQgPT09IHN0YXRlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0VG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5yZW1vdmUoKTtcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCB0YXJnZXRWbSA9IHRoaXMuZ2VuZXJhdGVWaWV3TW9kZWwodGhpcy50YXJnZXRUb2RvKTtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICB2bVNlcnZpY2UuZGVsZXRlVmlld01vZGVsKHRhcmdldFZtKTtcbiAgICB2bVNlcnZpY2UuY3JlYXRlVmlld01vZGVsKFxuICAgICAgJ1RvZG8nLFxuICAgICAgdm1CdWlsZGVyLndpdGgodGFyZ2V0Vm0pLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pLmJ1aWxkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVUb2RvKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZUb2RvRW1wdHkgPSB0aGlzLnRhcmdldFRvZG8ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgcHJldlRvZG9FbXB0eT8ucmVtb3ZlKCk7XG5cbiAgICBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpLmRlbGV0ZVZpZXdNb2RlbChcbiAgICAgIHRoaXMuZ2VuZXJhdGVWaWV3TW9kZWwodGhpcy50YXJnZXRUb2RvKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVmlld01vZGVsKFxuICAgIHRvZG86IEhUTUxFbGVtZW50LFxuICAgIHN0YXRlPzogc3RyaW5nXG4gICk6IFZpZXdNb2RlbCB8IG5ldmVyIHtcbiAgICBjb25zdCBpZCA9IE51bWJlcihcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9JZCcsIHRvZG8pLmlubmVyVGV4dFxuICAgICk7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0YXRlID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb1N0YXRlJywgdG9kbykuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGlmIChpZCA8IDAgfHwgIWlzVG9kb1N0YXRlKHN0YXRlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgY29uc3Qgdm1CdWlsZGVyID0gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcigpO1xuICAgIHJldHVybiB2bUJ1aWxkZXJcbiAgICAgIC53aXRoKHsgaWQ6IGlkIH0pXG4gICAgICAud2l0aCh7IG1vZGVsVHlwZTogJ1RvZG8nIH0pXG4gICAgICAud2l0aCh7IHdvcmtTdGF0ZTogc3RhdGUgfSlcbiAgICAgIC5idWlsZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvRWxlbWVudCB9IGZyb20gJy4uLy4uL3RvZG9FbGVtZW50JztcbmltcG9ydCB7IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB9IGZyb20gJy4uL3ZpZXdFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9kb0NvbnZlcnRFbGVtZW50SGFuZGxlciBpbXBsZW1lbnRzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIHByaXZhdGUgY29udmVydFRpdGxlRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjb252ZXJ0RGV0YWlsRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjb252ZXJ0RXN0aW1hdGVUaW1lRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSBjb252ZXJ0UmVzdWx0VGltZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGlsZENvbXBvbmVudHM6IENvbXBvbmVudEhvbGRlcjxUb2RvRWxlbWVudCwgQ29udmVydGlibGVDb21wb25lbnQ+IC8vcHJpdmF0ZSByZXNldEVkaXRpbmdIYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllclxuICApIHtcbiAgICB0aGlzLmNvbnZlcnRUaXRsZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydFRpdGxlKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0RGV0YWlsRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0RGV0YWlsKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0RXN0aW1hdGVUaW1lKGUpO1xuICAgIH07XG4gICAgdGhpcy5jb252ZXJ0UmVzdWx0VGltZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY29udmVydFJlc3VsdFRpbWUoZSk7XG4gICAgfTtcbiAgfVxuXG4gIHN1cHBseTxUb2RvRWxlbWVudD4oXG4gICAgYXJnOiBUb2RvRWxlbWVudCBleHRlbmRzIHN0cmluZyA/IFRvZG9FbGVtZW50IDogdW5kZWZpbmVkXG4gICk6IEV2ZW50TGlzdGVuZXIgfCBuZXZlciB7XG4gICAgaWYgKGFyZyA9PT0gJ1RpdGxlJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRpdGxlRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ0RldGFpbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREZXRhaWxGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnRXN0aW1hdGVUaW1lJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydEVzdGltYXRlVGltZUZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdSZXN1bHRUaW1lJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFJlc3VsdFRpbWVGdW5jO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VGl0bGUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ1RpdGxlJyk7XG4gICAgY29uc3QgdGFyZ2V0SHRtbEVsZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRpdGxlQ21wLnJlZ2lzdGVyRWRpdGluZ0VsZW1lbnQodGFyZ2V0SHRtbEVsZW0pO1xuICAgIHRpdGxlQ21wLmNvbnZlcnRDb21wb25lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERldGFpbChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnRGV0YWlsJyk7XG4gICAgdGl0bGVDbXAucmVnaXN0ZXJFZGl0aW5nRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICB0aXRsZUNtcC5jb252ZXJ0Q29tcG9uZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFc3RpbWF0ZVRpbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ0VzdGltYXRlVGltZScpO1xuICAgIHRpdGxlQ21wLnJlZ2lzdGVyRWRpdGluZ0VsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmVzdWx0VGltZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnUmVzdWx0VGltZScpO1xuICAgIHRpdGxlQ21wLnJlZ2lzdGVyRWRpdGluZ0VsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgdGl0bGVDbXAuY29udmVydENvbXBvbmVudCgpO1xuICB9XG4gIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1ByaW9yaXR5Jyk7XG4gIC8vIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlKCcuanNfdG9kb1VyZ2VuY3knKTtcbn1cbiIsImltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vLi4vdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIH0gZnJvbSAnLi4vdmlld0V2ZW50SGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb2RvUmVjb252ZXJ0RWxlbWVudEhhbmRsZXIgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIge1xuICBwcml2YXRlIHJlY29udmVydFRpdGxlRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHJpdmF0ZSByZWNvbnZlcnREZXRhaWxGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwcml2YXRlIHJlY29udmVydEVzdGltYXRlVGltZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHByaXZhdGUgcmVjb252ZXJ0UmVzdWx0VGltZUZ1bmM6IEV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGlsZENvbXBvbmVudHM6IENvbXBvbmVudEhvbGRlcjxUb2RvRWxlbWVudCwgQ29udmVydGlibGVDb21wb25lbnQ+XG4gICkge1xuICAgIHRoaXMucmVjb252ZXJ0VGl0bGVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlY29udmVydFRpdGxlKGUgYXMgS2V5Ym9hcmRFdmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnJlY29udmVydERldGFpbEZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVjb252ZXJ0RGV0YWlsKGUpO1xuICAgIH07XG4gICAgdGhpcy5yZWNvbnZlcnRFc3RpbWF0ZVRpbWVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlY29udmVydEVzdGltYXRlVGltZShlKTtcbiAgICB9O1xuICAgIHRoaXMucmVjb252ZXJ0UmVzdWx0VGltZUZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVjb252ZXJ0UmVzdWx0VGltZShlKTtcbiAgICB9O1xuICB9XG5cbiAgc3VwcGx5PFRvZG9FbGVtZW50PihcbiAgICBhcmc6IFRvZG9FbGVtZW50IGV4dGVuZHMgc3RyaW5nID8gVG9kb0VsZW1lbnQgOiB1bmRlZmluZWRcbiAgKTogRXZlbnRMaXN0ZW5lciB8IG5ldmVyIHtcbiAgICBpZiAoYXJnID09PSAnVGl0bGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWNvbnZlcnRUaXRsZUZ1bmM7XG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICdEZXRhaWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWNvbnZlcnREZXRhaWxGdW5jO1xuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnRXN0aW1hdGVUaW1lJykge1xuICAgICAgcmV0dXJuIHRoaXMucmVjb252ZXJ0RXN0aW1hdGVUaW1lRnVuYztcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ1Jlc3VsdFRpbWUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWNvbnZlcnRSZXN1bHRUaW1lRnVuYztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVjb252ZXJ0VGl0bGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB0aXRsZUNtcCA9IHRoaXMuY2hpbGRDb21wb25lbnRzLmdldENvbXBvbmVudCgnVGl0bGUnKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgdGl0bGVDbXAucmVjb252ZXJ0Q29tcG9uZW50KHRhcmdldC52YWx1ZSk7XG4gICAgICB0aXRsZUNtcC5jbGVhckVkaXRpbmdFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWNvbnZlcnREZXRhaWwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ0RldGFpbCcpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRpdGxlQ21wLnJlY29udmVydENvbXBvbmVudCh0YXJnZXQudmFsdWUpO1xuICAgIHRpdGxlQ21wLmNsZWFyRWRpdGluZ0VsZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVjb252ZXJ0RXN0aW1hdGVUaW1lKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHRpdGxlQ21wID0gdGhpcy5jaGlsZENvbXBvbmVudHMuZ2V0Q29tcG9uZW50KCdFc3RpbWF0ZVRpbWUnKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aXRsZUNtcC5yZWNvbnZlcnRDb21wb25lbnQodGFyZ2V0LnZhbHVlKTtcbiAgICB0aXRsZUNtcC5jbGVhckVkaXRpbmdFbGVtZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlY29udmVydFJlc3VsdFRpbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGVDbXAgPSB0aGlzLmNoaWxkQ29tcG9uZW50cy5nZXRDb21wb25lbnQoJ1Jlc3VsdFRpbWUnKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aXRsZUNtcC5yZWNvbnZlcnRDb21wb25lbnQodGFyZ2V0LnZhbHVlKTtcbiAgICB0aXRsZUNtcC5jbGVhckVkaXRpbmdFbGVtZW50KCk7XG4gIH1cbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvUHJpb3JpdHknKTtcbiAgLy8gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGUoJy5qc190b2RvVXJnZW5jeScpO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICByZWdpc3RlcigpOiB2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXh0ZW5zaW9uVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyXG4gIGltcGxlbWVudHMgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIHtcbiAgcHJvdGVjdGVkIHN1YkhhbmRsZXJIb2xkZXI6IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllckhvbGRlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdWJIYW5kbGVySG9sZGVyID0gbmV3IFZpZXdFdmVudEhhbmRsZXJTdXBwbGllckhvbGRlcigpO1xuICB9XG4gIGFic3RyYWN0IHJlZ2lzdGVyKCk6IHZvaWQ7XG4gIGFkZEhhbmRsZXIobWV0aG9kTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIpOiB0aGlzIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJIb2xkZXIuYWRkKG1ldGhvZE5hbWUsIGhhbmRsZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldEhhbmRsZXIobWV0aG9kTmFtZTogc3RyaW5nKTogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgICByZXR1cm4gdGhpcy5zdWJIYW5kbGVySG9sZGVyLmdldChtZXRob2ROYW1lKTtcbiAgfVxufVxuXG5jbGFzcyBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXJIb2xkZXIge1xuICBzdWJIYW5kbGVyczogTWFwPHN0cmluZywgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyPjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdWJIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgfVxuICBhZGQobWV0aG9kTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBWaWV3RXZlbnRIYW5kbGVyU3VwcGxpZXIpIHtcbiAgICB0aGlzLnN1YkhhbmRsZXJzLnNldChtZXRob2ROYW1lLCBoYW5kbGVyKTtcbiAgfVxuICBnZXQobWV0aG9kTmFtZTogc3RyaW5nKTogVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHwgbmV2ZXIge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnN1YkhhbmRsZXJzLmdldChtZXRob2ROYW1lKTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHRocm93IEVycm9yKCcnKTtcbiAgfVxuICBzdXBwbHk8VD4oXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgIGVsZW0/OiBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IHVuZGVmaW5lZFxuICApOiBFdmVudExpc3RlbmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXQobWV0aG9kTmFtZSkuc3VwcGx5KGVsZW0pO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0V2ZW50SGFuZGxlclN1cHBsaWVyIHtcbiAgc3VwcGx5PFQ+KGFyZz86IFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogdW5kZWZpbmVkKTogRXZlbnRMaXN0ZW5lcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RXZlbnRIYW5kbGVyQ2FsbGFibGVTdXBwbGllclxuICBleHRlbmRzIFZpZXdFdmVudEhhbmRsZXJTdXBwbGllciB7XG4gIGNhbGw8VD4oYXJnPzogVCBleHRlbmRzIHN0cmluZyA/IFQgOiB1bmRlZmluZWQpOiB2b2lkO1xufVxuIiwiaW1wb3J0IHsgVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyIH0gZnJvbSAnLi92aWV3RXZlbnRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcnMgaW1wbGVtZW50cyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXIge1xuICBwcml2YXRlIGhhbmRsZXJzOiBBcnJheTxWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXI+O1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKGFyZ3M6IFZpZXdFdmVudEhhbmRsZXJSZWdpc3RlcltdKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGFyZ3M7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXQoXG4gICAgLi4uYXJnczogVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVyW11cbiAgKTogVmlld0V2ZW50SGFuZGxlclJlZ2lzdGVycyB7XG4gICAgcmV0dXJuIG5ldyBWaWV3RXZlbnRIYW5kbGVyUmVnaXN0ZXJzKGFyZ3MpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzKSB7XG4gICAgICBoYW5kbGVyLnJlZ2lzdGVyKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb252ZXJ0aWJsZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBfZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJvdGVjdGVkIHRlbXBsYXRlUGFydHM6IFRlbXBsYXRlUGFydHNIb2xkZXI7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXIpIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gdGVtcGxhdGVQYXJ0cyA/PyBUZW1wbGF0ZVBhcnRzSG9sZGVyLmVtcHR5KCk7XG4gIH1cblxuICBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgY29udmVydENvbXBvbmVudCgpOiB2b2lkIHwgbmV2ZXIge1xuICAgIGlmICh0aGlzLmVkaXRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnZlcnRQcm9jZXNzKHRoaXMuZWRpdGluZ0VsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdGhpbmcgZWRpdGluZyBlbGVtZW50Jyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICByZWNvbnZlcnRDb21wb25lbnQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlY29udmVydFByb2Nlc3ModGhpcy5lZGl0aW5nRWxlbWVudCwgdmFsdWUpO1xuICAgICAgdGhpcy5jbGVhckVkaXRpbmdFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY29udmVydFByb2Nlc3MoXG4gICAgZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHZhbHVlOiBzdHJpbmdcbiAgKTogdm9pZDtcblxuICBnZXQgZWRpdGluZ0VsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGluZ0VsZW1lbnQ7XG4gIH1cblxuICByZWdpc3RlckVkaXRpbmdFbGVtZW50KGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fZWRpdGluZ0VsZW1lbnQgPSBlbGVtO1xuICB9XG5cbiAgY2xlYXJFZGl0aW5nRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9lZGl0aW5nRWxlbWVudCA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9FbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdG9kb0VsZW1lbnQnO1xuaW1wb3J0IHsgVG9kb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RvZG8vY2hpbGQvdG9kb0RldGFpbENvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RvVGltZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RvZG8vY2hpbGQvdG9kb1RpbWVDb21wb25lbnQnO1xuaW1wb3J0IHsgVG9kb1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdG9kby9jaGlsZC90b2RvVGl0bGVDb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgQ2hpbGRDb21wb25lbnRIb2xkZXI8VCwgQyBleHRlbmRzIENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBDb21wb25lbnRIb2xkZXI8VCwgQz4ge1xuICBwcml2YXRlIF9jb21wb25lbnRzOiBNYXA8VCwgQz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29tcG9uZW50cyA9IG5ldyBNYXA8VCwgQz4oKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudChjb21wb25lbnRUeXBlOiBUKTogQyB8IG5ldmVyIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50cy5oYXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzLmdldChjb21wb25lbnRUeXBlKSE7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDb21wb25lbnQgVHlwZScpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudHMoKTogTWFwPFQsIEM+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50cztcbiAgfVxuXG4gIHNldCBjb21wb25lbnRzKGNvbXBvbmVudHM6IE1hcDxULCBDPikge1xuICAgIHRoaXMuX2NvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvQ2hpbGRDb21wb25lbnRzKCk6IE1hcDxcbiAgVG9kb0VsZW1lbnQsXG4gIENvbnZlcnRpYmxlQ29tcG9uZW50XG4+IHtcbiAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBNYXA8VG9kb0VsZW1lbnQsIENvbnZlcnRpYmxlQ29tcG9uZW50PigpO1xuICBjb21wb25lbnRzLnNldCgnVGl0bGUnLCBuZXcgVG9kb1RpdGxlQ29tcG9uZW50KCkpO1xuICBjb21wb25lbnRzLnNldCgnRXN0aW1hdGVUaW1lJywgbmV3IFRvZG9UaW1lQ29tcG9uZW50KCdlc3RpbWF0ZScpKTtcbiAgY29tcG9uZW50cy5zZXQoJ1Jlc3VsdFRpbWUnLCBuZXcgVG9kb1RpbWVDb21wb25lbnQoJ3Jlc3VsdCcpKTtcbiAgY29tcG9uZW50cy5zZXQoJ0RldGFpbCcsIG5ldyBUb2RvRGV0YWlsQ29tcG9uZW50KCkpO1xuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzLnZhbHVlcygpKSB7XG4gICAgY29tcG9uZW50LmluaXQoKTtcbiAgfVxuICByZXR1cm4gY29tcG9uZW50cztcbn1cbiIsImludGVyZmFjZSBDb21wb25lbnRUZW1wbGF0ZVBhcnRzIHtcbiAgaWRlbnRpZnk6IHN0cmluZztcbiAgbm9ybWFsU3RhdGVIdG1sOiBzdHJpbmc7XG4gIGVkaXRTdGF0ZUh0bWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGFydHNIb2xkZXIgaW1wbGVtZW50cyBDb21wb25lbnRUZW1wbGF0ZVBhcnRzIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pZGVudGlmeTogc3RyaW5nLFxuICAgIHByaXZhdGUgX25vcm1hbFN0YXRlSHRtbDogc3RyaW5nLFxuICAgIHByaXZhdGUgX2VkaXRTdGF0ZUh0bWw6IHN0cmluZ1xuICApIHsgfVxuXG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgaWRlbnRpZnk6IHN0cmluZyxcbiAgICBub3JtYWxTdGF0ZUh0bWw6IHN0cmluZyxcbiAgICBlZGl0U3RhdGVIdG1sOiBzdHJpbmdcbiAgKTogVGVtcGxhdGVQYXJ0c0hvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVBhcnRzSG9sZGVyKGlkZW50aWZ5LCBub3JtYWxTdGF0ZUh0bWwsIGVkaXRTdGF0ZUh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGVtcHR5KCk6IFRlbXBsYXRlUGFydHNIb2xkZXIge1xuICAgIHJldHVybiBuZXcgVGVtcGxhdGVQYXJ0c0hvbGRlcignJywgJycsICcnKTtcbiAgfVxuXG4gIGdldCBpZGVudGlmeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGlmeTtcbiAgfVxuXG4gIGdldCBub3JtYWxTdGF0ZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsU3RhdGVIdG1sO1xuICB9XG5cbiAgZ2V0IGVkaXRTdGF0ZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdFN0YXRlSHRtbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBCYXNlQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoaWxkL2Jhc2VDaGlsZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnRzSG9sZGVyIH0gZnJvbSAnLi4vLi4vYmFzZS9jb21wb25lbnRUZW1wbGF0ZVBhcnRzJztcbmltcG9ydCB7XG4gIElERU5USUZJRVJfREVUQUlMLFxuICBUT0RPX0RFVEFJTF9FRElUX0hUTUwsXG4gIFRPRE9fREVUQUlMX05PUk1BTF9IVE1MXG59IGZyb20gJy4uL3RvZG9UZW1wbGF0ZXMnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0RldGFpbENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGlsZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUGFydHM/OiBUZW1wbGF0ZVBhcnRzSG9sZGVyKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVQYXJ0cyA9IFRlbXBsYXRlUGFydHNIb2xkZXIuY3JlYXRlKFxuICAgICAgSURFTlRJRklFUl9ERVRBSUwsXG4gICAgICBUT0RPX0RFVEFJTF9OT1JNQUxfSFRNTCxcbiAgICAgIFRPRE9fREVUQUlMX0VESVRfSFRNTFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50SW5uZXJUZXh0KFxuICAgICAgZWRpdGluZ0VsZW1lbnQsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuZWRpdFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRJbm5lclRleHQoXG4gICAgICBlZGl0aW5nRWxlbWVudCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5ub3JtYWxTdGF0ZUh0bWwsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuaWRlbnRpZnlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IEJhc2VDaGlsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvY2hpbGQvYmFzZUNoaWxkQ29tcG9uZW50JztcbmltcG9ydCB7IFRlbXBsYXRlUGFydHNIb2xkZXIgfSBmcm9tICcuLi8uLi9iYXNlL2NvbXBvbmVudFRlbXBsYXRlUGFydHMnO1xuaW1wb3J0IHtcbiAgSURFTlRJRklFUl9USU1FLFxuICBUSU1FX1NFTEVDVF9FRElUX0hUTUwsXG4gIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICBUT0RPX0VTVElNQVRFX0VESVRfSFRNTCxcbiAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgVE9ET19SRVNVTFRfRURJVF9IVE1MLFxuICBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTFxufSBmcm9tICcuLi90b2RvVGVtcGxhdGVzJztcblxuZXhwb3J0IGNsYXNzIFRvZG9UaW1lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoaWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0eXBlOiBUb2RvVGltZVR5cGUgZXh0ZW5kcyBzdHJpbmcgPyBUb2RvVGltZVR5cGUgOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGVQYXJ0cz86IFRlbXBsYXRlUGFydHNIb2xkZXJcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2VzdGltYXRlJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzID0gVGVtcGxhdGVQYXJ0c0hvbGRlci5jcmVhdGUoXG4gICAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgICAgVE9ET19FU1RJTUFURV9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19FU1RJTUFURV9FRElUX0hUTUxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXN1bHQnKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgICAgSURFTlRJRklFUl9USU1FLFxuICAgICAgICBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTCxcbiAgICAgICAgVE9ET19SRVNVTFRfRURJVF9IVE1MXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlUGFydHMgPSBUZW1wbGF0ZVBhcnRzSG9sZGVyLmNyZWF0ZShcbiAgICAgIElERU5USUZJRVJfVElNRSxcbiAgICAgIFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MLFxuICAgICAgVElNRV9TRUxFQ1RfRURJVF9IVE1MXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb252ZXJ0VGltZUVsZW0oZWRpdGluZ0VsZW1lbnQsIHRoaXMudGVtcGxhdGVQYXJ0cy5lZGl0U3RhdGVIdG1sKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWNvbnZlcnRQcm9jZXNzKGVkaXRpbmdFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIFRPRE86IExpc3RCb3jjga7lgKTmipzjgY3jgaDjgZljb252ZXJ0ZXLlrp/oo4VcbiAgICBjb252ZXJ0UmVzZXRUaW1lRWxlbShlZGl0aW5nRWxlbWVudCwgVE9ET19SRVNVTFRfTk9STUFMX0hUTUwpO1xuICB9XG59XG5cbmNvbnN0IFRvZG9UaW1lVHlwZXMgPSB7XG4gIE5PTkU6ICcnLFxuICBFU1RJTUFURTogJ2VzdGltYXRlJyxcbiAgUmVzdWx0OiAncmVzdWx0Jyxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUb2RvVGltZVR5cGUgPSB0eXBlb2YgVG9kb1RpbWVUeXBlc1trZXlvZiB0eXBlb2YgVG9kb1RpbWVUeXBlc107XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgYmFzZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfZGF0YScsIGVsZW0pLmlubmVyVGV4dDtcbiAgZWxlbS5pbm5lckhUTUwgPSBiYXNlSHRtbDtcbiAgY29uc3Qgc2VsZWN0RWxlbSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAnLmpzX3NlbGVjdCcsXG4gICAgZWxlbVxuICApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdEVsZW0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2VsZWN0RWxlbS5vcHRpb25zW2ldLnZhbHVlID09PSBkYXRhKSB7XG4gICAgICBzZWxlY3RFbGVtLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UmVzZXRUaW1lRWxlbShlbGVtOiBIVE1MRWxlbWVudCwgcmVwbGFjZUh0bWw6IHN0cmluZykge1xuICBjb25zdCBzZWxlY3RFbGVtID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICdqc19zZWxlY3QnLFxuICAgIGVsZW1cbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgc2VsZWN0RWxlbS5vcHRpb25zW3NlbGVjdEVsZW0uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gIEh0bWxBY2Nlc3Nvci5jb252ZXJ0RWxlbWVudElubmVyVGV4dChlbGVtLCByZXBsYWNlSHRtbCwgSURFTlRJRklFUl9USU1FKTtcbn1cbiIsImltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQmFzZUNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9jaGlsZC9iYXNlQ2hpbGRDb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVQYXJ0c0hvbGRlciB9IGZyb20gJy4uLy4uL2Jhc2UvY29tcG9uZW50VGVtcGxhdGVQYXJ0cyc7XG5pbXBvcnQge1xuICBJREVOVElGSUVSX1RJVExFLFxuICBUT0RPX1RJVExFX0VESVRfSFRNTCxcbiAgVE9ET19USVRMRV9OT1JNQUxfSFRNTFxufSBmcm9tICcuLi90b2RvVGVtcGxhdGVzJztcblxuZXhwb3J0IGNsYXNzIFRvZG9UaXRsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGlsZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUGFydHM/OiBUZW1wbGF0ZVBhcnRzSG9sZGVyKSB7XG4gICAgc3VwZXIodGVtcGxhdGVQYXJ0cyk7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVQYXJ0cyA9IFRlbXBsYXRlUGFydHNIb2xkZXIuY3JlYXRlKFxuICAgICAgSURFTlRJRklFUl9USVRMRSxcbiAgICAgIFRPRE9fVElUTEVfTk9STUFMX0hUTUwsXG4gICAgICBUT0RPX1RJVExFX0VESVRfSFRNTFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udmVydFByb2Nlc3MoZWRpdGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmNvbnZlcnRFbGVtZW50SW5uZXJUZXh0KFxuICAgICAgZWRpdGluZ0VsZW1lbnQsXG4gICAgICB0aGlzLnRlbXBsYXRlUGFydHMuZWRpdFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjb252ZXJ0UHJvY2VzcyhlZGl0aW5nRWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuY29udmVydEVsZW1lbnRWYWx1ZShcbiAgICAgIGVkaXRpbmdFbGVtZW50LFxuICAgICAgdGhpcy50ZW1wbGF0ZVBhcnRzLm5vcm1hbFN0YXRlSHRtbCxcbiAgICAgIHRoaXMudGVtcGxhdGVQYXJ0cy5pZGVudGlmeSxcbiAgICAgIHZhbHVlXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uLy4uL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi8uLi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4vdG9kb1RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2RvOiBWaWV3TW9kZWxUb2RvLFxuICAgIHByaXZhdGUgbW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLFxuICAgIHByaXZhdGUgc2VsZWN0b3I6IHN0cmluZ1xuICApIHsgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnRvZG8ud29ya1N0YXRlID8/ICdXYWl0aW5nJztcbiAgICBjb25zdCBzdGF0ZVN0eWxlQ2xhc3MgPSBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUodGhpcy5tb2RlbFR5cGUpO1xuICAgIHRlbXBsYXRlXG4gICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBzdGF0ZSB9fS9nLCBzdGF0ZSlcbiAgICAgIC5yZXBsYWNlVGVtcGxhdGUoL3t7IHN0YXRlQ2xhc3MgfX0vZywgc3RhdGVTdHlsZUNsYXNzKVxuICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgaWQgfX0vZywgdGhpcy50b2RvLmlkKTtcbiAgICBjb25zdCBtb3VudGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLicgKyBzdGF0ZVN0eWxlQ2xhc3MgKyB0aGlzLnNlbGVjdG9yXG4gICAgKTtcbiAgICBpZiAobW91bnRlZEVsZW1lbnQpIHtcbiAgICAgIG1vdW50ZWRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICB0ZW1wbGF0ZS5nZXRUZW1wbGF0ZUh0bWwoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFN0YXRlQ2xhc3Moc3RhdGU6IFRvZG9TdGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiAnaXNfJyArIHN0YXRlLnRvTG93ZXJDYXNlKCk7XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwcml2YXRlIHRlbXBsYXRlSHRtbCA9ICcnO1xuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlID09PSAnVG9kbycpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdG9kb1RlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlSHRtbDtcbiAgfVxuXG4gIHJlcGxhY2VUZW1wbGF0ZSh0YXJnZXQ6IFJlZ0V4cCwgcmVwbGFjZTogc3RyaW5nIHwgbnVtYmVyKTogVGVtcGxhdGUge1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcocmVwbGFjZSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdGhpcy50ZW1wbGF0ZUh0bWwucmVwbGFjZSh0YXJnZXQsIHJlcGxhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcbiAgPGRpdiBjbGFzcz1cImVsX2VtcHR5SXRlbVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmxfdG9kbyBocF9tcmwxNSBocF9wcmwyIGpzX3RvZG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfaGlkZGVuIGpzX3RvZG9JZFwiPnt7IGlkIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvU3RhdGVcIj57eyBzdGF0ZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF90b2RvX2hlYWQge3sgc3RhdGVDbGFzcyB9fVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJqc190b2RvVGl0bGVcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiZWxfdG9kb1RpdGxlIGpzX2RhdGFcIj5cbiAgICAgICAgICBUZXN0OiBTdWNjZXNzIFRhc2sgQ3JlYXRlIGJ5IFRTIFByb2dyYW1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5jcmVhdGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+c3RhcnRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19kZXRhaWwganNfdG9kb0RldGFpbCBpc19oaWRkZW5cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19zdGF0dXNcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJibF90b2RvX3Byb2dyZXNzXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiMFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBvbmlucHV0PVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Mtb3V0cHV0JykudmFsdWU9dGhpcy52YWx1ZVwiIC8+XG4gICAgICAgICAgPG91dHB1dCBpZD1cImMtb3V0cHV0XCIgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj4wPC9vdXRwdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lIGpzX3RvZG9Fc3RpbWF0ZVRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWUganNfdG9kb1Jlc3VsdFRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuWun+e4vjo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGwganNfZGF0YVwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfVElUTEUgPSAne3sgdGl0bGUgfX0nO1xuZXhwb3J0IGNvbnN0IFRPRE9fVElUTEVfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgIDxoMyBjbGFzcz1cImVsX3RvZG9UaXRsZSBqc19kYXRhXCI+XG4gICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgPC9oMz5cbmA7XG5leHBvcnQgY29uc3QgVE9ET19USVRMRV9FRElUX0hUTUwgPSBgXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZWxfdG9kb1RpdGxlXCIgb25zdWJtaXQ9XCJyZXR1cm4gZmFsc2U7XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF90b2RvVGl0bGUgaHBfcHIxMFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJlbF90ZXh0YXJlYSBqc19kYXRhXCIgdmFsdWU9XCJ7eyB0aXRsZSB9fVwiPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb3JtPlxuYDtcblxuZXhwb3J0IGNvbnN0IElERU5USUZJRVJfREVUQUlMID0gJ3t7IGRldGFpbCB9fSc7XG5leHBvcnQgY29uc3QgVE9ET19ERVRBSUxfTk9STUFMX0hUTUwgPSBgXG4gICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICB7eyBkZXRhaWwgfX1cbiAgICAgICAgPC9wPlxuYDtcbmV4cG9ydCBjb25zdCBUT0RPX0RFVEFJTF9FRElUX0hUTUwgPSBgXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIHJvd3M9XCI1XCIgY2xhc3M9XCJqc19kYXRhXCI+XG4gICAgICAgICAgICB7eyBkZXRhaWwgfX1cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Zvcm0+XG5gO1xuXG5leHBvcnQgY29uc3QgSURFTlRJRklFUl9USU1FID0gJ3t7IHRpbWUgfX0nO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0VMRUNUX05PUk1BTF9IVE1MID0gYFxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsIGpzX2RhdGFcIj5cbiAgICAgICAgICAgICAge3sgdGltZSB9fVxuICAgICAgICAgICAgPC9wPlxuYDtcbmV4cG9ydCBjb25zdCBUSU1FX1NFTEVDVF9FRElUX0hUTUwgPSBgXG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwianNfc2VsZWN0XCIgc2l6ZT0xPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMC41aFwiPjAuNWg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFoXCI+MWg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJoXCI+Mmg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNoXCI+M2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRoXCI+NGg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVoXCI+NWg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZoXCI+Nmg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdoXCI+N2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFkYXlcIj4xZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxLjVkYXlcIj4xLjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJkYXlcIj4yZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyLjVkYXlcIj4yLjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNkYXlcIj4zZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzLjVkYXlcIj4zLjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRkYXlcIj40ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0LjVkYXlcIj40LjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVkYXlcIj41ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1LjVkYXlcIj41LjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZkYXlcIj42ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2LjVkYXlcIj42LjVkYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdkYXlcIj43ZGF5PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Zvcm0+XG5gO1xuY29uc3QgVE9ET19FU1RJTUFURV9IRUFEID0gJzxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+6KaL56mNOjwvcD4nO1xuY29uc3QgVE9ET19SRVNVTFRfSEVBRCA9ICc8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuWun+e4vjo8L3A+JztcblxuZXhwb3J0IGNvbnN0IFRPRE9fRVNUSU1BVEVfTk9STUFMX0hUTUwgPVxuICBUT0RPX0VTVElNQVRFX0hFQUQgKyBUSU1FX1NFTEVDVF9OT1JNQUxfSFRNTDtcbmV4cG9ydCBjb25zdCBUT0RPX1JFU1VMVF9OT1JNQUxfSFRNTCA9XG4gIFRPRE9fUkVTVUxUX0hFQUQgKyBUSU1FX1NFTEVDVF9OT1JNQUxfSFRNTDtcbmV4cG9ydCBjb25zdCBUT0RPX0VTVElNQVRFX0VESVRfSFRNTCA9XG4gIFRPRE9fRVNUSU1BVEVfSEVBRCArIFRJTUVfU0VMRUNUX0VESVRfSFRNTDtcbmV4cG9ydCBjb25zdCBUT0RPX1JFU1VMVF9FRElUX0hUTUwgPSBUT0RPX1JFU1VMVF9IRUFEICsgVElNRV9TRUxFQ1RfRURJVF9IVE1MO1xuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4uL3ZpZXdtb2RlbC9zZXJ2aWNlL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld21vZGVsL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIFZpZXdEaXNwbGF5ZXIge1xuICBwdWJsaWMgZGlzcGxheUlucHV0VGFza0FyZWEoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50TnVsbGFibGU8SFRNTElucHV0RWxlbWVudD4oXG4gICAgICAgICcjcmFkaW9DcmVhdGVUYXNrRGV0YWlsJ1xuICAgICAgKT8uY2hlY2tlZFxuICAgICkge1xuICAgICAgLy8gY29uc3QgY2xhc3NMaXN0ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfaW5wdXRUYXNrRGV0YWlsQXJlYScpXG4gICAgICAvLyAgIC5jbGFzc0xpc3Q7XG4gICAgICAvLyBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdpc19oaWRkZW4nKSkge1xuICAgICAgLy8gICBjbGFzc0xpc3QucmVtb3ZlKCdpc19oaWRkZW4nKTtcbiAgICAgIC8vICAgY2xhc3NMaXN0LmFkZCgnaXNfYWN0aXZlJyk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICAgICdUb2RvJ1xuICAgICAgKTtcbiAgICAgIHZtQnVpbGRlci53aXRoKHsgd29ya1N0YXRlOiAnV2FpdGluZycgfSk7XG4gICAgICBpZiAodm1CdWlsZGVyKSB7XG4gICAgICAgIGNvbnN0IHZtU2VydmljZSA9IFZpZXdNb2RlbFNlcnZpY2VJbXBsLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoJ1RvZG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4uL3RvZG8vdG9kb0JvYXJkJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IHtcbiAgY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKTogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj4ge1xuICAgIGNvbnN0IHZtTWFuYWdlcnMgPSBuZXcgTWFwKCk7XG4gICAgdm1NYW5hZ2Vycy5zZXQoJ1RvZG8nLCBuZXcgVmlld1RvZG9NYW5hZ2VyKG5ldyBUb2RvQm9hcmQoKSkpO1xuICAgIHJldHVybiB2bU1hbmFnZXJzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vbWFuYWdlci92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vbWFuYWdlci92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi92aWV3TW9kZWxTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbFNlcnZpY2VJbXBsIGltcGxlbWVudHMgVmlld01vZGVsU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBWaWV3TW9kZWxTZXJ2aWNlO1xuICB2aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj47XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBfdmlld01vZGVsTWFuYWdlcnM6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+XG4gICkge1xuICAgIHRoaXMudmlld01vZGVsTWFuYWdlcnMgPSBfdmlld01vZGVsTWFuYWdlcnM7XG4gIH1cblxuICBzdGF0aWMgaW5pdCh2bU1hbmFnZXJmYWN0b3J5OiBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlld01vZGVsU2VydmljZUltcGwoXG4gICAgICB2bU1hbmFnZXJmYWN0b3J5LmNyZWF0ZVZpZXdNb2RlbE1hbmFnZXJzKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0SWQodHlwZTogVmlld01vZGVsVHlwZSk6IG51bWJlciB8IG5ldmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldE5leHRJZCgpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZ2V0Vmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKTogVmlld01vZGVsIHwgbmV2ZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIgJiYgdm1NYW5hZ2VyLmdldERhdGEpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0RGF0YSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgY3JlYXRlVmlld01vZGVsKHR5cGU6IFZpZXdNb2RlbFR5cGUsIHZpZXdNb2RlbD86IFZpZXdNb2RlbCk6IHZvaWQgfCBuZXZlciB7XG4gICAgY29uc3Qgdm1CdWlsZGVyID0gVmlld01vZGVsQnVpbGRlckZhY3RvcnkubmV3SW5zdGFuY2UoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKFxuICAgICAgdHlwZVxuICAgICk7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodHlwZSk7XG4gICAgaWYgKCF2bU1hbmFnZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgfVxuICAgIHZpZXdNb2RlbCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHZtTWFuYWdlci5jcmVhdGUodm1CdWlsZGVyLndpdGgoeyBpZDogdGhpcy5nZXROZXh0SWQodHlwZSkgfSkuYnVpbGQoKSlcbiAgICAgIDogdm1NYW5hZ2VyLmNyZWF0ZSh2aWV3TW9kZWwpO1xuICB9XG5cbiAgdXBkYXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKTogYm9vbGVhbiB8IG5ldmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLnVwZGF0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICB2bU1hbmFnZXIuZGVsZXRlKHZpZXdNb2RlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVmlld01vZGVsU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi92aWV3L2RlY29yYXRvci92aWV3Q29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld01vZGVsVG9kbyBleHRlbmRzIFZpZXdNb2RlbCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IERhdGU7XG4gIHN0YXJ0RGF0ZT86IERhdGU7XG4gIGVzdGltYXRlSG91cjogbnVtYmVyO1xuICByZXN1bHRIb3VyOiBudW1iZXI7XG4gIHdvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBkaXNwbGF5T3JkZXI6IG51bWJlcjtcbn1cblxuQFZpZXdDb21wb25lbnQoJ1RvZG8nLCAnLmpzX3RvZG9saXN0JylcbmV4cG9ydCBjbGFzcyBUb2RvIGltcGxlbWVudHMgVmlld01vZGVsVG9kbyB7XG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XG4gIHByaXZhdGUgX21vZGVsVHlwZTogVmlld01vZGVsVHlwZTtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGVudHM6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfc3RhcnREYXRlPzogRGF0ZTtcbiAgcHJpdmF0ZSBfZXN0aW1hdGVIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdEhvdXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29ya1N0YXRlOiBUb2RvU3RhdGU7XG4gIHByaXZhdGUgX2Rpc3BsYXlPcmRlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvZG9CYXNlPzogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiAmIFZpZXdNb2RlbCkge1xuICAgIGNvbnN0IHRvZG8gPSBpbml0VG9kbyh0b2RvQmFzZSA/PyB7fSk7XG4gICAgdGhpcy5faWQgPSB0b2RvLmlkO1xuICAgIHRoaXMuX21vZGVsVHlwZSA9IHRvZG8ubW9kZWxUeXBlO1xuICAgIHRoaXMuX3RpdGxlID0gdG9kby50aXRsZTtcbiAgICB0aGlzLl9jb250ZW50cyA9IHRvZG8uY29udGVudHM7XG4gICAgdGhpcy5fY3JlYXRlRGF0ZSA9IHRvZG8uY3JlYXRlRGF0ZTtcbiAgICB0aGlzLl9zdGFydERhdGUgPSB0b2RvLnN0YXJ0RGF0ZTtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSB0b2RvLmVzdGltYXRlSG91cjtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gdG9kby5yZXN1bHRIb3VyO1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHRvZG8ud29ya1N0YXRlO1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IHRvZG8uZGlzcGxheU9yZGVyO1xuICB9XG4gIGdldE1vZGVsVHlwZSgpOiAnVG9kbycgfCAnU29ydExhYmVsJyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZChpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgfVxuXG4gIGdldCBtb2RlbFR5cGUoKTogVmlld01vZGVsVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsVHlwZTtcbiAgfVxuICBzZXQgbW9kZWxUeXBlKG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSkge1xuICAgIHRoaXMuX21vZGVsVHlwZSA9IG1vZGVsVHlwZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgY29udGVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudHM7XG4gIH1cbiAgc2V0IGNvbnRlbnRzKGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50cyA9IGNvbnRlbnRzO1xuICB9XG5cbiAgZ2V0IGNyZWF0ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGU7XG4gIH1cblxuICBnZXQgc3RhcnREYXRlKCk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGFydERhdGU7XG4gIH1cbiAgaW5pdFN0YXJ0RGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGVzdGltYXRlSG91cigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lc3RpbWF0ZUhvdXI7XG4gIH1cbiAgc2V0IGVzdGltYXRlSG91cihob3VyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSBob3VyO1xuICB9XG5cbiAgZ2V0IHJlc3VsdEhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0SG91cjtcbiAgfVxuICBzZXQgcmVzdWx0SG91cihob3VyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCB3b3JrU3RhdGUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya1N0YXRlO1xuICB9XG4gIHNldCB3b3JrU3RhdGUoc3RhdGU6IFRvZG9TdGF0ZSkge1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlPcmRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5T3JkZXI7XG4gIH1cbiAgc2V0IGRpc3BsYXlPcmRlcihvcmRlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlzcGxheU9yZGVyID0gb3JkZXI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUb2RvKGJhc2U6IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4pOiBWaWV3TW9kZWxUb2RvIHtcbiAgY29uc3QgdGFyZ2V0OiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+ID0ge307XG4gIHRhcmdldC5pZCA9IGJhc2U/LmlkID8/IC0xO1xuICB0YXJnZXQubW9kZWxUeXBlID0gJ1RvZG8nO1xuICB0YXJnZXQudGl0bGUgPSBiYXNlPy50aXRsZSA/PyAnJztcbiAgdGFyZ2V0LmNvbnRlbnRzID0gYmFzZT8uY29udGVudHMgPz8gJyc7XG4gIHRhcmdldC5jcmVhdGVEYXRlID0gYmFzZT8uY3JlYXRlRGF0ZSA/PyBuZXcgRGF0ZSgpO1xuICB0YXJnZXQuc3RhcnREYXRlID0gYmFzZT8uc3RhcnREYXRlID8/IHVuZGVmaW5lZDtcbiAgdGFyZ2V0LmVzdGltYXRlSG91ciA9IGJhc2U/LmVzdGltYXRlSG91ciA/PyAwO1xuICB0YXJnZXQucmVzdWx0SG91ciA9IGJhc2U/LnJlc3VsdEhvdXIgPz8gMDtcbiAgdGFyZ2V0LndvcmtTdGF0ZSA9IGJhc2U/LndvcmtTdGF0ZSA/PyAnV2FpdGluZyc7XG4gIHRhcmdldC5kaXNwbGF5T3JkZXIgPSBiYXNlPy5kaXNwbGF5T3JkZXIgPz8gMDtcbiAgcmV0dXJuIHRhcmdldCBhcyBWaWV3TW9kZWxUb2RvO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUsIFRvZG9TdGF0ZXMgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUb2RvbGlzdCB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0JvYXJkIHtcbiAgcHJpdmF0ZSB0b2RvbGlzdHM6IE1hcDxUb2RvU3RhdGUsIFRvZG9saXN0PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9saXN0cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBvZiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0cy5zZXQoc3RhdGVOYW1lLCBuZXcgVG9kb2xpc3Qoc3RhdGVOYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCB0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKT8uYWRkVG9kbyh0b2RvKTtcbiAgfVxuXG4gIGdldFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgaWQ6IG51bWJlcik6IFZpZXdNb2RlbFRvZG8ge1xuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpPy5nZXRUb2RvKGlkKTtcbiAgICBpZiAodG9kbykge1xuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpPy5kZWxldGVUb2RvKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4gfCBuZXZlciB7XG4gICAgY29uc3QgdG9kb2xpc3QgPSB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpO1xuICAgIGlmICh0b2RvbGlzdCkge1xuICAgICAgcmV0dXJuIHRvZG9saXN0LnVwZGF0ZVRvZG8odG9kbyk7XG4gICAgfVxuICAgIHRocm93IEVycm9yKCcnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFRvZG9TdGF0ZXMgPSB7XG4gIFdBSVRJTkc6ICdXYWl0aW5nJyxcbiAgSU5fUFJPR1JFU1M6ICdJblByb2dyZXNzJyxcbiAgQ09NUExFVEVEOiAnQ29tcGxldGVkJyxcbiAgUEVORERJTkc6ICdQZW5kaW5nJyxcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUb2RvU3RhdGUgPSB0eXBlb2YgVG9kb1N0YXRlc1trZXlvZiB0eXBlb2YgVG9kb1N0YXRlc107XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZG9TdGF0ZShzdGF0ZTogYW55KTogc3RhdGUgaXMgVG9kb1N0YXRlIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoVG9kb1N0YXRlcykuaW5jbHVkZXMoc3RhdGUpO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvbGlzdCB7XG4gIHByaXZhdGUgX3RvZG9saXN0OiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGVOYW1lOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl90b2RvbGlzdCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldCB0b2RvbGlzdCgpOiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9saXN0O1xuICB9XG5cbiAgZ2V0IHN0YXRlTmFtZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZU5hbWU7XG4gIH1cblxuICBnZXRUb2RvKGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXQoaWQpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRoaXMuX3RvZG9saXN0LnZhbHVlcygpKSB7XG4gICAgICB0b2RvLmRpc3BsYXlPcmRlciArPSAxO1xuICAgIH1cbiAgICB0aGlzLnRvZG9saXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oaWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRlbFRvZG9PcmRlciA9IHRoaXMudG9kb2xpc3QuZ2V0KGlkKT8uZGlzcGxheU9yZGVyO1xuICAgIGlmIChkZWxUb2RvT3JkZXIpIHtcbiAgICAgIGZvciAoY29uc3QgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoZGVsVG9kb09yZGVyIDwgdG9kby5kaXNwbGF5T3JkZXIpIHtcbiAgICAgICAgICB0b2RvLmRpc3BsYXlPcmRlciAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3QuZGVsZXRlKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRvZG9saXN0LmdldCh0b2RvLmlkKSkge1xuICAgICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vbWFuYWdlci92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBUb2RvLCBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4vdG9kb0JvYXJkJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kb1N0YXRlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlciBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsVG9kbz4ge1xuICBwcml2YXRlIGZpbmFsSWQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9kb0JvYXJkOiBUb2RvQm9hcmQpIHtcbiAgICB0aGlzLmZpbmFsSWQgPSAwO1xuICB9XG5cbiAgZ2V0TmV4dElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmluYWxJZCArIDE7XG4gIH1cblxuICBjcmVhdGUodm1Nb2RlbDogVmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHZtTW9kZWwpO1xuICAgIGlmICh0b2RvT2JqLmlkID4gdGhpcy5maW5hbElkKSB7XG4gICAgICB0aGlzLmZpbmFsSWQgPSB0b2RvT2JqLmlkO1xuICAgIH1cbiAgICB0aGlzLl90b2RvQm9hcmQuYWRkVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBnZXREYXRhKHRvZG9PYmo6IFZpZXdNb2RlbCAmIHsgd29ya1N0YXRlOiBUb2RvU3RhdGUgfSk6IFZpZXdNb2RlbFRvZG8ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQuZ2V0VG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cblxuICB1cGRhdGUodG9kb09iajogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQudXBkYXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBkZWxldGUodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogdm9pZCB7XG4gICAgdGhpcy5fdG9kb0JvYXJkLmRlbGV0ZVRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmouaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbml0VG9kbywgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyIH0gZnJvbSAnLi92aWV3TW9kZWxCdWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgc3RhdGljIG5ld0luc3RhbmNlKCk6IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWxCdWlsZGVyKHR5cGU/OiBWaWV3TW9kZWxUeXBlKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yKHR5cGUpO1xuICB9XG59XG5cbnR5cGUgQWxsVmlld01vZGVsID0gVmlld01vZGVsICYgVmlld01vZGVsVG9kbztcbnR5cGUgQWxsVmlld01vZGVsS2V5ID0ga2V5b2YgQWxsVmlld01vZGVsO1xuXG5jbGFzcyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJpdmF0ZSBidWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD47XG5cbiAgY29uc3RydWN0b3IobW9kZWxUeXBlPzogVmlld01vZGVsVHlwZSkge1xuICAgIGlmIChtb2RlbFR5cGUpIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUb2RvQnVpbGRlcigpLndpdGgoeyBtb2RlbFR5cGU6IG1vZGVsVHlwZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFZpZXdNb2RlbEJhc2VCdWlsZGVyKCkud2l0aCh7XG4gICAgICAgIG1vZGVsVHlwZTogJ1ZpZXdNb2RlbCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB3aXRoKFxuICAgIGlucHV0OiB7IFtrZXkgaW4gQWxsVmlld01vZGVsS2V5XT86IEFsbFZpZXdNb2RlbFtrZXldIH1cbiAgKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgdGhpcy5idWlsZGVyID0gdGhpcy5idWlsZGVyLndpdGgoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogVmlld01vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKCk7XG4gIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFQgZXh0ZW5kcyBWaWV3TW9kZWw+XG4gIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxUPiwgUGFydGlhbDxWaWV3TW9kZWw+IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGU7XG5cbiAgd2l0aChpbnB1dDogeyBba2V5IGluIGtleW9mIFRdPzogVFtrZXldIH0pOiB0aGlzIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICAgIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQubW9kZWxUeXBlKSB7XG4gICAgICAgIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IFtrZXldOiBpbnB1dFtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoSWQoaWQ6IG51bWJlcik6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdpZCc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGlkOiBpZCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoTW9kZWxUeXBlKFxuICAgIHR5cGU6IFZpZXdNb2RlbFR5cGVcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ21vZGVsVHlwZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IG1vZGVsVHlwZTogdHlwZSB9KTtcbiAgfVxuXG4gIGJ1aWxkKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSW5zdGFuY2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZW5lcmF0ZUluc3RhbmNlKCk6IFQ7XG59XG5cbmNsYXNzIFZpZXdNb2RlbEJhc2VCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWwge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZCA/PyAtMTtcbiAgICBjb25zdCB0eXBlOiBWaWV3TW9kZWxUeXBlID0gdGhpcy5tb2RlbFR5cGUgPz8gJ1ZpZXdNb2RlbCc7XG4gICAgY29uc3Qgb2JqOiBWaWV3TW9kZWwgPSB7IGlkOiBpZCwgbW9kZWxUeXBlOiB0eXBlIH07XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmIChwcm9wICE9PSAnaWQnIHx8IHByb3AgIT09ICdtb2RlbFR5cGUnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7IFtwcm9wXTogdGhpc1twcm9wXSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG5jbGFzcyBUb2RvQnVpbGRlciBleHRlbmRzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWxUb2RvPlxuICBpbXBsZW1lbnRzIFBhcnRpYWw8Vmlld01vZGVsVG9kbz4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgd2l0aChpbnB1dDogeyBba2V5IGluIGtleW9mIFZpZXdNb2RlbFRvZG9dPzogVmlld01vZGVsVG9kb1trZXldIH0pOiB0aGlzIHtcbiAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhNb2RlbFR5cGUoaW5wdXQubW9kZWxUeXBlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoVGl0bGUoaW5wdXQudGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuY29udGVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDb250ZW50cyhpbnB1dC5jb250ZW50cyk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jcmVhdGVEYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoQ3JlYXRlRGF0ZShpbnB1dC5jcmVhdGVEYXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnN0YXJ0RGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFN0YXJ0RGF0ZShpbnB1dC5zdGFydERhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuZXN0aW1hdGVIb3VyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoRXN0aW1hdGVIb3VyKGlucHV0LmVzdGltYXRlSG91cik7XG4gICAgfVxuICAgIGlmIChpbnB1dC5yZXN1bHRIb3VyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoUmVzdWx0SG91cihpbnB1dC5yZXN1bHRIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LndvcmtTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFdvcmtTdGF0ZShpbnB1dC53b3JrU3RhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuZGlzcGxheU9yZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoRGlzcGxheU9yZGVyKGlucHV0LmRpc3BsYXlPcmRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoVGl0bGUodGl0bGU6IHN0cmluZyk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICd0aXRsZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHRpdGxlOiB0aXRsZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhDb250ZW50cyhcbiAgICBjb250ZW50czogc3RyaW5nXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjb250ZW50cyc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGNvbnRlbnRzOiBjb250ZW50cyB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhDcmVhdGVEYXRlKGRhdGU6IERhdGUpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnY3JlYXRlRGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGNyZWF0ZURhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoU3RhcnREYXRlKGRhdGU6IERhdGUpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnc3RhcnREYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgc3RhcnREYXRlOiBkYXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aEVzdGltYXRlSG91cihcbiAgICBob3VyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2VzdGltYXRlSG91cic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGVzdGltYXRlSG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhSZXN1bHRIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAncmVzdWx0SG91cic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHJlc3VsdEhvdXI6IGhvdXIgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoV29ya1N0YXRlKFxuICAgIHN0YXRlOiBUb2RvU3RhdGVcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3dvcmtTdGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHdvcmtTdGF0ZTogc3RhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRGlzcGxheU9yZGVyKFxuICAgIG9yZGVyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2Rpc3BsYXlPcmRlcic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGRpc3BsYXlPcmRlcjogb3JkZXIgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Vmlld01vZGVsVHlwZSgpOiBWaWV3TW9kZWxUeXBlIHtcbiAgICByZXR1cm4gJ1RvZG8nO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdlbmVyYXRlSW5zdGFuY2UoKTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIGluaXRUb2RvKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9