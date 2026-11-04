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
    <section id="skills" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6 py-24 max-[701px]:px-5 max-[701px]:py-16">
        <div className="mb-9 flex flex-col gap-5 min-[762px]:mb-10 min-[762px]:flex-row min-[762px]:items-end min-[762px]:justify-between min-[762px]:gap-12">
          <h2 id="skills-title" className="m-0 font-serif text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium tracking-[-.035em] text-foreground">Skills<span className="text-primary">.</span></h2>
          <p className="m-0 max-w-[35ch] text-base leading-[1.7] text-muted-foreground">Ferramentas e práticas que uso para construir software, organizadas por área.</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-4 min-[701px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={group.id} className="min-w-0 rounded-2xl bg-card p-6 min-[1100px]:p-7">
              <div className="mb-6 flex min-h-10 items-center gap-3">
                <span className="font-serif text-2xl leading-none font-semibold italic text-primary" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="h-0.5 w-5 shrink-0 bg-primary/50" aria-hidden="true" />
                <h3 id={`skills-${group.id}`} className="m-0 text-base leading-[1.4] font-semibold tracking-[-.015em] text-foreground">{group.title}</h3>
              </div>
              <ul className="m-0 grid grid-cols-2 list-none gap-2.5 p-0" aria-labelledby={`skills-${group.id}`}>
                {group.items.map(({ name, icon: Icon }) => (
                  <li key={name} className={`flex min-h-12 min-w-0 items-center gap-2.5 rounded-full bg-[color-mix(in_srgb,var(--background-secondary)_55%,var(--card))] px-3.5 py-3 text-sm leading-[1.5] font-medium text-foreground ${name.length > 15 ? 'col-span-2' : ''}`}><Icon className="size-[18px] shrink-0 text-primary" size={18} aria-hidden="true" /><span>{name}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
