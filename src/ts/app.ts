import '../css/style.scss';
import { ViewHandler } from './main/view/viewHandler';
import { ViewDisplayer } from './main/view/viewDisplayer';
import { ViewModelServiceImpl } from './main/viewmodel/impl/viewModelServiceImpl';
import { ViewTodoManagerFactoryImpl } from './main/viewmodel/impl/viewModelManagerFactoryImpl';

ViewModelServiceImpl.init(new ViewTodoManagerFactoryImpl());

const viewHandler = new ViewHandler(new ViewDisplayer());
viewHandler.resistCreateTaskEvent();
