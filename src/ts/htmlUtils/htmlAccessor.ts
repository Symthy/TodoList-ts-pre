export class HtmlAccessor {
  static getHtmlElement<T extends HTMLElement = HTMLElement>(
    query: string,
    rootElem?: HTMLElement
  ): T {
    let elem;
    if (!rootElem) {
      elem = document.querySelector<T>(query);
    } else {
      elem = rootElem.querySelector<T>(query);
    }
    if (elem) {
      return elem;
    }
    throw new Error('');
  }

  static getHtmlElementNullable<T extends HTMLElement = HTMLElement>(
    query: string,
    rootElem?: HTMLElement
  ): T | null {
    let elem;
    if (!rootElem) {
      elem = document.querySelector<T>(query);
    } else {
      elem = rootElem.querySelector<T>(query);
    }
    return elem;
  }
}
