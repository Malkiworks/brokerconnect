/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Futurism Color Palette
        'neo-black': '#0B0B0E', // Primary dark background
        'midnight': '#121420', // Slightly lighter sections/cards
        'cyber-blue': '#4CC9F0', // Primary accent color
        'neon-purple': '#7209B7', // Secondary accent
        'neon-pink': '#F72585', // Highlight accent
        'deep-purple': '#3A0CA3', // Alternate accent
        'electric-indigo': '#4361EE', // Button/interactive elements
        'cyber-teal': '#06D6A0', // Success/positive elements
        'space-gray': '#2B2D42', // Neutral darker gray
        'tech-silver': '#8D99AE', // Text on dark background
        'ghost-white': '#EDF2F4', // Light text color
        
        // Legacy Colors (keeping for backward compatibility)
        neutral: {
          950: '#0a0a0a',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
        },
        // Original site colors mapped to new scheme
        'charcoal': '#0B0B0E', // Map to neo-black
        'paynes-gray': '#8D99AE', // Map to tech-silver
        'light-blue': '#4CC9F0', // Map to cyber-blue
        'ghost-white': '#EDF2F4' // Keep the same
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #4CC9F0, #4361EE, #3A0CA3, #7209B7, #F72585)',
        'dark-gradient': 'radial-gradient(circle at center, #121420, #0B0B0E)',
        'glow-gradient': 'radial-gradient(circle, rgba(76, 201, 240, 0.3), rgba(11, 11, 14, 0))',
        'radial-gradient': 'radial-gradient(circle, #ffffff80, #d4d4d4)',
      },
      boxShadow: {
        'neon-glow': '0 0 5px #4CC9F0, 0 0 20px rgba(76, 201, 240, 0.3)',
        'purple-glow': '0 0 5px #7209B7, 0 0 20px rgba(114, 9, 183, 0.3)',
        'pink-glow': '0 0 5px #F72585, 0 0 20px rgba(247, 37, 133, 0.3)',
      },
    },
  },
  plugins: [],
} 