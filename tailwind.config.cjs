/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      keyframes: {
        bgBreathing: {
          '0%': { backgroundColor: '#fdd609' },
          '20%': { backgroundColor: '#9a8302' },
          '50%': { backgroundColor: '#fdd609' },
          '80%': { backgroundColor: '#fde76f' },
          '100%': { backgroundColor: '#fdd609' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(5rem)' },
        }
      },
      animation: {
        bgBreathing: 'bgBreathing 15s infinite',
        fadeIn: 'fadeIn 1.5s forwards',
        fadeOut: 'fadeOut 1.5s forwards',
      },
      boxShadow: {
        'focus': '0 0 10px rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], // Add Montserrat. The 'sans-serif' is a fallback.
      }
    }
	},

	plugins: []
};

module.exports = config;
