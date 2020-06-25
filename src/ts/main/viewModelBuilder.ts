import { ViewModel } from "./viewModel";

export interface ViewModelBuilder<T extends ViewModel> {
  with(input: { [key in keyof T]?: T[key] }): ViewModelBuilder<T>;
  build(): T;
}
