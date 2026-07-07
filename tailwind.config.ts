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
			fontFamily: {
				'space': ['Space Grotesk', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: '#374151',
				input: '#374151',
				ring: '#2563EB',
				background: '#0B1220',
				foreground: '#F9FAFB',
				primary: {
					DEFAULT: '#2563EB',
					foreground: '#F9FAFB'
				},
				secondary: {
					DEFAULT: '#3B82F6',
					foreground: '#F9FAFB'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#111827',
					foreground: '#D1D5DB'
				},
				accent: {
					DEFAULT: '#1D4ED8',
					foreground: '#F9FAFB'
				},
				popover: {
					DEFAULT: '#0B1220',
					foreground: '#F9FAFB'
				},
				card: {
					DEFAULT: '#1F2937',
					foreground: '#F9FAFB'
				},
				success: {
					DEFAULT: '#10B981',
					foreground: '#F9FAFB'
				},
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'gradient-x': {
					'0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
					'50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
				},
				'pulse-glow': {
					'0%, 100%': { 'box-shadow': '0 0 20px rgba(37, 99, 235, 0.3)' },
					'50%': { 'box-shadow': '0 0 40px rgba(37, 99, 235, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'gradient-x': 'gradient-x 15s ease infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
