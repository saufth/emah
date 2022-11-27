/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem' /* 1280px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem' /* 72px */
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/core/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      /* Cairo Fonts */
      'cairo-extra-light': ['Cairo Extra Light', 'sans-serif'],
      'cairo-light': ['Cairo Light', 'sans-serif'],
      'cairo-regular': ['Cairo Regular', 'sans-serif'],
      'cairo-medium': ['Cairo Medium', 'sans-serif'],
      'cairo-semi-bold': ['Cairo Semi Bold', 'sans-serif'],
      'cairo-bold': ['Cairo Bold', 'sans-serif'],
      'cairo-black': ['Cairo Black', 'sans-serif'],
      /* TT Supermolot Neue Fonts */
      'supermolot-thin': ['TT Supermolot Neue Thin', 'sans-serif'],
      'supermolot-extra-light': ['TT Supermolot Neue Extra Light', 'sans-serif'],
      'supermolot-light': ['TT Supermolot Neue Light', 'sans-serif'],
      'supermolot-regular': ['TT Supermolot Neue Regular', 'sans-serif'],
      'supermolot-medium': ['TT Supermolot Neue Medium', 'sans-serif'],
      'supermolot-demibold': ['TT Supermolot Neue Demibold', 'sans-serif'],
      'supermolot-bold': ['TT Supermolot Neue Bold', 'sans-serif'],
      'supermolot-extra-bold': ['TT Supermolot Neue Extra Bold', 'sans-serif'],
      'supermolot-black': ['TT Supermolot Neue Black', 'sans-serif']
    },
    extend: {
      colors: {
        emah: {
          orange: '#FF6700',
          'orange-light': '#F5A130',
          'orange-dark': '#FF3600',
          blue: '#4399FF',
          'blue-dark': '#0F2B4C',
          gray: '#515151',
          dark: '#2B2B2B'
        }
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      dropShadow: {
        '3xl': '0px 4px 8px rgba(0, 0, 0, .4)'
      },
      animation: {
        loading: 'loading 1.4s infinite alternate'
      },
      keyframes: {
        loading: {
          from: {
            transform: 'scale(.99)',
            opacity: 0.3
          },
          to: {
            transform: 'scale(1)',
            opacity: 0.7
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
}
