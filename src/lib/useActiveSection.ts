import { useEffect, useRef, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ratios = useRef(new Map<string, number>())
  const sectionIdsKey = sectionIds.join(',')

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
          setActiveId(bestId)
        }
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1], rootMargin: '-15% 0px -55% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdsKey])

  return activeId
}
