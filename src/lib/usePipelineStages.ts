import { useMemo } from 'react'
import { useActiveSection } from './useActiveSection'

export type StageStatus = 'pending' | 'running' | 'success'

export interface PipelineStageConfig {
  id: 'build' | 'test' | 'deploy' | 'monitor'
  label: string
  sectionIds: string[]
}

interface PipelineStages {
  activeStageId: PipelineStageConfig['id'] | null
  stageStatus: Record<string, StageStatus>
}

export function usePipelineStages(stages: PipelineStageConfig[]): PipelineStages {
  const sectionIdsKey = stages.map((stage) => stage.sectionIds.join(',')).join('|')
  const allSectionIds = useMemo(
    () => stages.flatMap((stage) => stage.sectionIds),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sectionIdsKey],
  )
  const visibleSectionId = useActiveSection(allSectionIds)

  const activeIndex = stages.findIndex((stage) => stage.sectionIds.includes(visibleSectionId ?? ''))

  const stageStatus = useMemo(() => {
    const map: Record<string, StageStatus> = {}
    stages.forEach((stage, index) => {
      if (activeIndex === -1) {
        map[stage.id] = 'pending'
      } else if (index < activeIndex) {
        map[stage.id] = 'success'
      } else if (index === activeIndex) {
        map[stage.id] = 'running'
      } else {
        map[stage.id] = 'pending'
      }
    })
    return map
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdsKey, activeIndex])

  return {
    activeStageId: activeIndex === -1 ? null : stages[activeIndex].id,
    stageStatus,
  }
}
