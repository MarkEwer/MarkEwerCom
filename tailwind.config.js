/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.{js,ts,jsx,tsx,vue,md,mdx}",
    "./docs/.vitepress/**/*.{js,ts,jsx,tsx,vue}",
    "./src/**/*.{js,ts,jsx,tsx,vue,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Blue color palette matching your shirt
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Light theme colors
        background: '#ffffff',
        foreground: '#0f172a',
        card: '#ffffff',
        'card-foreground': '#0f172a',
        popover: '#ffffff',
        'popover-foreground': '#0f172a',
        muted: '#f8fafc',
        'muted-foreground': '#64748b',
        accent: '#f1f5f9',
        'accent-foreground': '#0f172a',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#2563eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
