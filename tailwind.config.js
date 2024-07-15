const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/ui/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSansItalic: ['var(--dmsans-italic-font)', ...fontFamily.sans],
        dmSans: ['var(--dmsans-font)', ...fontFamily.sans],
        dmSansBold: ['var(--dmsans-bold-font)', ...fontFamily.sans],
        jura: ['var(--jura-font)', ...fontFamily.sans],
        switzerFont: ['var(--switzer-font)', ...fontFamily.sans],
        switzerItalic: ['var(--switzer-italic-font)', ...fontFamily.sans],
      },
      colors: {
        bitcoinWildlifeYellow: '#FBFF69',
        bitcoinWildlifeBlack: '#121316',
        bitcoinWildlifeGrey: '#CDD3E0',
        bitcoinWildlifeBgBlack: '#16181C',
        bitcoinWildlifeNavBlack: '#16181C',
        bitcoinWildlifeBgBlack200: '#24262B'
      }

    },
  },
  plugins: [],
};
