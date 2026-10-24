import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { scrollToSection } from '../../lib/scrollTo'

interface NavLink {
  id: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  links: NavLink[]
  activeId: string | null
  onNavigate: () => void
}

export function MobileMenu({ isOpen, links, activeId, onNavigate }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-b border-border bg-ink/95 backdrop-blur sm:hidden"
        >
          <nav aria-label="Mobile section navigation" className="flex flex-col px-4 py-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={link.id === activeId ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.id)
                  onNavigate()
                }}
                className={`rounded px-2 py-2.5 text-sm transition-colors duration-200 ${
                  link.id === activeId ? 'text-text' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('contact')
                onNavigate()
              }}
              className="rounded px-2 py-2.5 text-sm text-text-muted transition-colors duration-200 hover:text-text"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
