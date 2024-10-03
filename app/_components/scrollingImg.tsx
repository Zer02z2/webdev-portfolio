"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { FadeIn } from "./fadeIn"

export const ScrollingImg = ({
  src,
  alt = "image",
  width = 2560,
  height = 1440,
  speed = -20,
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  speed?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 60vh", "1 0vh"],
  })
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const y = useTransform(springY, [0, 1], ["0%", `${speed}%`])

  return (
    <FadeIn className="overflow-hidden rounded-lg w-full h-full relative">
      <div ref={ref} className="h-full">
        <motion.div
          className={`w-full absolute ${speed > 0 ? "bottom-0" : "top-0"}`}
          style={{ y }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
          />
        </motion.div>
      </div>
    </FadeIn>
  )
}
