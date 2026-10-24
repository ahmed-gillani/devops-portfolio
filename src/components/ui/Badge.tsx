import type { ReactNode } from 'react'

type Tone = 'success' | 'progress' | 'neutral' | 'accent'

interface BadgeProps {
  tone?: Tone
  children: ReactNode
}

const TONE: Record<Tone, string> = {
  success: 'border-status-success/40 text-status-success hover:bg-status-success/10',
  progress: 'border-status-running/40 text-status-running hover:bg-status-running/10',
  neutral: 'border-border-strong text-text-muted hover:bg-border-strong/10',
  accent: 'border-accent/50 text-accent hover:bg-accent/10',
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-xs transition-all duration-150 hover:scale-105 ${TONE[tone]}`}
    >
      {children}
    </span>
  )
}
