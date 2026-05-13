const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'pad-x': (value) => ({
        '& > :first-child:not(:last-child):not([hidden])': {
          paddingRight: value,
        },
        '& > :not([hidden]) ~ :not([hidden]):not(:last-child)': {
          paddingRight: value,
          paddingLeft: value,
        },
        '& > :last-child:not(:first-child):not([hidden])': {
          paddingLeft: value,
        },
      }),
      'pad-y': (value) => ({
        '& > :first-child:not(:last-child):not([hidden])': {
          paddingBottom: value,
        },
        '& > :not([hidden]) ~ :not([hidden]):not(:last-child)': {
          paddingBottom: value,
          paddingTop: value,
        },
        '& > :last-child:not(:first-child):not([hidden])': {
          paddingTop: value,
        },
      }),
    },
    { values: theme('spacing') }
  );
});