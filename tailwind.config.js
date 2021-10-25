const colors = require("tailwindcss/colors")

function makeColors(...colors) {
  let pallete = colors.reduce((obj, color) => {
    return {
      ...obj,
      [color.replaceAll('-color', '')]: { DEFAULT: `var(--${color})` },
    }
  }, {});
  console.log('Made colors', pallete)

  return pallete;
}

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: "0.7rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...makeColors(
        "primary-color-900",
        "primary-color-500",
        "primary-color-300",

        "neutral-color-900",
        "neutral-color-500",
        "neutral-color-700",
        "neutral-color-600",
        "neutral-color-500",
        "neutral-color-300",
        "neutral-color-200",
        "neutral-color-100",

        "outline-success-color",
        "outline-success-color-light"
      )
    },
    variants: {
      display: ["responsive", "group-hover", "group-focus"],
      cursor: ["hover", "focus"],
      border: ["hover"],
    },
    plugins: [require("@tailwindcss/typography")],
  },
}
