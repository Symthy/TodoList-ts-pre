interface ConvertibleComponent extends ChildComponent {
  convertComponent(): void;
  reconvertComponent(value: string): void;
  registerEditingElement(elem: HTMLElement): void;
  clearEditingElement(): void;
}
