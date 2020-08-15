import { ViewModel } from '../viewModel';

export interface ViewModelManager<T extends ViewModel> {
  getNextId(): number;

  create(viewModel: T): void;

  getData?(viewModel: T): T;

  update(viewModel: T): boolean;

  delete(viewModel: T): void;
}
