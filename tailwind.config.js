/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-50': '#ffffff',
        'gray-100': '#f8f9fa',
        'gray-200': '#edf0f7',
        'gray-300': '#e2e4ef',
        'gray-400': '#c8c9d9',
        'gray-500': '#9fa0b4',
        'gray-600': '#6e6f87',
        'gray-700': '#40415a',
        'gray-800': '#1f1f2e',
        'gray-900': '#0f0f1a',
        'accent-purple-50': '#f6f4ff',
        'accent-purple-100': '#edebfe',
        'accent-purple-200': '#dcd7fe',
        'accent-purple-300': '#cabffd',
        'accent-purple-400': '#ac94fa',
        'accent-purple-500': '#9061f9',
        'accent-purple-600': '#7c3aed',
        'accent-purple-700': '#6d28d9',
        'accent-purple-800': '#5b21b6',
        'accent-purple-900': '#4c1d95',
        'accent-secondary-50': '#fdf4ff',
        'accent-secondary-100': '#fae8ff',
        'accent-secondary-200': '#f5d0fe',
        'accent-secondary-300': '#e879f9',
        'accent-secondary-400': '#d946ef',
        'accent-secondary-500': '#c026d3',
        'accent-secondary-600': '#a21caf',
        'accent-secondary-700': '#86198f',
        'accent-secondary-800': '#701a75',
        'accent-secondary-900': '#4a044e'
      }
    }
  },
  plugins: []
}
