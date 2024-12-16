import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mulish: ['var(--font-mulish)'],
        'chakra-petch': ['var(--font-chakra-petch)'],
      },
      fontSize: {
        'body': ['18px', {
          lineHeight: '26px',
          letterSpacing: '0px',
        }],
      },
      colors: {
        'body-text': 'var(--body-text-color)',
      },
    },
  },
} satisfies Config

export default config

