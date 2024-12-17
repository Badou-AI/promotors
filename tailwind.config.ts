import type { Config } from "tailwindcss"
// @ts-expect-error -- importing CommonJS module
import scrollbarHideModule from 'tailwind-scrollbar-hide'
// Convert CommonJS module to ESM
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollbarHide = (scrollbarHideModule as any).default || scrollbarHideModule

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
  plugins: [scrollbarHide],
} satisfies Config

export default config

