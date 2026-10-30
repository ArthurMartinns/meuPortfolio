import { ArrowDown, ArrowUpRight } from 'lucide-react'
// import { ArrowRight } from 'lucide-react' // Reativar junto ao projeto em foco.
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 min-[1500px]:pt-[88px] min-[1500px]:pb-14 max-[701px]:px-5 max-[701px]:pt-12 max-[701px]:pb-7">
        <div className="grid grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-center gap-4 pb-14 min-[1500px]:pb-[72px] max-[701px]:grid-cols-1 max-[701px]:gap-6 max-[701px]:pb-8">
          <div className={`${styles.intro} relative z-1 min-w-0`}>
            <h1 id="hero-title" className="m-0 font-serif text-[clamp(100px,13.4vw,172px)] leading-[.83] font-normal tracking-[-.075em] text-foreground max-[1001px]:text-[clamp(92px,12.8vw,135px)] max-[701px]:text-[clamp(86px,20vw,140px)] max-[361px]:text-[80px]">
              <span className="block">Arthur</span>
              <span className="mt-3 block pl-[76px] max-[1001px]:pl-11 max-[701px]:mt-2 max-[701px]:pl-[clamp(20px,8vw,48px)]">Martins<span className="text-primary">.</span></span>
            </h1>
            <div className="mt-[42px] grid max-w-[540px] grid-cols-[44px_minmax(0,1fr)] gap-8 max-[1001px]:grid-cols-[24px_minmax(0,1fr)] max-[1001px]:gap-5 max-[701px]:mt-8 max-[701px]:max-w-[410px] max-[701px]:grid-cols-1">
              <span className="mt-[13px] h-px bg-primary max-[701px]:hidden" aria-hidden="true" />
              <div>
                <p className="m-0 text-pretty text-sm leading-[1.85] text-muted-foreground max-[701px]:text-[13px] [&>strong]:font-medium [&>strong]:text-foreground">Engenheiro de software em formação.<br />Meu foco é <strong>Java & Spring Boot</strong>, com experiência em React e TypeScript.</p>
                <div className="mt-[25px] flex flex-wrap items-center gap-7 max-[701px]:mt-[22px] max-[701px]:gap-6">
                  <a href="#projetos" className="group inline-flex min-h-12 items-center justify-center gap-[15px] rounded bg-primary px-[21px] py-3 text-[13px] text-on-primary no-underline transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring motion-reduce:transition-none">Ver projetos <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={19} aria-hidden="true" /></a>
                  <a href="#sobre" className="group inline-flex min-h-12 items-center justify-center gap-[15px] rounded text-[13px] text-foreground no-underline underline-offset-[6px] hover:underline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring">Sobre mim <ArrowDown className="transition-transform duration-200 group-hover:translate-y-[3px] motion-reduce:transform-none motion-reduce:transition-none" size={16} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.artwork} relative w-full max-w-[360px] justify-self-end pt-2 max-[701px]:-mt-1 max-[701px]:mr-1.5 max-[701px]:w-[62%] max-[701px]:max-w-60 max-[701px]:pt-0`} aria-hidden="true">
            <svg viewBox="0 0 360 440" fill="none" className="block h-auto w-full overflow-visible">
              <path d="M62 350V161a104 104 0 0 1 208 0v189H62Z" className={styles.arch} />
              <path d="M95 350V165a71 71 0 0 1 142 0v185" className={styles.archLine} />
              <path d="M124 350V165a42 42 0 0 1 84 0v185" className={styles.archLine} />
              <circle cx="242" cy="270" r="96" className={styles.orbit} />
              <circle cx="242" cy="270" r="69" className={styles.orbitInner} />
              <path d="M146 270h192M242 174v192" className={styles.orbitLine} />
              <circle cx="242" cy="270" r="13" className={styles.center} />
              <path d="M22 385h316M22 397h316" className={styles.baseline} />
              <circle cx="35" cy="335" r="7" className={styles.smallCircle} />
            </svg>
          </div>
        </div>

        {/* Projeto em foco temporariamente desativado.
        <a className="group grid grid-cols-[.8fr_1fr_1.15fr_auto] items-center gap-7 border-y border-border py-6 text-foreground no-underline transition-[border-color] duration-200 hover:border-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring motion-reduce:transition-none max-[1001px]:grid-cols-[.8fr_1fr_1.2fr] max-[1001px]:gap-5 max-[701px]:grid-cols-[minmax(0,1fr)_auto] max-[701px]:gap-x-3 max-[701px]:gap-y-[18px] max-[701px]:py-[22px]" href="https://github.com/ArthurMartinns/libraryAPI" target="_blank" rel="noopener noreferrer" aria-label="Library API — ver repositório no GitHub (abre em nova aba)">
          <div className="grid grid-cols-[6px_1fr] items-center gap-x-2.5 gap-y-2 font-mono text-[10px] leading-[1.5] tracking-[.025em] max-[701px]:col-span-full max-[701px]:flex max-[701px]:flex-wrap"><span className="size-[5px] rounded-full bg-secondary" aria-hidden="true" />Projeto em foco<span className="col-start-2 text-[9px] text-muted-foreground max-[701px]:ml-auto">Backend / API REST</span></div>
          <div className="flex items-center gap-4 font-serif text-[29px] leading-[1.2] tracking-[-.04em] [&>svg]:shrink-0 [&>svg]:text-primary max-[361px]:gap-2 max-[361px]:text-[25px]"><span>Library API</span><ArrowUpRight size={22} aria-hidden="true" /></div>
          <p className="m-0 text-[11px] leading-[1.85] text-muted-foreground max-[701px]:col-span-full max-[701px]:row-start-3 max-[701px]:text-xs">Livros, autores e usuários.<br />Uma API com autenticação e controle de acesso.</p>
          <span className="inline-flex items-center gap-4 text-[11px] min-[701px]:max-[1001px]:hidden [&>svg]:text-primary [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:translate-x-1 motion-reduce:[&>svg]:transform-none motion-reduce:[&>svg]:transition-none max-[701px]:[&>svg]:w-4 max-[361px]:gap-[7px] max-[361px]:text-[10px]">Ver repositório <ArrowRight size={19} aria-hidden="true" /></span>
        </a>
        */}
      </div>
    </section>
  )
}
