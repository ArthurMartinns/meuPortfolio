import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import meImage from '../assets/me.jpg'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function closeMenu(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeMenu)
    return () => window.removeEventListener('keydown', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#inicio"
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Ir para o início"
        >
          <span className="grid size-10 place-items-center rounded-full border border-border bg-card font-mono text-xs font-semibold tracking-wider text-accent transition-colors group-hover:border-accent">
            <img className="grid size-10 place-items-center rounded-full border border-border bg-card font-mono text-xs font-semibold tracking-wider text-accent transition-colors group-hover:border-accent" src={meImage} alt="" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">Arthur Martins</span>
            <span className="mt-1.5 text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
              Engenheiro de Software
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-2 text-sm text-muted-foreground transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform hover:text-foreground hover:after:origin-left hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              {isMenuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              ) : (
                <path d="M5 8h14M5 16h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegação mobile"
        className={`absolute inset-x-0 top-full border-b border-border bg-background px-5 transition-all duration-200 md:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="mx-auto max-w-6xl py-3">
          {navigation.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border-b border-border/60 py-4 text-sm text-muted-foreground transition-colors last:border-0 hover:text-accent"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
