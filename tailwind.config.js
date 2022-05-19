module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#358DDE',
        secondary: '#3372AD',
        primaryDark: '#1D2433',
        secondaryDark: '#171C28',
      },
    },
  },
  plugins: [],
};
