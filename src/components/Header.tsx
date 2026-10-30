import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0
    const sections = ['#inicio', ...navigation.map(item => item.href)]
      .map(id => document.getElementById(id.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    function updateSection() {
      frame = 0
      let current = '#inicio'
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) current = `#${section.id}`
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = '#contato'
      }
      setActiveSection(current)
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateSection)
    }

    updateSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <a href="#inicio" className={styles.signature} aria-label="Arthur Martins — ir para o início" onClick={() => setIsMenuOpen(false)}>
          arthur<span className={styles.slash} aria-hidden="true">/</span><span>martins<b>.</b></span>
        </a>
        <nav id="header-navigation" aria-label="Navegação principal" className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`} onBlur={event => {
          if (event.relatedTarget instanceof Node && !headerRef.current?.contains(event.relatedTarget)) setIsMenuOpen(false)
        }}>
          <ul>
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} aria-current={activeSection === item.href ? 'location' : undefined} className={item.href === '#contato' ? styles.contact : styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                  <span>{item.label}</span>
                  {item.href === '#contato' && <ArrowUpRight size={16} aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.controls}>
          <ThemeToggle />
          <button ref={menuButtonRef} type="button" className={styles.menuButton} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="header-navigation" onClick={() => setIsMenuOpen(open => !open)}>
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
