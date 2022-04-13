import { nullComponent } from '../components/nullComponent';

const contentTypesConfig = {
  row: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  column: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  'column-group': {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  image: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  heading: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  text: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  tabs: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  'tab-item': {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  buttons: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  'button-item': {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  block: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  dynamic_block: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  products: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  html: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  divider: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  video: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  map: {
    configAggregator: nullComponent,
    component: nullComponent,
  },
  banner: {
    configAggregator: nullComponent,
    component: nullComponent,
    componentShimmer: nullComponent,
  },
  slider: {
    configAggregator: nullComponent,
    component: nullComponent,
    componentShimmer: nullComponent,
  },
  // Slide is just a banner wrapped inside a slider
  slide: {
    configAggregator: nullComponent,
    component: nullComponent,
    componentShimmer: nullComponent,
  },
};

export const getContentTypeConfig = (contentType) => {
  if (!contentTypesConfig[contentType]) return nullComponent;

  return contentTypesConfig[contentType];
};

export const setContentTypeConfig = (contentType, config) => (contentTypesConfig[contentType] = config);
