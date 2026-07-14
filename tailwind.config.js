/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        modern: ["Inter", "system-ui", "sans-serif"],
        elegant: ["Playfair Display", "Georgia", "serif"],
        clean: ["Plus Jakarta Sans", "sans-serif"],
        friendly: ["Nunito", "sans-serif"],
        sophisticated: ["Montserrat", "sans-serif"],
        classic: ["Cormorant Garamond", "serif"],
      },
    },
  },
  // presets: ['@babel/preset-env'], // Adjust this as per your project
  // plugins: [
  //   '@babel/plugin-proposal-private-property-in-object',
  //   // Other plugins here
  // ],
};
