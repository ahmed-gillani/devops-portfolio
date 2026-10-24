import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUpItem, staggerContainer } from '../../animations/variants'

type RevealTag = 'div' | 'ul' | 'ol' | 'li' | 'article'

const MOTION_TAG = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  article: motion.article,
}

interface RevealProps {
  children: ReactNode
  className?: string
  as?: RevealTag
  stagger?: number
  amount?: number
}

export function Reveal({ children, className = '', as = 'div', stagger = 0.08, amount = 0.2 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const Static = as

  if (prefersReducedMotion) {
    return <Static className={className}>{children}</Static>
  }

  const MotionTag = MOTION_TAG[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </MotionTag>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  as?: RevealTag
}

export function RevealItem({ children, className = '', as = 'div' }: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion()
  const Static = as

  if (prefersReducedMotion) {
    return <Static className={className}>{children}</Static>
  }

  const MotionTag = MOTION_TAG[as] as typeof motion.div
  return (
    <MotionTag className={className} variants={fadeUpItem}>
      {children}
    </MotionTag>
  )
}
