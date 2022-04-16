<template>
  <div
    :ref="baseElement"
    :style="dynamicStyles"
    :class="cssClasses"
  >
    {{ children }}
  </div>
</template>
<script>
import {
  defineComponent,
  toRefs,
} from '@nuxtjs/composition-api';
import cssProps, { useCssProps } from '../../commons/cssProps';
import classesProps from '../../commons/classesProps';

export default defineComponent({
  name: 'MagentoColumn',
  props: {
    ...cssProps,
    ...classesProps,
  },
  setup(props) {
    const {
      children,
      cssClasses,
    } = toRefs(props);
    const { baseElement, ...dynamicStyles } = useCssProps(props);

    return {
      children,
      cssClasses,
      baseElement,
      dynamicStyles,
    };
  },
});
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  .root {
    background-attachment: scroll !important;
    flex-basis: 100%;
  }
}
</style>
