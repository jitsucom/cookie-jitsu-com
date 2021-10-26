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

      "neutral-100": {
        DEFAULT: "var(--neutral-color-100)",
      },
      "neutral-200": {
        DEFAULT: "var(--neutral-color-200)",
      },
      "neutral-300": {
        DEFAULT: "var(--neutral-color-300)",
      },
      "neutral-500": {
        DEFAULT: "var(--neutral-color-500)",
      },
      "neutral-600": {
        DEFAULT: "var(--neutral-color-600)",
      },
      "neutral-700": {
        DEFAULT: "var(--neutral-color-700)",
      },
      "neutral-900": {
        DEFAULT: "var(--neutral-color-900)",
      },

      "primary-900": {
        DEFAULT: "var(--primary-color-900)",
      },
      "primary-500": {
        DEFAULT: "var(--primary-color-500)",
      },
      "primary-400": {
        DEFAULT: "var(--primary-color-400)",
      },
      "primary-300": {
        DEFAULT: "var(--primary-color-300)",
      },
      "primary-100": {
        DEFAULT: "var(--primary-color-100)",
      },

      "outline-success": {
        DEFAULT: "var(--outline-success-color)",
      },
      "outline-success-light": {
        DEFAULT: "var(----outline-success-color-light)",
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
    cursor: ["hover", "focus"],
    border: ["hover"],
  },
  plugins: [],
}
