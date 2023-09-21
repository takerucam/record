/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#6F6F6F',
        'border-gray': '#DADADA',
        'cyan1': '#FAFDFE',
        'cyan2': '#F2FCFD',
        'cyan3': '#E7F9FB',
        'cyan4': '#D8F3F6',
        'cyan5': '#C4EAEF',
        'cyan7': '#84CDDA',
        'cyan8': '#3DB9CF',
        'cyan9': '#05A2C2',
      },
      gridTemplate: {
        'record': [
          "year year month day time time time time lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus lastStatus" /
          "yearValue yearValue monthValue dayValue fill fill fill fill primer primer primer primer primer primer primer primer primer primer primer primer" /
          "cycle cycle cycle cycle gel gel gel gel gel gel gel gel gel gel gel gel gel gel gel gel" /
          "hand hand hand hand color color color color color color color color color color color color color color color color" /
          "option option option option option option option option option option fee fee fee fee fee saleItem saleItem saleItem saleItem saleItem"
        ],
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
}
