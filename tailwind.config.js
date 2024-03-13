/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      PrimaryGreen: 'hsl(75, 94%, 57%)',
      DarkGrey: 'hsl(0, 0%, 12%)',
      Grey: 'hsl(0, 0%, 20%)',
      OffBlack: 'hsl(0, 0%, 8%)',
      White: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      Kumbh: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

