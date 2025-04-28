import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: '#E6F0FF',
        input: '#0EA5E9',
        ring: '#0EA5E9',
        background: '#E6F0FF',
        foreground: '#212529',
        primary: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F0F7FF',
          foreground: '#212529'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: '#F0F7FF',
          foreground: '#333333'
        },
        accent: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#212529'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#212529'
        },
        'button-start': '#9b87f5',
        'button-end': '#1EAEDB'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'button-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-x': 'button-gradient 3s ease infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
