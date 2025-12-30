/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // On définit nos couleurs sémantiques
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cyan: {
          400: "#00f7ff", // Notre cyan électrique
          500: "#00e1eb",
        },
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        scrolldown: "scrolldown 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scrolldown: {
          "0%": { top: "-50%", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { top: "100%", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
