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
viewModelServiceImpl_1.ViewModelServiceImpl.init(new viewModelManagerFactoryImpl_1.ViewTodoManagerFactoryImpl());
var viewHandler = new viewHandler_1.ViewHandler(new viewDisplayer_1.ViewDisplayer());
viewHandler.resistCreateTaskEvent();


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
function TodoComponent(template, selector) {
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
var todoTemplate = "\n  <div class=\"el_emptyItem\"></div>\n  <div class=\"bl_todo hp_mrl15 hp_prl2\">\n    <div class=\"el_id\">{{ id }}</div>\n    <div class=\"el_todo_head {{ state }}\"></div>\n    <div class=\"bl_todo_body\">\n      <h3 class=\"el_todoTitle\">\n        Test: Success Task Create by TS Program\n      </h3>\n      <div class=\"bl_todo_times\">\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">created time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n        <div class=\"bl_todo_time\">\n          <p class=\"el_label el_label__xxsmall\">started time:</p>\n          <time class=\"el_label el_label__xxsmall\">xx/xx/xx xx:xx</time>\n        </div>\n      </div>\n      <div class=\"bl_todo_status\">\n        <form class=\"bl_todo_progress\">\n          <input type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"10\" oninput=\"document.getElementById('c-output').value=this.value\" />\n          <output id=\"c-output\" class=\"el_label el_label__small\">0</output>\n        </form>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u898B\u7A4D:</p>\n          <p class=\"el_label el_label__small\" name=\"estimateHour\">\n              10 h\n            </p>\n        </div>\n        <div class=\"bl_todo_inputTime\">\n          <p class=\"el_label el_label__small\">\u5B9F\u7E3E:</p>\n          <p class=\"el_label el_label__small\" name=\"resultHour\">\n              10 h\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n";


/***/ }),

/***/ "./src/ts/htmlUtils/htmlAccessor.ts":
/*!******************************************!*\
  !*** ./src/ts/htmlUtils/htmlAccessor.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
var htmlAccessor_1 = __webpack_require__(/*! ../../htmlUtils/htmlAccessor */ "./src/ts/htmlUtils/htmlAccessor.ts");
var ViewHandler = (function () {
    function ViewHandler(_viewDisplayer) {
        this._viewDisplayer = _viewDisplayer;
    }
    ViewHandler.prototype.resistTodoEvent = function () {
        Array.from(document.querySelectorAll('js_todo')).forEach(function (todo) {
            todo.addEventListener('onclick', function () {
                console.log('todo click');
            });
        });
    };
    ViewHandler.prototype.resistCreateTaskEvent = function () {
        var createTaskArea = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskArea');
        var createTaskBtn = htmlAccessor_1.HtmlAccessor.getHtmlElement('.js_createTaskBtn', createTaskArea);
        createTaskBtn.addEventListener('click', this._viewDisplayer.displayInputTaskArea);
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
var todo_1 = __webpack_require__(/*! ./viewmodel/todo/todo */ "./src/ts/main/viewmodel/todo/todo.ts");
var ViewModelBuilderFactory = (function () {
    function ViewModelBuilderFactory() {
    }
    ViewModelBuilderFactory.newInstance = function () {
        return new ViewModelBuilderFactory();
    };
    ViewModelBuilderFactory.prototype.createViewModelBuilder = function (type) {
        return new ViewModelBuilderAdapter(type);
    };
    return ViewModelBuilderFactory;
}());
exports.ViewModelBuilderFactory = ViewModelBuilderFactory;
var ViewModelBuilderAdapter = (function () {
    function ViewModelBuilderAdapter(modelType) {
        this.modelType = modelType;
        if (this.modelType) {
            this.builder = new TodoBuilder().with({ modelType: this.modelType });
        }
        else {
            this.builder = new ViewModelBaseBuilder().with({
                modelType: 'ViewModel',
            });
        }
    }
    ViewModelBuilderAdapter.prototype.with = function (input) {
        return this.builder.with(input);
    };
    return ViewModelBuilderAdapter;
}());
var AbstractViewModelBuilder = (function () {
    function AbstractViewModelBuilder() {
    }
    AbstractViewModelBuilder.prototype.with = function (input) {
        if (input.id) {
            this.withId(input.id);
        }
        if (input.modelType) {
            this.withModelType(input.modelType);
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
    ViewModelBaseBuilder.prototype.getModelType = function () {
        return 'ViewModel';
    };
    ViewModelBaseBuilder.prototype.generateInstance = function () {
        var _a;
        var id = (_a = this.id) !== null && _a !== void 0 ? _a : -1;
        var type = 'ViewModel';
        return { id: id, modelType: type };
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
    TodoBuilder.prototype.getModelType = function () {
        return 'Todo';
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
var todoDecorator_1 = __webpack_require__(/*! ../../../component/decorator/todoDecorator */ "./src/ts/component/decorator/todoDecorator.ts");
var template_1 = __webpack_require__(/*! ../../../component/template */ "./src/ts/component/template.ts");
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "modelType", {
        get: function () {
            return this._modelType;
        },
        set: function (modelType) {
            this._modelType = modelType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "contents", {
        get: function () {
            return this._contents;
        },
        set: function (contents) {
            this._contents = contents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "createDate", {
        get: function () {
            return this._createDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "resultHour", {
        get: function () {
            return this._resultHour;
        },
        set: function (hour) {
            this._resultHour = hour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "workState", {
        get: function () {
            return this._workState;
        },
        set: function (state) {
            this._workState = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "displayOrder", {
        get: function () {
            return this._displayOrder;
        },
        set: function (order) {
            this._displayOrder = order;
        },
        enumerable: true,
        configurable: true
    });
    Todo = __decorate([
        todoDecorator_1.TodoComponent(new template_1.Template('Todo'), '.js_todolist')
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
var Todolist = (function () {
    function Todolist(_stateName) {
        this._stateName = _stateName;
        this._todolist = new Map();
    }
    Object.defineProperty(Todolist.prototype, "todolist", {
        get: function () {
            return this._todolist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todolist.prototype, "stateName", {
        get: function () {
            return this._stateName;
        },
        enumerable: true,
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
        var delTodoOrder = this.todolist.get(id).displayOrder;
        try {
            for (var _b = __values(this._todolist.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                if (delTodoOrder < todo.displayOrder) {
                    todo.displayOrder -= 1;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50L3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9odG1sVXRpbHMvaHRtbEFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXcvdmlld0Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3L3ZpZXdIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvaW1wbC92aWV3TW9kZWxTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdG9kb2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4vdmlld21vZGVsL3RvZG8vdmlld1RvZG9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QzNCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLE9BQTZDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUE3QlksMENBQWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvYXBwLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBWaWV3SGFuZGxlciB9IGZyb20gJy4vbWFpbi92aWV3L3ZpZXdIYW5kbGVyJztcbmltcG9ydCB7IFZpZXdEaXNwbGF5ZXIgfSBmcm9tICcuL21haW4vdmlldy92aWV3RGlzcGxheWVyJztcbmltcG9ydCB7IFZpZXdNb2RlbFNlcnZpY2VJbXBsIH0gZnJvbSAnLi9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsIH0gZnJvbSAnLi9tYWluL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5SW1wbCc7XG5cblZpZXdNb2RlbFNlcnZpY2VJbXBsLmluaXQobmV3IFZpZXdUb2RvTWFuYWdlckZhY3RvcnlJbXBsKCkpO1xuXG5jb25zdCB2aWV3SGFuZGxlciA9IG5ldyBWaWV3SGFuZGxlcihuZXcgVmlld0Rpc3BsYXllcigpKTtcbnZpZXdIYW5kbGVyLnJlc2lzdENyZWF0ZVRhc2tFdmVudCgpO1xuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4uLy4uL21haW4vdmlld21vZGVsL3RvZG8vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tYWluL3ZpZXdtb2RlbC90b2RvL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9Db21wb25lbnQodGVtcGxhdGU6IFRlbXBsYXRlLCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBhcmdzLmZpbmQoaW1wbGVtZW50c1RvZG8pIGFzIFZpZXdNb2RlbFRvZG8gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b2RvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZUNsYXNzTmFtZSA9IGNvbnZlcnRTdGF0ZUNsYXNzKHRvZG8ud29ya1N0YXRlID8/ICdXYWl0aW5nJyk7XG4gICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgc3RhdGUgfX0vZywgc3R5bGVDbGFzc05hbWUpXG4gICAgICAgICAgLnJlcGxhY2VUZW1wbGF0ZSgve3sgaWQgfX0vZywgdG9kby5pZCk7XG4gICAgICAgIGNvbnN0IG1vdW50ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGlmIChtb3VudGVkRWxlbWVudCkge1xuICAgICAgICAgIG1vdW50ZWRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlLmdldFRlbXBsYXRlSHRtbCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGltcGxlbWVudHNUb2RvKGFyZzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYXJnICE9PSBudWxsICYmXG4gICAgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgYXJnLmlkID09PSAnbnVtYmVyJyAmJlxuICAgIHR5cGVvZiBhcmcubW9kZWxUeXBlID09PSAnc3RyaW5nJ1xuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RhdGVDbGFzcyhzdGF0ZTogVG9kb1N0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdpc18nICsgc3RhdGUudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi9tYWluL3ZpZXdtb2RlbC92aWV3TW9kZWxUeXBlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUh0bWw6IHN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3Rvcihtb2RlbFR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAobW9kZWxUeXBlID09PSAnVG9kbycpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdG9kb1RlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlSHRtbDtcbiAgfVxuXG4gIHJlcGxhY2VUZW1wbGF0ZSh0YXJnZXQ6IFJlZ0V4cCwgcmVwbGFjZTogc3RyaW5nIHwgbnVtYmVyKTogVGVtcGxhdGUge1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcocmVwbGFjZSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVIdG1sID0gdGhpcy50ZW1wbGF0ZUh0bWwucmVwbGFjZSh0YXJnZXQsIHJlcGxhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcbiAgPGRpdiBjbGFzcz1cImVsX2VtcHR5SXRlbVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmxfdG9kbyBocF9tcmwxNSBocF9wcmwyXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsX2lkXCI+e3sgaWQgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxfdG9kb19oZWFkIHt7IHN0YXRlIH19XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fYm9keVwiPlxuICAgICAgPGgzIGNsYXNzPVwiZWxfdG9kb1RpdGxlXCI+XG4gICAgICAgIFRlc3Q6IFN1Y2Nlc3MgVGFzayBDcmVhdGUgYnkgVFMgUHJvZ3JhbVxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX3RpbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+Y3JlYXRlZCB0aW1lOjwvcD5cbiAgICAgICAgICA8dGltZSBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX194eHNtYWxsXCI+eHgveHgveHggeHg6eHg8L3RpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxfdG9kb190aW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnN0YXJ0ZWQgdGltZTo8L3A+XG4gICAgICAgICAgPHRpbWUgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9feHhzbWFsbFwiPnh4L3h4L3h4IHh4Onh4PC90aW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9fc3RhdHVzXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiYmxfdG9kb19wcm9ncmVzc1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIjBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjEwXCIgb25pbnB1dD1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLW91dHB1dCcpLnZhbHVlPXRoaXMudmFsdWVcIiAvPlxuICAgICAgICAgIDxvdXRwdXQgaWQ9XCJjLW91dHB1dFwiIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+MDwvb3V0cHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibF90b2RvX2lucHV0VGltZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCI+6KaL56mNOjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImVsX2xhYmVsIGVsX2xhYmVsX19zbWFsbFwiIG5hbWU9XCJlc3RpbWF0ZUhvdXJcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsX3RvZG9faW5wdXRUaW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJlbF9sYWJlbCBlbF9sYWJlbF9fc21hbGxcIj7lrp/nuL46PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZWxfbGFiZWwgZWxfbGFiZWxfX3NtYWxsXCIgbmFtZT1cInJlc3VsdEhvdXJcIj5cbiAgICAgICAgICAgICAgMTAgaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iLCJleHBvcnQgY2xhc3MgSHRtbEFjY2Vzc29yIHtcbiAgc3RhdGljIGdldEh0bWxFbGVtZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB7XG4gICAgbGV0IGVsZW07XG4gICAgaWYgKCFyb290RWxlbSkge1xuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gcm9vdEVsZW0ucXVlcnlTZWxlY3RvcjxUPihxdWVyeSk7XG4gICAgfVxuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdG1sRWxlbWVudE51bGxhYmxlPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJvb3RFbGVtPzogSFRNTEVsZW1lbnRcbiAgKTogVCB8IG51bGwge1xuICAgIGxldCBlbGVtO1xuICAgIGlmICghcm9vdEVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPFQ+KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbSA9IHJvb3RFbGVtLnF1ZXJ5U2VsZWN0b3I8VD4ocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHRtbEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vaHRtbFV0aWxzL2h0bWxBY2Nlc3Nvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlSW1wbCB9IGZyb20gJy4uL3ZpZXdtb2RlbC9pbXBsL3ZpZXdNb2RlbFNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdmlld01vZGVsQnVpbGRlckZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgVmlld0Rpc3BsYXllciB7XG4gIHB1YmxpYyBkaXNwbGF5SW5wdXRUYXNrQXJlYSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnROdWxsYWJsZTxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAgICAgJyNyYWRpb0NyZWF0ZVRhc2tEZXRhaWwnXG4gICAgICApPy5jaGVja2VkXG4gICAgKSB7XG4gICAgICAvLyBjb25zdCBjbGFzc0xpc3QgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19pbnB1dFRhc2tEZXRhaWxBcmVhJylcbiAgICAgIC8vICAgLmNsYXNzTGlzdDtcbiAgICAgIC8vIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2lzX2hpZGRlbicpKSB7XG4gICAgICAvLyAgIGNsYXNzTGlzdC5yZW1vdmUoJ2lzX2hpZGRlbicpO1xuICAgICAgLy8gICBjbGFzc0xpc3QuYWRkKCdpc19hY3RpdmUnKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgdm1CdWlsZGVyID0gbmV3IFZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5KCkuY3JlYXRlVmlld01vZGVsQnVpbGRlcihcbiAgICAgICAgJ1RvZG8nXG4gICAgICApO1xuICAgICAgdm1CdWlsZGVyLndpdGgoeyB3b3JrU3RhdGU6ICdXYWl0aW5nJyB9KTtcbiAgICAgIGlmICh2bUJ1aWxkZXIpIHtcbiAgICAgICAgY29uc3Qgdm1TZXJ2aWNlID0gVmlld01vZGVsU2VydmljZUltcGwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdm1TZXJ2aWNlLmNyZWF0ZVZpZXdNb2RlbCgnVG9kbycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld0Rpc3BsYXllciB9IGZyb20gJy4vdmlld0Rpc3BsYXllcic7XG5pbXBvcnQgeyBIdG1sQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9odG1sVXRpbHMvaHRtbEFjY2Vzc29yJztcblxuZXhwb3J0IGNsYXNzIFZpZXdIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0Rpc3BsYXllcjogVmlld0Rpc3BsYXllcikge31cblxuICBwdWJsaWMgcmVzaXN0VG9kb0V2ZW50KCk6IHZvaWQge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnanNfdG9kbycpKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvIGNsaWNrJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpc3RDcmVhdGVUYXNrRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY3JlYXRlVGFza0FyZWEgPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoJy5qc19jcmVhdGVUYXNrQXJlYScpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBIdG1sQWNjZXNzb3IuZ2V0SHRtbEVsZW1lbnQoXG4gICAgICAnLmpzX2NyZWF0ZVRhc2tCdG4nLFxuICAgICAgY3JlYXRlVGFza0FyZWFcbiAgICApO1xuXG4gICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuX3ZpZXdEaXNwbGF5ZXIuZGlzcGxheUlucHV0VGFza0FyZWFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvLCBUb2RvIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvJztcbmltcG9ydCB7IFZpZXdNb2RlbEJ1aWxkZXIgfSBmcm9tICcuL3ZpZXdNb2RlbEJ1aWxkZXInO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi92aWV3bW9kZWwvdG9kby90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSAnLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4vdmlld21vZGVsL3ZpZXdNb2RlbFR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICBzdGF0aWMgbmV3SW5zdGFuY2UoKTogVmlld01vZGVsQnVpbGRlckZhY3Rvcnkge1xuICAgIHJldHVybiBuZXcgVmlld01vZGVsQnVpbGRlckZhY3RvcnkoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIodHlwZT86IFZpZXdNb2RlbFR5cGUpOiBWaWV3TW9kZWxCdWlsZGVyQWRhcHRlciB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TW9kZWxCdWlsZGVyQWRhcHRlcih0eXBlKTtcbiAgfVxufVxuXG50eXBlIEFsbFZpZXdNb2RlbCA9IFZpZXdNb2RlbCAmIFZpZXdNb2RlbFRvZG87XG50eXBlIEFsbFZpZXdNb2RlbEtleSA9IGtleW9mIFZpZXdNb2RlbFRvZG87XG5cbmNsYXNzIFZpZXdNb2RlbEJ1aWxkZXJBZGFwdGVyIHtcbiAgcHJpdmF0ZSBidWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbCB8IFZpZXdNb2RlbFRvZG8+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGVsVHlwZT86IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBpZiAodGhpcy5tb2RlbFR5cGUpIHtcbiAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUb2RvQnVpbGRlcigpLndpdGgoeyBtb2RlbFR5cGU6IHRoaXMubW9kZWxUeXBlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVmlld01vZGVsQmFzZUJ1aWxkZXIoKS53aXRoKHtcbiAgICAgICAgbW9kZWxUeXBlOiAnVmlld01vZGVsJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBBbGxWaWV3TW9kZWxLZXldPzogQWxsVmlld01vZGVsW2tleV0gfSkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIud2l0aChpbnB1dCk7XG4gIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFQgZXh0ZW5kcyBWaWV3TW9kZWw+XG4gIGltcGxlbWVudHMgVmlld01vZGVsQnVpbGRlcjxUPiB7XG4gIGlkPzogbnVtYmVyO1xuICBtb2RlbFR5cGU/OiBWaWV3TW9kZWxUeXBlO1xuXG4gIHdpdGgoaW5wdXQ6IHsgW2tleSBpbiBrZXlvZiBUXT86IFRba2V5XSB9KTogdGhpcyB7XG4gICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICB0aGlzLndpdGhJZChpbnB1dC5pZCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5tb2RlbFR5cGUpIHtcbiAgICAgIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoSWQoaWQ6IG51bWJlcik6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdpZCc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IGlkOiBpZCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoTW9kZWxUeXBlKFxuICAgIHR5cGU6IFZpZXdNb2RlbFR5cGVcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ21vZGVsVHlwZSc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB7IG1vZGVsVHlwZTogdHlwZSB9KTtcbiAgfVxuXG4gIGJ1aWxkKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSW5zdGFuY2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZW5lcmF0ZUluc3RhbmNlKCk6IFQ7XG59XG5cbmNsYXNzIFZpZXdNb2RlbEJhc2VCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbD4ge1xuICBnZXRNb2RlbFR5cGUoKTogVmlld01vZGVsVHlwZSB7XG4gICAgcmV0dXJuICdWaWV3TW9kZWwnO1xuICB9XG4gIHByb3RlY3RlZCBnZW5lcmF0ZUluc3RhbmNlKCk6IFZpZXdNb2RlbCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkID8/IC0xO1xuICAgIGNvbnN0IHR5cGU6IFZpZXdNb2RlbFR5cGUgPSAnVmlld01vZGVsJztcbiAgICByZXR1cm4geyBpZDogaWQsIG1vZGVsVHlwZTogdHlwZSB9O1xuICB9XG59XG5cbmNsYXNzIFRvZG9CdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+XG4gIGltcGxlbWVudHMgUGFydGlhbDxWaWV3TW9kZWxUb2RvPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB3aXRoKGlucHV0OiB7IFtrZXkgaW4ga2V5b2YgVmlld01vZGVsVG9kb10/OiBWaWV3TW9kZWxUb2RvW2tleV0gfSk6IHRoaXMge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aElkKGlucHV0LmlkKTtcbiAgICB9XG4gICAgaWYgKGlucHV0Lm1vZGVsVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE1vZGVsVHlwZShpbnB1dC5tb2RlbFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhUaXRsZShpbnB1dC50aXRsZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5jb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMud2l0aENvbnRlbnRzKGlucHV0LmNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LmNyZWF0ZURhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhDcmVhdGVEYXRlKGlucHV0LmNyZWF0ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQuc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoU3RhcnREYXRlKGlucHV0LnN0YXJ0RGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5lc3RpbWF0ZUhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhFc3RpbWF0ZUhvdXIoaW5wdXQuZXN0aW1hdGVIb3VyKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnJlc3VsdEhvdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhSZXN1bHRIb3VyKGlucHV0LnJlc3VsdEhvdXIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQud29ya1N0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoV29ya1N0YXRlKGlucHV0LndvcmtTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5kaXNwbGF5T3JkZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhEaXNwbGF5T3JkZXIoaW5wdXQuZGlzcGxheU9yZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHdpdGhUaXRsZSh0aXRsZTogc3RyaW5nKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ3RpdGxlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgdGl0bGU6IHRpdGxlIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENvbnRlbnRzKFxuICAgIGNvbnRlbnRzOiBzdHJpbmdcbiAgKTogdGhpcyAmIFBpY2s8Vmlld01vZGVsVG9kbywgJ2NvbnRlbnRzJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY29udGVudHM6IGNvbnRlbnRzIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aENyZWF0ZURhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdjcmVhdGVEYXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgY3JlYXRlRGF0ZTogZGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhTdGFydERhdGUoZGF0ZTogRGF0ZSk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdzdGFydERhdGUnPiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgeyBzdGFydERhdGU6IGRhdGUgfSk7XG4gIH1cbiAgcHJpdmF0ZSB3aXRoRXN0aW1hdGVIb3VyKFxuICAgIGhvdXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZXN0aW1hdGVIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZXN0aW1hdGVIb3VyOiBob3VyIH0pO1xuICB9XG4gIHByaXZhdGUgd2l0aFJlc3VsdEhvdXIoXG4gICAgaG91cjogbnVtYmVyXG4gICk6IHRoaXMgJiBQaWNrPFZpZXdNb2RlbFRvZG8sICdyZXN1bHRIb3VyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgcmVzdWx0SG91cjogaG91ciB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhXb3JrU3RhdGUoXG4gICAgc3RhdGU6IFRvZG9TdGF0ZVxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnd29ya1N0YXRlJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgd29ya1N0YXRlOiBzdGF0ZSB9KTtcbiAgfVxuICBwcml2YXRlIHdpdGhEaXNwbGF5T3JkZXIoXG4gICAgb3JkZXI6IG51bWJlclxuICApOiB0aGlzICYgUGljazxWaWV3TW9kZWxUb2RvLCAnZGlzcGxheU9yZGVyJz4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHsgZGlzcGxheU9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG4gIGdldE1vZGVsVHlwZSgpOiBWaWV3TW9kZWxUeXBlIHtcbiAgICByZXR1cm4gJ1RvZG8nO1xuICB9XG4gIGdlbmVyYXRlSW5zdGFuY2UodGhpczogVmlld01vZGVsKTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIG5ldyBUb2RvKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlcic7XG5pbXBvcnQgeyBWaWV3VG9kb01hbmFnZXIgfSBmcm9tICcuLi90b2RvL3ZpZXdUb2RvTWFuYWdlcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5JztcbmltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4uL3RvZG8vdG9kb0JvYXJkJztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi92aWV3TW9kZWxUeXBlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3VG9kb01hbmFnZXJGYWN0b3J5SW1wbCBpbXBsZW1lbnRzIFZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5IHtcbiAgY3JlYXRlVmlld01vZGVsTWFuYWdlcnMoKTogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj4ge1xuICAgIGNvbnN0IHZtTWFuYWdlcnMgPSBuZXcgTWFwKCk7XG4gICAgdm1NYW5hZ2Vycy5zZXQoJ1RvZG8nLCBuZXcgVmlld1RvZG9NYW5hZ2VyKG5ldyBUb2RvQm9hcmQoKSkpO1xuICAgIHJldHVybiB2bU1hbmFnZXJzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vdmlld01vZGVsU2VydmljZSc7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyIH0gZnJvbSAnLi4vdmlld01vZGVsTWFuYWdlcic7XG5pbXBvcnQgeyBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL3ZpZXdNb2RlbE1hbmFnZXJGYWN0b3J5JztcbmltcG9ydCB7IFZpZXdNb2RlbFR5cGUgfSBmcm9tICcuLi92aWV3TW9kZWxUeXBlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeSB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbEJ1aWxkZXJGYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbFNlcnZpY2VJbXBsIGltcGxlbWVudHMgVmlld01vZGVsU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBWaWV3TW9kZWxTZXJ2aWNlO1xuICB2aWV3TW9kZWxNYW5hZ2VyczogTWFwPFZpZXdNb2RlbFR5cGUsIFZpZXdNb2RlbE1hbmFnZXI8Vmlld01vZGVsPj47XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBfdmlld01vZGVsTWFuYWdlcnM6IE1hcDxWaWV3TW9kZWxUeXBlLCBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbD4+XG4gICkge1xuICAgIHRoaXMudmlld01vZGVsTWFuYWdlcnMgPSBfdmlld01vZGVsTWFuYWdlcnM7XG4gIH1cblxuICBzdGF0aWMgaW5pdCh2bU1hbmFnZXJmYWN0b3J5OiBWaWV3TW9kZWxNYW5hZ2VyRmFjdG9yeSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlld01vZGVsU2VydmljZUltcGwoXG4gICAgICB2bU1hbmFnZXJmYWN0b3J5LmNyZWF0ZVZpZXdNb2RlbE1hbmFnZXJzKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0SWQodHlwZTogVmlld01vZGVsVHlwZSk6IG51bWJlciB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5nZXROZXh0SWQoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIGdldFZpZXdNb2RlbCh2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xuICAgIGNvbnN0IHZtTWFuYWdlciA9IHRoaXMudmlld01vZGVsTWFuYWdlcnMuZ2V0KHZpZXdNb2RlbC5tb2RlbFR5cGUpO1xuICAgIGlmICh2bU1hbmFnZXIgJiYgdm1NYW5hZ2VyLmdldERhdGEpIHtcbiAgICAgIHJldHVybiB2bU1hbmFnZXIuZ2V0RGF0YSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgY3JlYXRlVmlld01vZGVsKHR5cGU6IFZpZXdNb2RlbFR5cGUpIHtcbiAgICBjb25zdCB2bUJ1aWxkZXIgPSBWaWV3TW9kZWxCdWlsZGVyRmFjdG9yeS5uZXdJbnN0YW5jZSgpLmNyZWF0ZVZpZXdNb2RlbEJ1aWxkZXIoXG4gICAgICB0eXBlXG4gICAgKTtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh0eXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLmNyZWF0ZSh2bUJ1aWxkZXIud2l0aCh7IGlkOiB0aGlzLmdldE5leHRJZCh0eXBlKSB9KSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gIH1cblxuICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB2bU1hbmFnZXIgPSB0aGlzLnZpZXdNb2RlbE1hbmFnZXJzLmdldCh2aWV3TW9kZWwubW9kZWxUeXBlKTtcbiAgICBpZiAodm1NYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdm1NYW5hZ2VyLnVwZGF0ZSh2aWV3TW9kZWwpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVmlld01vZGVsKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XG4gICAgY29uc3Qgdm1NYW5hZ2VyID0gdGhpcy52aWV3TW9kZWxNYW5hZ2Vycy5nZXQodmlld01vZGVsLm1vZGVsVHlwZSk7XG4gICAgaWYgKHZtTWFuYWdlcikge1xuICAgICAgcmV0dXJuIHZtTWFuYWdlci5kZWxldGUodmlld01vZGVsKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9kZWNvcmF0b3IvdG9kb0RlY29yYXRvcic7XG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwnO1xuaW1wb3J0IHsgVmlld01vZGVsVHlwZSB9IGZyb20gJy4uL3ZpZXdNb2RlbFR5cGUnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvdGVtcGxhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdNb2RlbFRvZG8gZXh0ZW5kcyBWaWV3TW9kZWwge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICBzdGFydERhdGU/OiBEYXRlO1xuICBlc3RpbWF0ZUhvdXI6IG51bWJlcjtcbiAgcmVzdWx0SG91cjogbnVtYmVyO1xuICB3b3JrU3RhdGU6IFRvZG9TdGF0ZTtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59XG5cbkBUb2RvQ29tcG9uZW50KG5ldyBUZW1wbGF0ZSgnVG9kbycpLCAnLmpzX3RvZG9saXN0JylcbmV4cG9ydCBjbGFzcyBUb2RvIGltcGxlbWVudHMgVmlld01vZGVsVG9kbyB7XG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XG4gIHByaXZhdGUgX21vZGVsVHlwZTogVmlld01vZGVsVHlwZTtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGVudHM6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfc3RhcnREYXRlPzogRGF0ZTtcbiAgcHJpdmF0ZSBfZXN0aW1hdGVIb3VyOiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdEhvdXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29ya1N0YXRlOiBUb2RvU3RhdGU7XG4gIHByaXZhdGUgX2Rpc3BsYXlPcmRlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvZG8/OiBQYXJ0aWFsPFZpZXdNb2RlbFRvZG8+ICYgVmlld01vZGVsKSB7XG4gICAgdGhpcy5faWQgPSB0b2RvPy5pZCA/PyAtMTtcbiAgICB0aGlzLl9tb2RlbFR5cGUgPSAnVG9kbyc7XG4gICAgdGhpcy5fdGl0bGUgPSB0b2RvPy50aXRsZSA/PyAnJztcbiAgICB0aGlzLl9jb250ZW50cyA9IHRvZG8/LmNvbnRlbnRzID8/ICcnO1xuICAgIHRoaXMuX2NyZWF0ZURhdGUgPSB0b2RvPy5jcmVhdGVEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5fc3RhcnREYXRlID0gdG9kbz8uc3RhcnREYXRlID8/IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lc3RpbWF0ZUhvdXIgPSB0b2RvPy5lc3RpbWF0ZUhvdXIgPz8gMDtcbiAgICB0aGlzLl9yZXN1bHRIb3VyID0gdG9kbz8ucmVzdWx0SG91ciA/PyAwO1xuICAgIHRoaXMuX3dvcmtTdGF0ZSA9IHRvZG8/LndvcmtTdGF0ZSA/PyAnV2FpdGluZyc7XG4gICAgdGhpcy5fZGlzcGxheU9yZGVyID0gdG9kbz8uZGlzcGxheU9yZGVyID8/IDA7XG4gIH1cbiAgZ2V0TW9kZWxUeXBlKCk6ICdUb2RvJyB8ICdTb3J0TGFiZWwnIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBnZXQgaWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICB9XG5cbiAgZ2V0IG1vZGVsVHlwZSgpOiBWaWV3TW9kZWxUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxUeXBlO1xuICB9XG4gIHNldCBtb2RlbFR5cGUobW9kZWxUeXBlOiBWaWV3TW9kZWxUeXBlKSB7XG4gICAgdGhpcy5fbW9kZWxUeXBlID0gbW9kZWxUeXBlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCBjb250ZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50cztcbiAgfVxuICBzZXQgY29udGVudHMoY29udGVudHM6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRzID0gY29udGVudHM7XG4gIH1cblxuICBnZXQgY3JlYXRlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZTtcbiAgfVxuXG4gIGdldCBzdGFydERhdGUoKTogRGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0RGF0ZTtcbiAgfVxuICBpbml0U3RhcnREYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXQgZXN0aW1hdGVIb3VyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VzdGltYXRlSG91cjtcbiAgfVxuICBzZXQgZXN0aW1hdGVIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIHRoaXMuX2VzdGltYXRlSG91ciA9IGhvdXI7XG4gIH1cblxuICBnZXQgcmVzdWx0SG91cigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRIb3VyO1xuICB9XG4gIHNldCByZXN1bHRIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIHRoaXMuX3Jlc3VsdEhvdXIgPSBob3VyO1xuICB9XG5cbiAgZ2V0IHdvcmtTdGF0ZSgpOiBUb2RvU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl93b3JrU3RhdGU7XG4gIH1cbiAgc2V0IHdvcmtTdGF0ZShzdGF0ZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fd29ya1N0YXRlID0gc3RhdGU7XG4gIH1cblxuICBnZXQgZGlzcGxheU9yZGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlPcmRlcjtcbiAgfVxuICBzZXQgZGlzcGxheU9yZGVyKG9yZGVyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaXNwbGF5T3JkZXIgPSBvcmRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlld01vZGVsVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBUb2RvU3RhdGUsIFRvZG9TdGF0ZXMgfSBmcm9tICcuL3RvZG9TdGF0ZSc7XG5pbXBvcnQgeyBUb2RvbGlzdCB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0JvYXJkIHtcbiAgcHJpdmF0ZSB0b2RvbGlzdHM6IE1hcDxUb2RvU3RhdGUsIFRvZG9saXN0PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9saXN0cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBzdGF0ZU5hbWUgb2YgT2JqZWN0LnZhbHVlcyhUb2RvU3RhdGVzKSkge1xuICAgICAgdGhpcy50b2RvbGlzdHMuc2V0KHN0YXRlTmFtZSwgbmV3IFRvZG9saXN0KHN0YXRlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oc3RhdGU6IFRvZG9TdGF0ZSwgdG9kbzogVmlld01vZGVsVG9kbykge1xuICAgIHRoaXMudG9kb2xpc3RzLmdldChzdGF0ZSkhLmFkZFRvZG8odG9kbyk7XG4gIH1cblxuICBnZXRUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIGlkOiBudW1iZXIpOiBWaWV3TW9kZWxUb2RvIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEuZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRvZG8pIHtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhzdGF0ZTogVG9kb1N0YXRlLCBpZDogbnVtYmVyKSB7XG4gICAgdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEuZGVsZXRlVG9kbyhpZCk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHN0YXRlOiBUb2RvU3RhdGUsIHRvZG86IFZpZXdNb2RlbFRvZG8pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2RvbGlzdHMuZ2V0KHN0YXRlKSEudXBkYXRlVG9kbyh0b2RvKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFRvZG9TdGF0ZXMgPSB7XG4gIFdBSVRJTkc6ICdXYWl0aW5nJyxcbiAgSU5fUFJPR1JFU1M6ICdJbiBwcm9ncmVzcycsXG4gIENPTVBMRVRFRDogJ0NvbXBsZXRlZCcsXG4gIFBFTkRESU5HOiAnUGVuZGRpbmcnLFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIFRvZG9TdGF0ZSA9IHR5cGVvZiBUb2RvU3RhdGVzW2tleW9mIHR5cGVvZiBUb2RvU3RhdGVzXTtcbiIsImltcG9ydCB7IFZpZXdNb2RlbFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgVG9kb1N0YXRlIH0gZnJvbSAnLi90b2RvU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVG9kb2xpc3Qge1xuICBwcml2YXRlIF90b2RvbGlzdDogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlTmFtZTogVG9kb1N0YXRlKSB7XG4gICAgdGhpcy5fdG9kb2xpc3QgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgdG9kb2xpc3QoKTogTWFwPG51bWJlciwgVmlld01vZGVsVG9kbz4ge1xuICAgIHJldHVybiB0aGlzLl90b2RvbGlzdDtcbiAgfVxuXG4gIGdldCBzdGF0ZU5hbWUoKTogVG9kb1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVOYW1lO1xuICB9XG5cbiAgZ2V0VG9kbyhpZDogbnVtYmVyKTogVmlld01vZGVsVG9kbyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudG9kb2xpc3QuZ2V0KGlkKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IHZvaWQge1xuICAgIGZvciAobGV0IHRvZG8gb2YgdGhpcy5fdG9kb2xpc3QudmFsdWVzKCkpIHtcbiAgICAgIHRvZG8uZGlzcGxheU9yZGVyICs9IDE7XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3Quc2V0KHRvZG8uaWQsIHRvZG8pO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGVsVG9kb09yZGVyID0gdGhpcy50b2RvbGlzdC5nZXQoaWQpIS5kaXNwbGF5T3JkZXI7XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLl90b2RvbGlzdC52YWx1ZXMoKSkge1xuICAgICAgaWYgKGRlbFRvZG9PcmRlciA8IHRvZG8uZGlzcGxheU9yZGVyKSB7XG4gICAgICAgIHRvZG8uZGlzcGxheU9yZGVyIC09IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9kb2xpc3QuZGVsZXRlKGlkKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8odG9kbzogVmlld01vZGVsVG9kbyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRvZG9saXN0LmdldCh0b2RvLmlkKSkge1xuICAgICAgdGhpcy50b2RvbGlzdC5zZXQodG9kby5pZCwgdG9kbyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3TW9kZWxUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IFRvZG9Cb2FyZCB9IGZyb20gJy4vdG9kb0JvYXJkJztcbmltcG9ydCB7IFZpZXdNb2RlbE1hbmFnZXIgfSBmcm9tICcuLi92aWV3TW9kZWxNYW5hZ2VyJztcbmltcG9ydCB7IFRvZG9TdGF0ZSB9IGZyb20gJy4vdG9kb1N0YXRlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBWaWV3TW9kZWxCdWlsZGVyIH0gZnJvbSAnLi4vLi4vdmlld01vZGVsQnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBWaWV3VG9kb01hbmFnZXIgaW1wbGVtZW50cyBWaWV3TW9kZWxNYW5hZ2VyPFZpZXdNb2RlbFRvZG8+IHtcbiAgcHJpdmF0ZSBmaW5hbElkOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvZG9Cb2FyZDogVG9kb0JvYXJkKSB7XG4gICAgdGhpcy5maW5hbElkID0gMDtcbiAgfVxuXG4gIGdldE5leHRJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbmFsSWQgKyAxO1xuICB9XG5cbiAgY3JlYXRlKHZtTW9kZWxCdWlsZGVyOiBWaWV3TW9kZWxCdWlsZGVyPFZpZXdNb2RlbFRvZG8+KTogdm9pZCB7XG4gICAgY29uc3QgdG9kb09iaiA9IHZtTW9kZWxCdWlsZGVyLmJ1aWxkKCk7XG4gICAgaWYgKHRvZG9PYmouaWQgPiB0aGlzLmZpbmFsSWQpIHtcbiAgICAgIHRoaXMuZmluYWxJZCA9IHRvZG9PYmouaWQ7XG4gICAgfVxuICAgIHRoaXMuX3RvZG9Cb2FyZC5hZGRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGdldERhdGEodG9kb09iajogVmlld01vZGVsICYgeyB3b3JrU3RhdGU6IFRvZG9TdGF0ZSB9KTogVmlld01vZGVsVG9kbyB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC5nZXRUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqLmlkKTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2RvT2JqOiBWaWV3TW9kZWxUb2RvKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZG9Cb2FyZC51cGRhdGVUb2RvKHRvZG9PYmoud29ya1N0YXRlLCB0b2RvT2JqKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b2RvT2JqOiBWaWV3TW9kZWwgJiB7IHdvcmtTdGF0ZTogVG9kb1N0YXRlIH0pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvQm9hcmQuZGVsZXRlVG9kbyh0b2RvT2JqLndvcmtTdGF0ZSwgdG9kb09iai5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=