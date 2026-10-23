interface SectionHeadingProps {
  id: string
  stageNumber?: string
  title: string
  description?: string
}

export function SectionHeading({ id, stageNumber, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-10">
      {stageNumber && <p className="mb-2 font-mono text-sm text-text-muted">{stageNumber}</p>}
      <h2 id={id} className="text-2xl font-semibold text-text sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 max-w-prose text-text-muted">{description}</p>}
    </div>
  )
}
