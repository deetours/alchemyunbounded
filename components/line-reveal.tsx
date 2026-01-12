"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface LineRevealProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
}

export function LineReveal({ lines, className = "", lineClassName = "", delay = 0 }: LineRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={lineClassName}
        >
          {line}
        </motion.p>
      ))}
    </div>
  )
}
