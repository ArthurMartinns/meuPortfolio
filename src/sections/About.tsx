export function About() {
  return (
    <section id="sobre" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <div><p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">Sobre mim</p></div>
        <div className="space-y-10">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Construo soluções de ponta a ponta!</h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Sou engenheiro de software em formação pela PUC Minas. Meu foco é desenvolver backends escaláveis com Java e Spring Boot, somando a experiência profissional que adquiri com React e TypeScript para entregar soluções robustas, claras e de alta qualidade.
            </p>
          </div>
          <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div><p className="font-mono text-xs text-accent">01</p><h3 className="mt-3 font-medium">Backend</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">APIs REST, Java, Spring Boot e bancos relacionais.</p></div>
            <div><p className="font-mono text-xs text-accent">02</p><h3 className="mt-3 font-medium">Experiência real</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Atuação profissional com React, TypeScript e Node.js desde 2024.</p></div>
            <div><p className="font-mono text-xs text-accent">03</p><h3 className="mt-3 font-medium">Evolução contínua</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Clean Code, SOLID, colaboração e aprendizado constante.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
