import Vue, { VueConstructor } from 'vue';
import { ContentTypeFactory } from './contentTypeFactory';

export const renderContentType = (Component: VueConstructor, data) => Vue.extend({
  render(createElement) {
    return createElement(Component, { props: { ...data } }, [
      data.children.map((childTreeItem, key) => createElement(ContentTypeFactory, {
        key,
        props: {
          childTreeItem,
        },
      })),
    ]);
  },
});
