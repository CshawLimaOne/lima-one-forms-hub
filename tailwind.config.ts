import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy:               '#1E2D5C',
        'navy-secondary':   '#78819D',
        accent:             '#1C39D8',
        'accent-hover':     '#142BB9',
        'accent-secondary': '#E5E9FF',
        bg:                 '#F4F5F7',
        'card-bg':          '#F6F7F9',
        border:             '#DFE1E5',
        disabled:           '#BCBFC7',
        success:            '#139B23',
        'success-light':    '#E1F7E4',
        error:              '#B92814',
        warning:            '#EAA800',
        'warning-light':    '#FFF5DB',
      },
      boxShadow: {
        modal: [
          '0px 2.12px 19.86px rgba(30,45,92,0.05)',
          '0px 9.48px 45.88px rgba(30,45,92,0.036)',
          '0px 23.59px 104.77px rgba(30,45,92,0.028)',
          '0px 45.93px 223.24px rgba(30,45,92,0.022)',
          '0px 78px 428px rgba(30,45,92,0.014)',
        ].join(', '),
      },
    },
  },
  plugins: [],
} satisfies Config
