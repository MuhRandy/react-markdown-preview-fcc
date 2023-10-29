/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    hljs: {
      theme: "night-owl",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-highlightjs"),
  ],
};
