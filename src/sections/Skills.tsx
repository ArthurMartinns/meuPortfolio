import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJira,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import {
  Braces,
  Code2,
  Coffee,
  FileCode2,
  GitBranch,
  Layers3,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Principais",
    items: [
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "APIs REST", icon: Code2 },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Arquitetura e Boas Práticas",
    items: [
      { name: "Clean Code", icon: Code2 },
      { name: "SOLID", icon: Braces },
      { name: "Arquitetura Hexagonal", icon: Layers3 },
      { name: "Maven", icon: FileCode2 },
    ],
  },
  {
    title: "Frontend",
    items: [
        { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Styled Components", icon: SiStyledcomponents },
    ],
  },
  {
    title: "DevOps e Workflow",
    items: [
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Scrum", icon: Workflow },
      { name: "Kanban", icon: GitBranch },
      { name: "Jira", icon: SiJira },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Skills
          </p>
        </div>

        <div className="grid items-start gap-10 border-x border-border px-6 sm:px-10 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="w-full min-w-0">
              <h3 className="min-h-8 font-mono text-xs tracking-[0.16em] text-accent uppercase">
                {group.title}
              </h3>

              <div className="mt-5 grid w-full gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={`${group.title}-${item.name}`}
                      className="flex min-h-9 w-full items-center gap-2 border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                      <Icon className="size-3.5 text-accent" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
