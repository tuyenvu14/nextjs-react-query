import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#F59E0B',
        primary: '#1F2937',
        secondary: '#C4C4C4',
        default: '#1F2937',
        border: '#E5E5E5'
      },
    },
  },
  plugins: [],
}
export default config
