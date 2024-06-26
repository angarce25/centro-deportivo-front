import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
  daisyui,
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'yellow-d': '#f2e205',
        'yellow-l': '#eaf205',
        'yellow-2': '#f2e205',
        'purple': '#653AA5',
        'beige': '#bf9d7e',
        'gray': '#736b62',
        'gray-l': '#f2f2f2',
        'dark-gray': '#4B5F5F',
        'black': '#0d0d0d',
        'white': '#f2f2f2',
        'custom-blue': '#142740', 
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lexend', 'serif'],
      },
    },
  },
  
};
