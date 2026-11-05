import { ArrowUpRight, Mail } from "lucide-react";
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
    <section id="contato" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-5 py-16 min-[762px]:px-6 min-[762px]:py-24">
        <h2 id="contact-title" className="mt-0 mb-9 font-serif text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium tracking-[-.035em] text-foreground min-[762px]:mb-10">Contato<span className="text-primary">.</span></h2>
        <div className="grid items-start gap-9 min-[900px]:grid-cols-2 min-[900px]:gap-20">
          <div>
            <p className="mt-0 mb-4 font-serif text-[clamp(26px,3vw,34px)] leading-[1.2] tracking-[-.025em] text-foreground">Vamos conversar?</p>
            <p className="m-0 max-w-[46ch] text-base leading-[1.8] text-foreground">
              Estou em Belo Horizonte e aberto a oportunidades para criar produtos robustos, escaláveis e de qualidade.
            </p>
          </div>
            <div className="grid min-w-0 gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={`${link.label}: ${link.value}${link.href.startsWith('http') ? ' (abre em nova aba)' : ''}`}
                    className="group flex min-h-24 min-w-0 items-center justify-between gap-3 rounded-2xl bg-card p-5 text-foreground no-underline transition-colors duration-200 hover:bg-primary/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring motion-reduce:transition-none min-[762px]:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-3 min-[762px]:gap-4">
                      <Icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="m-0 text-base leading-[1.5] font-semibold text-foreground">
                          {link.label}
                        </p>
                        <p className="mt-1 mb-0 text-sm leading-[1.6] break-words text-secondary [overflow-wrap:anywhere]">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
