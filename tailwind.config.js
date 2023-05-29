/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        footer: "1fr repeat(2, auto)",
      },
    },
  },
  plugins: [],
};
