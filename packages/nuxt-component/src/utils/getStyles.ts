import {
  getBorder,
  getCssClasses,
  getIsHidden,
  getMargin,
  getPadding,
  getTextAlign,
} from './htmlStyles';

export const getStyles = (html: HTMLElement) => ({
  ...getBorder(html),
  ...getMargin(html),
  ...getPadding(html),
  ...getTextAlign(html),
  ...getCssClasses(html),
  ...getIsHidden(html),
});
