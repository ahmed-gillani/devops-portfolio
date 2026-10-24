import { motion, useReducedMotion } from 'motion/react'

interface SectionHeadingProps {
  id: string
  stageNumber?: string
  title: string
  description?: string
}

const headingVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function SectionHeading({ id, stageNumber, title, description }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()

  const content = (
    <>
      {stageNumber && <p className="mb-2 font-mono text-sm text-text-muted">{stageNumber}</p>}
      <h2 id={id} className="text-2xl font-semibold text-text sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 max-w-prose text-text-muted">{description}</p>}
    </>
  )

  if (prefersReducedMotion) {
    return <div className="mb-8 sm:mb-10">{content}</div>
  }

  return (
    <motion.div
      className="mb-8 sm:mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={headingVariants}
    >
      {content}
    </motion.div>
  )
}
