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
        htmlAccessor_1.HtmlAccessor.getHtmlElements('.js_todo').forEach(function (todo) {
            todo.addEventListener('contextmenu', todoContextMenuFunc);
        });
    };
    ViewHandler.prototype.resistCreateTaskEvent = function () {
        var createTaskArea = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskArea');
        var createTaskBtn = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskBtn', createTaskArea);
        createTaskBtn.addEventListener('click', this._viewDisplayer.displayInputTaskArea);
    };
    ViewHandler.prototype.resistTodoObserver = function () {
        var observer = new MutationObserver(function (records) {
            records.forEach(function (rec) {
                rec.addedNodes.forEach(function (elem) {
                    elem.addEventListener('contextmenu', todoContextMenuFunc);
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
function todoContextMenuFunc(event) {
    var ctMenu = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_todoContextMenu');
    ctMenu.style.left = String(event.pageX) + 'px';
    ctMenu.style.top = String(event.pageY) + 'px';
    ctMenu.style.display = 'block';
    var todo = event.currentTarget;
    var prevEmptyElem = todo.previousElementSibling;
    var menuDel = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_menuTodoDelete', ctMenu);
    menuDel.removeEventListener('click', deleteTodoFunc());
    menuDel.addEventListener('click', deleteTodoFunc(todo));
    function deleteTodoFunc(todo) {
        return function () {
            var e_1, _a;
            var _b;
            if (!todo) {
                return;
            }
            todo.remove();
            prevEmptyElem === null || prevEmptyElem === void 0 ? void 0 : prevEmptyElem.remove();
            var id = -1;
            var state = '';
            try {
                for (var _c = __values(Array.from(todo.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var elem = _d.value;
                    if (elem.classList.contains('js_todoId')) {
                        id = Number(elem.textContent);
                    }
                    if (elem.classList.contains('js_todoState')) {
                        state = (_b = elem.textContent) !== null && _b !== void 0 ? _b : '';
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
            var isTodoState = function (obj) {
                return Object.values(todoState_1.TodoStates).includes(obj);
            };
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdmlld1RvZG9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxPQUE2QztRQUNuRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBNkM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQztBQTdCWSwwQ0FBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9hcHAudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IFZpZXdIYW5kbGVyIH0gZnJvbSAnLi9tYWluL3ZpZXcvdmlld0hhbmRsZXInO1xuaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdEaXNwbGF5ZXInO1xuaW1wb3J0IHsgVmlld01vZGVsU2VydmljZUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld1RvZG9NYW5hZ2VyRmFjdG9yeUltcGwgfSBmcm9tICcuL21haW4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsTWFuYWdlckZhY3RvcnlJbXBsJztcbmltcG9ydCB7IEh0bWxBY2Nlc3NvciB9IGZyb20gJy4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5cblZpZXdNb2RlbFNlcnZpY2VJbXBsLmluaXQobmV3IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsKCkpO1xuXG5jb25zdCB2aWV3SGFuZGxlciA9IG5ldyBWaWV3SGFuZGxlcihuZXcgVmlld0Rpc3BsYXllcigpKTtcbnZpZXdIYW5kbGVyLnJlc2lzdENyZWF0ZVRhc2tFdmVudCgpO1xudmlld0hhbmRsZXIucmVzaXN0VG9kb0V2ZW50KCk7XG52aWV3SGFuZGxlci5yZXNpc3RUb2RvT2JzZXJ2ZXIoKTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfdG9kb0NvbnRleHRNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9Db21wb25lbnQobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlLCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBhcmdzLmZpbmQoaW1wbGVtZW50c1RvZG8pIGFzIFZpZXdNb2RlbFRvZG8gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b2RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZUNsYXNzTmFtZSA9IGNvbnZlcnRTdGF0ZUNsYXNzKHRvZG8ud29ya1N0YXRlID8/ICdXYWl0aW5nJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKG1vZGVsVHlwZSk7XG4gICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGUgfX0vZywgc3R5bGVDbGFzc05hbWUpXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgaWQgfX0vZywgdG9kby5pZCk7XG4gICAgICAgIGNvbnN0IG1vdW50ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGlmIChtb3VudGVkRWxlbWVudCkge1xuICAgICAgICAgIG1vdW50ZWRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlLmdldFRlbXBsYXRlSHRtbCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGltcGxlbWVudHNUb2RvKGFyZzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYXJnICE9PSBudWxsICYmXG4gICAgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgYXJnLmlkID09PSAnbnVtYmVyJyAmJlxuICAgIHR5cGVvZiBhcmcubW9kZWxUeXBlID09PSAnc3RyaW5nJ1xuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZTogVG9kb1N0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdpc18nICsgc3RhdGUudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUh0bWw6IHN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlID09PSAnVG9kbycpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdG9kb1RlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlSHRtbDtcbiAgfVxuXG4gIHJlcGxhY2VUZW1wbGF0ZSh0YXJnZXQ6IFJlZ0V4cCwgcmVwbGFjZTogc3RyaW5nIHwgbnVtYmVyKTogVGVtcGxhdGUge1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcocmVwbGFjZSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdGhpcy50ZW1wbGF0ZUh0bWwucmVwbGFjZSh0YXJnZXQsIHJlcGxhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcbiAgPGRpdiBjbGFzcz1cImVsX2VtcHR5SXRlbVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmxfdG9kbyBocF9tcmwxNSBocF9wcmwyXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsX2hpZGRlbiBqc190b2RvSWRcIj57eyBpZCB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF9oaWRkZW4ganNfdG9kb1N0YXRlXCI+V2FpdGluZzwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbF90b2RvX2hlYWQge3sgc3RhdGUgfX1cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19ib2R5XCI+XG4gICAgICA8aDMgY2xhc3M9XCJlbF90b2RvVGl0bGVcIj5cbiAgICAgICAgVGVzdDogU3VjY2VzcyBUYXNrIENyZWF0ZSBieSBUUyBQcm9ncmFtXG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fdGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj5jcmVhdGVkIHRpbWU6PC9wPlxuICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3h4c21hbGxcIj54eC94eC94eCB4eDp4eDwvdGltZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+c3RhcnRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19zdGF0dXNcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJibF90b2RvX3Byb2dyZXNzXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiMFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBvbmlucHV0PVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Mtb3V0cHV0JykudmFsdWU9dGhpcy52YWx1ZVwiIC8+XG4gICAgICAgICAgPG91dHB1dCBpZD1cImMtb3V0cHV0XCIgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj4wPC9vdXRwdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7opovnqY06PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCIgbmFtZT1cImVzdGltYXRlSG91clwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb19pbnB1dFRpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiPuWun+e4vjo8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIiBuYW1lPVwicmVzdWx0SG91clwiPlxuICAgICAgICAgICAgICAxMCBoXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiIsImV4cG9ydCBjbGFzcyBIdG1sQWNjZXNzb3Ige1xuICBzdGF0aWMgZ2V0SHRtbEVsZW1lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50TnVsbGFibGU8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcm9vdEVsZW0/OiBIVE1MRWxlbWVudFxuICApOiBUIHwgbnVsbCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGdldEh0bWxFbGVtZW50czxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByb290RWxlbT86IEhUTUxFbGVtZW50XG4gICk6IEFycmF5PFQ+IHtcbiAgICBsZXQgZWxlbTtcbiAgICBpZiAoIXJvb3RFbGVtKSB7XG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxUPihxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0gPSByb290RWxlbS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4uL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld0Rpc3BsYXllciB7XG4gIHB1YmxpYyBkaXNwbGF5SW5wdXRUYXNrQXJlYSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAgICAgJyNyYWRpb0NyZWF0ZVRhc2tEZXRhaWwnXG4gICAgICApPy5jaGVja2VkXG4gICAgKSB7XG4gICAgICAvLyBjb25zdCBjbGFzc0xpc3QgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19pbnB1dFRhc2tEZXRhaWxBcmVhJylcbiAgICAgIC8vICAgLmNsYXNzTGlzdDtcbiAgICAgIC8vIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2lzX2hpZGRlbicpKSB7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5yZW1vdmUoJ2lzX2hpZGRlbicpO1xuICAgICAgLy8gICBjbGFzc0xpc3QuYWRkKCdpc19hY3RpdmUnKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgdm1CdWlsZGVyID0gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcihcbiAgICAgICAgJ1RvZG8nXG4gICAgICApO1xuICAgICAgdm1CdWlsZGVyLndpdGgoeyB3b3JrU3RhdGU6ICdXYWl0aW5nJyB9KTtcbiAgICAgIGlmICh2bUJ1aWxkZXIpIHtcbiAgICAgICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdm1TZXJ2aWNlLmNyZWF0ZVZpZXdNb2RlbCgnVG9kbycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi4vdmlld21vZGVsL2ltcGwvdmlld01vZGVsU2VydmljZUltcGwnO1xuaW1wb3J0IHsgVmlld01vZGVsQnVpbGRlckZhY3RvcnkgfSBmcm9tICcuLi92aWV3TW9kZWxCdWlsZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBUb2RvU3RhdGUsIFRvZG9TdGF0ZXMgfSBmcm9tICcuLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld0hhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3RGlzcGxheWVyOiBWaWV3RGlzcGxheWVyKSB7fVxuXG4gIHB1YmxpYyByZXNpc3RUb2RvRXZlbnQoKTogdm9pZCB7XG4gICAgSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50cygnLmpzX3RvZG8nKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdG9kb0NvbnRleHRNZW51RnVuYyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXN0Q3JlYXRlVGFza0V2ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tBcmVhID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KCcuanNfY3JlYXRlVGFza0FyZWEnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gSHRtbEFjY2Vzc29yLmdldEh0bWxFbGVtZW50KFxuICAgICAgJy5qc19jcmVhdGVUYXNrQnRuJyxcbiAgICAgIGNyZWF0ZVRhc2tBcmVhXG4gICAgKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5fdmlld0Rpc3BsYXllci5kaXNwbGF5SW5wdXRUYXNrQXJlYVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVzaXN0VG9kb09ic2VydmVyKCkge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjKSA9PiB7XG4gICAgICAgIHJlYy5hZGRlZE5vZGVzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY29udGV4dG1lbnUnLFxuICAgICAgICAgICAgdG9kb0NvbnRleHRNZW51RnVuYyBhcyBFdmVudExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9saXN0JyksIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2RvQ29udGV4dE1lbnVGdW5jKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIGNvbnN0IGN0TWVudSA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX3RvZG9Db250ZXh0TWVudScpO1xuICBjdE1lbnUuc3R5bGUubGVmdCA9IFN0cmluZyhldmVudC5wYWdlWCkgKyAncHgnO1xuICBjdE1lbnUuc3R5bGUudG9wID0gU3RyaW5nKGV2ZW50LnBhZ2VZKSArICdweCc7XG4gIGN0TWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc3QgdG9kbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudDtcbiAgY29uc3QgcHJldkVtcHR5RWxlbSA9IHRvZG8ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgY29uc3QgbWVudURlbCA9IEh0bWxBY2Nlc3Nvci5nZXRIdG1sRWxlbWVudCgnLmpzX21lbnVUb2RvRGVsZXRlJywgY3RNZW51KTtcbiAgbWVudURlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG9GdW5jKCkpO1xuICBtZW51RGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kb0Z1bmModG9kbykpO1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG9GdW5jKHRvZG8/OiBFbGVtZW50KTogYW55IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCF0b2RvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRvZG8ucmVtb3ZlKCk7XG4gICAgICBwcmV2RW1wdHlFbGVtPy5yZW1vdmUoKTtcblxuICAgICAgbGV0IGlkID0gLTE7XG4gICAgICBsZXQgc3RhdGUgPSAnJztcbiAgICAgIGZvciAobGV0IGVsZW0gb2YgQXJyYXkuZnJvbSh0b2RvLmNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzX3RvZG9JZCcpKSB7XG4gICAgICAgICAgaWQgPSBOdW1iZXIoZWxlbS50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqc190b2RvU3RhdGUnKSkge1xuICAgICAgICAgIHN0YXRlID0gZWxlbS50ZXh0Q29udGVudCA/PyAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1RvZG9TdGF0ZSA9IChvYmo6IGFueSk6IG9iaiBpcyBUb2RvU3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKS5pbmNsdWRlcyhvYmopO1xuICAgICAgfTtcbiAgICAgIGlmIChpZCA8IDAgfHwgIWlzVG9kb1N0YXRlKHN0YXRlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2bUJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKS5jcmVhdGVWaWV3TW9kZWxCdWlsZGVyKCk7XG4gICAgICBjb25zdCB2bVNlcnZpY2UgPSBWaWV3TW9kZWxTZXJ2aWNlSW1wbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgY29uc3Qgdm0gPSB2bUJ1aWxkZXJcbiAgICAgICAgLndpdGgoeyBpZDogaWQgfSlcbiAgICAgICAgLndpdGgoeyBtb2RlbFR5cGU6ICdUb2RvJyB9KVxuICAgICAgICAud2l0aCh7IHdvcmtTdGF0ZTogc3RhdGUgfSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgICB2bVNlcnZpY2UuZGVsZXRlVmlld01vZGVsKHZtKTtcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvLCBUb2RvIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuL3ZpZXdNb2RlbEJ1aWxkZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICBzdGF0aWMgbmV3SW5zdGFuY2UoKTogVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIodHlwZT86IFZpZXdNb2RlbFR5cGUpOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IodHlwZSk7XG4gIH1cbn1cblxudHlwZSBBbGxWaWV3TW9kZWwgPSBWaWV3TW9kZWwgJiBWaWV3TW9kZWxUb2RvO1xudHlwZSBBbGxWaWV3TW9kZWxLZXkgPSBrZXlvZiBBbGxWaWV3TW9kZWw7XG5cbmNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJEZWxlZ2F0b3IgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcml2YXRlIGJ1aWxkZXI6IFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsPjtcblxuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgaWYgKG1vZGVsVHlwZSkge1xuICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKCkud2l0aCh7IG1vZGVsVHlwZTogbW9kZWxUeXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQmFzZUJ1aWxkZXIoKS53aXRoKHtcbiAgICAgICAgbW9kZWxUeXBlOiAnVmlld01vZGVsJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdpdGgoXG4gICAgaW5wdXQ6IHsgW2tleSBpbiBBbGxWaWV3TW9kZWxLZXldPzogQWxsVmlld01vZGVsW2tleV0gfVxuICApOiBWaWV3TW9kZWxCdWlsZGVyRGVsZWdhdG9yIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIud2l0aChpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBWaWV3TW9kZWwge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoKTtcbiAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8VCBleHRlbmRzIFZpZXdNb2RlbD5cbiAgaW1wbGVtZW50cyBWaWV3TW9kZWxCdWlsZGVyPFQ+LCBQYXJ0aWFsPFZpZXdNb2RlbD4ge1xuICBpZD86IG51bWJlcjtcbiAgbW9kZWxUeXBlPzogVmlld01vZGVsVHlwZTtcblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVF0/OiBUW2tleV0gfSk6IHRoaXMge1xuICAgIGZvciAobGV0IGtleSBpbiBpbnB1dCkge1xuICAgICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICAgIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQubW9kZWxUeXBlKSB7XG4gICAgICAgIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IFtrZXldOiBpbnB1dFtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoSWQoaWQ6IG51bWJlcik6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdpZCc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGlkOiBpZCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoTW9kZWxUeXBlKFxuICAgIHR5cGU6IFZpZXdNb2RlbFR5cGVcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ21vZGVsVHlwZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IG1vZGVsVHlwZTogdHlwZSB9KTtcbiAgfVxuXG4gIGJ1aWxkKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSW5zdGFuY2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZW5lcmF0ZUluc3RhbmNlKCk6IFQ7XG59XG5cbmNsYXNzIFZpZXdNb2RlbEJhc2VCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBwcm90ZWN0ZWQgZ2VuZXJhdGVJbnN0YW5jZSgpOiBWaWV3TW9kZWwge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZCA/PyAtMTtcbiAgICBjb25zdCB0eXBlOiBWaWV3TW9kZWxUeXBlID0gdGhpcy5tb2RlbFR5cGUgPz8gJ1ZpZXdNb2RlbCc7XG4gICAgY29uc3Qgb2JqOiBWaWV3TW9kZWwgPSB7IGlkOiBpZCwgbW9kZWxUeXBlOiB0eXBlIH07XG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAocHJvcCAhPT0gJ2lkJyB8fCBwcm9wICE9PSAnbW9kZWxUeXBlJykge1xuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgeyBbcHJvcF06IHRoaXNbcHJvcF0gfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuY2xhc3MgVG9kb0J1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXdNb2RlbEJ1aWxkZXI8Vmlld01vZGVsVG9kbz5cbiAgaW1wbGVtZW50cyBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBrZXlvZiBWaWV3TW9kZWxUb2RvXT86IFZpZXdNb2RlbFRvZG9ba2V5XSB9KTogdGhpcyB7XG4gICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoSWQoaW5wdXQuaWQpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQubW9kZWxUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTW9kZWxUeXBlKGlucHV0Lm1vZGVsVHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFRpdGxlKGlucHV0LnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNvbnRlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoQ29udGVudHMoaW5wdXQuY29udGVudHMpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuY3JlYXRlRGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENyZWF0ZURhdGUoaW5wdXQuY3JlYXRlRGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5zdGFydERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhTdGFydERhdGUoaW5wdXQuc3RhcnREYXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmVzdGltYXRlSG91cikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aEVzdGltYXRlSG91cihpbnB1dC5lc3RpbWF0ZUhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQucmVzdWx0SG91cikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aFJlc3VsdEhvdXIoaW5wdXQucmVzdWx0SG91cik7XG4gICAgfVxuICAgIGlmIChpbnB1dC53b3JrU3RhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhXb3JrU3RhdGUoaW5wdXQud29ya1N0YXRlKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmRpc3BsYXlPcmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aERpc3BsYXlPcmRlcihpbnB1dC5kaXNwbGF5T3JkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgd2l0aFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAndGl0bGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyB0aXRsZTogdGl0bGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoQ29udGVudHMoXG4gICAgY29udGVudHM6IHN0cmluZ1xuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnY29udGVudHMnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBjb250ZW50czogY29udGVudHMgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoQ3JlYXRlRGF0ZShkYXRlOiBEYXRlKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NyZWF0ZURhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBjcmVhdGVEYXRlOiBkYXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFN0YXJ0RGF0ZShkYXRlOiBEYXRlKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3N0YXJ0RGF0ZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IHN0YXJ0RGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhFc3RpbWF0ZUhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdlc3RpbWF0ZUhvdXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBlc3RpbWF0ZUhvdXI6IGhvdXIgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoUmVzdWx0SG91cihcbiAgICBob3VyOiBudW1iZXJcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3Jlc3VsdEhvdXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyByZXN1bHRIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFdvcmtTdGF0ZShcbiAgICBzdGF0ZTogVG9kb1N0YXRlXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICd3b3JrU3RhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyB3b3JrU3RhdGU6IHN0YXRlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aERpc3BsYXlPcmRlcihcbiAgICBvcmRlcjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdkaXNwbGF5T3JkZXInPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBkaXNwbGF5T3JkZXI6IG9yZGVyIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVJbnN0YW5jZSh0aGlzOiBWaWV3TW9kZWwpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICByZXR1cm4gbmV3IFRvZG8odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlciB9IGZyb20gJy4uL3RvZG8vdmlld1RvZG9NYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVG9kb0JvYXJkIH0gZnJvbSAnLi4vdG9kby90b2RvQm9hcmQnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVmlld01vZGVsTWFuYWdlckZhY3Rvcnkge1xuICBjcmVhdGVWaWV3TW9kZWxNYW5hZ2VycygpOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PiB7XG4gICAgY29uc3Qgdm1NYW5hZ2VycyA9IG5ldyBNYXAoKTtcbiAgICB2bU1hbmFnZXJzLnNldCgnVG9kbycsIG5ldyBWaWV3VG9kb01hbmFnZXIobmV3IFRvZG9Cb2FyZCgpKSk7XG4gICAgcmV0dXJuIHZtTWFuYWdlcnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi92aWV3TW9kZWxTZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlckZhY3RvcnknO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsU2VydmljZUltcGwgaW1wbGVtZW50cyBWaWV3TW9kZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFZpZXdNb2RlbFNlcnZpY2U7XG4gIHZpZXdNb2RlbE1hbmFnZXJzOiBNYXA8Vmlld01vZGVsVHlwZSwgVmlld01vZGVsTWFuYWdlcjxWaWV3TW9kZWw+PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj5cbiAgKSB7XG4gICAgdGhpcy52aWV3TW9kZWxNYW5hZ2VycyA9IF92aWV3TW9kZWxNYW5hZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KHZtTWFuYWdlcmZhY3Rvcnk6IFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3TW9kZWxTZXJ2aWNlSW1wbChcbiAgICAgIHZtTWFuYWdlcmZhY3RvcnkuY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCh0eXBlOiBWaWV3TW9kZWxUeXBlKTogbnVtYmVyIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmdldE5leHRJZCgpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZ2V0Vmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlciAmJiB2bU1hbmFnZXIuZ2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXREYXRhKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBjcmVhdGVWaWV3TW9kZWwodHlwZTogVmlld01vZGVsVHlwZSkge1xuICAgIGNvbnN0IHZtQnVpbGRlciA9IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5Lm5ld0luc3RhbmNlKCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcihcbiAgICAgIHR5cGVcbiAgICApO1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuY3JlYXRlKHZtQnVpbGRlci53aXRoKHsgaWQ6IHRoaXMuZ2V0TmV4dElkKHR5cGUpIH0pKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIudXBkYXRlKHZpZXdNb2RlbCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICBkZWxldGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmRlbGV0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUb2RvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L2RlY29yYXRvci90b2RvRGVjb3JhdG9yJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxUeXBlIH0gZnJvbSAnLi4vdmlld01vZGVsVHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld01vZGVsVG9kbyBleHRlbmRzIFZpZXdNb2RlbCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IERhdGU7XG4gIHN0YXJ0RGF0ZT86IERhdGU7XG4gIGVzdGltYXRlSG91cjogbnVtYmVyO1xuICByZXN1bHRIb3VyOiBudW1iZXI7XG4gIHdvcmtTdGF0ZTogVG9kb1N0YXRlO1xuICBkaXNwbGF5T3JkZXI6IG51bWJlcjtcbn1cblxuQFRvZG9Db21wb25lbnQoJ1RvZG8nLCAnLmpzX3RvZG9saXN0JylcbmV4cG9ydCBjbGFzcyBUb2RvIGltcGxlbWVudHMgVmlld01vZGVsVG9kbyB7XG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XG4gIHByaXZhdGUgX21vZGVsVHlwZTogVmlld01vZGVsVHlwZTtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGVudHM6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfc3RhcnREYXRlPzogRGF0ZTtcbiAgcHJpdmF0ZSBfZXN0aW1hdGVIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdEhvdXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29ya1N0YXRlOiBUb2RvU3RhdGU7XG4gIHByaXZhdGUgX2Rpc3BsYXlPcmRlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvZG8/OiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+ICYgVmlld01vZGVsKSB7XG4gICAgdGhpcy5faWQgPSB0b2RvPy5pZCA/PyAtMTtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSAnVG9kbyc7XG4gICAgdGhpcy5fdGl0bGUgPSB0b2RvPy50aXRsZSA/PyAnJztcbiAgICB0aGlzLl9jb250ZW50cyA9IHRvZG8/LmNvbnRlbnRzID8/ICcnO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvPy5jcmVhdGVEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kbz8uc3RhcnREYXRlID8/IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSB0b2RvPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gdG9kbz8ucmVzdWx0SG91ciA/PyAwO1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHRvZG8/LndvcmtTdGF0ZSA/PyAnV2FpdGluZyc7XG4gICAgdGhpcy5fZGlzcGxheU9yZGVyID0gdG9kbz8uZGlzcGxheU9yZGVyID8/IDA7XG4gIH1cbiAgZ2V0TW9kZWxUeXBlKCk6ICdUb2RvJyB8ICdTb3J0TGFiZWwnIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBnZXQgaWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICB9XG5cbiAgZ2V0IG1vZGVsVHlwZSgpOiBWaWV3TW9kZWxUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxUeXBlO1xuICB9XG4gIHNldCBtb2RlbFR5cGUobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgdGhpcy5fbW9kZWxUeXBlID0gbW9kZWxUeXBlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCBjb250ZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50cztcbiAgfVxuICBzZXQgY29udGVudHMoY29udGVudHM6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRzID0gY29udGVudHM7XG4gIH1cblxuICBnZXQgY3JlYXRlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZTtcbiAgfVxuXG4gIGdldCBzdGFydERhdGUoKTogRGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0RGF0ZTtcbiAgfVxuICBpbml0U3RhcnREYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXQgZXN0aW1hdGVIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VzdGltYXRlSG91cjtcbiAgfVxuICBzZXQgZXN0aW1hdGVIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIHRoaXMuX2VzdGltYXRlSG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgcmVzdWx0SG91cigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRIb3VyO1xuICB9XG4gIHNldCByZXN1bHRIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIHRoaXMuX3Jlc3VsdEhvdXIgPSBob3VyO1xuICB9XG5cbiAgZ2V0IHdvcmtTdGF0ZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl93b3JrU3RhdGU7XG4gIH1cbiAgc2V0IHdvcmtTdGF0ZShzdGF0ZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fd29ya1N0YXRlID0gc3RhdGU7XG4gIH1cblxuICBnZXQgZGlzcGxheU9yZGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlPcmRlcjtcbiAgfVxuICBzZXQgZGlzcGxheU9yZGVyKG9yZGVyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSBvcmRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUsIFRvZG9TdGF0ZXMgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUb2RvbGlzdCB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0JvYXJkIHtcbiAgcHJpdmF0ZSB0b2RvbGlzdHM6IE1hcDxUb2RvU3RhdGUsIFRvZG9saXN0PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9saXN0cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBzdGF0ZU5hbWUgb2YgT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKSkge1xuICAgICAgdGhpcy50b2RvbGlzdHMuc2V0KHN0YXRlTmFtZSwgbmV3IFRvZG9saXN0KHN0YXRlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbykge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmFkZFRvZG8odG9kbyk7XG4gIH1cblxuICBnZXRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEuZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRvZG8pIHtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKSB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEuZGVsZXRlVG9kbyhpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEudXBkYXRlVG9kbyh0b2RvKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFRvZG9TdGF0ZXMgPSB7XG4gIFdBSVRJTkc6ICdXYWl0aW5nJyxcbiAgSU5fUFJPR1JFU1M6ICdJbiBwcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGRpbmcnLFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIFRvZG9TdGF0ZSA9IHR5cGVvZiBUb2RvU3RhdGVzW2tleW9mIHR5cGVvZiBUb2RvU3RhdGVzXTtcbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb2xpc3Qge1xuICBwcml2YXRlIF90b2RvbGlzdDogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlTmFtZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fdG9kb2xpc3QgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgdG9kb2xpc3QoKTogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvbGlzdDtcbiAgfVxuXG4gIGdldCBzdGF0ZU5hbWUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVOYW1lO1xuICB9XG5cbiAgZ2V0VG9kbyhpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3QuZ2V0KGlkKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIGZvciAobGV0IHRvZG8gb2YgdGhpcy5fdG9kb2xpc3QudmFsdWVzKCkpIHtcbiAgICAgIHRvZG8uZGlzcGxheU9yZGVyICs9IDE7XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3Quc2V0KHRvZG8uaWQsIHRvZG8pO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGVsVG9kb09yZGVyID0gdGhpcy50b2RvbGlzdC5nZXQoaWQpPy5kaXNwbGF5T3JkZXI7XG4gICAgaWYgKGRlbFRvZG9PcmRlcikge1xuICAgICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoZGVsVG9kb09yZGVyIDwgdG9kby5kaXNwbGF5T3JkZXIpIHtcbiAgICAgICAgICB0b2RvLmRpc3BsYXlPcmRlciAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3QuZGVsZXRlKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRvZG9saXN0LmdldCh0b2RvLmlkKSkge1xuICAgICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4vdG9kb0JvYXJkJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBWaWV3VG9kb01hbmFnZXIgaW1wbGVtZW50cyBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbFRvZG8+IHtcbiAgcHJpdmF0ZSBmaW5hbElkOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvZG9Cb2FyZDogVG9kb0JvYXJkKSB7XG4gICAgdGhpcy5maW5hbElkID0gMDtcbiAgfVxuXG4gIGdldE5leHRJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbmFsSWQgKyAxO1xuICB9XG5cbiAgY3JlYXRlKHZtTW9kZWxCdWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+KTogdm9pZCB7XG4gICAgY29uc3QgdG9kb09iaiA9IHZtTW9kZWxCdWlsZGVyLmJ1aWxkKCk7XG4gICAgaWYgKHRvZG9PYmouaWQgPiB0aGlzLmZpbmFsSWQpIHtcbiAgICAgIHRoaXMuZmluYWxJZCA9IHRvZG9PYmouaWQ7XG4gICAgfVxuICAgIHRoaXMuX3RvZG9Cb2FyZC5hZGRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGdldERhdGEodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC5nZXRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2RvT2JqOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC51cGRhdGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvQm9hcmQuZGVsZXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=