import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Panel } from '../ui/Panel'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-content">
        <SectionHeading id="about-heading" stageNumber="01 / Build" title="About" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <p className="max-w-prose text-text-muted">{resumeData.profile.paragraph}</p>

          <div className="space-y-4">
            <Panel>
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">Education</h3>
              <ul className="mt-3 space-y-3">
                {resumeData.education.map((entry) => (
                  <li key={entry.id}>
                    <p className="text-text">{entry.degree}</p>
                    <p className="text-sm text-text-muted">
                      {entry.institution} · {entry.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel>
              <h3 className="font-mono text-xs uppercase tracking-wide text-text-muted">Activities</h3>
              <ul className="mt-3 space-y-2">
                {resumeData.achievements.map((achievement) => (
                  <li key={achievement.id} className="text-sm">
                    <span className="text-text">{achievement.title}</span>
                    <span className="text-text-muted"> — {achievement.context}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  )
}
