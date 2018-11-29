const attributes = {
    heading: {
        type: 'array',
        source: 'children',
        selector: '.heading'
    },
    moreText: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    moreTextHeading: {
      type: 'string',
      selector: 'h4'
    },
    colorHeading: {
        type: 'string',
        default: '#000000'
    },
    colorHeadingBkg: {
        type: 'string',
        default: '#ffffff'
    },
    opacityHeadingBkg: {
      type: 'integer',
      default: '100'
    },
    colorMoreText: {
      type: 'string',
      default: '#000000'
    },
    colorOverlay: {
      type: 'string',
      default: '#ffffff'
    },
    opacityOverlay: {
      type: 'integer',
      default: '100'
    },
    backgroundImage: {
        type: 'string',
        default: null // default no image
    },
    backgroundImageID: {
      type: 'number'
    },
};

export default attributes;
