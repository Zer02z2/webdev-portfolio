"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <footer>
      <div className="pt-28 pb-10 flex justify-center">
        <Link href="#top-anchor" scroll={true}>
          <motion.img
            src="/icons/arrow-up.svg"
            alt="Up arrow."
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        </Link>
      </div>
    </footer>
  )
}
