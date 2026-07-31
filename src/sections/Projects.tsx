const projects = [
  {
    name: "Portfólio Pessoal",
    type: "Aplicação Web",
    stack: "React · TypeScript · TalwindCSS",
    description:
      "Portfólio pessoal criado para apresentar minha trajetória profissional, experiências, habilidades e principais projetos.",
    href: "https://github.com/ArthurMartinns/meuPortfolio",
  },
  {
    name: "Library API",
    type: "API REST",
    stack: "Java · Spring Boot · PostgreSQL · Docker",
    description:
      "API REST para gerenciar livros, autores e usuários, com autenticação OAuth2/JWT, controle de acesso por perfis e documentação Swagger.",
    href: "https://github.com/ArthurMartinns/libraryAPI",
  },
  {
    name: "Novo projeto",
    type: "Em desenvolvimento...",
    stack: "Tecnologias em definição",
    description:
      "Um novo projeto está sendo desenvolvido. Em breve, mais detalhes e atualizações estarão disponíveis.",
    href: "#",
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
                  target={
                    project.href.startsWith("http") ? "_blank" : undefined
                  }
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
