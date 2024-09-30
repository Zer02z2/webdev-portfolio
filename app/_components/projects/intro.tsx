"use client"

import { FC, useRef } from "react"
import { motion, useInView } from "framer-motion"

export const Intro: FC<{ children: string }> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="py-32">
      <motion.div
        ref={ref}
        className="flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={isInView && { y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-2xl max-w-3xl">{children}</h1>
      </motion.div>
    </div>
  )
}
