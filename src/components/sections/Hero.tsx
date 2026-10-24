import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Download, Mail } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { bootSequence } from '../../animations/heroSequence'
import { useTypewriter } from '../../lib/useTypewriter'
import { scrollToSection } from '../../lib/scrollTo'
import { highlightKeywords } from '../../lib/highlightKeywords'
import { fadeUpItem, staggerContainer } from '../../animations/variants'
import { TerminalWindow } from '../ui/TerminalWindow'
import { HeroBackground } from './HeroBackground'

const REVEAL_DELAY_MS = 450
const HEADLINE_KEYWORDS = ['CI/CD', 'DevOps']

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [revealedOutputs, setRevealedOutputs] = useState<number[]>([])
  const [bootDone, setBootDone] = useState(false)

  const currentLine = bootSequence[lineIndex]
  const { output: typedCommand, done: typedDone } = useTypewriter(currentLine?.command ?? '', {
    speedMs: 38,
    skip: Boolean(prefersReducedMotion),
  })

  useEffect(() => {
    if (!typedDone || !currentLine) return

    setRevealedOutputs((prev) => (prev.includes(lineIndex) ? prev : [...prev, lineIndex]))

    const delay = prefersReducedMotion ? 0 : REVEAL_DELAY_MS
    const timeout = window.setTimeout(() => {
      if (lineIndex < bootSequence.length - 1) {
        setLineIndex((i) => i + 1)
      } else {
        setBootDone(true)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedDone, lineIndex, prefersReducedMotion])

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <HeroBackground className="absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <TerminalWindow title="hamza@devops:~" minHeightClassName="min-h-[220px] sm:min-h-[260px]">
            {bootSequence.map((line, index) => {
              if (index > lineIndex) return null
              const isCurrent = index === lineIndex
              const command = isCurrent ? typedCommand : line.command
              const showOutput = revealedOutputs.includes(index)

              return (
                <div key={line.command} className="mb-3 last:mb-0">
                  <p className="flex items-center text-accent">
                    <span className="mr-2 text-text-muted">$</span>
                    {command}
                    {isCurrent && !typedDone && (
                      <span
                        aria-hidden="true"
                        className="ml-0.5 inline-block h-[1em] w-[0.5ch] bg-accent align-middle animate-caret-blink motion-reduce:animate-none"
                      />
                    )}
                  </p>
                  {showOutput &&
                    line.output.map((outputLine) => (
                      <p key={outputLine} className="mt-1 text-text">
                        {outputLine}
                      </p>
                    ))}
                </div>
              )
            })}
          </TerminalWindow>
        </div>

        <motion.div
          initial="hidden"
          animate={bootDone ? 'visible' : 'hidden'}
          variants={staggerContainer()}
          className="min-h-[1px]"
        >
          <motion.h1
            variants={fadeUpItem}
            className="text-gradient-accent text-3xl font-semibold sm:text-4xl lg:text-5xl"
          >
            {resumeData.contact.name}
          </motion.h1>
          <motion.p variants={fadeUpItem} className="mt-2 font-mono text-sm text-accent sm:text-base">
            {resumeData.contact.title}
          </motion.p>
          <motion.p variants={fadeUpItem} className="mt-5 max-w-prose text-text-muted">
            {highlightKeywords(resumeData.profile.headline, HEADLINE_KEYWORDS)}
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={resumeData.resumeFileUrl}
              download
              className="flex items-center gap-2 rounded bg-accent px-4 py-2.5 text-sm font-medium text-ink transition-[color,background-color,box-shadow,transform] duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('contact')
              }}
              className="flex items-center gap-2 rounded border border-border-strong px-4 py-2.5 text-sm text-text transition-[color,border-color,box-shadow,transform] duration-200 hover:border-accent hover:text-accent hover:shadow-sm active:scale-[0.97]"
            >
              <Mail size={16} aria-hidden="true" />
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
