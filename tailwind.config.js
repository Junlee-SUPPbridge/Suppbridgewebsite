module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e0ff',
          200: '#80caff',
          300: '#4db3ff',
          400: '#1a9dff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        },
        secondary: {
          50: '#e6fff2',
          100: '#b3ffdb',
          200: '#80ffc5',
          300: '#4dffae',
          400: '#1aff98',
          500: '#00e680',
          600: '#00b366',
          700: '#00804d',
          800: '#004d33',
          900: '#00261a',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-start': '#0080ff',
        'primary-end': '#00b366',
      }),
    },
  },
  plugins: [],
};