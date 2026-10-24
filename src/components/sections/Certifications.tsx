import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, RevealItem } from '../ui/Reveal'
import { CertificationBadge } from './CertificationBadge'

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading id="certifications-heading" stageNumber="02 / Test" title="Certifications" />

        <Reveal className="grid gap-4 sm:grid-cols-2">
          {resumeData.certifications.map((certification) => (
            <RevealItem key={certification.id}>
              <CertificationBadge certification={certification} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
