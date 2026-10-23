import type { ReactNode } from 'react'

type Tone = 'success' | 'progress' | 'neutral' | 'accent'

interface BadgeProps {
  tone?: Tone
  children: ReactNode
}

const TONE: Record<Tone, string> = {
  success: 'border-status-success/40 text-status-success',
  progress: 'border-status-running/40 text-status-running',
  neutral: 'border-border-strong text-text-muted',
  accent: 'border-accent/50 text-accent',
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-xs ${TONE[tone]}`}
    >
      {children}
    </span>
  )
}
