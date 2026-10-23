import type { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
}

export function Panel({ children, className = '', as = 'div' }: PanelProps) {
  const Component = as
  return (
    <Component
      className={`rounded border border-border bg-panel p-5 transition-colors duration-200 hover:border-border-strong sm:p-6 ${className}`}
    >
      {children}
    </Component>
  )
}
