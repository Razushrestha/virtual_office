"use client"
import React from 'react'
import { useTheme } from '../providers/ThemeProvider'

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, toggle } = useTheme()
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className={['h-9 w-9 rounded-md border border-gray-300 dark:border-gray-700 flex items-center justify-center text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition', className].join(' ')}
    >
      {resolvedTheme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}