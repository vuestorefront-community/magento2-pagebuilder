<template>
  <div>
    <content-type-factory
      v-for="(child, index) in parsedHtml"
      :key="index"
      v-bind="child"
    />
  </div>
</template>
<script>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';
import { parseHTML } from '../utils/parseHtml';
import ContentTypeFactory from './ContentTypeFactory.vue';

export default defineComponent({
  name: 'PageBuilder',
  components: {
    ContentTypeFactory,
  },
  props: {
    content: {
      type: String,
      required: true,
      validator: (c) => c && typeof c === 'string',
    },
    htmlClass: {
      type: [Array, String],
      required: true,
    },
  },
  setup(props) {
    const { htmlClass, content } = toRefs(props);

    return {
      parsedHtml: computed(() => parseHTML(content.value)),
      classes: computed(() => htmlClass.value),
    };
  },
});
</script>
