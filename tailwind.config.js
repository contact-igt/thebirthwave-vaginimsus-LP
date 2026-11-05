/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#CA9585',
          dark: '#8C594A',
          deep: '#5A372C',
          light: '#E8D4C2',
          pale: '#F8EDE7',
        },
        sky: {
          DEFAULT: '#5DAEDB',
          dark: '#3A8FB8',
          light: '#EAF4FA',
        },
        coral: {
          DEFAULT: '#F88379',
          dark: '#E0655B',
          light: '#FDEBEA',
        },
        cream: {
          DEFAULT: '#FFF9F6',
          card: '#FAF1EC',
        },
        charcoal: '#2C2523',
        muted: '#665E5B',
        'border-soft': '#E7CFC2',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(202, 149, 133, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(202, 149, 133, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 16px 36px -6px rgba(202, 149, 133, 0.18), 0 6px 14px -3px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

