import type { ProjectEntry } from '../../data/resume'
import { useTiltGlow } from '../../lib/useTiltGlow'
import { Badge } from '../ui/Badge'

interface ProjectCardProps {
  project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, onPointerMove, onPointerLeave } = useTiltGlow<HTMLElement>()

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="card-sweep card-tilt card-glow overflow-hidden rounded border border-border bg-panel transition-colors duration-200 hover:border-border-strong"
    >
      <div className="border-b border-border px-4 py-2.5">
        <p className="truncate font-mono text-xs text-text-muted">{project.filePath}</p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-medium text-text">{project.name}</h3>
          <span className="font-mono text-xs text-text-muted">{project.category}</span>
        </div>
        <p className="mt-3 text-sm text-text-muted">{project.description}</p>
        {project.highlight && (
          <div className="mt-4">
            <Badge tone="accent">{project.highlight}</Badge>
          </div>
        )}
      </div>
    </article>
  )
}
