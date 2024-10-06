'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const themeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex items-center">
      <button
        className="relative mr-6"
        onClick={handleThemeToggle}
        aria-label="Toggle theme">
        {/* Sun Icon for Light Theme */}
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
        {/* Moon Icon for Dark Theme */}
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}

export default themeToggle
