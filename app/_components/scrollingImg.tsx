"use client"

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export const ScrollingImg = ({
  src,
  alt = "image",
  width = 2560,
  height = 1440,
  ratio = 16 / 9,
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  ratio?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 50vh", "1 0vh"],
  })
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const y = useTransform(springY, [0, 1], ["0%", "-20%"])

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden rounded-lg w-full h-full relative"
      initial={{ y: 20, opacity: 0 }}
      animate={isInView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div className="w-full absolute top-0" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
        />
      </motion.div>
    </motion.div>
  )
}
