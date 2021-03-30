import { TodoBoard } from '../todo/todoBoard';
import { ViewTodoManager } from '../todo/viewTodoManager';
import { ViewModel } from '../viewModel';
import { ViewModelType } from '../viewModelType';
import { ViewModelManager } from './viewModelManager';
import { ViewModelManagerFactory } from './viewModelManagerFactory';

export class ViewTodoManagerFactoryImpl implements ViewModelManagerFactory {
  createViewModelManagers(): Map<ViewModelType, ViewModelManager<ViewModel>> {
    const vmManagers = new Map();
    vmManagers.set('Todo', new ViewTodoManager(new TodoBoard()));
    return vmManagers;
  }
}
