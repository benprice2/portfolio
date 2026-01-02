/** @type {import('./tokens').tokens} */
export const tokens = {
  typography: {
    fonts: {
      sans: ['Inter var', 'system-ui', 'sans-serif'],
      display: ['var(--font-fraunces)', 'serif'],
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    leading: {
      tight: '1.2',
      base: '1.5',
      relaxed: '1.75',
    }
  },
  colors: {
    // Neutral palette
    gray: {
      50: '#ffffff',
      100: '#f8f9fa',
      200: '#edf0f7',
      300: '#e2e4ef',
      400: '#c8c9d9',
      500: '#9fa0b4',
      600: '#6e6f87',
      700: '#40415a',
      800: '#1f1f2e',
      900: '#0f0f1a',
    },
    // Purple accent colors
    accent: {
      purple: {
        50: '#f6f4ff',
        100: '#edebfe',
        200: '#dcd7fe',
        300: '#cabffd',
        400: '#ac94fa',
        500: '#9061f9',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#e879f9',
        400: '#d946ef',
        500: '#c026d3',
        600: '#a21caf',
        700: '#86198f',
        800: '#701a75',
        900: '#4a044e',
      }
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  }
}
