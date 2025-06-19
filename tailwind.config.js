/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // ✅確認正確掃描路徑
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'drop': 'dropDown 1.5s ease-out forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        
        dropDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(200px)', opacity: '0' },
        },

        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    }
  },
  plugins: [],
  }