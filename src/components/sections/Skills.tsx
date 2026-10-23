import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { StatusDot } from '../ui/StatusDot'

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 rounded border border-border bg-panel px-3 py-1.5 text-sm text-text"
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
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">Languages</h3>
            <ul className="mt-3 space-y-1.5">
              {resumeData.languages.map((language) => (
                <li key={language.name} className="text-sm text-text">
                  {language.name} <span className="text-text-muted">· {language.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
