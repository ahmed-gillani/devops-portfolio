import type { CertificationEntry } from '../../data/resume'
import { StatusDot } from '../ui/StatusDot'
import { Panel } from '../ui/Panel'

interface CertificationBadgeProps {
  certification: CertificationEntry
}

export function CertificationBadge({ certification }: CertificationBadgeProps) {
  const isCertified = certification.status === 'certified'

  return (
    <Panel className="flex items-start gap-3">
      <StatusDot status={isCertified ? 'success' : 'running'} className="mt-1.5" />
      <div>
        <p className="text-text">{certification.name}</p>
        <p className="text-sm text-text-muted">{certification.issuer}</p>
        <p className={`mt-1 font-mono text-xs ${isCertified ? 'text-status-success' : 'text-status-running'}`}>
          {isCertified ? 'Certified' : 'In progress'}
        </p>
      </div>
    </Panel>
  )
}
