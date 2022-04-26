<script>
import { defineComponent, h } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'NuxtNullComponent',
  setup() {
    return () => h();
  },
});
</script>
