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

  static getHtmlElements<T extends HTMLElement = HTMLElement>(
    query: string,
    rootElem?: HTMLElement
  ): Array<T> {
    let elem;
    if (!rootElem) {
      elem = document.querySelectorAll<T>(query);
    } else {
      elem = rootElem.querySelectorAll<T>(query);
    }
    if (elem.length !== 0) {
      return Array.from(elem);
    }
    throw new Error('');
  }
}
