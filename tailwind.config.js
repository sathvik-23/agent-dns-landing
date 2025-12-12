/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
          bg: 'rgba(59, 130, 246, 0.2)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          lighter: '#1f1f1f',
          lightest: '#2a2a2a',
        },
        success: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          bg: 'rgba(34, 197, 94, 0.15)',
          border: 'rgba(34, 197, 94, 0.3)',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fca5a5',
          bg: 'rgba(239, 68, 68, 0.1)',
          bgDark: 'rgba(239, 68, 68, 0.15)',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          bg: 'rgba(245, 158, 11, 0.2)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        card: 'rgba(255, 255, 255, 0.03)',
        'card-hover': 'rgba(255, 255, 255, 0.05)',
        input: 'rgba(255, 255, 255, 0.05)',
      },
      borderColor: {
        default: 'rgba(255, 255, 255, 0.1)',
        hover: 'rgba(255, 255, 255, 0.2)',
        focus: '#3b82f6',
      },
    },
  },
  plugins: [],
}



