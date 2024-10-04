"use client"

import Link from "next/link"
import { motion, useAnimation } from "framer-motion"

export const Header = () => {
  const control = useAnimation()
  return (
    <header className="fixed top-0 p-4 sm:p-10 z-50 mix-blend-exclusion">
      <Link href="/">
        <div
          className="flex w-20"
          onMouseEnter={() => {
            control.start("rotate")
          }}
        >
          <div>
            <img src="/icons/favicon-left.svg" alt="Website favicon" />
          </div>
          <motion.div
            variants={{
              rotate: {
                rotate: ["0deg", "30deg", "-30deg", "30deg", "35deg", "0deg"],
                transition: {
                  duration: 0.5,
                  ease: "linear",
                  times: [0, 0.2, 0.4, 0.6, 0.85, 1],
                },
              },
            }}
            animate={control}
          >
            <img src="/icons/favicon-right.svg" alt="Website favicon" />
          </motion.div>
        </div>
      </Link>
    </header>
  )
}
