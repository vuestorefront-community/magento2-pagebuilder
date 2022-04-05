/* eslint-disable unicorn/prefer-spread,unicorn/prefer-dom-node-dataset */

export const convertStylesToInlineStyles = (document: Document) => {
  const styleBlocks = document.querySelectorAll('style');
  const styles = {};
  if (styleBlocks.length > 0) {
    Array.from(styleBlocks).forEach((styleBlock) => {
      const { cssRules } = styleBlock.sheet;

      Array.from(cssRules).forEach((rule) => {
        if (rule instanceof CSSStyleRule) {
          const selectors = rule.selectorText
            .split(',')
            .map((selector) => selector.trim());

          selectors.forEach((selector) => {
            if (!styles[selector]) styles[selector] = [];
            styles[selector].push(rule.style);
          });
        }
      });
    });
  }

  Object.keys(styles).forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) {
      return;
    }

    styles[selector].forEach((style) => {
      element.setAttribute(
        'style',
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/restrict-plus-operands
        element.style.cssText + style.cssText,
      );
    });

    element.removeAttribute('data-pb-style');
  });
};
