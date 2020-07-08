import '../css/style.scss';
import { ViewModelServiceImpl } from './main/viewmodel/impl/viewModelServiceImpl';
import { ViewTodoManagerFactoryImpl } from './main/viewmodel/impl/viewModelManagerFactoryImpl';
import { HtmlAccessor } from './htmlUtils/htmlAccessor';
import { getTodoCtMenuHandler } from './main/view/handler/impl/TodoContextMenuHandler';
import { ViewHandlers } from './main/view/handler/viewHandlers';
import { TodoComponentHandler } from './main/view/handler/impl/TodoComponentHandler';
import { CreateTaskBtnHandler } from './main/view/handler/impl/CreateTaskBtnHandler';
import { ViewDisplayer } from './main/view/viewDisplayer';

ViewModelServiceImpl.init(new ViewTodoManagerFactoryImpl());

ViewHandlers.init(
  new TodoComponentHandler(getTodoCtMenuHandler()),
  new CreateTaskBtnHandler(new ViewDisplayer())
).register();

document.body.addEventListener('click', function () {
  HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});
