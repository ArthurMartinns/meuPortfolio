import styles from './About.module.css'

const journey = [
  { title: 'Construindo na prática', description: 'Atuação profissional desde 2024 com React, TypeScript e Node.js. Experiência que conecta o código às necessidades de quem usa.' },
  { title: 'Profundidade no backend', description: 'Meu foco atual é Java, Spring Boot e bancos relacionais para desenvolver APIs REST com uma base bem estruturada.' },
  { title: 'Aprender. Aplicar. Refinar.', description: 'Clean Code, SOLID e colaboração fazem parte do meu aprendizado contínuo em engenharia de software.' },
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-5 py-16 min-[762px]:px-6 min-[762px]:py-24">
        <h2 id="about-title" className="mt-0 mb-8 font-serif text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium tracking-[-.035em] text-foreground min-[762px]:mb-10">Sobre mim<span className="text-primary">.</span></h2>
        <div className="grid grid-cols-1 items-start gap-10 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[900px]:gap-20">
          <div className={`${styles.reveal} min-w-0`}>
            <div className="max-w-[52ch] text-base leading-[1.8] text-foreground min-[762px]:text-[17px]">
              <p className="mt-0 mb-5">Sou Arthur, estudante de Engenharia de Software na PUC Minas. Gosto de conectar a lógica de uma solução à experiência de quem a utiliza.</p>
              <p className="m-0">Minha trajetória passa pelas interfaces e se aprofunda no backend. Busco construir software com clareza, cuidado e espaço para evoluir.</p>
            </div>
          </div>
          <ol className={`${styles.reveal} m-0 list-none p-0`} aria-label="Experiência, foco atual e aprendizado">
              {journey.map((item, index) => (
                <li key={item.title} className="relative grid grid-cols-[36px_minmax(0,1fr)] gap-4 pb-8 last:pb-0 not-last:before:absolute not-last:before:top-10 not-last:before:bottom-1 not-last:before:left-[17px] not-last:before:w-0.5 not-last:before:bg-primary/20 not-last:before:content-['']">
                  <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-base font-semibold text-primary" aria-hidden="true">{index + 1}</span>
                  <div className="pt-1">
                    <h3 className="mt-0 mb-2 text-[17px] leading-[1.4] font-semibold tracking-[-.015em] text-primary">{item.title}</h3>
                    <p className="m-0 max-w-[52ch] text-base leading-[1.7] text-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
