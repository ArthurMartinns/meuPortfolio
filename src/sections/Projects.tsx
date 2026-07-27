const projects = [
  {
    name: "Nome do Projeto",
    type: "Web app",
    stack: "React · TypeScript · Tailwind",
    description:
      "Interface responsiva para organizar fluxos e visualizar dados com clareza.",
    href: "#",
  },
  {
    name: "Nome do Projeto",
    type: "Dashboard",
    stack: "Next.js · PostgreSQL · Prisma",
    description:
      "Painel para acompanhamento de métricas, filtros e ações essenciais.",
    href: "#",
  },
  {
    name: "Portfólio Pessoal",
    type: "Aplicação Web",
    stack: "React · TypeScript · TalwindCSS",
    description:
      "Portfólio desenvolvido para apresentar minha trajetória, experiências e projetos.",
    href: "https://github.com/ArthurMartinns/meuPortfolio",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Meu projetos
          </p>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Trabalhos desenvolvidos durante minha trajetória como
              desenvolvedor.
            </h2>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              className="group grid gap-5 py-8 transition-colors hover:bg-card/40 sm:grid-cols-[1fr_auto] sm:px-4"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-xl font-medium tracking-tight">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {project.type}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex items-end justify-between gap-6 sm:block sm:text-right">
                <p className="font-mono text-xs text-muted-foreground">
                  {project.stack}
                </p>

                <a
                  href={project.href}
                  rel="noopener noreferrer"
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  className="mt-4 inline-block text-sm text-foreground transition-transform group-hover:translate-x-1"
                >
                  Ver projeto →
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
