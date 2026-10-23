import { usePipelineStages, type PipelineStageConfig } from '../../lib/usePipelineStages'
import { scrollToSection } from '../../lib/scrollTo'
import { StatusDot } from '../ui/StatusDot'

const STAGES: PipelineStageConfig[] = [
  { id: 'build', label: 'Build', sectionIds: ['about'] },
  { id: 'test', label: 'Test', sectionIds: ['skills', 'experience', 'certifications'] },
  { id: 'deploy', label: 'Deploy', sectionIds: ['projects'] },
  { id: 'monitor', label: 'Monitor', sectionIds: ['contact'] },
]

export function PipelineRail() {
  const { activeStageId, stageStatus } = usePipelineStages(STAGES)
  const activeLabel = STAGES.find((stage) => stage.id === activeStageId)?.label

  return (
    <nav aria-label="Pipeline progress">
      {/* Desktop: fixed vertical rail */}
      <ol className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
        {STAGES.map((stage, index) => {
          const status = stageStatus[stage.id] ?? 'pending'
          return (
            <li key={stage.id} className="relative flex items-center gap-3">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-6 left-[3px] h-6 w-px bg-border-strong"
                />
              )}
              <button
                type="button"
                onClick={() => scrollToSection(stage.sectionIds[0])}
                aria-current={status === 'running' ? 'step' : undefined}
                className="group flex items-center gap-3"
              >
                <StatusDot status={status} />
                <span
                  className={`font-mono text-xs transition-colors duration-200 ${
                    status === 'running' ? 'text-accent' : 'text-text-muted group-hover:text-text'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      {/* Mobile / tablet: sticky horizontal bar */}
      <div className="sticky top-[49px] z-30 flex items-center gap-4 border-b border-border bg-ink/90 px-4 py-2.5 backdrop-blur sm:px-6 lg:hidden">
        <ol className="flex items-center gap-3">
          {STAGES.map((stage) => {
            const status = stageStatus[stage.id] ?? 'pending'
            return (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(stage.sectionIds[0])}
                  aria-current={status === 'running' ? 'step' : undefined}
                  aria-label={stage.label}
                >
                  <StatusDot status={status} size="sm" />
                </button>
              </li>
            )
          })}
        </ol>
        <span className="font-mono text-xs text-text-muted" aria-live="polite">
          Stage: {activeLabel ?? 'Pending'}
        </span>
      </div>
    </nav>
  )
}
