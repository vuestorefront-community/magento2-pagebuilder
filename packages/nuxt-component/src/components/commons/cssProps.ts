import {
  computed, ref, toRefs,
} from '@nuxtjs/composition-api';

const { matchMedia } = window;

export const useCssProps = (props) => {
  const baseElement = ref(null);

  const stylesProps = toRefs(props);

  const image = computed(() => (props.mobileImage && matchMedia && matchMedia('(max-width: 768px)').matches ? props.mobileImage : props.desktopImage));

  const alignSelf = computed(() => {
    switch (stylesProps.appearance.value) {
      case 'align-top':
        return 'flex-start';
      case 'align-center':
        return 'center';
      case 'align-bottom':
        return 'flex-end';
      case 'full-height':
      default:
        return 'stretch';
    }
  });

  const justifyContent = computed(() => {
    switch (stylesProps.verticalAlignment.value) {
      case 'middle':
        return 'center';
      case 'bottom':
        return 'flex-end';
      case 'top':
      default:
        return 'flex-start';
    }
  });

  const backgroundImage = computed(() => {
    if (image.value && baseElement.value.current) {
      return stylesProps.backgroundSize.value === 'cover'
        ? `url(${resourceUrl(image.value, {
          type: 'image-wysiwyg',
          width: baseElement.value.current.offsetWidth,
          height: baseElement.value.current.offsetHeight,
          quality: 85,
          crop: false,
          fit: 'cover',
        })})`
        : `url(${resourceUrl(image.value, {
          type: 'image-wysiwyg',
          quality: 85,
        })})`;
    }

    return stylesProps.backgroundImage.value;
  });

  return {
    ...stylesProps,
    backgroundImage,
    alignSelf,
    justifyContent,
    baseElement,
    flexDirection: ref('column'),
    display: ref('flex'),
  };
};

export default {
  props: {
    appearance: {
      type: String,
      validator: (v: string) => [
        'align-top',
        'align-center',
        'align-bottom',
        'full-height',
      ].includes(v),
    },
    backgroundAttachment: { type: String },
    backgroundColor: { type: String },
    backgroundImage: { type: String },
    backgroundPosition: { type: String },
    backgroundRepeat: { type: String, default: 'repeat' },
    backgroundSize: { type: String },
    border: { type: String },
    borderColor: { type: String },
    borderRadius: { type: String },
    borderWidth: { type: String },
    children: { type: String },
    desktopImage: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    minHeight: { type: String },
    mobileImage: { type: String },
    paddingBottom: { type: String },
    paddingLeft: { type: String },
    paddingRight: { type: String },
    paddingTop: { type: String },
    textAlign: { type: String },
    verticalAlignment: { type: String, validator: (v: string) => ['top', 'middle', 'bottom'].includes(v) },
    width: { type: String },
  },
};
