import { ArrowUpRight } from 'lucide-react'
import monviFlowImage from '../assets/monviFlowImage.png'

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-5 py-16 min-[762px]:px-6 min-[762px]:py-24">
        <h2 id="projects-title" className="mt-0 mb-9 font-serif text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium tracking-[-.035em] text-foreground min-[762px]:mb-10">Meus projetos<span className="text-primary">.</span></h2>
        <article className="grid overflow-hidden rounded-3xl border border-primary/30 bg-card min-[900px]:grid-cols-2" aria-labelledby="monviflow-title">
          <img src={monviFlowImage} alt="Tela do MonviFlow com painel de finanças pessoais" width={1440} height={900} loading="lazy" decoding="async" className="block aspect-[16/10] h-full w-full object-cover object-top" />
          <div className="flex min-w-0 flex-col p-6 min-[762px]:p-8">
            <p className="mt-0 mb-3 text-sm font-medium text-secondary">Aplicação full stack · Projeto em destaque</p>
            <h3 id="monviflow-title" className="m-0 font-serif text-[clamp(30px,3vw,40px)] leading-[1.1] font-medium tracking-[-.03em] text-foreground">MonviFlow</h3>
            <p className="mt-4 mb-0 text-base leading-[1.7] text-foreground">Uma aplicação para reunir contas, receitas, despesas e orçamentos em uma visão clara das finanças pessoais.</p>
            <dl className="mt-6 mb-0 grid gap-4 text-sm leading-[1.6] text-foreground">
              <div><dt className="font-semibold text-primary">O problema</dt><dd className="m-0">Entender para onde o dinheiro vai e acompanhar limites por categoria.</dd></div>
              <div><dt className="font-semibold text-primary">A solução</dt><dd className="m-0">Painel com saldos, gráficos e histórico; lançamentos com filtros e orçamentos mensais com alertas.</dd></div>
              <div><dt className="font-semibold text-primary">Uma decisão técnica</dt><dd className="m-0">Os filtros da aplicação web ficam na URL para que uma consulta possa ser compartilhada ou retomada.</dd></div>
            </dl>
            <ul className="mt-6 mb-0 flex list-none flex-wrap gap-2 p-0" aria-label="Tecnologias de MonviFlow">
              {['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'].map(technology => <li key={technology} className="rounded-full bg-primary/8 px-3 py-1.5 text-sm leading-[1.5] text-primary">{technology}</li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-on-primary no-underline transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring" href="https://monvi-flow.vercel.app/" target="_blank" rel="noopener noreferrer">Testar aplicação <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-primary px-5 py-3 text-base font-medium text-primary no-underline transition-colors hover:bg-primary/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring" href="https://github.com/ArthurMartinns/monvi-flow" target="_blank" rel="noopener noreferrer">Ver código <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
