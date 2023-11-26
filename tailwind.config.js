/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mybrown': '#c48f61',
        'myblack':'#111828',
        'mygreen': '#58b958',
        'myred':'#f03d5b'
      },
      fontFamily: {
        'gothik': ['Didact Gothic', 'sans-serif'],
        'popins':['Poppins', 'sans-serif'],
        'cinzel':['Cinzel', 'serif'],
        'satisfy':['Satisfy', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

