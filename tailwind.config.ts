import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        // Theme-aware colors using CSS variables
        primary: {
          DEFAULT: "var(--color-primary, #000000)",
          50: "var(--color-accent, #1A1A1A)",
          100: "var(--color-accent, #1A1A1A)",
          200: "var(--color-lightGray, #333333)",
          300: "var(--color-lightGray, #333333)",
          400: "var(--color-gold, #FFD700)",
          500: "var(--color-gold, #FFD700)",
          600: "var(--color-goldDark, #B8860B)",
          700: "var(--color-goldDark, #B8860B)",
          800: "var(--color-primaryDark, #0A0A0A)",
          900: "var(--color-text, #FFFFFF)",
        },
        accent: {
          DEFAULT: "var(--color-accent, #1A1A1A)",
          50: "var(--color-accent, #1A1A1A)",
          100: "var(--color-accent, #1A1A1A)",
          200: "var(--color-accent, #1A1A1A)",
          300: "var(--color-accent, #1A1A1A)",
          400: "var(--color-accent, #1A1A1A)",
          500: "var(--color-accent, #1A1A1A)",
          600: "var(--color-accent, #1A1A1A)",
          700: "var(--color-accent, #1A1A1A)",
          800: "var(--color-accent, #1A1A1A)",
          900: "var(--color-accent, #1A1A1A)",
        },
        gold: {
          DEFAULT: "var(--color-gold, #FFD700)",
          50: "var(--color-accent, #1A1A1A)",
          100: "var(--color-accent, #1A1A1A)",
          200: "var(--color-goldLight, #FFED4A)",
          300: "var(--color-goldLight, #FFED4A)",
          400: "var(--color-gold, #FFD700)",
          500: "var(--color-gold, #FFD700)",
          600: "var(--color-goldDark, #B8860B)",
          700: "var(--color-goldDark, #B8860B)",
          800: "var(--color-primaryDark, #0A0A0A)",
          900: "var(--color-text, #FFFFFF)",
        },
        metallicGold: {
          DEFAULT: "var(--color-metallicGold, #FFD700)",
          50: "var(--color-neonGold, #FFED4A)",
          100: "var(--color-neonGold, #FFED4A)",
          200: "var(--color-metallicGold, #FFD700)",
          300: "var(--color-metallicGold, #FFD700)",
          400: "var(--color-metallicGold, #FFD700)",
          500: "var(--color-metallicGold, #FFD700)",
          600: "var(--color-darkGold, #B8860B)",
          700: "var(--color-darkGold, #B8860B)",
          800: "var(--color-darkGold, #B8860B)",
          900: "var(--color-darkGold, #B8860B)",
        },
        // Keep shadcn/ui variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: {
        "theme-bg": "var(--color-background, #000000)",
        "theme-accent": "var(--color-accent, #1A1A1A)",
        "theme-olive": "var(--color-metallicGold, #FFD700)",
        "theme-surface": "var(--color-surface, #111111)",
        "darkGray": "var(--color-darkGray, #1A1A1A)",
        "lightGray": "var(--color-lightGray, #333333)",
      },
      textColor: {
        "theme-text": "var(--color-text, #FFFFFF)",
        "theme-primary": "var(--color-primary, #000000)",
        "theme-olive": "var(--color-metallicGold, #FFD700)",
        "theme-highlight": "var(--color-highlight, #FFD700)",
        "metallicGold": "var(--color-metallicGold, #FFD700)",
        "neonGold": "var(--color-neonGold, #FFED4A)",
      },
      borderColor: {
        "theme-border": "var(--color-border, #FFD700)",
        "theme-olive": "var(--color-metallicGold, #FFD700)",
        "metallicGold": "var(--color-metallicGold, #FFD700)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B2A875, #c8bd9a, #a39865)",
        "warm-gradient": "linear-gradient(135deg, #f8f7f4, #eeebe0, #ddd6c1)",
        "luxury-gradient": "linear-gradient(135deg, #B2A875 0%, #a39865 25%, #8d8154 50%, #756a46 75%, #61563c 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
