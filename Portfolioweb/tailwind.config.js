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
      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,105,180,0.15)), linear-gradient(135deg, navy 0%, royalblue 40%, #8a2be2 70%, #ff69b4 100%)"
      },
    },
  },
  plugins: [],
};
