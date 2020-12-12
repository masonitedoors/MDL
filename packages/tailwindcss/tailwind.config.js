module.exports = {
  important: true,
  purge: {
    enabled: false,
    preserveHtmlElements: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#5188f3',
      blueberry: '#4d82e9',
      limerick: '#99c221',
      deepgray: '#53565a',
    },
    container: {
      center: true,
    },
    fontFamily: {
      base: ['Gotham SSm A', 'Gotham SSm B', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
    },
    lineHeight: {
      snug: 1.33,
    },
    screens: {
      sm: { max: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
    },
    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '36px',
      xl: '48px',
      xxl: '104px',
      // Number style
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '36px',
      6: '48px',
      7: '104px',
      // Tailwind naming style
      '2xs': '4px',
      sm: '16px',
      md: '24px',
      lg: '36px',
      '2xl': '104px',
    },
  },
  extend: {},
}
