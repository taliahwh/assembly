import '../styles/index.css';

const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
};

const FONT = {
  sans: 'Inter',
  mono: 'JetBrains+Mono',
};

const FONT_WEIGHT = {
  regular: '400',
  semibold: '600',
  bold: '700',
};

const SIZES = {
  footer: '10px',
  caption: '12px',
  paragraph_03: '18px',
  paragraph_02: '16px',
  paragraph_01: '14px',
  subheading: '20px',
  heading_06: '19px',
  heading_05: '23px',
  heading_04: '28px',
  heading_03: '33px',
  heading_02: '39px',
  heading_01: '48px',
  display_02: '60px',
  display_01: '77px',
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, FONT_WEIGHT, SIZES, SHADOWS };
