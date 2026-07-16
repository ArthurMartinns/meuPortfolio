import { ChevronsUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-8 sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arthur Martins
        </p>

        <a
          href="#inicio"
          aria-label="Voltar ao topo da página"
          title="Voltar ao topo"
          className="group inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <ChevronsUp
            className="size-5 transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
}
