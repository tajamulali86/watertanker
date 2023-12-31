/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'primary': '#135AA9',
    //   'secondary': '#666666',
    //   // 'midnight': '#121063',
    //   // 'metal': '#565584',
    //   // 'tahiti': '#3ab7bf',
    //   // 'silver': '#ecebff',
    //   // 'bubble-gum': '#ff77e9',
    //   // 'bermuda': '#78dcca',
    // },
  },
  plugins: [],
}
