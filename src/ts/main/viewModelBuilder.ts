import { ViewModel } from "./viewModel";
import { ViewModelType } from "./viewmodel/viewModelType";

export interface ViewModelBuilder<T extends ViewModel> extends Partial<ViewModel> {
  with(propertyName: keyof T, value: any): this;
  build(): T;
  getModelType(): ViewModelType;
}
