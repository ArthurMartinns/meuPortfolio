import { ArrowDown, ArrowUpRight } from 'lucide-react'
import portrait from '../assets/me-cutout.png'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-10 pb-16 min-[701px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] min-[701px]:gap-[clamp(24px,4vw,56px)] min-[701px]:px-6 min-[701px]:pt-14 min-[701px]:pb-20 min-[1200px]:pt-[72px] min-[1200px]:pb-24">
        <div className="relative z-1 min-w-0">
          <p className={`${styles.greeting} mt-0 mb-5 w-fit -rotate-3 font-serif text-2xl leading-[1.4] italic text-foreground min-[1100px]:text-[28px]`}>
            prazer, eu sou o
          </p>
          <div className="relative w-fit max-w-full pb-7 min-[701px]:pb-9">
            <h1
              id="hero-title"
              className="m-0 font-serif text-[clamp(72px,19vw,104px)] leading-[.9] font-[550] tracking-[-.045em] text-foreground min-[701px]:text-[clamp(74px,9.2vw,132px)]"
            >
              <span className={`${styles.nameLine} block`}>Arthur</span>
              <span className={`${styles.nameLine} block`}>Martins</span>
            </h1>
            <svg viewBox="0 0 440 30" fill="none" preserveAspectRatio="none" className={`${styles.underline} absolute inset-x-0 bottom-0 h-6 w-full text-primary min-[701px]:h-7`} aria-hidden="true">
              <path d="M7 20C98 1 178 29 265 15S370 3 433 14" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </div>

          <p className={`${styles.description} mt-7 mb-0 max-w-[42ch] text-pretty text-lg leading-[1.6] text-foreground min-[701px]:mt-8 min-[1100px]:text-xl`}>
            Engenheiro de software em formação, com foco em Java e Spring Boot e experiência profissional em React e TypeScript.
          </p>

          <div className={`${styles.actions} mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 min-[701px]:mt-9`}>
            <a
              href="#projetos"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-primary py-2 pr-2 pl-6 text-base leading-[1.5] font-semibold text-on-primary no-underline transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
            >
              Ver projetos
              <span className="grid size-10 place-items-center rounded-full bg-on-primary text-primary" aria-hidden="true"><ArrowDown size={20} className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" /></span>
            </a>
            <a
              href="#sobre"
              className="group inline-flex min-h-14 items-center gap-3 rounded-full border-2 border-foreground/60 px-6 py-3 text-base leading-[1.5] font-medium text-foreground no-underline transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              Sobre mim
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className={`${styles.portrait} relative isolate m-0 aspect-[.92] w-full max-w-[480px] justify-self-center min-[701px]:justify-self-end`}>
          <div className="absolute inset-x-0 top-[12%] bottom-[5%] -z-10 rounded-[49%_51%_46%_54%/52%_47%_53%_48%] bg-primary" aria-hidden="true" />
          <div className="absolute right-0 bottom-[4%] -z-10 size-[28%] rotate-12 rounded-[45%_55%_48%_52%] bg-background-secondary" aria-hidden="true" />
          <img
            src={portrait}
            width={1254}
            height={1254}
            fetchPriority="high"
            decoding="async"
            alt="Arthur Martins, com camiseta preta"
            className={`${styles.photograph} absolute inset-x-0 bottom-0 block h-full w-full object-contain object-bottom`}
          />
          <figcaption className="absolute -top-3 right-0 flex w-[42%] -rotate-6 flex-col items-end font-serif text-xl leading-[1.2] italic text-primary min-[1100px]:text-2xl">
            <span>esse sou eu</span>
            <svg viewBox="0 0 130 76" fill="none" className="mr-6 h-16 w-28" aria-hidden="true">
              <path d="M120 9C78-3 61 19 44 45c-5 8-11 14-22 20m0 0 5-19m-5 19 23-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </figcaption>
          <svg viewBox="0 0 44 52" fill="none" className="absolute bottom-[20%] -left-3 h-12 w-10 -rotate-12 text-primary" aria-hidden="true">
            <path d="m24 5-9 18 15-3-11 25M5 12l-2-5m32 30 6 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </figure>
      </div>

        {/* Projeto em foco temporariamente desativado.
        <a
          className="mt-12 block bg-card p-6 text-foreground no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          href="https://github.com/ArthurMartinns/libraryAPI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Library API — ver repositório no GitHub (abre em nova aba)"
        >
          <span className="text-base">Projeto em foco — Backend / API REST</span>
          <span className="mt-3 block font-serif text-3xl">Library API</span>
          <p className="mt-4 text-base leading-relaxed">Livros, autores e usuários. Uma API com autenticação e controle de acesso.</p>
          <span className="mt-4 inline-block text-base text-primary">Ver repositório</span>
        </a>
        */}
    </section>
  )
}
