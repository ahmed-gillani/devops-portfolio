import { useEffect, useRef, useState } from 'react'

interface UseTypewriterOptions {
  speedMs?: number
  skip?: boolean
  onDone?: () => void
}

export function useTypewriter(text: string, { speedMs = 32, skip = false, onDone }: UseTypewriterOptions = {}) {
  const [output, setOutput] = useState(skip ? text : '')
  const [done, setDone] = useState(skip)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    if (skip) {
      setOutput(text)
      setDone(true)
      onDoneRef.current?.()
      return
    }

    setOutput('')
    setDone(false)

    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setOutput(text.slice(0, index))
      if (index >= text.length) {
        window.clearInterval(interval)
        setDone(true)
        onDoneRef.current?.()
      }
    }, speedMs)

    return () => window.clearInterval(interval)
  }, [text, speedMs, skip])

  return { output, done }
}
