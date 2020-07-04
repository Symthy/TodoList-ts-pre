import { ViewModelService } from '../viewModelService';
import { ViewModelManager } from '../viewModelManager';
import { ViewModelManagerFactory } from '../viewModelManagerFactory';
import { ViewModelType } from '../viewModelType';
import { ViewModel } from '../../viewModel';
import { ViewModelBuilderFactory } from '../../viewModelBuilderFactory';

export class ViewModelServiceImpl implements ViewModelService {
  private static instance: ViewModelService;
  viewModelManagers: Map<ViewModelType, ViewModelManager<ViewModel>>;

  private constructor(
    _viewModelManagers: Map<ViewModelType, ViewModelManager<ViewModel>>
  ) {
    this.viewModelManagers = _viewModelManagers;
  }

  static init(vmManagerfactory: ViewModelManagerFactory) {
    this.instance = new ViewModelServiceImpl(
      vmManagerfactory.createViewModelManagers()
    );
  }

  private getNextId(type: ViewModelType): number {
    const vmManager = this.viewModelManagers.get(type);
    if (vmManager) {
      return vmManager.getNextId();
    }
    throw new Error('');
  }

  getViewModel(viewModel: ViewModel) {
    const vmManager = this.viewModelManagers.get(viewModel.modelType);
    if (vmManager && vmManager.getData) {
      return vmManager.getData(viewModel);
    }
    throw new Error('');
  }

  createViewModel(type: ViewModelType, viewModel?: ViewModel): void | never {
    const vmBuilder = ViewModelBuilderFactory.newInstance().createViewModelBuilder(
      type
    );
    const vmManager = this.viewModelManagers.get(type);
    if (!vmManager) {
      throw new Error('');
    }
    viewModel === undefined
      ? vmManager.create(vmBuilder.with({ id: this.getNextId(type) }).build())
      : vmManager.create(viewModel);
  }

  updateViewModel(viewModel: ViewModel) {
    const vmManager = this.viewModelManagers.get(viewModel.modelType);
    if (vmManager) {
      return vmManager.update(viewModel);
    }
    throw new Error('');
  }

  deleteViewModel(viewModel: ViewModel) {
    const vmManager = this.viewModelManagers.get(viewModel.modelType);
    if (vmManager) {
      return vmManager.delete(viewModel);
    }
    throw new Error('');
  }

  static getInstance() {
    return this.instance;
  }
}
