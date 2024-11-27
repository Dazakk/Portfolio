/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Imposta Poppins come font principale
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4BAFE2',
        secondary: '#7CC1E4',
      },
    },
  },
  plugins: [],
}
