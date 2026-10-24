import { useCallback, useEffect, useRef } from 'react'
import type { PointerEvent } from 'react'

const MAX_TILT_DEG = 6

export function useTiltGlow<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const enabledRef = useRef(false)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    enabledRef.current = canHover && !prefersReducedMotion
  }, [])

  const onPointerMove = useCallback((event: PointerEvent<T>) => {
    if (!enabledRef.current || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    const ry = (px - 0.5) * MAX_TILT_DEG * 2
    const rx = (0.5 - py) * MAX_TILT_DEG * 2

    ref.current.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    ref.current.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    ref.current.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`)
    ref.current.style.setProperty('--my', `${(py * 100).toFixed(2)}%`)
  }, [])

  const onPointerLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
