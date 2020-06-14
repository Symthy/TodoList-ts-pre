import { ViewModel } from "../viewModel";
import { ViewModelBuilder } from "../viewModelBuilder";

export interface ViewModelManager<T extends ViewModel> {
  getNextId(): number;

  create(viewModelBuilder: ViewModelBuilder<T>): void;

  getData?(viewModel: T): T;

  update(viewModel: T): boolean;

  delete(viewModel: T): void;
}
