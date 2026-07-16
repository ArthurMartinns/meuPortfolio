import { Mail } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    label: "E-mail",
    value: "arthurmartinsdev@gmail.com",
    href: "mailto:arthurmartinsdev@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arthurmarrtins",
    href: "https://www.linkedin.com/in/arthurmarrtins/",
    icon: CiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ArthurMartinns",
    href: "https://github.com/ArthurMartinns",
    icon: FaGithub,
  },
];

export function Contact() {
  return (
    <section id="contato" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Contato
          </p>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Tem um desafio em mente? Vamos construir a solução.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Estou em Belo Horizonte e aberto a oportunidades para criar produtos robustos, escaláveis e de qualidade.
            </p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-card/40 sm:px-4"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="size-4 text-accent" />
                      <div>
                        <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                          {link.label}
                        </p>
                        <p className="mt-1 text-sm text-foreground sm:text-base">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
