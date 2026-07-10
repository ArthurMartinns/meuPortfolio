export function About() {
  return (
    <section id="sobre" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Sobre mim
          </p>
        </div>

        <div className="space-y-10">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Desenvolvo interfaces com clareza, intenção e atenção ao detalhe.
            </h2>

            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Sou engenheiro de software focado em transformar ideias em
              produtos digitais funcionais, rápidos e agradáveis de usar. Gosto
              de unir lógica, design e experiência para criar soluções que
              parecem simples, mesmo quando resolvem problemas complexos.
            </p>
          </div>

          <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs text-accent">01</p>
              <h3 className="mt-3 font-medium">Interface</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Layouts limpos, responsivos e fáceis de navegar.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-accent">02</p>
              <h3 className="mt-3 font-medium">Código</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Estruturas claras, reutilizáveis e pensadas para evoluir.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-accent">03</p>
              <h3 className="mt-3 font-medium">Experiência</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Interações sutis que deixam o produto mais natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}