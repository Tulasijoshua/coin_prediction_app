/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ss': '350px',

      'xs': '475px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ml': '878px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'jh': '1150px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } 

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

