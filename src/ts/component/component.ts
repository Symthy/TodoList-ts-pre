interface ComponentHolder<T, C extends Component = Component> {
  components: Map<T, C>;
  getComponent(componentType: T): C;
}

interface Component {
  init(): void;
}

interface ChildComponent extends Component {
  editingElement: HTMLElement | null;
}

interface ConvertibleComponent extends ChildComponent {
  convertComponent(): void;
  reconvertComponent(): void;
}
