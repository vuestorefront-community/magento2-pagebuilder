import { convertStylesToInlineStyles } from './convertStylesToInline';
import { createContentObject } from './createContentObject';
import { extractContentTypesConfig } from './extractContentTypesConfig';

export const parseStorageHtml = (htmlStr: string) => {
  const container = new DOMParser().parseFromString(htmlStr, 'text/html');

  const stageContentType = createContentObject('root-container');

  container.body.id = 'html-body';
  convertStylesToInlineStyles(container);

  return extractContentTypesConfig(container.body, stageContentType);
};
