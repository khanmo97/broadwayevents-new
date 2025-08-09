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
        // Gradient spectrum based on R178 G168 B117 (#B2A875)
        primary: {
          DEFAULT: "#4a453a", // Dark olive-brown
          50: "#faf9f7",
          100: "#f3f1ec",
          200: "#e6e2d6",
          300: "#d4ceb8",
          400: "#beb594",
          500: "#a69b73",
          600: "#8f8460",
          700: "#756b4f",
          800: "#5f5643",
          900: "#4a453a",
        },
        accent: {
          DEFAULT: "#f8f7f4", // Very light warm cream
          50: "#fdfcfa",
          100: "#f8f7f4",
          200: "#f1efe8",
          300: "#e8e4d8",
          400: "#dbd5c4",
          500: "#cbc3ad",
          600: "#b8ad93",
          700: "#a0947a",
          800: "#857a65",
          900: "#6d6354",
        },
        gold: {
          DEFAULT: "#B2A875", // Your exact color
          50: "#f7f6f1",
          100: "#eeebe0",
          200: "#ddd6c1",
          300: "#c8bd9a",
          400: "#B2A875", // Your base color
          500: "#a39865",
          600: "#8d8154",
          700: "#756a46",
          800: "#61563c",
          900: "#524834",
          950: "#2f2820",
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
