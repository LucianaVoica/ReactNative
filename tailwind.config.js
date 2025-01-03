/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-values) / <alpha-value>)",
      },
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
        addBase({
          ":root": {
            "--color-values": "255 0 0",
            "--color-rgb": "rgb(255 0 0)",
          },
        }),
  ],
}