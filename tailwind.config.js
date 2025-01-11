/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include Vite's `index.html`
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your component files
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000",
      "white-light": "rgba(255, 255, 255, .5)",
      "gray-white": "rgba(255, 255, 255, .7)",
      "gray-light": "rgba(0, 0, 0, .5)",
      gray: "rgba(0, 0, 0, .7)",
      transparent: "transparent",
    },
  },

  plugins: [],
};
