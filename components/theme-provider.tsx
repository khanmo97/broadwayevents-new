"use client"

import { createContext, useContext, useEffect } from "react"

interface ThemeContextType {
  theme: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Single Black & Gold Premium theme
const themeColors = {
  primary: "#000000", // Matte black (main brand color)
  primaryDark: "#0A0A0A", // Darker black
  accent: "#1A1A1A", // Dark gray
  background: "#000000", // Pure black
  text: "#FFFFFF", // Pure white text
  gold: "#FFD700", // Metallic gold
  goldLight: "#FFED4A", // Light gold
  goldDark: "#B8860B", // Dark gold
  surface: "#111111", // Dark surface
  border: "#FFD700", // Gold borders
  highlight: "#FFD700", // Gold highlights
  // Premium theme colors
  black: "#000000",
  darkGray: "#1A1A1A",
  lightGray: "#333333",
  white: "#FFFFFF",
  metallicGold: "#FFD700",
  darkGold: "#B8860B",
  neonGold: "#FFED4A"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply theme colors to CSS custom properties
    const root = document.documentElement
    
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
    
    // Apply theme class
    root.className = "theme-olive-gold"
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: "olive-gold" }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { themeColors }
