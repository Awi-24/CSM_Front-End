/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',     // Extra small devices
        'sm': '576px',     // Small devices
        'md': '768px',     // Medium devices
        'lg': '1024px',    // Large devices
        'xl': '1280px',    // Extra large devices
        '2xl': '1536px',   // 2XL devices
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'abrupt-gradient': 'linear-gradient(to bottom, #0D297A 50%, white 50%)',
        'abrupt-gradient2': 'linear-gradient(to bottom, white 50%, #0D297A 50%)',
        'bg-aulas': "url('./image-aulas.png')",
        'pattern': "url('./y-so-serious-white.png')",
        'login': "url('./Login.jpg')",
      },
    },
  },
  plugins: [],
};
