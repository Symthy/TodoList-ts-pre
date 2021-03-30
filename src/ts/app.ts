import '../css/style.scss';
import { HtmlAccessor } from './htmlUtils/htmlAccessor';
import { CreateTaskBtnHandler } from './view/handler/impl/CreateTaskBtnHandler';
import { TodoComponentHandler } from './view/handler/impl/TodoComponentHandler';
import { TodoContextMenuHandler } from './view/handler/impl/TodoContextMenuHandler';
import { TodoConvertElementHandler } from './view/handler/impl/todoConvertElementHandler';
import { TodoReconvertElementHandler } from './view/handler/impl/todoReconvertElementHandler';
import { ViewEventHandlerRegisters } from './view/handler/viewEventHandlers';
import {
  ChildComponentHolder,
  createTodoChildComponents,
} from './view/templates/base/child/childComponentHolder';
import { TodoElement } from './view/todoElement';
import { ViewDisplayer } from './view/viewDisplayer';
import { ViewTodoManagerFactoryImpl } from './viewmodel/manager/viewModelManagerFactoryImpl';
import { ViewModelServiceImpl } from './viewmodel/service/viewModelServiceImpl';

const todoCmpHolder = new ChildComponentHolder<
  TodoElement,
  ConvertibleComponent
>();
todoCmpHolder.components = createTodoChildComponents();

//const todoResetHandler = new TodoResetElementHandler(todoCmpHolder);
ViewModelServiceImpl.init(new ViewTodoManagerFactoryImpl());

ViewEventHandlerRegisters.init(
  new TodoComponentHandler(
    new TodoContextMenuHandler(),
    new TodoConvertElementHandler(
      todoCmpHolder
      //todoResetHandler
    ),
    new TodoReconvertElementHandler(todoCmpHolder)
  ),
  new CreateTaskBtnHandler(new ViewDisplayer())
  //new WindowHandler(todoResetHandler)
).register();

document.body.addEventListener('click', function () {
  HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});
