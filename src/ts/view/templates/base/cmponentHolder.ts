interface ComponentHolder<T, C extends Component = Component> {
  components: Map<T, C>;
  getComponent(componentType: T): C;
}
