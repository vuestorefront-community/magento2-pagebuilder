const alignmentToFlex = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

export const flexToVerticalAlignment = (flex: CSSStyleDeclaration['justifyContent']) => ({
  ...Object.entries(alignmentToFlex).map(([a, b]) => ({ [b]: a })),
}[flex]);

export const verticalAlignmentToFlex = (alignment: string) => alignmentToFlex[alignment];

export const getVerticalAlignment = (html: HTMLElement) => {
  const {
    style: {
      justifyContent,
    },
  } = html;

  return {
    verticalAlignment: justifyContent ? flexToVerticalAlignment(justifyContent) : null,
  };
};

export const getPadding = (html: HTMLElement) => ({
  paddingTop: html.style.paddingTop,
  paddingRight: html.style.paddingRight,
  paddingBottom: html.style.paddingBottom,
  paddingLeft: html.style.paddingLeft,
});

export const getMargin = (html: HTMLElement) => ({
  marginTop: html.style.marginTop,
  marginRight: html.style.marginRight,
  marginBottom: html.style.marginBottom,
  marginLeft: html.style.marginLeft,
});

export const getBorder = (html: HTMLElement) => ({
  border: html.style.borderStyle,
  borderColor: html.style.borderColor,
  borderWidth: html.style.borderWidth,
  borderRadius: html.style.borderRadius,
});

export const getTextAlign = (html: HTMLElement) => ({
  textAlign: html.style.textAlign,
});

export const getCssClasses = (html: HTMLElement) => ({
  cssClasses: html.getAttribute('class')
    ? html.getAttribute('class').split(' ')
    : [],
});

export const getIsHidden = (html: HTMLElement) => ({
  isHidden: html.style.display === 'none',
});
