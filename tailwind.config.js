/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #a8e063, #56ab2f)',
      }
      },
    },
    plugins: [],
  }