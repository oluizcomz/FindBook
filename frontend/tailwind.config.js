/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        evergreen: '#2B4341',
        'evergreen-light': '#2AA78D',
        gray: '#6F7373',
      },
    },
  },
  plugins: [],
}

