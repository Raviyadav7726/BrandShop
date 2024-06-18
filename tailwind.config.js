/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '0.5sm': '400px',
      '0.8sm': '500px',
      '0.9sm' : '550px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      '1.5md': '850px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '0.5xl': '1135px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1.5xl':'1405px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundBlendMode: {
        'color-burn': 'color-burn',
      },
      fontFamily: {
        custom: ["Custom Font", "sans-serif"],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'scaleY(0)'
            },
            '100%': {
                opacity: '1',
                transform: 'scaleY(1)'
            },
        },
        'fade-in-right': {
          '0%': {
              opacity: '0',
            transform: 'scaleX(0)'
              
          },
          '100%': {
              opacity: '1',
              transform: 'scaleX(1)'
          },          
        },
        'fade-out': {
          '0%': {
            opacity: '0',
            
          },
          '100%': {
            opacity: '1',
            
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-down-nav': 'fade-in-down 1s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out'
      }
    },
  },
  plugins: [],
};

