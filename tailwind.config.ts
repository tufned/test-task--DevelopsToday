import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#D0C6B5',
        secondaryLight: '#F3F1EB',
        dark: '#23262C',
        primaryVivid: '#FDC82F',
        secondaryVivid: '#DB624E',
        error: '#e14c4c'
      }
    }
  },
  plugins: []
} satisfies Config;
