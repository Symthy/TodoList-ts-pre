import '../css/style.scss';
import { ViewHandler } from './main/view/viewHandler';
import { ViewDisplayer } from './main/view/viewDisplayer';
import { ViewModelServiceImpl } from './main/viewmodel/impl/viewModelServiceImpl';
import { ViewTodoManagerFactoryImpl } from './main/viewmodel/impl/viewModelManagerFactoryImpl';
import { HtmlAccessor } from './htmlUtils/htmlAccessor';

ViewModelServiceImpl.init(new ViewTodoManagerFactoryImpl());

const viewHandler = new ViewHandler(new ViewDisplayer());
viewHandler.resistCreateTaskEvent();
viewHandler.resistTodoEvent();
viewHandler.resistTodoObserver();

document.body.addEventListener('click', function () {
  HtmlAccessor.getHtmlElement('.js_todoContextMenu').style.display = 'none';
});
