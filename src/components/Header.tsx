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

  const linkBase = 'group relative flex min-h-[58px] items-center justify-start gap-2 rounded-[10px] px-[18px] py-3.5 text-lg leading-[1.5] tracking-[-.025em] no-underline transition-colors duration-200 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none md:min-h-[42px] md:justify-center md:px-3.5 md:py-2.5 md:text-xs md:tracking-normal md:max-[901px]:px-2.5'

  return (
    <header ref={headerRef} className="sticky top-0 z-50 px-3 pt-2.5 md:px-6 md:pt-3.5">
      <div className="relative mx-auto flex min-h-16 max-w-[1104px] items-center gap-2 rounded-2xl border border-border bg-background/92 py-[9px] pr-2.5 pl-4 shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] backdrop-blur-[20px] md:min-h-[66px] md:gap-6 md:rounded-[18px] md:py-2.5 md:pr-4 md:pl-6 md:max-[901px]:gap-3 md:max-[901px]:pl-[18px]">
        <a href="#inicio" className="group mr-auto inline-flex shrink-0 items-baseline rounded-lg text-[19px] leading-[1.2] font-semibold tracking-[-.065em] text-foreground no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-xl" aria-label="Arthur Martins — ir para o início" onClick={() => setIsMenuOpen(false)}>
          arthur<span className="mx-1.5 font-normal text-accent transition-transform duration-200 group-hover:-rotate-15 motion-reduce:transform-none motion-reduce:transition-none md:mx-2" aria-hidden="true">/</span><span>martins<b className="font-[inherit] text-accent">.</b></span>
        </a>
        <nav id="header-navigation" aria-label="Navegação principal" className={`absolute inset-x-0 top-[calc(100%+8px)] max-h-[calc(100dvh-110px)] overflow-y-auto rounded-2xl border border-border bg-background p-2.5 shadow-[0_16px_32px_rgb(0_0_0_/_0.1)] md:static md:block md:max-h-none md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${isMenuOpen ? styles.menuEnter + ' block' : 'hidden'}`} onBlur={event => {
          if (event.relatedTarget instanceof Node && !headerRef.current?.contains(event.relatedTarget)) setIsMenuOpen(false)
        }}>
          <ul className="m-0 grid list-none items-center gap-1 p-0 md:flex md:gap-1.5">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} aria-current={activeSection === item.href ? 'location' : undefined} className={`${linkBase} ${item.href === '#contato'
                  ? 'mt-1 border border-foreground bg-foreground text-background hover:border-accent hover:bg-accent aria-[current=location]:border-accent aria-[current=location]:bg-accent md:mt-0 md:ml-2'
                  : 'text-muted-foreground hover:bg-accent/8 hover:text-foreground aria-[current=location]:bg-accent/8 aria-[current=location]:text-foreground after:absolute after:right-[18px] after:bottom-[calc(50%-2px)] after:size-1 after:rounded-full after:bg-accent after:opacity-0 after:transition-opacity after:duration-200 after:content-[""] aria-[current=location]:after:opacity-100 motion-reduce:after:transition-none md:after:right-auto md:after:bottom-[5px] md:after:left-[calc(50%-2px)]'}`} onClick={() => setIsMenuOpen(false)}>
                  <span className={`mr-2.5 font-mono text-[10px] leading-[1.5] tracking-normal md:hidden ${item.href === '#contato' ? 'text-inherit opacity-75' : 'text-muted-foreground'}`} aria-hidden="true">0{index + 1}</span>
                  <span>{item.label}</span>
                  {item.href === '#contato' && <ArrowUpRight className="ml-auto transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none md:ml-0" size={16} aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1.5 md:border-l md:border-border md:pl-4 md:max-[901px]:pl-2.5">
          <ThemeToggle />
          <button ref={menuButtonRef} type="button" className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground hover:border-accent hover:text-accent focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="header-navigation" onClick={() => setIsMenuOpen(open => !open)}>
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
