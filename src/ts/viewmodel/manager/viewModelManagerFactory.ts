import { ViewModel } from '../viewModel';
import { ViewModelType } from '../viewModelType';
import { ViewModelManager } from './viewModelManager';

export interface ViewModelManagerFactory {
  createViewModelManagers(): Map<ViewModelType, ViewModelManager<ViewModel>>;
}
