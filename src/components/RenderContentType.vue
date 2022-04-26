<template>
  <component
    :is="component"
    v-bind="binds"
  >
    <component
      :is="child.component"
      v-for="(child, index) in binds.children"
      :key="index"
      v-bind="child"
    />
  </component>
</template>
<script>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'RenderContentType',
  setup(props) {
    const { component, ...binds } = toRefs(props);

    return {
      component,
      binds: computed(() => ({
        ...binds,
      })),
    };
  },
});
</script>
