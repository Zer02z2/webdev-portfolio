"use client"

import { motion, useInView } from "framer-motion"
import { FC, ReactNode, useRef } from "react"

export const FadeIn: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`${className && className}`}
    >
      {children}
    </motion.div>
  )
}
