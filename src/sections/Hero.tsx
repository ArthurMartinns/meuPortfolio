export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-border"
      aria-labelledby="hero-title"
    >
      <div
        className="hero-grid absolute inset-0 -z-20 opacity-55"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-[8%] -z-10 size-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8 lg:py-20">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="relative flex size-2.5">
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </div>

          <h1
            id="hero-title"
            className="max-w-4xl text-[clamp(2.9rem,7.5vw,6.2rem)] leading-[0.86] font-semibold tracking-[-0.07em]"
          >
            Transformo
            <span className="hero-outline block pl-[0.34em] text-accent">
              lógica em
            </span>
            <span className="block">experiência.</span>
          </h1>

          <div className="mt-10 grid max-w-2xl gap-8 border-t border-border pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Engenheiro de software que traduz problemas complexos em produtos
              digitais claros, rápidos e humanos.
            </p>

            <a
              href="#projetos"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explorar projetos
              <svg
                viewBox="0 0 24 24"
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-5-5 5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-md lg:translate-x-5"
          aria-label="Composição abstrata representando design e desenvolvimento"
        >
          <div
            className="absolute inset-[7%] rounded-full border border-dashed border-accent/50"
            aria-hidden="true"
          >
            <span className="absolute top-1/2 -left-2 size-4 rounded-full border-4 border-background bg-accent" />
          </div>
          <div
            className="absolute inset-[16%] rounded-full border border-border"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[29%] rounded-full bg-accent/10 blur-xl"
            aria-hidden="true"
          />

          <div className="absolute top-[8%] right-[2%] w-[72%] rotate-3 border border-border bg-card/95 p-4 shadow-[12px_12px_0_var(--border)] backdrop-blur transition-transform duration-500">
            <div className="mb-8 flex items-center justify-between border-b border-border pb-3 font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
              <span>Sistema criativo</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="size-1.5 rounded-full bg-accent-alternative" />
                <i className="size-1.5 rounded-full bg-border" />
                <i className="size-1.5 rounded-full bg-accent" />
              </span>
            </div>
            <p className="font-mono text-xs leading-7 text-muted-foreground">
              <span className="text-accent">const</span>{" "}
              <span className="text-foreground">approach</span> = {"{"}
              <br />
              &nbsp;&nbsp;design:{" "}
              <span className="text-accent-alternative">'intencional'</span>,
              <br />
              &nbsp;&nbsp;code:{" "}
              <span className="text-accent-alternative">'escalável'</span>,
              <br />
              &nbsp;&nbsp;detail:{" "}
              <span className="text-accent-alternative">'preciso'</span>
              <br />
              {"}"}
            </p>
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-border">
              <span className="block h-full w-2/3 bg-accent" />
            </div>
          </div>

          <span
            className="absolute top-[4%] left-[3%] text-4xl text-accent-alternative"
            aria-hidden="true"
          >
            ✦
          </span>
        </div>
      </div>
    </section>
  );
}
