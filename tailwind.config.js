/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = ["./index.html", "./src/**/*.{ts,tsx}"];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },

  extend: {
    textColor: {
      default: "var(--text-color-default)",
    },
    colors: {
      orange: {
        DEFAULT: "var(--orange-primary)",
        primary: "var(--orange-primary)",
      },
      gray: {
        DEFAULT: "var(--gray-primary)",
        primary: "var(--gray-primary)",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};
