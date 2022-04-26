<template>
  <null-component
    v-if="isHidden"
  />
  <suspense
    v-else
  >
    <render-content-type
      :component="contentTypeConfig.component"
      v-bind="binds"
    />
    <template #fallback>
      <render-content-type
        v-if="contentTypeConfig.componentShimmer"
        :component="contentTypeConfig.componentShimmer"
        v-bind="binds"
      />
      <null-component v-else />
    </template>
  </suspense>
</template>
<script>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';
import { getContentTypeConfig } from '../utils/getContentTypeConfig';
import NullComponent from './NullComponent.vue';
import Suspense from './Suspense.vue';
import RenderContentType from './RenderContentType.vue';

export default defineComponent({
  name: 'ContentTypeFactory',
  components: {
    NullComponent,
    Suspense,
    RenderContentType,
  },
  setup(props) {
    const { isHidden, ...binds } = toRefs(props);

    return {
      isHidden,
      binds,
      contentTypeConfig: computed(() => getContentTypeConfig(binds.contentType.value)),
    };
  },
});
</script>
