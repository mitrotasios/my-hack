module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    'base-blue': '#1F7BE5',
    'hover-blue': '#005CC6',
    extend: {
      animation: {
        'pulse-cursor': 'pulse-cursor 1.2s steps(1, start) infinite',
        },
      keyframes: {
        'pulse-cursor': {
            '0%, 100% ': { opacity: '0' },
            '50%': { opacity: '1' }
        },
      backgroundImage: {
              'gradient-radial-bt': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        },
    },
  },
  },
  plugins: []
}

