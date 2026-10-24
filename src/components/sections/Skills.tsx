import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { StatusDot } from '../ui/StatusDot'
import { Reveal, RevealItem } from '../ui/Reveal'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="skills-heading"
          stageNumber="02 / Test"
          title="Skills"
          description="Capabilities verified through coursework, certification, and the DevOps internship."
        />

        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {resumeData.skills.map((group) => (
            <RevealItem key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">{group.category}</h3>
              <Reveal as="ul" className="mt-3 flex flex-wrap gap-2" stagger={0.02}>
                {group.items.map((item) => (
                  <RevealItem
                    as="li"
                    key={item.name}
                    className="flex items-center gap-2 rounded border border-border bg-panel px-3 py-1.5 text-sm text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-panel/80"
                  >
                    {item.status === 'in-progress' ? (
                      <>
                        <StatusDot status="running" size="sm" />
                        <span>{item.name}</span>
                        <span className="text-xs text-text-muted">in progress</span>
                      </>
                    ) : (
                      <>
                        <StatusDot status="success" size="sm" />
                        <span>{item.name}</span>
                      </>
                    )}
                  </RevealItem>
                ))}
              </Reveal>
            </RevealItem>
          ))}

          <RevealItem>
            <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">Languages</h3>
            <ul className="mt-3 space-y-1.5">
              {resumeData.languages.map((language) => (
                <li key={language.name} className="text-sm text-text">
                  {language.name} <span className="text-text-muted">· {language.proficiency}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
