const theme = {
  typography: {
    h1: '2rem',
    h2: '1.3rem',
    logo: '2rem',
    h3: '1.2rem',
    p: '1.125rem', // 18px
    label: '1rem',
  },
  palette: {
    primary: {
      cyan: 'hsl(180, 66%, 49%)',
      darkViolet: 'hsl(257, 27%, 26%)',
    },
    secondary: {
      red: 'hsl(0, 87%, 67%)',
    },
    neutral: {
      gray: 'hsl(0, 0%, 75%)',
      grayishViolet: 'hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet: 'hsl(260, 8%, 14%)',
    },
  },
  borderRadius: '5px',
  paddingTB: '0.5rem 0',
  paddingTBLR: '0.5rem 0.5rem',
  margin: '0.5rem 0',
};

export default theme;

export interface Theme {
  typography: Typography;
  palette: Palette;
  borderRadius: string;
  paddingTB: string;
  paddingTBLR: string;
  margin: string;
}

export interface Palette {
  primary: Primary;
  secondary: Secondary;
  neutral: Neutral;
}

export interface Neutral {
  gray: string;
  grayishViolet: string;
  veryDarkBlue: string;
  veryDarkViolet: string;
}

export interface Primary {
  cyan: string;
  darkViolet: string;
}

export interface Secondary {
  red: string;
}

export interface Typography {
  h1: string;
  h2: string;
  logo: string;
  h3: string;
  p: string;
  label: string;
}
