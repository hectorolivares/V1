/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': [ 'Inter', 'ui-sans-serif', 'system-ui' ],
      'mono': [ 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular' ],
    },
    extend: {
      colors: {
        'my-lila': '#641BFF',
        'my-bg': '#0D0C12',
      },
      keyframes: {
        clipboard: {
          '0%, 100%': { top: '95%', opacity: '0' },
          '5%, 95%' : { top: '88%', opacity: '1' },
        }
      },
      animation: {
        clipboard: 'clipboard 4s ease-in-out',
      }
    },
    screens: {
      'mobile': '414px',
      // => @media (min-width: 414px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1000px',
      // => @media (min-width: 1000px) { ... }

      'desktop': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [],
}