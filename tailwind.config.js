const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
        fluids: "repeat(auto-fit, minmax(15rem, 1fr))"
      },
    keyframes: {
      marqx: {
        from: {transform: 'translateX(0)'},
        to: {transform: 'translateX(-40%)'}
      }
    },
    animation: {
      marquee: 'marqx 15s linear infinite'
    }
    },
  },
  plugins: [],
}
