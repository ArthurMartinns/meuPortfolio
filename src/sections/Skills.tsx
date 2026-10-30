import {
  SiDocker, SiGit, SiGithubactions, SiJavascript, SiJira, SiMui,
  SiMysql, SiPostgresql, SiReact, SiSpringboot, SiStyledcomponents,
  SiTailwindcss, SiTypescript, SiNodedotjs,
} from 'react-icons/si'
import { Braces, Code2, Coffee, FileCode2, GitBranch, Layers3, Workflow } from 'lucide-react'

const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    items: [
      { name: 'Java', icon: Coffee },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'APIs REST', icon: Code2 },
      { name: 'Node.js', icon: SiNodedotjs },
    ],
  },
  {
    id: 'databases',
    title: 'Banco de dados',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Material UI', icon: SiMui },
      { name: 'Styled Components', icon: SiStyledcomponents },
    ],
  },
  {
    id: 'architecture',
    title: 'Arquitetura e Boas práticas',
    items: [
      { name: 'Clean Code', icon: Code2 },
      { name: 'SOLID', icon: Braces },
      { name: 'Arquitetura Hexagonal', icon: Layers3 },
    ],
  },
  {
    id: 'workflow',
    title: 'DevOps e Ferramentas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Maven', icon: FileCode2 },
      { name: 'Scrum', icon: Workflow },
      { name: 'Kanban', icon: GitBranch },
      { name: 'Jira', icon: SiJira },
    ],
  },
].sort((a, b) => b.items.length - a.items.length)

export function Skills() {
  return (
    <section id="skills" className="border-b border-border" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6 py-24 max-[701px]:px-5 max-[701px]:py-16">
        <h2 id="skills-title" className="mb-9 flex items-center gap-3 font-mono text-[11px] leading-[1.5] tracking-[.18em] text-muted-foreground uppercase max-[701px]:mb-7"><span className="h-px w-6 bg-accent" aria-hidden="true" />Skills</h2>
        <div className="grid grid-cols-3 items-stretch gap-5 max-[1001px]:grid-cols-2 max-[701px]:grid-cols-1 max-[701px]:gap-4">
          {skillGroups.map(group => (
            <div key={group.id} className="min-w-0 rounded-2xl border border-border bg-card p-[27px] max-[701px]:p-6">
              <div className="mb-[22px]">
                <h3 id={`skills-${group.id}`} className="m-0 min-h-9 font-mono text-[11px] leading-[1.6] font-semibold tracking-[.1em] text-muted-foreground uppercase max-[701px]:min-h-0">{group.title}</h3>
              </div>
              <ul className="m-0 grid list-none gap-2.5 p-0" aria-labelledby={`skills-${group.id}`}>
                {group.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex min-h-11 min-w-0 items-center gap-3 rounded-lg bg-[color-mix(in_srgb,var(--background-secondary)_55%,var(--card))] px-3.5 py-[11px] text-xs leading-[1.5] font-medium text-foreground [overflow-wrap:anywhere] transition-colors duration-200 hover:bg-background-secondary motion-reduce:transition-none"><Icon className="size-[17px] shrink-0 text-secondary" size={15} aria-hidden="true" /><span>{name}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
