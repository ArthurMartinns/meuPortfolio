import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 py-10 min-[601px]:flex-row min-[601px]:items-center min-[762px]:px-6 min-[762px]:py-12">
        <div>
          <p className="m-0 text-sm leading-[1.6] text-muted-foreground">
            © {new Date().getFullYear()} Arthur Martins
          </p>
        </div>

        <a
          href="#inicio"
          aria-label="Voltar ao topo da página"
          className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-primary/8 px-5 py-3 text-base leading-[1.5] font-medium text-primary no-underline transition-colors duration-200 hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring motion-reduce:transition-none"
        >
          Voltar ao topo
          <ArrowUp
            className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
}
