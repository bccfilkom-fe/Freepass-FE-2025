/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jockey: ['Jockey One', 'sans-serif'],
        krona: ['Krona One', 'sans-serif'],
        lao: ['Lao Muang Khong', 'sans-serif'],
      },
    },
  },
  plugins: [],
}