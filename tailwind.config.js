/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your framework
  ],
  theme: {
    extend: {
      animation: {
        myBounce: "bounce 5s infinite alternate",
      },
      
    },
  },
  plugins: [],
};
