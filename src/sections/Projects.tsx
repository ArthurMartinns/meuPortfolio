import { ArrowUpRight } from 'lucide-react'
import portfolioPreview from '../assets/portfolio-preview.jpg'
import monviFlowImage from '../assets/monviFlowImage.png'

const projects = [
  {
    id: 'portfolio',
    name: 'Portfólio Pessoal',
    type: 'Aplicação web',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Um espaço para apresentar minha trajetória, competências e projetos, conectando desenvolvimento e identidade visual.',
    href: 'https://github.com/ArthurMartinns/meuPortfolio',
    image: portfolioPreview,
    imageAlt: 'Página inicial do portfólio de Arthur Martins no tema escuro',
  },
  {
    id: 'monviflow',
    name: 'MonviFlow',
    type: 'Aplicação full stack',
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    description: 'O MonviFlow é uma aplicação de gestão financeira pessoal que ajuda a entender para onde o dinheiro vai e a planejar melhor seu uso. Permite organizar contas, registrar receitas e despesas, definir orçamentos por categoria e acompanhar saldos e resultados em um painel visual.',
    href: 'https://github.com/ArthurMartinns/monvi-flow',
    image: monviFlowImage,
    imageAlt: 'Prévia da aplicação MonviFlow',
    // status: 'Em desenvolvimento',
  },
]

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 py-24 max-[701px]:px-5 max-[701px]:py-16">
        <h2 id="projects-title" className="mt-0 mb-9 font-serif text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium tracking-[-.035em] text-foreground min-[762px]:mb-10">Meus projetos<span className="text-primary">.</span></h2>
        <div className="grid grid-cols-1 items-stretch gap-12 min-[762px]:grid-cols-2 min-[762px]:gap-8">
          {projects.map((project, index) => (
            <article key={project.id} className="flex min-w-0 flex-col rounded-3xl border border-primary/30 bg-card p-5" aria-labelledby={`${project.id}-title`}>
              {project.image ? (
                <img src={project.image} alt={project.imageAlt} width={1440} height={900} loading="lazy" decoding="async" className="block aspect-[16/10] w-full rounded-2xl object-cover object-top" />
              ) : (
                <div className="aspect-[16/10] w-full rounded-2xl bg-card" aria-hidden="true" />
              )}
              <div className="mt-6 mb-3 flex items-center gap-3 text-sm leading-[1.5] text-secondary"><span className="font-serif text-xl font-semibold italic text-primary" aria-hidden="true">0{index + 1}</span><span className="h-0.5 w-5 bg-primary/40" aria-hidden="true" /><span>{project.type}</span></div>
              <h3 id={`${project.id}-title`} className="m-0 font-serif text-[clamp(26px,2.5vw,32px)] leading-[1.2] font-medium tracking-[-.03em] text-foreground">{project.name}</h3>
              {/* {project.status && <p className="mt-2 mb-0 text-sm leading-[1.5] font-medium text-primary">{project.status}</p>} */}
              <p className="mt-3 mb-5 max-w-[52ch] text-base leading-[1.7] text-foreground">{project.description}</p>
              <ul className="mt-auto mb-0 flex list-none flex-wrap gap-2 p-0" aria-label={`Tecnologias de ${project.name}`}>{project.stack.map(technology => <li key={technology} className="rounded-full bg-primary/8 px-3 py-1.5 text-sm leading-[1.5] text-primary">{technology}</li>)}</ul>
              <a className="group mt-6 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-primary px-5 py-3 text-base leading-[1.5] font-medium text-on-primary no-underline transition-colors duration-200 hover:bg-primary-hover motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório de ${project.name} no GitHub (abre em nova aba)`}>Ver repositório <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={18} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
