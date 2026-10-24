import type { LucideIcon } from 'lucide-react'

interface IconButtonProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export function IconButton({ icon: Icon, label, value, href }: IconButtonProps) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-panel text-accent transition-transform duration-200 group-hover:scale-110 group-hover:border-accent/60 group-hover:text-accent-hover">
        <Icon aria-hidden="true" size={18} />
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-text-muted">{label}</span>
        <span className="text-text">{value}</span>
      </span>
    </>
  )

  const className = 'group flex items-center gap-3 rounded py-1 transition-colors duration-200 hover:text-accent'

  if (href) {
    return (
      <a href={href} aria-label={`${label}: ${value}`} className={className}>
        {content}
      </a>
    )
  }

  return (
    <span aria-label={`${label}: ${value}`} className={className}>
      {content}
    </span>
  )
}
