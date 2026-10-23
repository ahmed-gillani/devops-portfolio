import { Download } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { scrollToSection } from '../../lib/scrollTo'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('top')
          }}
          className="font-mono text-sm text-text"
        >
          {resumeData.contact.name}
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(link.id)
              }}
              className="text-sm text-text-muted transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`#contact`}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
            className="hidden text-sm text-text-muted transition-colors duration-200 hover:text-text sm:inline"
          >
            Contact
          </a>
          <a
            href={resumeData.resumeFileUrl}
            download
            className="flex items-center gap-2 rounded border border-accent/50 px-3 py-1.5 text-sm text-accent transition-colors duration-200 hover:bg-accent hover:text-ink"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
