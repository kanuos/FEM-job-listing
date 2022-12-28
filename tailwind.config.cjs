/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte, ts, js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        "filter-tablets": "hsl(180, 31%, 95%)",
        secondary: "hsl(180, 8%, 52%)",
        "secondary-dark": "hsl(180, 14%, 20%)",
      },
    },
    fontFamily: {
      sans: "League Spartan",
    },
  },
  plugins: [],
};
