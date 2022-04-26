export type ContentObject = {
  contentType: unknown;
  appearance: string | null;
  children: unknown[];
  configAggregator?: Function;
};

export const createContentObject: (type: unknown, node?: HTMLElement) => ContentObject = (type, node) => ({
  contentType: type,
  appearance: node ? node.dataset?.appearance : null,
  children: [],
});
