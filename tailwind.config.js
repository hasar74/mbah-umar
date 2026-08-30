/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#F3EEDD",
          dark: "#E8E0C8",
        },
        ink: {
          DEFAULT: "#12261C",
          light: "#1F3D2B",
          soft: "#2C4A37",
        },
        gold: {
          DEFAULT: "#C9A227",
          soft: "#E4C766",
        },
        maroon: "#7A2E2E",
      },
      fontFamily: {
        display: ["'Amiri'", "serif"],
        serif: ["'Lora'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "rope-line":
          "repeating-linear-gradient(180deg, transparent, transparent 6px, rgba(201,162,39,0.55) 6px, rgba(201,162,39,0.55) 10px)",
      },
    },
  },
  plugins: [],
};
