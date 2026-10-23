import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
  minHeightClassName?: string
}

export function TerminalWindow({ title, children, className = '', minHeightClassName = '' }: TerminalWindowProps) {
  return (
    <div className={`overflow-hidden rounded border border-border bg-panel ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-status-alert" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-status-running" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-status-success" aria-hidden="true" />
        <span className="ml-2 truncate font-mono text-xs text-text-muted">{title}</span>
      </div>
      <div className={`p-4 font-mono text-sm sm:p-6 ${minHeightClassName}`}>{children}</div>
    </div>
  )
}
