import { ViewModelManager } from "./viewModelManager";
import { ViewModelType } from "./viewModelType";
import { ViewModel } from "../viewModel";

export interface ViewModelManagerFactory {
  createViewModelManagers(): Map<ViewModelType, ViewModelManager<ViewModel>>;
}
