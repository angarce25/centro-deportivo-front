/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'yellow-d': '#f2e205',
      'yellow-l': '#eaf205',
      'beige': '#bf9d7e',
      'gray': '#736b62',
      'gray-l': '#f2f2f2',
      'black': '#0d0d0d',
      'white': '#f2f2f2',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Lexend', 'serif'],
    },

  theme: {
    extend: {},
  },
  plugins: [],
}
};

