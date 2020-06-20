import { ViewModelManager } from '../viewModelManager';
import { ViewTodoManager } from '../todo/viewTodoManager';
import { ViewModelManagerFactory } from '../viewModelManagerFactory';
import { TodoBoard } from '../todo/todoBoard';
import { ViewModelType } from '../viewModelType';
import { ViewModel } from '../../viewModel';

export class ViewTodoManagerFactoryImpl implements ViewModelManagerFactory {
  createViewModelManagers(): Map<ViewModelType, ViewModelManager<ViewModel>> {
    const vmManagers = new Map();
    vmManagers.set('Todo', new ViewTodoManager(new TodoBoard()));
    return vmManagers;
  }
}
