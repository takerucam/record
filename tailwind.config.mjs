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
        'pink2': '#FFF7FC',
        'pink3': '#FEEEF8',
        'pink4': '#FCE5F3',
        'pink5': '#F9D8EC',
        'pink7': '#ECADD4',
        'pink8': '#E38EC3',
        'pink9': '#D6409F',
        'amber2': '#FFF9ED',
        'amber3': '#FFF4D5',
        'amber4': '#FFECBC',
        'amber5': '#FFE3A2',
        'amber7': '#F3BA63',
        'amber8': '#EE9D2B',
        'amber9': '#FFB224',
        'grass2': '#F3FCF3',
        'grass3': '#EBF9EB',
        'grass4': '#DFF3DF',
        'grass5': '#CEEBCF',
        'grass7': '#97CF9',
        'grass8': '#65BA75',
        'grass9': '#46A758',
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
