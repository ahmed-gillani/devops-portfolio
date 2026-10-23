type Status = 'pending' | 'running' | 'success' | 'alert'

interface StatusDotProps {
  status: Status
  size?: 'sm' | 'md'
  className?: string
}

const COLOR: Record<Status, string> = {
  pending: 'bg-status-pending',
  running: 'bg-status-running',
  success: 'bg-status-success',
  alert: 'bg-status-alert',
}

export function StatusDot({ status, size = 'md', className = '' }: StatusDotProps) {
  const dimension = size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2'

  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-full ${dimension} ${COLOR[status]} ${
        status === 'running' ? 'animate-pulse-slow motion-reduce:animate-none' : ''
      } ${className}`}
    />
  )
}
