export const link = (baseUrl: string) => (link: string) => {
  let isExternalUrl;
  const linkProps: Partial<HTMLLinkElement> & { to?: string } = {};

  try {
    const baseUrlObj = new URL(baseUrl);
    const urlObj = new URL(link, baseUrlObj);
    isExternalUrl = baseUrlObj.host !== urlObj.host;

    if (isExternalUrl) {
      linkProps.href = link;
    } else {
      linkProps.to = urlObj.pathname;
    }
  } catch {
    linkProps.href = link;
  }

  return linkProps;
};

const handleHtmlContentClick = (history: string[], event: any) => {
  const { code, target, type } = event;

  const shouldIntercept = type === 'click' || code === 'Enter' || code === 'Space';

  if (target.tagName === 'A' && shouldIntercept) {
    event.preventDefault();

    const eventOrigin = event.view.location.origin;

    const {
      origin: linkOrigin,
      pathname: path,
      target: tabTarget,
      href,
    } = target;

    if (tabTarget && globalThis.open) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      globalThis.open(href, '_blank');
    } else if (linkOrigin === eventOrigin) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      history.push(path);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      globalThis.location.assign(href);
    }
  }
};
