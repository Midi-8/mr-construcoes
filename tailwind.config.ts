import type { Config } from 'tailwindcss';

export default {
  content: ['./src/germany-map/**/*.{ts,tsx}'],
  important: '#germany-map-root',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
