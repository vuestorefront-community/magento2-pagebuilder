import Vue from 'vue';

export default Vue.extend({
  name: 'Suspense',
  data: () => ({
    resolved: false,
  }),
  async created() {
    const setupMethod = (this.$parent as any).setup;
    if (!setupMethod) return;

    await setupMethod();
    this.resolved = true;
  },
  render(createElement) {
    return createElement(
      'div',
      this.resolved ? this.$slots.default : this.$slots.fallback,
    );
  },
});
