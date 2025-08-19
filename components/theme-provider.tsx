"use client"

import { createContext, useContext, useEffect } from "react"

interface ThemeContextType {
  theme: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Single Black & Gold Premium theme
const themeColors = {
  primary: "#4B4B4B", // Dark warm gray (headings)
  primaryDark: "#3A3A3A", // Darker warm gray
  accent: "#B8860B", // Gold
  background: "#FAF9F6", // Ivory
  text: "#6B6B6B", // Warm taupe gray (body text)
  surface: "#F5EDE4", // Very light champagne beige
  border: "#B8860B", // Gold borders
  highlight: "#B8860B", // Gold highlights
  // Olive and Gold theme colors
  ivory: "#FAF9F6",
  champagne: "#F5EDE4",
  olive: "#556B2F", // Dark olive
  lightOlive: "#6B8E23", // Medium olive
  darkOlive: "#2F4F2F", // Dark forest green
  gold: "#B8860B", // Gold
  goldLight: "#DAA520", // Light gold
  goldDark: "#8B6914", // Dark gold
  warmGray: "#6B6B6B",
  darkWarmGray: "#4B4B4B"
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
