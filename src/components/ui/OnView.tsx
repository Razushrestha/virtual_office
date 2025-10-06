"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface OnViewProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
  delay?: number
  y?: number
}

export const OnView: React.FC<OnViewProps> = ({ children, as: Tag = 'div', className, delay = 0, y = 24 }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start('show')
            setHasPlayed(true)
          } else if (!hasPlayed) {
            controls.start('hidden')
          }
        })
      },
      { threshold: 0.18 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [controls, hasPlayed])

  const Content = (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
  return React.createElement(Tag, { className: 'contents' }, Content)
}