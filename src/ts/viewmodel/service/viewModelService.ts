import { ViewModelManager } from '../manager/viewModelManager';
import { ViewModel } from '../viewModel';
import { ViewModelType } from '../viewModelType';

export interface ViewModelService {
  readonly viewModelManagers: Map<ViewModelType, ViewModelManager<ViewModel>>;

  getViewModel(viewModel: ViewModel): ViewModel;

  createViewModel(type: ViewModelType, viewModel?: ViewModel): void;

  updateViewModel(viewModel: ViewModel): void;

  deleteViewModel(viewModel: ViewModel): void;
}
