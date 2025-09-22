import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2.5rem',
				xl: '3rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				// Responsive typography
				'responsive-xs': ['0.75rem', { lineHeight: '1rem' }],
				'responsive-sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'responsive-base': ['1rem', { lineHeight: '1.5rem' }],
				'responsive-lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'responsive-xl': ['1.25rem', { lineHeight: '1.75rem' }],
			},
			spacing: {
				'responsive': 'clamp(1rem, 4vw, 2rem)',
				'responsive-sm': 'clamp(0.5rem, 2vw, 1rem)',
				'responsive-lg': 'clamp(2rem, 6vw, 4rem)',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)'
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
                                'glow-pulse': {
                                        '0%, 100%': { boxShadow: '0 0 20px hsl(220 85% 65% / 0.3)' },
                                        '50%': { boxShadow: '0 0 40px hsl(220 85% 65% / 0.6)' }
                                },
                                'news-ticker': {
                                        '0%': { transform: 'translateX(0)' },
                                        '100%': { transform: 'translateX(-50%)' }
                                },
                                'slide-up': {
                                        '0%': { opacity: '0', transform: 'translateY(20px)' },
                                        '100%': { opacity: '1', transform: 'translateY(0)' }
                                },
                                'scale-in': {
                                        '0%': { opacity: '0', transform: 'scale(0.95)' },
                                        '100%': { opacity: '1', transform: 'scale(1)' }
                                }
                        },
                        animation: {
                                'accordion-down': 'accordion-down 0.2s ease-out',
                                'accordion-up': 'accordion-up 0.2s ease-out',
                                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                                'slide-up': 'slide-up 0.5s ease-out',
                                'scale-in': 'scale-in 0.3s ease-out',
                                'news-ticker': 'news-ticker 24s linear infinite'
                        }
                }
        },
        plugins: [tailwindcssAnimate],
} satisfies Config;
