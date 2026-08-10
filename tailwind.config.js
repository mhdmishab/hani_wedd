/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        wedding: {
          dark: "#4D300E",
          deep: "#2A1410",
          gold: "#B8923F",
          "gold-light": "#F2E5C7",
          "gold-bright": "#FDCA85",
          "gold-accent": "#D8B66A",
          bronze: "#89541C",
          "bronze-dark": "#613706",
          cream: "#FDFBF7",
          "cream-card": "#FBF2DD",
          "cream-gradient": "#F0E2C2",
        }
      },
      fontFamily: {
        vibes: ['"Great Vibes"', 'cursive'],
        cormorant: ['"Cormorant Infant"', 'serif'],
        mona: ['"Mona Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0px 0px 24px rgba(216, 182, 106, 0.35), 0px 4px 12px rgba(42, 20, 16, 0.15)',
        'card-soft': '0px 4px 12px -4px rgba(42, 20, 16, 0.15)',
        'timer-glow': '0px 12px 33px -8px rgba(184, 146, 63, 0.25), 0px 4px 12px -4px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
