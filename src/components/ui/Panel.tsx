import type { ReactNode } from 'react'
import { useTiltGlow } from '../../lib/useTiltGlow'

interface PanelProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
}

export function Panel({ children, className = '', as = 'div' }: PanelProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = as as any
  const { ref, onPointerMove, onPointerLeave } = useTiltGlow<HTMLElement>()

  return (
    <Component
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`card-sweep card-tilt card-glow rounded border border-border bg-panel p-5 transition-colors duration-200 hover:border-border-strong sm:p-6 ${className}`}
    >
      {children}
    </Component>
  )
}
