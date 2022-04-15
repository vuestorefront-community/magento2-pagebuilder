import { VueConstructor } from 'vue';
import NullComponent from '../components/NullComponent.vue';

const contentTypesConfig = {
  row: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  column: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  'column-group': {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  image: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  heading: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  text: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  tabs: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  'tab-item': {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  buttons: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  'button-item': {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  block: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  dynamic_block: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  products: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  html: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  divider: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  video: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  map: {
    configAggregator: NullComponent,
    component: NullComponent,
  },
  banner: {
    configAggregator: NullComponent,
    component: NullComponent,
    componentShimmer: NullComponent,
  },
  slider: {
    configAggregator: NullComponent,
    component: NullComponent,
    componentShimmer: NullComponent,
  },
  // Slide is just a banner wrapped inside a slider
  slide: {
    configAggregator: NullComponent,
    component: NullComponent,
    componentShimmer: NullComponent,
  },
};

export const getContentTypeConfig = (contentType) => {
  if (!contentTypesConfig[contentType]) return NullComponent;

  return contentTypesConfig[contentType];
};

export const setContentTypeConfig = (contentType, config) => {
  contentTypesConfig[contentType] = config;
};
