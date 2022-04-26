<template>
  <div>
    <slot v-if="resolved" />
    <slot
      v-else
      name="fallback"
    />
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Suspense',
  async setup(props, ctx) {
    const resolved = ref(false);
    const setupMethod = ctx.$parent?.setup;

    if (!setupMethod) return;

    await setupMethod();

    resolved.value = true;

    // eslint-disable-next-line consistent-return
    return {
      resolved: computed(() => resolved.value),
    };
  },
});
</script>
