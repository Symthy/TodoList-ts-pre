interface ComponentTemplateParts {
  identify: string;
  normalStateHtml: string;
  editStateHtml: string;
}

export class TemplatePartsHolder implements ComponentTemplateParts {
  private constructor(
    private _identify: string,
    private _normalStateHtml: string,
    private _editStateHtml: string
  ) {}

  static create(
    identify: string,
    normalStateHtml: string,
    editStateHtml: string
  ): TemplatePartsHolder {
    return new TemplatePartsHolder(identify, normalStateHtml, editStateHtml);
  }

  static empty(): TemplatePartsHolder {
    return new TemplatePartsHolder('', '', '');
  }

  get identify(): string {
    return this._identify;
  }

  get normalStateHtml(): string {
    return this._normalStateHtml;
  }

  get editStateHtml(): string {
    return this._editStateHtml;
  }
}
