'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
}

export function AnimationWrapper({ children, className = '' }: AnimationWrapperProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

