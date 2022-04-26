import { ContentObject, createContentObject } from './createContentObject';

export const extractContentTypesConfig = (rootEl: HTMLElement, contentTypeStructureObj: ContentObject) => {
  const tree = document.createTreeWalker(rootEl, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);

  let currentNode = tree.nextNode() as HTMLElement;
  while (currentNode) {
    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = tree.nextNode() as HTMLElement;
      continue;
    }

    const { contentType } = currentNode.dataset;

    if (!contentType) {
      currentNode = tree.nextNode() as HTMLElement;
      continue;
    }

    const props = createContentObject(contentType, currentNode);
    const contentTypeConfig = createContentObject(contentType);

    if (
      contentTypeConfig
      && typeof contentTypeConfig.configAggregator === 'function'
    ) {
      try {
        Object.assign(
          props,
          contentTypeConfig.configAggregator(currentNode, props),
        );
      } catch (e) {
        console.error(
          `Failed to aggregate config for content type ${contentType}.`,
          e,
        );
      }
    } else {
      console.warn(
        `Page Builder ${contentType} content type is not supported, this content will not be rendered.`,
      );
    }

    contentTypeStructureObj.children.push(props);

    extractContentTypesConfig(currentNode, props);

    currentNode = tree.nextSibling();
  }

  return contentTypeStructureObj;
};
