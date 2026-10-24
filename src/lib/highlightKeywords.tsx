import type { ReactNode } from 'react'

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function highlightKeywords(text: string, keywords: string[]): ReactNode {
  if (keywords.length === 0) return text

  const pattern = new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'g')
  const parts = text.split(pattern)

  return parts.map((part, index) =>
    keywords.includes(part) ? (
      <span key={`${part}-${index}`} className="text-gradient-accent">
        {part}
      </span>
    ) : (
      <span key={`plain-${index}`}>{part}</span>
    ),
  )
}
