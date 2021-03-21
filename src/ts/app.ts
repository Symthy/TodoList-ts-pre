import '../css/style.scss';
import {
  ChildComponentHolder,
  createTodoChildComponents,
} from './component/childComponentHolder';
import { HtmlAccessor } from './htmlUtils/htmlAccessor';
import { CreateTaskBtnHandler } from './main/view/handler/impl/CreateTaskBtnHandler';
import { TodoComponentHandler } from './main/view/handler/impl/TodoComponentHandler';
import { TodoContextMenuHandler } from './main/view/handler/impl/TodoContextMenuHandler';
import { TodoConvertElementHandler } from './main/view/handler/impl/todoConvertElementHandler';
import { TodoReconvertElementHandler } from './main/view/handler/impl/todoReconvertElementHandler';
import { ViewEventHandlerRegisters } from './main/view/handler/viewEventHandlers';
import { ViewDisplayer } from './main/view/viewDisplayer';
import { ViewTodoManagerFactoryImpl } from './main/viewmodel/impl/viewModelManagerFactoryImpl';
import { ViewModelServiceImpl } from './main/viewmodel/impl/viewModelServiceImpl';
import { TodoElement } from './todoElement';

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
