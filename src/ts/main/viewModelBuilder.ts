import { ViewModel } from "./viewModel";

export interface ViewModelBuilder<T extends ViewModel> extends Partial<ViewModel> {
  with(input: { [key in keyof T]?: T[key] }): this;
  build(): T;
}
