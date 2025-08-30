// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "33%": { transform: "translate(-50%, -50%) scale(1.4)" },
          "66%": { transform: "translate(-50%, -50%) scale(0.8)" },
        },
      },
      animation: {
        blob: "blob 6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
