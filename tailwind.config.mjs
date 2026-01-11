/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // iOS 26 Liquid Glass palette
        glass: 'rgba(255, 255, 255, 0.12)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
        primary: '#007AFF',
        secondary: '#5856D6',
        accent: '#34C759',
        pink: '#FF2D55',
        orange: '#FF9500',
        // Legacy Parallax green
        parallax: '#9DD745'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'sans-serif']
      },
      backdropBlur: {
        glass: '40px'
      }
    }
  },
  plugins: []
};
