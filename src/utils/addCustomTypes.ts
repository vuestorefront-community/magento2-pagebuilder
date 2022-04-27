import { setContentTypeConfig } from './getContentTypeConfig';
import { ContentObject } from './createContentObject';

const addCustomContentTypes = (contentTypes: ContentObject[]) => {
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
