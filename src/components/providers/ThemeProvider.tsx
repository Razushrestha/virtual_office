"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'
interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  toggle: () => void
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider: React.FC<{ children: React.ReactNode; defaultTheme?: Theme }> = ({ children, defaultTheme = 'system' }) => {
  const [theme, setTheme] = useState<Theme>(() => (typeof window === 'undefined' ? defaultTheme : (localStorage.getItem('theme') as Theme) || defaultTheme))
  const [resolved, setResolved] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const active = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme
    root.classList.toggle('dark', active === 'dark')
    setResolved(active)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return <ThemeContext.Provider value={{ theme, resolvedTheme: resolved, toggle, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}