import { HtmlAccessor } from '../../htmlUtils/htmlAccessor';
import { ViewModelServiceImpl } from '../viewmodel/impl/viewModelServiceImpl';
import { ViewModelBuilderFactory } from '../viewModelBuilderFactory';

export class ViewDisplayer {
  public displayInputTaskArea(): void {
    if (
      HtmlAccessor.getHtmlElementNullable<HTMLInputElement>(
        '#radioCreateTaskDetail'
      )?.checked
    ) {
      // const classList = HtmlAccessor.getHtmlElement('.js_inputTaskDetailArea')
      //   .classList;
      // if (classList.contains('is_hidden')) {
      //   classList.remove('is_hidden');
      //   classList.add('is_active');
      // }
    } else {
      const vmBuilder = new ViewModelBuilderFactory().createViewModelBuilder(
        'Todo'
      );
      if (vmBuilder) {
        const vmService = ViewModelServiceImpl.getInstance();
        vmService.createViewModel(
          vmBuilder.with('id', vmService.getNextId('Todo'))
        );
      }
    }
  }
}
