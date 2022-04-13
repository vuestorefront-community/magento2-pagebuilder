import { setContentTypeConfig } from './getContentTypeConfig';

const addCustomContentTypes = (contentTypes) => {
  contentTypes.forEach((contentType) => {
    const { component, configAggregator } = contentType;

    if (contentType.name && component && configAggregator) {
      setContentTypeConfig(contentType?.name || component.name, {
        component,
        configAggregator,
      });
    }
  });
};
