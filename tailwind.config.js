/** @type {import('tailwindcss').Config} */
module.exports = {
  themes: ["light", "dark", "cupcake"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      },
    },
  },

  plugins: [require("daisyui")],
};
