import { HtmlAccessor } from '../htmlUtils/htmlAccessor';
import { ViewModelServiceImpl } from '../viewmodel/service/viewModelServiceImpl';
import { ViewModelBuilderFactory } from '../viewmodel/viewModelBuilderFactory';

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
      vmBuilder.with({ workState: 'Waiting' });
      if (vmBuilder) {
        const vmService = ViewModelServiceImpl.getInstance();
        vmService.createViewModel('Todo');
      }
    }
  }
}
