import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { scrollToSection } from '../../lib/scrollTo'
import { useActiveSection } from '../../lib/useActiveSection'
import { MobileMenu } from './MobileMenu'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(LINKS.map((link) => link.id))

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

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
              aria-current={link.id === activeId ? 'page' : undefined}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(link.id)
              }}
              className={`relative py-1 text-sm transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 ${
                link.id === activeId ? 'text-text after:scale-x-100' : 'text-text-muted hover:text-text'
              }`}
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
            className="flex items-center gap-2 rounded border border-accent/50 px-3 py-1.5 text-sm text-accent transition-[color,background-color,box-shadow,transform] duration-200 hover:bg-accent hover:text-ink hover:shadow-sm active:scale-[0.97]"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded border border-border text-text transition-colors duration-200 hover:border-border-strong sm:hidden"
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} links={LINKS} activeId={activeId} onNavigate={() => setIsOpen(false)} />
    </header>
  )
}
