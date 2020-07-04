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
var viewHandler_1 = __webpack_require__(/*! ./main/view/viewHandler */ "./src/ts/main/view/viewHandler.ts");
var viewDisplayer_1 = __webpack_require__(/*! ./main/view/viewDisplayer */ "./src/ts/main/view/viewDisplayer.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var viewModelManagerFactoryImpl_1 = __webpack_require__(/*! ./main/viewmodel/impl/viewModelManagerFactoryImpl */ "./src/ts/main/viewmodel/impl/viewModelManagerFactoryImpl.ts");
var htmlAccessor_1 = __webpack_require__(/*! ./htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var ContextMenuHandler_1 = __webpack_require__(/*! ./main/view/ContextMenuHandler */ "./src/ts/main/view/ContextMenuHandler.ts");
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
var viewHandler = new viewHandler_1.ViewHandler(new viewDisplayer_1.ViewDisplayer(), ContextMenuHandler_1.getTodoCtMenuHandler());
viewHandler.resistCreateTaskEvent();
viewHandler.resistTodoEvent();
viewHandler.resistTodoObserver();
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

/***/ "./src/ts/main/view/ContextMenuHandler.ts":
/*!************************************************!*\
  !*** ./src/ts/main/view/ContextMenuHandler.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoCtMenuHandler = void 0;
var todoState_1 = __webpack_require__(/*! ../viewmodel/todo/todoState */ "./src/ts/main/viewmodel/todo/todoState.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var viewModelServiceImpl_1 = __webpack_require__(/*! ../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
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
function isTodoState(obj) {
    return Object.values(todoState_1.TodoStates).includes(obj);
}
function getTodoCtMenuHandler() {
    return new TodoContextMenuHandler();
}
exports.getTodoCtMenuHandler = getTodoCtMenuHandler;


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

/***/ "./src/ts/main/view/viewHandler.ts":
/*!*****************************************!*\
  !*** ./src/ts/main/view/viewHandler.ts ***!
  \*****************************************/
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
exports.ViewHandler = void 0;
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var ViewHandler = (function () {
    function ViewHandler(_viewDisplayer, _ctMenuHandler) {
        this._viewDisplayer = _viewDisplayer;
        this._ctMenuHandler = _ctMenuHandler;
    }
    ViewHandler.prototype.resistTodoEvent = function () {
        var _this = this;
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', _this._ctMenuHandler.openContextMenuFunc);
        });
    };
    ViewHandler.prototype.resistCreateTaskEvent = function () {
        var createTaskArea = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskArea');
        var createTaskBtn = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskBtn', createTaskArea);
        createTaskBtn.addEventListener('click', this._viewDisplayer.displayInputTaskArea);
    };
    ViewHandler.prototype.resistTodoObserver = function () {
        var e_1, _a;
        var _this = this;
        var observer = new MutationObserver(function (records) {
            records.forEach(function (rec) {
                rec.addedNodes.forEach(function (elem) {
                    elem.addEventListener('contextmenu', _this._ctMenuHandler.openContextMenuFunc);
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
    return ViewHandler;
}());
exports.ViewHandler = ViewHandler;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvQ29udGV4dE1lbnVIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdmlld1RvZG9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwi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LElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxPQUE2QztRQUNuRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBNkM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQztBQTdCWSwwQ0FBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9hcHAudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IFZpZXdIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvdmlld0hhbmRsZXInO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXInO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsTWFuYWdlckZhY3RvcnlJbXBsJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBnZXRUb2RvQ3RNZW51SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L0NvbnRleHRNZW51SGFuZGxlcic7XG5cblZpZXdNb2RlbFNlcnZpY2VJbXBsLmluaXQobmV3IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsKCkpO1xuXG5jb25zdCB2aWV3SGFuZGxlciA9IG5ldyBWaWV3SGFuZGxlcihcbiAgbmV3IFZpZXdEaXNwbGF5ZXIoKSxcbiAgZ2V0VG9kb0N0TWVudUhhbmRsZXIoKVxuKTtcbnZpZXdIYW5kbGVyLnJlc2lzdENyZWF0ZVRhc2tFdmVudCgpO1xudmlld0hhbmRsZXIucmVzaXN0VG9kb0V2ZW50KCk7XG52aWV3SGFuZGxlci5yZXNpc3RUb2RvT2JzZXJ2ZXIoKTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9Db21wb25lbnQobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBhcmdzLmZpbmQoaW1wbGVtZW50c1RvZG8pIGFzIFZpZXdNb2RlbFRvZG8gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b2RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0b2RvLndvcmtTdGF0ZSA/PyAnV2FpdGluZyc7XG4gICAgICAgIGNvbnN0IHN0YXRlU3R5bGVDbGFzcyA9IGNvbnZlcnRTdGF0ZUNsYXNzKHN0YXRlKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUobW9kZWxUeXBlKTtcbiAgICAgICAgdGVtcGxhdGVcbiAgICAgICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBzdGF0ZSB9fS9nLCBzdGF0ZSlcbiAgICAgICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBzdGF0ZUNsYXNzIH19L2csIHN0YXRlU3R5bGVDbGFzcylcbiAgICAgICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBpZCB9fS9nLCB0b2RvLmlkKTtcbiAgICAgICAgY29uc3QgbW91bnRlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcuJyArIHN0YXRlU3R5bGVDbGFzcyArIHNlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICAgIGlmIChtb3VudGVkRWxlbWVudCkge1xuICAgICAgICAgIG1vdW50ZWRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlLmdldFRlbXBsYXRlSHRtbCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGltcGxlbWVudHNUb2RvKGFyZzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYXJnICE9PSBudWxsICYmXG4gICAgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgYXJnLmlkID09PSAnbnVtYmVyJyAmJlxuICAgIHR5cGVvZiBhcmcubW9kZWxUeXBlID09PSAnc3RyaW5nJ1xuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZTogVG9kb1N0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdpc18nICsgc3RhdGUudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUh0bWw6IHN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlID09PSAnVG9kbycpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdG9kb1RlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlSHRtbDtcbiAgfVxuXG4gIHJlcGxhY2VUZW1wbGF0ZSh0YXJnZXQ6IFJlZ0V4cCwgcmVwbGFjZTogc3RyaW5nIHwgbnVtYmVyKTogVGVtcGxhdGUge1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcocmVwbGFjZSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdGhpcy50ZW1wbGF0ZUh0bWwucmVwbGFjZSh0YXJnZXQsIHJlcGxhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcbiAgPGRpdiBjbGFzcz1cImVsX2VtcHR5SXRlbVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmxfdG9kbyBocF9tcmwxNSBocF9wcmwyXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvSWRcIj57eyBpZCB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb1N0YXRlXCI+e3sgc3RhdGUgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfdG9kb19oZWFkIHt7IHN0YXRlQ2xhc3MgfX1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19ib2R5XCI+XG4gICAgICA8aDMgY2xhc3M9XCJlbF90b2RvVGl0bGVcIj5cbiAgICAgICAgVGVzdDogU3VjY2VzcyBUYXNrIENyZWF0ZSBieSBUUyBQcm9ncmFtXG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5jcmVhdGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+c3RhcnRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19zdGF0dXNcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJibF90b2RvX3Byb2dyZXNzXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiMFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBvbmlucHV0PVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Mtb3V0cHV0JykudmFsdWU9dGhpcy52YWx1ZVwiIC8+XG4gICAgICAgICAgPG91dHB1dCBpZD1cImMtb3V0cHV0XCIgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj4wPC9vdXRwdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7opovnqY06PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCIgbmFtZT1cImVzdGltYXRlSG91clwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuWun+e4vjo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIiBuYW1lPVwicmVzdWx0SG91clwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiIsImV4cG9ydCBjbGFzcyBIdG1sQWNjZXNzb3Ige1xuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50TnVsbGFibGU8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHwgbnVsbCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50czxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IEFycmF5PFQ+IHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuLi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE1lbnVIYW5kbGVyIHtcbiAgb3BlbkNvbnRleHRNZW51RnVuYzogRXZlbnRMaXN0ZW5lcjtcbn1cblxuY2xhc3MgVG9kb0NvbnRleHRNZW51SGFuZGxlciBpbXBsZW1lbnRzIENvbnRleHRNZW51SGFuZGxlciB7XG4gIHByaXZhdGUgdGFyZ2V0VG9kbzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwdWJsaWMgb3BlbkNvbnRleHRNZW51RnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHVibGljIGNoYW5nZVN0YXRlV2FpdGluZ0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIHB1YmxpYyBjaGFuZ2VTdGF0ZUlucHJvZ3Jlc3NGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwdWJsaWMgY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwdWJsaWMgY2hhbmdlU3RhdGVQZW5kaW5nRnVuYzogRXZlbnRMaXN0ZW5lcjtcbiAgcHVibGljIGRlbGV0ZVRvZG9GdW5jOiBFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IG51bGw7XG4gICAgdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db250ZXh0TWVudShlKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVXYWl0aW5nRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ1dhaXRpbmcnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVJbnByb2dyZXNzRnVuYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ0luUHJvZ3Jlc3MnKTtcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlU3RhdGVDb21wbGV0ZWRGdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnQ29tcGxldGVkJyk7XG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVN0YXRlUGVuZGluZ0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKCdQZW5kaW5nJyk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZVRvZG9GdW5jID0gKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVUb2RvKCk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkNvbnRleHRNZW51KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgY29uc3QgY3RNZW51ID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jyk7XG4gICAgY3RNZW51LnN0eWxlLmxlZnQgPSBTdHJpbmcoZXZlbnQucGFnZVgpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUudG9wID0gU3RyaW5nKGV2ZW50LnBhZ2VZKSArICdweCc7XG4gICAgY3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGFyZ2V0VG9kbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICghdGhpcy50YXJnZXRUb2RvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19tZW51Q2hhbmdlV2FpdGluZycsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZVdhaXRpbmdGdW5jKTtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX21lbnVDaGFuZ2VJbnByb2dyZXNzJyxcbiAgICAgIGN0TWVudVxuICAgICkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVN0YXRlSW5wcm9ncmVzc0Z1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZUNvbXBsZXRlZCcsXG4gICAgICBjdE1lbnVcbiAgICApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VTdGF0ZUNvbXBsZXRlZEZ1bmMpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfbWVudUNoYW5nZVBlbmRpbmcnLFxuICAgICAgY3RNZW51XG4gICAgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlU3RhdGVQZW5kaW5nRnVuYyk7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfbWVudVRvZG9EZWxldGUnLCBjdE1lbnUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5kZWxldGVUb2RvRnVuY1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKHN0YXRlOiBUb2RvU3RhdGUpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy50YXJnZXRUb2RvIHx8XG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvU3RhdGUnLCB0aGlzLnRhcmdldFRvZG8pXG4gICAgICAgIC5pbm5lclRleHQgPT09IHN0YXRlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0VG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5yZW1vdmUoKTtcbiAgICB0aGlzLnRhcmdldFRvZG8ucmVtb3ZlKCk7XG4gICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBpbnB1dFZtID0gdGhpcy5nZW5lcmF0ZVZpZXdNb2RlbCh0aGlzLnRhcmdldFRvZG8sIHN0YXRlKTtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICB2bVNlcnZpY2UuZGVsZXRlVmlld01vZGVsKGlucHV0Vm0pO1xuICAgIHZtU2VydmljZS5jcmVhdGVWaWV3TW9kZWwoXG4gICAgICAnVG9kbycsXG4gICAgICB2bUJ1aWxkZXIud2l0aChpbnB1dFZtKS53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KS5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlVG9kbygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0VG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2VG9kb0VtcHR5ID0gdGhpcy50YXJnZXRUb2RvLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy50YXJnZXRUb2RvLnJlbW92ZSgpO1xuICAgIHByZXZUb2RvRW1wdHk/LnJlbW92ZSgpO1xuXG4gICAgVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKS5kZWxldGVWaWV3TW9kZWwoXG4gICAgICB0aGlzLmdlbmVyYXRlVmlld01vZGVsKHRoaXMudGFyZ2V0VG9kbylcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVZpZXdNb2RlbChcbiAgICB0b2RvOiBIVE1MRWxlbWVudCxcbiAgICBzdGF0ZT86IHN0cmluZ1xuICApOiBWaWV3TW9kZWwgfCBuZXZlciB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvSWQnLCB0b2RvKS5pbm5lclRleHRcbiAgICApO1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGF0ZSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9TdGF0ZScsIHRvZG8pLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaWQgPCAwIHx8ICFpc1RvZG9TdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgfVxuICAgIGNvbnN0IHZtQnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoKTtcbiAgICByZXR1cm4gdm1CdWlsZGVyXG4gICAgICAud2l0aCh7IGlkOiBpZCB9KVxuICAgICAgLndpdGgoeyBtb2RlbFR5cGU6ICdUb2RvJyB9KVxuICAgICAgLndpdGgoeyB3b3JrU3RhdGU6IHN0YXRlIH0pXG4gICAgICAuYnVpbGQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RvZG9TdGF0ZShvYmo6IGFueSk6IG9iaiBpcyBUb2RvU3RhdGUge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKS5pbmNsdWRlcyhvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0N0TWVudUhhbmRsZXIoKTogQ29udGV4dE1lbnVIYW5kbGVyIHtcbiAgcmV0dXJuIG5ldyBUb2RvQ29udGV4dE1lbnVIYW5kbGVyKCk7XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RGlzcGxheWVyIHtcbiAgcHVibGljIGRpc3BsYXlJbnB1dFRhc2tBcmVhKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlPEhUTUxJbnB1dEVsZW1lbnQ+KFxuICAgICAgICAnI3JhZGlvQ3JlYXRlVGFza0RldGFpbCdcbiAgICAgICk/LmNoZWNrZWRcbiAgICApIHtcbiAgICAgIC8vIGNvbnN0IGNsYXNzTGlzdCA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2lucHV0VGFza0RldGFpbEFyZWEnKVxuICAgICAgLy8gICAuY2xhc3NMaXN0O1xuICAgICAgLy8gaWYgKGNsYXNzTGlzdC5jb250YWlucygnaXNfaGlkZGVuJykpIHtcbiAgICAgIC8vICAgY2xhc3NMaXN0LnJlbW92ZSgnaXNfaGlkZGVuJyk7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5hZGQoJ2lzX2FjdGl2ZScpO1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKFxuICAgICAgICAnVG9kbydcbiAgICAgICk7XG4gICAgICB2bUJ1aWxkZXIud2l0aCh7IHdvcmtTdGF0ZTogJ1dhaXRpbmcnIH0pO1xuICAgICAgaWYgKHZtQnVpbGRlcikge1xuICAgICAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB2bVNlcnZpY2UuY3JlYXRlVmlld01vZGVsKCdUb2RvJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSAnLi9Db250ZXh0TWVudUhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVmlld0hhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3RGlzcGxheWVyOiBWaWV3RGlzcGxheWVyLFxuICAgIHByaXZhdGUgX2N0TWVudUhhbmRsZXI6IENvbnRleHRNZW51SGFuZGxlclxuICApIHt9XG5cbiAgcHVibGljIHJlc2lzdFRvZG9FdmVudCgpOiB2b2lkIHtcbiAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnRzKCcuanNfdG9kbycpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgdGhpcy5fY3RNZW51SGFuZGxlci5vcGVuQ29udGV4dE1lbnVGdW5jXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2lzdENyZWF0ZVRhc2tFdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBjcmVhdGVUYXNrQXJlYSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2NyZWF0ZVRhc2tBcmVhJyk7XG4gICAgY29uc3QgY3JlYXRlVGFza0J0biA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudChcbiAgICAgICcuanNfY3JlYXRlVGFza0J0bicsXG4gICAgICBjcmVhdGVUYXNrQXJlYVxuICAgICk7XG4gICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3ZpZXdEaXNwbGF5ZXIuZGlzcGxheUlucHV0VGFza0FyZWFcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlc2lzdFRvZG9PYnNlcnZlcigpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgICByZWNvcmRzLmZvckVhY2goKHJlYykgPT4ge1xuICAgICAgICByZWMuYWRkZWROb2Rlcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICAgIHRoaXMuX2N0TWVudUhhbmRsZXIub3BlbkNvbnRleHRNZW51RnVuY1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgdG9kb2xpc3Qgb2YgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG9saXN0JykpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodG9kb2xpc3QsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvLCBpbml0VG9kbyB9IGZyb20gJy4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyIH0gZnJvbSAnLi92aWV3TW9kZWxCdWlsZGVyJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgc3RhdGljIG5ld0luc3RhbmNlKCk6IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWxCdWlsZGVyKHR5cGU/OiBWaWV3TW9kZWxUeXBlKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yKHR5cGUpO1xuICB9XG59XG5cbnR5cGUgQWxsVmlld01vZGVsID0gVmlld01vZGVsICYgVmlld01vZGVsVG9kbztcbnR5cGUgQWxsVmlld01vZGVsS2V5ID0ga2V5b2YgQWxsVmlld01vZGVsO1xuXG5jbGFzcyBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJpdmF0ZSBidWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD47XG5cbiAgY29uc3RydWN0b3IobW9kZWxUeXBlPzogVmlld01vZGVsVHlwZSkge1xuICAgIGlmIChtb2RlbFR5cGUpIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUb2RvQnVpbGRlcigpLndpdGgoeyBtb2RlbFR5cGU6IG1vZGVsVHlwZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFZpZXdNb2RlbEJhc2VCdWlsZGVyKCkud2l0aCh7XG4gICAgICAgIG1vZGVsVHlwZTogJ1ZpZXdNb2RlbCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB3aXRoKFxuICAgIGlucHV0OiB7IFtrZXkgaW4gQWxsVmlld01vZGVsS2V5XT86IEFsbFZpZXdNb2RlbFtrZXldIH1cbiAgKTogVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciB7XG4gICAgdGhpcy5idWlsZGVyID0gdGhpcy5idWlsZGVyLndpdGgoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogVmlld01vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKCk7XG4gIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFQgZXh0ZW5kcyBWaWV3TW9kZWw+XG4gIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxUPiwgUGFydGlhbDxWaWV3TW9kZWw+IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGU7XG5cbiAgd2l0aChpbnB1dDogeyBba2V5IGluIGtleW9mIFRdPzogVFtrZXldIH0pOiB0aGlzIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgICB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgICB0aGlzLndpdGhNb2RlbFR5cGUoaW5wdXQubW9kZWxUeXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBba2V5XTogaW5wdXRba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aElkKGlkOiBudW1iZXIpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnaWQnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBpZDogaWQgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgd2l0aE1vZGVsVHlwZShcbiAgICB0eXBlOiBWaWV3TW9kZWxUeXBlXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdtb2RlbFR5cGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBtb2RlbFR5cGU6IHR5cGUgfSk7XG4gIH1cblxuICBidWlsZCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUluc3RhbmNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VuZXJhdGVJbnN0YW5jZSgpOiBUO1xufVxuXG5jbGFzcyBWaWV3TW9kZWxCYXNlQnVpbGRlciBleHRlbmRzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+IHtcbiAgcHJvdGVjdGVkIGdlbmVyYXRlSW5zdGFuY2UoKTogVmlld01vZGVsIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWQgPz8gLTE7XG4gICAgY29uc3QgdHlwZTogVmlld01vZGVsVHlwZSA9IHRoaXMubW9kZWxUeXBlID8/ICdWaWV3TW9kZWwnO1xuICAgIGNvbnN0IG9iajogVmlld01vZGVsID0geyBpZDogaWQsIG1vZGVsVHlwZTogdHlwZSB9O1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgIT09ICdpZCcgfHwgcHJvcCAhPT0gJ21vZGVsVHlwZScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHsgW3Byb3BdOiB0aGlzW3Byb3BdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRWaWV3TW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiAnVG9kbyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gaW5pdFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldE5leHRJZCgpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZ2V0Vmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSwgdmlld01vZGVsPzogVmlld01vZGVsKTogdm9pZCB8IG5ldmVyIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAoIXZtTWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICB9XG4gICAgdmlld01vZGVsID09PSB1bmRlZmluZWRcbiAgICAgID8gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KS5idWlsZCgpKVxuICAgICAgOiB2bU1hbmFnZXIuY3JlYXRlKHZpZXdNb2RlbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLnVwZGF0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBUb2RvQ29tcG9uZW50KCdUb2RvJywgJy5qc190b2RvbGlzdCcpXG5leHBvcnQgY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFZpZXdNb2RlbFRvZG8ge1xuICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICBwcml2YXRlIF9tb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGU7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRlbnRzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZURhdGU6IERhdGU7XG4gIHByaXZhdGUgX3N0YXJ0RGF0ZT86IERhdGU7XG4gIHByaXZhdGUgX2VzdGltYXRlSG91cjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXN1bHRIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBwcml2YXRlIF9kaXNwbGF5T3JkZXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0b2RvQmFzZT86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB0b2RvID0gaW5pdFRvZG8odG9kb0Jhc2UgPz8ge30pO1xuICAgIHRoaXMuX2lkID0gdG9kby5pZDtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSB0b2RvLm1vZGVsVHlwZTtcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8udGl0bGU7XG4gICAgdGhpcy5fY29udGVudHMgPSB0b2RvLmNvbnRlbnRzO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvLmNyZWF0ZURhdGU7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kby5zdGFydERhdGU7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gdG9kby5lc3RpbWF0ZUhvdXI7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IHRvZG8ucmVzdWx0SG91cjtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSB0b2RvLndvcmtTdGF0ZTtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvLmRpc3BsYXlPcmRlcjtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9kbyhiYXNlOiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+KTogVmlld01vZGVsVG9kbyB7XG4gIGNvbnN0IHRhcmdldDogUGFydGlhbDxWaWV3TW9kZWxUb2RvPiA9IHt9O1xuICB0YXJnZXQuaWQgPSBiYXNlPy5pZCA/PyAtMTtcbiAgdGFyZ2V0Lm1vZGVsVHlwZSA9ICdUb2RvJztcbiAgdGFyZ2V0LnRpdGxlID0gYmFzZT8udGl0bGUgPz8gJyc7XG4gIHRhcmdldC5jb250ZW50cyA9IGJhc2U/LmNvbnRlbnRzID8/ICcnO1xuICB0YXJnZXQuY3JlYXRlRGF0ZSA9IGJhc2U/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgdGFyZ2V0LnN0YXJ0RGF0ZSA9IGJhc2U/LnN0YXJ0RGF0ZSA/PyB1bmRlZmluZWQ7XG4gIHRhcmdldC5lc3RpbWF0ZUhvdXIgPSBiYXNlPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgdGFyZ2V0LnJlc3VsdEhvdXIgPSBiYXNlPy5yZXN1bHRIb3VyID8/IDA7XG4gIHRhcmdldC53b3JrU3RhdGUgPSBiYXNlPy53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnO1xuICB0YXJnZXQuZGlzcGxheU9yZGVyID0gYmFzZT8uZGlzcGxheU9yZGVyID8/IDA7XG4gIHJldHVybiB0YXJnZXQgYXMgVmlld01vZGVsVG9kbztcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlLCBUb2RvU3RhdGVzIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb2xpc3QgfSBmcm9tICcuL3RvZG9saXN0JztcblxuZXhwb3J0IGNsYXNzIFRvZG9Cb2FyZCB7XG4gIHByaXZhdGUgdG9kb2xpc3RzOiBNYXA8VG9kb1N0YXRlLCBUb2RvbGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChsZXQgc3RhdGVOYW1lIG9mIE9iamVjdC52YWx1ZXMoVG9kb1N0YXRlcykpIHtcbiAgICAgIHRoaXMudG9kb2xpc3RzLnNldChzdGF0ZU5hbWUsIG5ldyBUb2RvbGlzdChzdGF0ZU5hbWUpKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pIHtcbiAgICB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpIS5hZGRUb2RvKHRvZG8pO1xuICB9XG5cbiAgZ2V0VG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB7XG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmdldFRvZG8oaWQpO1xuICAgIGlmICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgaWQ6IG51bWJlcikge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmRlbGV0ZVRvZG8oaWQpO1xuICB9XG5cbiAgdXBkYXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCB0b2RvOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLnVwZGF0ZVRvZG8odG9kbyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBUb2RvU3RhdGVzID0ge1xuICBXQUlUSU5HOiAnV2FpdGluZycsXG4gIElOX1BST0dSRVNTOiAnSW5Qcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvbGlzdCB7XG4gIHByaXZhdGUgX3RvZG9saXN0OiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGVOYW1lOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl90b2RvbGlzdCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldCB0b2RvbGlzdCgpOiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9saXN0O1xuICB9XG5cbiAgZ2V0IHN0YXRlTmFtZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZU5hbWU7XG4gIH1cblxuICBnZXRUb2RvKGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXQoaWQpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHRoaXMuX3RvZG9saXN0LnZhbHVlcygpKSB7XG4gICAgICAgIGlmIChkZWxUb2RvT3JkZXIgPCB0b2RvLmRpc3BsYXlPcmRlcikge1xuICAgICAgICAgIHRvZG8uZGlzcGxheU9yZGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5kZWxldGUoaWQpO1xuICB9XG5cbiAgdXBkYXRlVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudG9kb2xpc3QuZ2V0KHRvZG8uaWQpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlciBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsVG9kbz4ge1xuICBwcml2YXRlIGZpbmFsSWQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9kb0JvYXJkOiBUb2RvQm9hcmQpIHtcbiAgICB0aGlzLmZpbmFsSWQgPSAwO1xuICB9XG5cbiAgZ2V0TmV4dElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmluYWxJZCArIDE7XG4gIH1cblxuICBjcmVhdGUodm1Nb2RlbDogVmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHZtTW9kZWwpO1xuICAgIGlmICh0b2RvT2JqLmlkID4gdGhpcy5maW5hbElkKSB7XG4gICAgICB0aGlzLmZpbmFsSWQgPSB0b2RvT2JqLmlkO1xuICAgIH1cbiAgICB0aGlzLl90b2RvQm9hcmQuYWRkVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBnZXREYXRhKHRvZG9PYmo6IFZpZXdNb2RlbCAmIHsgd29ya1N0YXRlOiBUb2RvU3RhdGUgfSk6IFZpZXdNb2RlbFRvZG8ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQuZ2V0VG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cblxuICB1cGRhdGUodG9kb09iajogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvQm9hcmQudXBkYXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iaik7XG4gIH1cblxuICBkZWxldGUodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogdm9pZCB7XG4gICAgdGhpcy5fdG9kb0JvYXJkLmRlbGV0ZVRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmouaWQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9