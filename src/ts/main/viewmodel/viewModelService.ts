import { ViewModelManager } from "./viewModelManager";
import { ViewModelType } from "./viewModelType";
import { ViewModel } from "../viewModel";
import { ViewModelBuilder } from "../viewModelBuilder";

export interface ViewModelService {
  readonly viewModelManagers: Map<ViewModelType, ViewModelManager<ViewModel>>;

  getNextId(type: ViewModelType): number;

  getViewModel(viewMdoel: ViewModel): ViewModel;

  createViewModel(viewMdoelBuilder: ViewModelBuilder<ViewModel>): void;

  updateViewModel(viewModel: ViewModel): void;

  deleteViewModel(viewModel: ViewModel): void;
}
