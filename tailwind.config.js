/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#242730',
          white: '#fcfcfc',
          red: '#F5425F'
        }
      },

      backgroundImage: {
        'auth-background': "url('@/assets/images/auth-bg.svg')"
      }
    }
  },
  plugins: []
}
