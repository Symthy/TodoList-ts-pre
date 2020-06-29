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
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
var viewHandler = new viewHandler_1.ViewHandler(new viewDisplayer_1.ViewDisplayer());
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
                var styleClassName = convertStateClass((_a = todo.workState) !== null && _a !== void 0 ? _a : 'Waiting');
                var template = new template_1.Template(modelType);
                template
                    .replaceTemplate(/{{ state }}/g, styleClassName)
                    .replaceTemplate(/{{ id }}/g, todo.id);
                var mountedElement = document.querySelector(selector);
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
var todoTemplate = "\n  <div class=\"el_emptyItem\"></div>\n  <div class=\"bl_todo hp_mrl15 hp_prl2\">\n    <div class=\"el_hidden js_todoId\">{{ id }}</div>\n    <div class=\"el_hidden js_todoState\">Waiting</div>\n    <div class=\"el_todo_head {{ state }}\"></div>\n    <div class=\"bl_todo_body\">\n      <h3 class=\"el_todoTitle\">\n        Test: Success Task Create by TS Program\n      </h3>\n      <div class=\"bl_todo_times\">\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">created time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">started time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n      </div>\n      <div class=\"bl_todo_status\">\n        <form class=\"bl_todo_progress\">\n          <input type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"10\" oninput=\"document.getElementById('c-output').value=this.value\" />\n          <output id=\"c-output\" class=\"el_label el_label__small\">0</output>\n        </form>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u898B\u7A4D:</p>\n          <p class=\"el_label el_label__small\" name=\"estimateHour\">\n              10 h\n            </p>\n        </div>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u5B9F\u7E3E:</p>\n          <p class=\"el_label el_label__small\" name=\"resultHour\">\n              10 h\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n";


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
var viewModelServiceImpl_1 = __webpack_require__(/*! ../viewmodel/impl/viewModelServiceImpl */ "./src/ts/main/viewmodel/impl/viewModelServiceImpl.ts");
var viewModelBuilderFactory_1 = __webpack_require__(/*! ../viewModelBuilderFactory */ "./src/ts/main/viewModelBuilderFactory.ts");
var todoState_1 = __webpack_require__(/*! ../viewmodel/todo/todoState */ "./src/ts/main/viewmodel/todo/todoState.ts");
var ViewHandler = (function () {
    function ViewHandler(_viewDisplayer) {
        this._viewDisplayer = _viewDisplayer;
    }
    ViewHandler.prototype.resistTodoEvent = function () {
        var ctMenuHandler = new ContextMenuHandler();
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', ctMenuHandler.openContextMenuFunc);
        });
    };
    ViewHandler.prototype.resistCreateTaskEvent = function () {
        var createTaskArea = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskArea');
        var createTaskBtn = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskBtn', createTaskArea);
        createTaskBtn.addEventListener('click', this._viewDisplayer.displayInputTaskArea);
    };
    ViewHandler.prototype.resistTodoObserver = function () {
        var ctMenuHandler = new ContextMenuHandler();
        var observer = new MutationObserver(function (records) {
            records.forEach(function (rec) {
                rec.addedNodes.forEach(function (elem) {
                    elem.addEventListener('contextmenu', ctMenuHandler.openContextMenuFunc);
                });
            });
        });
        observer.observe(htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todolist'), {
            childList: true,
        });
    };
    return ViewHandler;
}());
exports.ViewHandler = ViewHandler;
var ContextMenuHandler = (function () {
    function ContextMenuHandler() {
        var _this = this;
        this.delTodo = null;
        this.openContextMenuFunc = function (e) {
            _this.openContextMenu(e);
        };
        this.deleteTodoFunc = function () {
            _this.deleteTodo();
        };
    }
    ContextMenuHandler.prototype.openContextMenu = function (e) {
        var event = e;
        var ctMenu = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu');
        ctMenu.style.left = String(event.pageX) + 'px';
        ctMenu.style.top = String(event.pageY) + 'px';
        ctMenu.style.display = 'block';
        this.delTodo = event.currentTarget;
        if (!this.delTodo) {
            return;
        }
        var menuDel = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu);
        menuDel.addEventListener('click', this.deleteTodoFunc);
    };
    ContextMenuHandler.prototype.deleteTodo = function () {
        var e_1, _a;
        var _b;
        if (!this.delTodo) {
            return;
        }
        var prevTodoEmpty = this.delTodo.previousElementSibling;
        this.delTodo.remove();
        prevTodoEmpty === null || prevTodoEmpty === void 0 ? void 0 : prevTodoEmpty.remove();
        var id = -1;
        var state = '';
        try {
            for (var _c = __values(Array.from(this.delTodo.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var childElem = _d.value;
                if (childElem.classList.contains('js_todoId')) {
                    id = Number(childElem.textContent);
                }
                if (childElem.classList.contains('js_todoState')) {
                    state = (_b = childElem.textContent) !== null && _b !== void 0 ? _b : '';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (id < 0 || !isTodoState(state)) {
            return;
        }
        var vmBuilder = new viewModelBuilderFactory_1.ViewModelBuilderFactory().createViewModelBuilder();
        var vmService = viewModelServiceImpl_1.ViewModelServiceImpl.getInstance();
        var vm = vmBuilder
            .with({ id: id })
            .with({ modelType: 'Todo' })
            .with({ workState: state })
            .build();
        vmService.deleteViewModel(vm);
    };
    return ContextMenuHandler;
}());
function isTodoState(obj) {
    return Object.values(todoState_1.TodoStates).includes(obj);
}


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
    TodoBuilder.prototype.generateInstance = function () {
        return new todo_1.Todo(this);
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
    ViewModelServiceImpl.prototype.createViewModel = function (type) {
        var vmBuilder = viewModelBuilderFactory_1.ViewModelBuilderFactory.newInstance().createViewModelBuilder(type);
        var vmManager = this.viewModelManagers.get(type);
        if (vmManager) {
            return vmManager.create(vmBuilder.with({ id: this.getNextId(type) }));
        }
        throw new Error('');
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
exports.Todo = void 0;
var todoDecorator_1 = __webpack_require__(/*! ../../../component/decorator/todoDecorator */ "./src/ts/component/decorator/todoDecorator.ts");
var Todo = (function () {
    function Todo(todo) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this._id = (_a = todo === null || todo === void 0 ? void 0 : todo.id) !== null && _a !== void 0 ? _a : -1;
        this._modelType = 'Todo';
        this._title = (_b = todo === null || todo === void 0 ? void 0 : todo.title) !== null && _b !== void 0 ? _b : '';
        this._contents = (_c = todo === null || todo === void 0 ? void 0 : todo.contents) !== null && _c !== void 0 ? _c : '';
        this._createDate = (_d = todo === null || todo === void 0 ? void 0 : todo.createDate) !== null && _d !== void 0 ? _d : new Date();
        this._startDate = (_e = todo === null || todo === void 0 ? void 0 : todo.startDate) !== null && _e !== void 0 ? _e : undefined;
        this._estimateHour = (_f = todo === null || todo === void 0 ? void 0 : todo.estimateHour) !== null && _f !== void 0 ? _f : 0;
        this._resultHour = (_g = todo === null || todo === void 0 ? void 0 : todo.resultHour) !== null && _g !== void 0 ? _g : 0;
        this._workState = (_h = todo === null || todo === void 0 ? void 0 : todo.workState) !== null && _h !== void 0 ? _h : 'Waiting';
        this._displayOrder = (_j = todo === null || todo === void 0 ? void 0 : todo.displayOrder) !== null && _j !== void 0 ? _j : 0;
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
    IN_PROGRESS: 'In progress',
    COMPLETED: 'Completed',
    PENDDING: 'Pendding',
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
var ViewTodoManager = (function () {
    function ViewTodoManager(_todoBoard) {
        this._todoBoard = _todoBoard;
        this.finalId = 0;
    }
    ViewTodoManager.prototype.getNextId = function () {
        return this.finalId + 1;
    };
    ViewTodoManager.prototype.create = function (vmModelBuilder) {
        var todoObj = vmModelBuilder.build();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdmlld1RvZG9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QUM7QUFBRCxDQUFDO0FBN0JZLDBDQUFlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2FwcC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgVmlld0hhbmRsZXIgfSBmcm9tICcuL21haW4vdmlldy92aWV3SGFuZGxlcic7XG5pbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCB9IGZyb20gJy4vbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeUltcGwnO1xuaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuVmlld01vZGVsU2VydmljZUltcGwuaW5pdChuZXcgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwoKSk7XG5cbmNvbnN0IHZpZXdIYW5kbGVyID0gbmV3IFZpZXdIYW5kbGVyKG5ldyBWaWV3RGlzcGxheWVyKCkpO1xudmlld0hhbmRsZXIucmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk7XG52aWV3SGFuZGxlci5yZXNpc3RUb2RvRXZlbnQoKTtcbnZpZXdIYW5kbGVyLnJlc2lzdFRvZG9PYnNlcnZlcigpO1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvQ29udGV4dE1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi4vLi4vbWFpbi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kb1N0YXRlJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9kb0NvbXBvbmVudChtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcgKC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IGFyZ3MuZmluZChpbXBsZW1lbnRzVG9kbykgYXMgVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRvZG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlQ2xhc3NOYW1lID0gY29udmVydFN0YXRlQ2xhc3ModG9kby53b3JrU3RhdGUgPz8gJ1dhaXRpbmcnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUobW9kZWxUeXBlKTtcbiAgICAgICAgdGVtcGxhdGVcbiAgICAgICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBzdGF0ZSB9fS9nLCBzdHlsZUNsYXNzTmFtZSlcbiAgICAgICAgICAucmVwbGFjZVRlbXBsYXRlKC97eyBpZCB9fS9nLCB0b2RvLmlkKTtcbiAgICAgICAgY29uc3QgbW91bnRlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKG1vdW50ZWRFbGVtZW50KSB7XG4gICAgICAgICAgbW91bnRlZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgICAgICAgdGVtcGxhdGUuZ2V0VGVtcGxhdGVIdG1sKClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW1wbGVtZW50c1RvZG8oYXJnOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhcmcgIT09IG51bGwgJiZcbiAgICB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBhcmcuaWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGFyZy5tb2RlbFR5cGUgPT09ICdzdHJpbmcnXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdGF0ZUNsYXNzKHN0YXRlOiBUb2RvU3RhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gJ2lzXycgKyBzdGF0ZS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL21haW4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwcml2YXRlIHRlbXBsYXRlSHRtbDogc3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKG1vZGVsVHlwZTogVmlld01vZGVsVHlwZSkge1xuICAgIGlmIChtb2RlbFR5cGUgPT09ICdUb2RvJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZUh0bWwgPSB0b2RvVGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGVtcGxhdGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVIdG1sO1xuICB9XG5cbiAgcmVwbGFjZVRlbXBsYXRlKHRhcmdldDogUmVnRXhwLCByZXBsYWNlOiBzdHJpbmcgfCBudW1iZXIpOiBUZW1wbGF0ZSB7XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlID09PSAnbnVtYmVyJykge1xuICAgICAgcmVwbGFjZSA9IFN0cmluZyhyZXBsYWNlKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZUh0bWwgPSB0aGlzLnRlbXBsYXRlSHRtbC5yZXBsYWNlKHRhcmdldCwgcmVwbGFjZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgdG9kb1RlbXBsYXRlID0gYFxuICA8ZGl2IGNsYXNzPVwiZWxfZW1wdHlJdGVtXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJibF90b2RvIGhwX21ybDE1IGhwX3BybDJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfaGlkZGVuIGpzX3RvZG9JZFwiPnt7IGlkIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvU3RhdGVcIj5XYWl0aW5nPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsX3RvZG9faGVhZCB7eyBzdGF0ZSB9fVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2JvZHlcIj5cbiAgICAgIDxoMyBjbGFzcz1cImVsX3RvZG9UaXRsZVwiPlxuICAgICAgICBUZXN0OiBTdWNjZXNzIFRhc2sgQ3JlYXRlIGJ5IFRTIFByb2dyYW1cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPmNyZWF0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5zdGFydGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3N0YXR1c1wiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImJsX3RvZG9fcHJvZ3Jlc3NcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIwXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxMFwiIG9uaW5wdXQ9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYy1vdXRwdXQnKS52YWx1ZT10aGlzLnZhbHVlXCIgLz5cbiAgICAgICAgICA8b3V0cHV0IGlkPVwiYy1vdXRwdXRcIiBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPjA8L291dHB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuimi+epjTo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIiBuYW1lPVwiZXN0aW1hdGVIb3VyXCI+XG4gICAgICAgICAgICAgIDEwIGhcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+5a6f57i+OjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiIG5hbWU9XCJyZXN1bHRIb3VyXCI+XG4gICAgICAgICAgICAgIDEwIGhcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIiwiZXhwb3J0IGNsYXNzIEh0bWxBY2Nlc3NvciB7XG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IFQgfCBudWxsIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnRzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogQXJyYXk8VD4ge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3JBbGw8VD4ocXVlcnkpO1xuICAgIH1cbiAgICBpZiAoZWxlbS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RGlzcGxheWVyIHtcbiAgcHVibGljIGRpc3BsYXlJbnB1dFRhc2tBcmVhKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudE51bGxhYmxlPEhUTUxJbnB1dEVsZW1lbnQ+KFxuICAgICAgICAnI3JhZGlvQ3JlYXRlVGFza0RldGFpbCdcbiAgICAgICk/LmNoZWNrZWRcbiAgICApIHtcbiAgICAgIC8vIGNvbnN0IGNsYXNzTGlzdCA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX2lucHV0VGFza0RldGFpbEFyZWEnKVxuICAgICAgLy8gICAuY2xhc3NMaXN0O1xuICAgICAgLy8gaWYgKGNsYXNzTGlzdC5jb250YWlucygnaXNfaGlkZGVuJykpIHtcbiAgICAgIC8vICAgY2xhc3NMaXN0LnJlbW92ZSgnaXNfaGlkZGVuJyk7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5hZGQoJ2lzX2FjdGl2ZScpO1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKFxuICAgICAgICAnVG9kbydcbiAgICAgICk7XG4gICAgICB2bUJ1aWxkZXIud2l0aCh7IHdvcmtTdGF0ZTogJ1dhaXRpbmcnIH0pO1xuICAgICAgaWYgKHZtQnVpbGRlcikge1xuICAgICAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB2bVNlcnZpY2UuY3JlYXRlVmlld01vZGVsKCdUb2RvJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3RGlzcGxheWVyIH0gZnJvbSAnLi92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2h0bWxVdGlscy9odG1sQWNjZXNzb3InO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuLi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcbmltcG9ydCB7IFRvZG9TdGF0ZSwgVG9kb1N0YXRlcyB9IGZyb20gJy4uL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdEaXNwbGF5ZXI6IFZpZXdEaXNwbGF5ZXIpIHt9XG5cbiAgcHVibGljIHJlc2lzdFRvZG9FdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBjdE1lbnVIYW5kbGVyID0gbmV3IENvbnRleHRNZW51SGFuZGxlcigpO1xuICAgIEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudHMoJy5qc190b2RvJykuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGN0TWVudUhhbmRsZXIub3BlbkNvbnRleHRNZW51RnVuYyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tBcmVhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfY3JlYXRlVGFza0FyZWEnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19jcmVhdGVUYXNrQnRuJyxcbiAgICAgIGNyZWF0ZVRhc2tBcmVhXG4gICAgKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdmlld0Rpc3BsYXllci5kaXNwbGF5SW5wdXRUYXNrQXJlYVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXN0VG9kb09ic2VydmVyKCkge1xuICAgIGNvbnN0IGN0TWVudUhhbmRsZXIgPSBuZXcgQ29udGV4dE1lbnVIYW5kbGVyKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAocmVjb3Jkcykge1xuICAgICAgcmVjb3Jkcy5mb3JFYWNoKChyZWMpID0+IHtcbiAgICAgICAgcmVjLmFkZGVkTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICAgICBjdE1lbnVIYW5kbGVyLm9wZW5Db250ZXh0TWVudUZ1bmNcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb2xpc3QnKSwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIENvbnRleHRNZW51SGFuZGxlciB7XG4gIHByaXZhdGUgZGVsVG9kbzogRWxlbWVudCB8IG51bGw7XG4gIHB1YmxpYyBvcGVuQ29udGV4dE1lbnVGdW5jOiBFdmVudExpc3RlbmVyO1xuICBwdWJsaWMgZGVsZXRlVG9kb0Z1bmM6IEV2ZW50TGlzdGVuZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVsVG9kbyA9IG51bGw7XG4gICAgdGhpcy5vcGVuQ29udGV4dE1lbnVGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm9wZW5Db250ZXh0TWVudShlKTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlVG9kb0Z1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlbGV0ZVRvZG8oKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQ29udGV4dE1lbnUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IGUgYXMgTW91c2VFdmVudDtcbiAgICBjb25zdCBjdE1lbnUgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc190b2RvQ29udGV4dE1lbnUnKTtcbiAgICBjdE1lbnUuc3R5bGUubGVmdCA9IFN0cmluZyhldmVudC5wYWdlWCkgKyAncHgnO1xuICAgIGN0TWVudS5zdHlsZS50b3AgPSBTdHJpbmcoZXZlbnQucGFnZVkpICsgJ3B4JztcbiAgICBjdE1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5kZWxUb2RvID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoIXRoaXMuZGVsVG9kbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZW51RGVsID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfbWVudVRvZG9EZWxldGUnLCBjdE1lbnUpO1xuICAgIC8vIG1lbnVEZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRvZG9GdW5jKTtcbiAgICBtZW51RGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUb2RvRnVuYyk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVRvZG8oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRlbFRvZG8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldlRvZG9FbXB0eSA9IHRoaXMuZGVsVG9kby5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMuZGVsVG9kby5yZW1vdmUoKTtcbiAgICBwcmV2VG9kb0VtcHR5Py5yZW1vdmUoKTtcblxuICAgIGxldCBpZCA9IC0xO1xuICAgIGxldCBzdGF0ZSA9ICcnO1xuICAgIGZvciAobGV0IGNoaWxkRWxlbSBvZiBBcnJheS5mcm9tKHRoaXMuZGVsVG9kby5jaGlsZHJlbikpIHtcbiAgICAgIGlmIChjaGlsZEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqc190b2RvSWQnKSkge1xuICAgICAgICBpZCA9IE51bWJlcihjaGlsZEVsZW0udGV4dENvbnRlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzX3RvZG9TdGF0ZScpKSB7XG4gICAgICAgIHN0YXRlID0gY2hpbGRFbGVtLnRleHRDb250ZW50ID8/ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpZCA8IDAgfHwgIWlzVG9kb1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKCk7XG4gICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCB2bSA9IHZtQnVpbGRlclxuICAgICAgLndpdGgoeyBpZDogaWQgfSlcbiAgICAgIC53aXRoKHsgbW9kZWxUeXBlOiAnVG9kbycgfSlcbiAgICAgIC53aXRoKHsgd29ya1N0YXRlOiBzdGF0ZSB9KVxuICAgICAgLmJ1aWxkKCk7XG4gICAgdm1TZXJ2aWNlLmRlbGV0ZVZpZXdNb2RlbCh2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUb2RvU3RhdGUob2JqOiBhbnkpOiBvYmogaXMgVG9kb1N0YXRlIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoVG9kb1N0YXRlcykuaW5jbHVkZXMob2JqKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8sIFRvZG8gfSBmcm9tICcuL3ZpZXdtb2RlbC90b2RvL3RvZG8nO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlciB9IGZyb20gJy4vdmlld01vZGVsQnVpbGRlcic7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi92aWV3bW9kZWwvdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB7XG4gIHN0YXRpYyBuZXdJbnN0YW5jZSgpOiBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSgpO1xuICB9XG5cbiAgY3JlYXRlVmlld01vZGVsQnVpbGRlcih0eXBlPzogVmlld01vZGVsVHlwZSk6IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3Ige1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckRlbGVnYXRvcih0eXBlKTtcbiAgfVxufVxuXG50eXBlIEFsbFZpZXdNb2RlbCA9IFZpZXdNb2RlbCAmIFZpZXdNb2RlbFRvZG87XG50eXBlIEFsbFZpZXdNb2RlbEtleSA9IGtleW9mIEFsbFZpZXdNb2RlbDtcblxuY2xhc3MgVmlld01vZGVsQnVpbGRlckRlbGVnYXRvciBpbXBsZW1lbnRzIFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByaXZhdGUgYnVpbGRlcjogVmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlKSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVG9kb0J1aWxkZXIoKS53aXRoKHsgbW9kZWxUeXBlOiBtb2RlbFR5cGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBWaWV3TW9kZWxCYXNlQnVpbGRlcigpLndpdGgoe1xuICAgICAgICBtb2RlbFR5cGU6ICdWaWV3TW9kZWwnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgd2l0aChcbiAgICBpbnB1dDogeyBba2V5IGluIEFsbFZpZXdNb2RlbEtleV0/OiBBbGxWaWV3TW9kZWxba2V5XSB9XG4gICk6IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3Ige1xuICAgIHRoaXMuYnVpbGRlciA9IHRoaXMuYnVpbGRlci53aXRoKGlucHV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IFZpZXdNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZCgpO1xuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxUIGV4dGVuZHMgVmlld01vZGVsPlxuICBpbXBsZW1lbnRzIFZpZXdNb2RlbEJ1aWxkZXI8VD4sIFBhcnRpYWw8Vmlld01vZGVsPiB7XG4gIGlkPzogbnVtYmVyO1xuICBtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlO1xuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBrZXlvZiBUXT86IFRba2V5XSB9KTogdGhpcyB7XG4gICAgZm9yIChsZXQga2V5IGluIGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgICAgdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgW2tleV06IGlucHV0W2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhJZChpZDogbnVtYmVyKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2lkJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgaWQ6IGlkIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhNb2RlbFR5cGUoXG4gICAgdHlwZTogVmlld01vZGVsVHlwZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnbW9kZWxUeXBlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgbW9kZWxUeXBlOiB0eXBlIH0pO1xuICB9XG5cbiAgYnVpbGQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdlbmVyYXRlSW5zdGFuY2UoKTogVDtcbn1cblxuY2xhc3MgVmlld01vZGVsQmFzZUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPiB7XG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkID8/IC0xO1xuICAgIGNvbnN0IHR5cGU6IFZpZXdNb2RlbFR5cGUgPSB0aGlzLm1vZGVsVHlwZSA/PyAnVmlld01vZGVsJztcbiAgICBjb25zdCBvYmo6IFZpZXdNb2RlbCA9IHsgaWQ6IGlkLCBtb2RlbFR5cGU6IHR5cGUgfTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmIChwcm9wICE9PSAnaWQnIHx8IHByb3AgIT09ICdtb2RlbFR5cGUnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7IFtwcm9wXTogdGhpc1twcm9wXSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxufVxuXG5jbGFzcyBUb2RvQnVpbGRlciBleHRlbmRzIEFic3RyYWN0Vmlld01vZGVsQnVpbGRlcjxWaWV3TW9kZWxUb2RvPlxuICBpbXBsZW1lbnRzIFBhcnRpYWw8Vmlld01vZGVsVG9kbz4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgd2l0aChpbnB1dDogeyBba2V5IGluIGtleW9mIFZpZXdNb2RlbFRvZG9dPzogVmlld01vZGVsVG9kb1trZXldIH0pOiB0aGlzIHtcbiAgICBpZiAoaW5wdXQuaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhNb2RlbFR5cGUoaW5wdXQubW9kZWxUeXBlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoVGl0bGUoaW5wdXQudGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuY29udGVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDb250ZW50cyhpbnB1dC5jb250ZW50cyk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jcmVhdGVEYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoQ3JlYXRlRGF0ZShpbnB1dC5jcmVhdGVEYXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnN0YXJ0RGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFN0YXJ0RGF0ZShpbnB1dC5zdGFydERhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuZXN0aW1hdGVIb3VyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoRXN0aW1hdGVIb3VyKGlucHV0LmVzdGltYXRlSG91cik7XG4gICAgfVxuICAgIGlmIChpbnB1dC5yZXN1bHRIb3VyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoUmVzdWx0SG91cihpbnB1dC5yZXN1bHRIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LndvcmtTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFdvcmtTdGF0ZShpbnB1dC53b3JrU3RhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuZGlzcGxheU9yZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoRGlzcGxheU9yZGVyKGlucHV0LmRpc3BsYXlPcmRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoVGl0bGUodGl0bGU6IHN0cmluZyk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICd0aXRsZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHRpdGxlOiB0aXRsZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhDb250ZW50cyhcbiAgICBjb250ZW50czogc3RyaW5nXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjb250ZW50cyc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGNvbnRlbnRzOiBjb250ZW50cyB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhDcmVhdGVEYXRlKGRhdGU6IERhdGUpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnY3JlYXRlRGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGNyZWF0ZURhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoU3RhcnREYXRlKGRhdGU6IERhdGUpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnc3RhcnREYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgc3RhcnREYXRlOiBkYXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aEVzdGltYXRlSG91cihcbiAgICBob3VyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2VzdGltYXRlSG91cic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGVzdGltYXRlSG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhSZXN1bHRIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAncmVzdWx0SG91cic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHJlc3VsdEhvdXI6IGhvdXIgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoV29ya1N0YXRlKFxuICAgIHN0YXRlOiBUb2RvU3RhdGVcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3dvcmtTdGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHdvcmtTdGF0ZTogc3RhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRGlzcGxheU9yZGVyKFxuICAgIG9yZGVyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2Rpc3BsYXlPcmRlcic+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGRpc3BsYXlPcmRlcjogb3JkZXIgfSk7XG4gIH1cblxuICBnZW5lcmF0ZUluc3RhbmNlKHRoaXM6IFZpZXdNb2RlbCk6IFZpZXdNb2RlbFRvZG8ge1xuICAgIHJldHVybiBuZXcgVG9kbyh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVmlld1RvZG9NYW5hZ2VyIH0gZnJvbSAnLi4vdG9kby92aWV3VG9kb01hbmFnZXInO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBUb2RvQm9hcmQgfSBmcm9tICcuLi90b2RvL3RvZG9Cb2FyZCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSB7XG4gIGNyZWF0ZVZpZXdNb2RlbE1hbmFnZXJzKCk6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+IHtcbiAgICBjb25zdCB2bU1hbmFnZXJzID0gbmV3IE1hcCgpO1xuICAgIHZtTWFuYWdlcnMuc2V0KCdUb2RvJywgbmV3IFZpZXdUb2RvTWFuYWdlcihuZXcgVG9kb0JvYXJkKCkpKTtcbiAgICByZXR1cm4gdm1NYW5hZ2VycztcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsU2VydmljZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi8uLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIFZpZXdNb2RlbFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVmlld01vZGVsU2VydmljZTtcbiAgdmlld01vZGVsTWFuYWdlcnM6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PlxuICApIHtcbiAgICB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzID0gX3ZpZXdNb2RlbE1hbmFnZXJzO1xuICB9XG5cbiAgc3RhdGljIGluaXQodm1NYW5hZ2VyZmFjdG9yeTogVmlld01vZGVsTWFuYWdlckZhY3RvcnkpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXdNb2RlbFNlcnZpY2VJbXBsKFxuICAgICAgdm1NYW5hZ2VyZmFjdG9yeS5jcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dElkKHR5cGU6IFZpZXdNb2RlbFR5cGUpOiBudW1iZXIge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0TmV4dElkKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBnZXRWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyICYmIHZtTWFuYWdlci5nZXREYXRhKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldERhdGEodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbCh0eXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgY29uc3Qgdm1CdWlsZGVyID0gVmlld01vZGVsQnVpbGRlckZhY3RvcnkubmV3SW5zdGFuY2UoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKFxuICAgICAgdHlwZVxuICAgICk7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5jcmVhdGUodm1CdWlsZGVyLndpdGgoeyBpZDogdGhpcy5nZXROZXh0SWQodHlwZSkgfSkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgdXBkYXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci51cGRhdGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGRlbGV0ZVZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZGVsZXRlKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kb1N0YXRlJztcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvZGVjb3JhdG9yL3RvZG9EZWNvcmF0b3InO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBWaWV3TW9kZWxUb2RvIGV4dGVuZHMgVmlld01vZGVsIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudHM6IHN0cmluZztcbiAgY3JlYXRlRGF0ZTogRGF0ZTtcbiAgc3RhcnREYXRlPzogRGF0ZTtcbiAgZXN0aW1hdGVIb3VyOiBudW1iZXI7XG4gIHJlc3VsdEhvdXI6IG51bWJlcjtcbiAgd29ya1N0YXRlOiBUb2RvU3RhdGU7XG4gIGRpc3BsYXlPcmRlcjogbnVtYmVyO1xufVxuXG5AVG9kb0NvbXBvbmVudCgnVG9kbycsICcuanNfdG9kb2xpc3QnKVxuZXhwb3J0IGNsYXNzIFRvZG8gaW1wbGVtZW50cyBWaWV3TW9kZWxUb2RvIHtcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIF9jb250ZW50czogc3RyaW5nO1xuICBwcml2YXRlIF9jcmVhdGVEYXRlOiBEYXRlO1xuICBwcml2YXRlIF9zdGFydERhdGU/OiBEYXRlO1xuICBwcml2YXRlIF9lc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmVzdWx0SG91cjogbnVtYmVyO1xuICBwcml2YXRlIF93b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgcHJpdmF0ZSBfZGlzcGxheU9yZGVyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IodG9kbz86IFBhcnRpYWw8Vmlld01vZGVsVG9kbz4gJiBWaWV3TW9kZWwpIHtcbiAgICB0aGlzLl9pZCA9IHRvZG8/LmlkID8/IC0xO1xuICAgIHRoaXMuX21vZGVsVHlwZSA9ICdUb2RvJztcbiAgICB0aGlzLl90aXRsZSA9IHRvZG8/LnRpdGxlID8/ICcnO1xuICAgIHRoaXMuX2NvbnRlbnRzID0gdG9kbz8uY29udGVudHMgPz8gJyc7XG4gICAgdGhpcy5fY3JlYXRlRGF0ZSA9IHRvZG8/LmNyZWF0ZURhdGUgPz8gbmV3IERhdGUoKTtcbiAgICB0aGlzLl9zdGFydERhdGUgPSB0b2RvPy5zdGFydERhdGUgPz8gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2VzdGltYXRlSG91ciA9IHRvZG8/LmVzdGltYXRlSG91ciA/PyAwO1xuICAgIHRoaXMuX3Jlc3VsdEhvdXIgPSB0b2RvPy5yZXN1bHRIb3VyID8/IDA7XG4gICAgdGhpcy5fd29ya1N0YXRlID0gdG9kbz8ud29ya1N0YXRlID8/ICdXYWl0aW5nJztcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSB0b2RvPy5kaXNwbGF5T3JkZXIgPz8gMDtcbiAgfVxuICBnZXRNb2RlbFR5cGUoKTogJ1RvZG8nIHwgJ1NvcnRMYWJlbCcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbW9kZWxUeXBlKCk6IFZpZXdNb2RlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFR5cGU7XG4gIH1cbiAgc2V0IG1vZGVsVHlwZShtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSBtb2RlbFR5cGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRzO1xuICB9XG4gIHNldCBjb250ZW50cyhjb250ZW50czogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudHMgPSBjb250ZW50cztcbiAgfVxuXG4gIGdldCBjcmVhdGVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0RGF0ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnREYXRlO1xuICB9XG4gIGluaXRTdGFydERhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldCBlc3RpbWF0ZUhvdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVIb3VyO1xuICB9XG4gIHNldCBlc3RpbWF0ZUhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVIb3VyID0gaG91cjtcbiAgfVxuXG4gIGdldCByZXN1bHRIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEhvdXI7XG4gIH1cbiAgc2V0IHJlc3VsdEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVzdWx0SG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgd29ya1N0YXRlKCk6IFRvZG9TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtTdGF0ZTtcbiAgfVxuICBzZXQgd29ya1N0YXRlKHN0YXRlOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl93b3JrU3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5T3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU9yZGVyO1xuICB9XG4gIHNldCBkaXNwbGF5T3JkZXIob3JkZXI6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3BsYXlPcmRlciA9IG9yZGVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IFRvZG9TdGF0ZSwgVG9kb1N0YXRlcyB9IGZyb20gJy4vdG9kb1N0YXRlJztcbmltcG9ydCB7IFRvZG9saXN0IH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQm9hcmQge1xuICBwcml2YXRlIHRvZG9saXN0czogTWFwPFRvZG9TdGF0ZSwgVG9kb2xpc3Q+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb2xpc3RzID0gbmV3IE1hcCgpO1xuICAgIGZvciAobGV0IHN0YXRlTmFtZSBvZiBPYmplY3QudmFsdWVzKFRvZG9TdGF0ZXMpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0cy5zZXQoc3RhdGVOYW1lLCBuZXcgVG9kb2xpc3Qoc3RhdGVOYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCB0b2RvOiBWaWV3TW9kZWxUb2RvKSB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEuYWRkVG9kbyh0b2RvKTtcbiAgfVxuXG4gIGdldFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgaWQ6IG51bWJlcik6IFZpZXdNb2RlbFRvZG8ge1xuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpIS5nZXRUb2RvKGlkKTtcbiAgICBpZiAodG9kbykge1xuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpIS5kZWxldGVUb2RvKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvZG9saXN0cy5nZXQoc3RhdGUpIS51cGRhdGVUb2RvKHRvZG8pO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgVG9kb1N0YXRlcyA9IHtcbiAgV0FJVElORzogJ1dhaXRpbmcnLFxuICBJTl9QUk9HUkVTUzogJ0luIHByb2dyZXNzJyxcbiAgQ09NUExFVEVEOiAnQ29tcGxldGVkJyxcbiAgUEVORERJTkc6ICdQZW5kZGluZycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVG9kb1N0YXRlID0gdHlwZW9mIFRvZG9TdGF0ZXNba2V5b2YgdHlwZW9mIFRvZG9TdGF0ZXNdO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvbGlzdCB7XG4gIHByaXZhdGUgX3RvZG9saXN0OiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGVOYW1lOiBUb2RvU3RhdGUpIHtcbiAgICB0aGlzLl90b2RvbGlzdCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGdldCB0b2RvbGlzdCgpOiBNYXA8bnVtYmVyLCBWaWV3TW9kZWxUb2RvPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9saXN0O1xuICB9XG5cbiAgZ2V0IHN0YXRlTmFtZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZU5hbWU7XG4gIH1cblxuICBnZXRUb2RvKGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXQoaWQpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogdm9pZCB7XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgdG9kby5kaXNwbGF5T3JkZXIgKz0gMTtcbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxUb2RvT3JkZXIgPSB0aGlzLnRvZG9saXN0LmdldChpZCk/LmRpc3BsYXlPcmRlcjtcbiAgICBpZiAoZGVsVG9kb09yZGVyKSB7XG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHRoaXMuX3RvZG9saXN0LnZhbHVlcygpKSB7XG4gICAgICAgIGlmIChkZWxUb2RvT3JkZXIgPCB0b2RvLmRpc3BsYXlPcmRlcikge1xuICAgICAgICAgIHRvZG8uZGlzcGxheU9yZGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2RvbGlzdC5kZWxldGUoaWQpO1xuICB9XG5cbiAgdXBkYXRlVG9kbyh0b2RvOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudG9kb2xpc3QuZ2V0KHRvZG8uaWQpKSB7XG4gICAgICB0aGlzLnRvZG9saXN0LnNldCh0b2RvLmlkLCB0b2RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsTWFuYWdlciB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuLi8uLi92aWV3TW9kZWxCdWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlciBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsVG9kbz4ge1xuICBwcml2YXRlIGZpbmFsSWQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9kb0JvYXJkOiBUb2RvQm9hcmQpIHtcbiAgICB0aGlzLmZpbmFsSWQgPSAwO1xuICB9XG5cbiAgZ2V0TmV4dElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmluYWxJZCArIDE7XG4gIH1cblxuICBjcmVhdGUodm1Nb2RlbEJ1aWxkZXI6IFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsVG9kbz4pOiB2b2lkIHtcbiAgICBjb25zdCB0b2RvT2JqID0gdm1Nb2RlbEJ1aWxkZXIuYnVpbGQoKTtcbiAgICBpZiAodG9kb09iai5pZCA+IHRoaXMuZmluYWxJZCkge1xuICAgICAgdGhpcy5maW5hbElkID0gdG9kb09iai5pZDtcbiAgICB9XG4gICAgdGhpcy5fdG9kb0JvYXJkLmFkZFRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmopO1xuICB9XG5cbiAgZ2V0RGF0YSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kb0JvYXJkLmdldFRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmouaWQpO1xuICB9XG5cbiAgdXBkYXRlKHRvZG9PYmo6IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kb0JvYXJkLnVwZGF0ZVRvZG8odG9kb09iai53b3JrU3RhdGUsIHRvZG9PYmopO1xuICB9XG5cbiAgZGVsZXRlKHRvZG9PYmo6IFZpZXdNb2RlbCAmIHsgd29ya1N0YXRlOiBUb2RvU3RhdGUgfSk6IHZvaWQge1xuICAgIHRoaXMuX3RvZG9Cb2FyZC5kZWxldGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==