import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Panel } from '../ui/Panel'
import { Reveal, RevealItem } from '../ui/Reveal'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-content">
        <SectionHeading id="experience-heading" stageNumber="02 / Test" title="Experience" />

        <Reveal className="space-y-5">
          {resumeData.experience.map((entry) => (
            <RevealItem as="article" key={entry.id}>
              <Panel as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-text">{entry.role}</h3>
                  <span className="font-mono text-xs text-text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-text-muted">
                  {entry.organization}
                  {entry.location ? ` · ${entry.location}` : ''}
                </p>
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
