/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {fontFamily: {
          poppins: ["Poppins_400Regular"],
                    "poppins-bold": ["Poppins_700Bold"],
       },
    },
  },
  plugins: [],
};
