import { backslashReplace } from './replaces';

export const getBackgroundImages = (html: HTMLElement) => {
  const {
    dataset: {
      backgroundImages,
    },
    style: {
      backgroundSize,
      backgroundPosition,
      backgroundAttachment,
      backgroundRepeat,
    },
  } = html;

  const baseResponse = {
    desktopImage: null,
    mobileImage: null,
    backgroundSize,
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat: backgroundRepeat || 'repeat',
  };

  if (backgroundImages) {
    const imagesStructure = backslashReplace(backgroundImages);

    if (imagesStructure.desktop_image) {
      baseResponse.desktopImage = imagesStructure.desktop_image;
    }
    if (imagesStructure.mobile_image) {
      baseResponse.mobileImage = imagesStructure.mobile_image;
    }
  }

  return baseResponse;
};
