module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        gorditas: ['Gorditas', 'cursive'],
        kalam: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}