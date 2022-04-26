import { getBackgroundImages } from '../../../utils/getBackgroundImage';
import { getVerticalAlignment } from '../../../utils/htmlStyles';
import { getStyles } from '../../../utils/getStyles';

export default (node: HTMLElement) => ({
  minHeight: node.style.minHeight ? node.style.minHeight : null,
  display: node.style.display,
  width: node.style.width,
  backgroundColor: node.style.backgroundColor,
  ...getStyles(node),
  ...getBackgroundImages(node),
  ...getVerticalAlignment(node),
});
