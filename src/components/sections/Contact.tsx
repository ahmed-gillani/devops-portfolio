import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { IconButton } from '../ui/IconButton'
import { TerminalWindow } from '../ui/TerminalWindow'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="contact-heading"
          stageNumber="04 / Monitor"
          title="Contact"
          description="Open to DevOps internship opportunities — reach out directly."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <TerminalWindow title="tail -f contact.log">
            <p className="text-text-muted">
              <span className="text-accent">status</span>: available for internships
            </p>
            <p className="mt-2 text-text-muted">
              <span className="text-accent">location</span>: {resumeData.contact.location}
            </p>
          </TerminalWindow>

          <div className="space-y-4">
            <IconButton icon={Mail} label="Email" value={resumeData.contact.email} href={`mailto:${resumeData.contact.email}`} />
            <IconButton icon={Phone} label="Phone" value={resumeData.contact.phone} href={resumeData.contact.phoneHref} />
            <IconButton icon={MapPin} label="Location" value={resumeData.contact.location} />

            <a
              href={resumeData.resumeFileUrl}
              download
              className="mt-2 inline-flex items-center gap-2 rounded bg-accent px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent-hover"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
