import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				brand: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95'
				}
			},
			backgroundImage: {
				'gradient-hero': 'linear-gradient(105deg,#3b82f6 0%,#8b5cf6 40%,#9333ea 100%)',
				'gradient-soft': 'linear-gradient(135deg,#eef2ff 0%,#f5f3ff 100%)'
			},
			boxShadow: {
				'soft-lg': '0 8px 30px rgba(0,0,0,0.06)',
				'glow': '0 0 0 1px rgba(139,92,246,0.3), 0 8px 30px -4px rgba(139,92,246,0.4)'
			},
			keyframes: {
				gradientMove: {
					'0%,100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				float: {
					'0%,100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				pulseSoft: {
					'0%,100%': { opacity: '0.55' },
					'50%': { opacity: '0.9' }
				}
			},
			animation: {
				'gradient-move': 'gradientMove 8s ease infinite',
				'float': 'float 5s ease-in-out infinite',
				'pulse-soft': 'pulseSoft 6s ease-in-out infinite'
			}
		}
	},
	plugins: []
}

export default config
