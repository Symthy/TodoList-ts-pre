import '../css/style.scss';
import { ViewModelServiceImpl } from './main/viewmodel/impl/viewModelServiceImpl';
import { ViewTodoManagerFactoryImpl } from './main/viewmodel/impl/viewModelManagerFactoryImpl';
import { TodoContextMenuHandler } from './main/view/handler/impl/TodoContextMenuHandler';
import { ViewEventHandlerRegisters } from './main/view/handler/viewEventHandlers';
import { TodoComponentHandler } from './main/view/handler/impl/TodoComponentHandler';
import { CreateTaskBtnHandler } from './main/view/handler/impl/CreateTaskBtnHandler';
import { ViewDisplayer } from './main/view/viewDisplayer';
import { TodoConvertElementHandler } from './main/view/handler/impl/todoConvertElementHandler';
import { TodoResetElementHandler } from './main/view/handler/impl/todoResetElementHandler';
import { WindowHandler } from './main/view/handler/impl/windowHandler';
import { HtmlAccessor } from './htmlUtils/htmlAccessor';
import {
  ChildComponentHolder,
  createTodoChildComponents,
} from './component/childComponentHolder';
import { TodoElement } from './todoElement';

const todoCmpHolder = new ChildComponentHolder<
  TodoElement,
  ConvertableComponent
>();
todoCmpHolder.components = createTodoChildComponents();

const todoResetHandler = new TodoResetElementHandler(todoCmpHolder);
ViewModelServiceImpl.init(new ViewTodoManagerFactoryImpl());

ViewEventHandlerRegisters.init(
  new TodoComponentHandler(
    new TodoContextMenuHandler(),
    new TodoConvertElementHandler(todoCmpHolder, todoResetHandler)
  ),
  new CreateTaskBtnHandler(new ViewDisplayer()),
  new WindowHandler(todoResetHandler)
).register();

document.body.addEventListener('click', function () {
  HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});
