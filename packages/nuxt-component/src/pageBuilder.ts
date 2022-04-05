import { computed, h } from '@nuxtjs/composition-api';
import { parseHTML } from './utils/parseHtml';

export default (html: string, classes: string | string[]) => {
  const a = computed(() => parseHTML(html));
  return () => h('div', [
    ...a.value.children.map((child, i) => h('div', {
      class: classes,
      key: i,
    }, [
      h('factory', {
        props: {
          child,
        },
      }),
    ])),
  ]);
};
