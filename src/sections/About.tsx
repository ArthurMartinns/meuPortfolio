import meImage from '../assets/me.jpg'
import { GraduationCap } from 'lucide-react'
import styles from './About.module.css'

const journey = [
  {
    label: 'Experiência',
    title: 'Construindo na prática',
    description: 'Atuação profissional desde 2024 com React, TypeScript e Node.js. Experiência que conecta o código às necessidades de quem usa.',
  },
  {
    label: 'Foco atual',
    title: 'Profundidade no backend',
    description: 'Java, Spring Boot e bancos relacionais para desenvolver APIs REST e soluções com uma base bem estruturada.',
  },
  {
    label: 'Em evolução',
    title: 'Aprender. Aplicar. Refinar.',
    description: 'Clean Code, SOLID e colaboração como parte de um aprendizado contínuo em engenharia de software.',
  },
]

export function About() {
  return (
    <section id="sobre" className="border-b border-border" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6 py-[100px] max-[761px]:px-5 max-[761px]:py-16">
        <h2 id="about-title" className="mb-9 flex items-center gap-3 font-mono text-[11px] leading-[1.5] tracking-[.18em] text-muted-foreground uppercase max-[761px]:mb-7"><span className="h-px w-6 bg-accent" aria-hidden="true" />Sobre mim</h2>
        <div className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] items-start gap-[clamp(40px,6vw,88px)] max-[761px]:grid-cols-1 max-[761px]:gap-10">
          <figure className={`${styles.reveal} m-0 min-w-0 max-[761px]:w-[calc(100%-12px)] max-[761px]:max-w-[400px] max-[761px]:justify-self-center`}>
            <div className={`${styles.photoFrame} relative isolate rounded-[14px] border border-border bg-card p-[9px]`}>
              <img className="block aspect-[4/5] w-full rounded-[7px] object-cover object-top" src={meImage} alt="Retrato de Arthur Martins" loading="lazy" decoding="async" />
              <span className="absolute bottom-6 left-6 rounded border border-border bg-card px-3 py-2 font-mono text-xs leading-[1.5] tracking-[.1em] text-foreground" aria-hidden="true">AM /</span>
            </div>
            <figcaption className="mt-8 flex items-center gap-3.5 border-y border-border py-5 [&>svg]:shrink-0 [&>svg]:text-accent [&>div>span]:text-sm [&>div>span]:font-medium [&_p]:mt-[5px] [&_p]:font-mono [&_p]:text-[11px] [&_p]:leading-[1.7] [&_p]:text-muted-foreground [&_p_span]:mx-1">
              <GraduationCap size={22} aria-hidden="true" />
              <div><span>Engenharia de Software</span><p>PUC Minas <span aria-hidden="true">·</span> Em formação</p></div>
            </figcaption>
          </figure>
          <div className={`${styles.reveal} min-w-0`}>
            <div className="max-w-[530px] max-[761px]:max-w-none [&>p]:mt-0 [&>p]:mb-3.5 [&>p]:text-sm [&>p]:leading-[1.85] [&>p]:text-muted-foreground">
              <p>Sou Arthur, estudante de Engenharia de Software na PUC Minas. Gosto de conectar a lógica por trás de uma solução à experiência de quem a utiliza.</p>
              <p>Minha trajetória passa pelo desenvolvimento de interfaces e se aprofunda no backend. Busco construir software com clareza, cuidado e espaço para evoluir.</p>
            </div>
            <ol className="mt-8 mb-7 list-none p-0" aria-label="Experiência, foco atual e aprendizado">
              {journey.map((item, index) => (
                <li key={item.label} className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-[18px] pb-[26px] last:pb-0 not-last:before:absolute not-last:before:top-8 not-last:before:bottom-0 not-last:before:left-[15px] not-last:before:w-px not-last:before:bg-border not-last:before:content-['']">
                  <span className="grid size-8 place-items-center rounded-full border border-border bg-card font-mono text-[10px] leading-none text-accent" aria-hidden="true">0{index + 1}</span>
                  <div><p className="mt-0 mb-1.5 font-mono text-[9px] leading-[1.5] tracking-[.14em] text-muted-foreground uppercase">{item.label}</p><h3 className="mt-0 mb-1.5 text-[17px] leading-[1.4] font-[550] tracking-[-.025em]">{item.title}</h3><p className="m-0 max-w-[455px] text-[13px] leading-[1.8] text-muted-foreground max-[761px]:max-w-none">{item.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
