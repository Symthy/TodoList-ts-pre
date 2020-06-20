import { ViewModelService } from '../viewModelService';
import { ViewModelManager } from '../viewModelManager';
import { ViewModelManagerFactory } from '../viewModelManagerFactory';
import { ViewModelType } from '../viewModelType';
import { ViewModel } from '../../viewModel';
import { ViewModelBuilder } from '../../viewModelBuilder';

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

  getNextId(type: ViewModelType): number {
    const vmManager = this.viewModelManagers.get(type);
    if (vmManager) {
      return vmManager.getNextId();
    }
    throw new Error('');
  }

  getViewModel(viewMdoel: ViewModel) {
    const vmManager = this.viewModelManagers.get(viewMdoel.modelType);
    if (vmManager && vmManager.getData) {
      return vmManager.getData(viewMdoel);
    }
    throw new Error('');
  }

  createViewModel(viewMdoelBuilder: ViewModelBuilder<ViewModel>) {
    const vmManager = this.viewModelManagers.get(
      viewMdoelBuilder.getModelType()
    );
    if (vmManager) {
      return vmManager.create(viewMdoelBuilder);
    }
    throw new Error('');
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
