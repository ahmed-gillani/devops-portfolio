import { useEffect, useMemo, useRef, useState } from 'react'

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
  const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null)
  const ratios = useRef(new Map<string, number>())
  const sectionIdsKey = stages.map((stage) => stage.sectionIds.join(',')).join('|')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId: string | null = null
        let bestRatio = 0
        ratios.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId) {
          setVisibleSectionId(bestId)
        }
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1], rootMargin: '-15% 0px -55% 0px' },
    )

    const ids = stages.flatMap((stage) => stage.sectionIds)
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdsKey])

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
