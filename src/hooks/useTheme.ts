import { useState } from 'react'

export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  function changeTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  function toggleTheme() {
    changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
