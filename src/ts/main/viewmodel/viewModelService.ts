import { ViewModelManager } from './viewModelManager';
import { ViewModelType } from './viewModelType';
import { ViewModel } from '../viewModel';

export interface ViewModelService {
  readonly viewModelManagers: Map<ViewModelType, ViewModelManager<ViewModel>>;

  getViewModel(viewModel: ViewModel): ViewModel;

  createViewModel(type: ViewModelType, viewModel?: ViewModel): void;

  updateViewModel(viewModel: ViewModel): void;

  deleteViewModel(viewModel: ViewModel): void;
}
