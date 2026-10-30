import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'portfolio',
    name: 'Portfólio Pessoal',
    type: 'Aplicação web',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Um espaço para apresentar minha trajetória, competências e projetos, conectando desenvolvimento e identidade visual.',
    href: 'https://github.com/ArthurMartinns/meuPortfolio',
  },
  {
    id: 'library',
    name: 'Library API',
    type: 'API REST',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    description: 'Gestão de livros, autores e usuários com autenticação OAuth2/JWT, acesso por perfis e documentação Swagger.',
    href: 'https://github.com/ArthurMartinns/libraryAPI',
  },
]

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 py-24 max-[701px]:px-5 max-[701px]:py-16">
        <h2 id="projects-title" className="mb-9 flex items-center gap-3 font-mono text-[11px] leading-[1.5] tracking-[.18em] text-muted-foreground uppercase max-[701px]:mb-7"><span className="h-px w-6 bg-accent" aria-hidden="true" />Meus projetos</h2>
        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-start gap-[clamp(28px,5vw,64px)] max-[701px]:grid-cols-1 max-[701px]:gap-12">
          {projects.map((project, index) => (
            <article key={project.id} className={`min-w-0 ${project.id === 'library' ? "min-[701px]:mt-[88px]" : ''}`} aria-labelledby={`${project.id}-title`}>
              <div className="h-[340px] overflow-hidden rounded-md border border-border bg-card max-[901px]:h-80 max-[701px]:h-[310px]" aria-hidden="true" />
              <div className="mt-6 mb-2.5 flex items-center gap-3 font-mono text-[10px] leading-[1.5] text-muted-foreground [&>span:first-child]:text-primary [&>span+span]:border-l [&>span+span]:border-border [&>span+span]:pl-3"><span>0{index + 1}</span><span>{project.type}</span></div>
              <h3 id={`${project.id}-title`} className="m-0 font-serif text-[clamp(28px,3vw,38px)] leading-[1.2] font-normal tracking-[-.045em]">{project.name}</h3>
              <p className="mt-3.5 mb-[18px] max-w-[460px] text-[13px] leading-[1.85] text-muted-foreground max-[701px]:max-w-none">{project.description}</p>
              <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0 [&>li]:rounded-[3px] [&>li]:border [&>li]:border-border [&>li]:px-[9px] [&>li]:py-[5px] [&>li]:font-mono [&>li]:text-[9px] [&>li]:leading-[1.5] [&>li]:text-secondary" aria-label={`Tecnologias de ${project.name}`}>{project.stack.map(technology => <li key={technology}>{technology}</li>)}</ul>
              <a className="group mt-[18px] inline-flex min-h-[46px] items-center justify-between gap-7 border-b border-border text-xs text-primary no-underline transition-[border-color] duration-200 hover:border-primary motion-reduce:transition-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório de ${project.name} no GitHub (abre em nova aba)`}>Ver repositório <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" size={18} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
