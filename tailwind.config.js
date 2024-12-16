import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      button: {
        variants: {
          ghost: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
  plugins: [scrollbarHide],
}

