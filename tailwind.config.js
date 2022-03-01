module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    screens: {
      md: '768px',
      lg: '1152px',
      xl: '1440px',
    },
  },
  plugins: [],
};
