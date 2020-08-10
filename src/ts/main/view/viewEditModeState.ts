export class ViewEditModeState {
  private _editingTodoTitle: HTMLElement | null;
  private _editingTodoDetail: HTMLElement | null;
  private _editingTodoEstimate: HTMLElement | null;
  private _editingTodoResult: HTMLElement | null;

  constructor() {
    this._editingTodoTitle = null;
    this._editingTodoDetail = null;
    this._editingTodoEstimate = null;
    this._editingTodoResult = null;
  }

  isEditingTodoTitle(): boolean {
    return this._editingTodoTitle ? true : false;
  }
  isEditingTodoDetail(): boolean {
    return this._editingTodoDetail ? true : false;
  }
  isEditingTodoEstimate(): boolean {
    return this._editingTodoEstimate ? true : false;
  }
  isEditingTodoResult(): boolean {
    return this._editingTodoResult ? true : false;
  }

  resetEditingTodoTitle(): void {
    this._editingTodoTitle = null;
  }
  resetEditingTodoDetail(): void {
    this._editingTodoDetail = null;
  }
  resetEditingTodoEstimate(): void {
    this._editingTodoEstimate = null;
  }
  resetEditingTodoResult(): void {
    this._editingTodoResult = null;
  }

  set editingTodoTitle(elem: HTMLElement) {
    this._editingTodoTitle = elem;
  }
  get editingTodoTitle(): HTMLElement | never {
    if (this._editingTodoTitle) {
      return this._editingTodoTitle;
    }
    throw new Error('Nothing editing task title');
  }

  set editingTodoDetail(elem: HTMLElement) {
    this._editingTodoDetail = elem;
  }
  get editingTodoDetail(): HTMLElement | never {
    if (this._editingTodoDetail) {
      return this._editingTodoDetail;
    }
    throw new Error('Nothing editing task detail');
  }

  set editingTodoEstimate(elem: HTMLElement) {
    this._editingTodoEstimate = elem;
  }
  get editingTodoEstimate(): HTMLElement | never {
    if (this._editingTodoEstimate) {
      return this._editingTodoEstimate;
    }
    throw new Error('Nothing editing task estimate time');
  }

  set editingTodoResult(elem: HTMLElement) {
    this._editingTodoEstimate = elem;
  }
  get editingTodoResult(): HTMLElement | never {
    if (this._editingTodoResult) {
      return this._editingTodoResult;
    }
    throw new Error('Nothing editing task result time');
  }
}
