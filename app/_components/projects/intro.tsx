"use client"

import { FC, Fragment, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TechIcon } from "../techIcon"
import { Bento } from "../bento"
import { SmallText } from "../smallText"

export const Intro: FC<{ children: string; skills?: string[] }> = ({
  children,
  skills,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const techIcons =
    skills &&
    skills.map((name, index) => {
      return (
        <Fragment key={index}>
          <div className="size-12">
            <TechIcon name={name} />
          </div>
        </Fragment>
      )
    })
  return (
    <div className="py-32">
      <motion.div
        ref={ref}
        className="flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={isInView && { y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-3xl">
          <h1 className="text-xl md:text-2xl pb-10">{children}</h1>
          <Bento inline={true} dark={false}>
            <SmallText>Skills I used</SmallText>
            <div className="flex gap-6 pt-4 flex-wrap">{techIcons}</div>
          </Bento>
        </div>
      </motion.div>
    </div>
  )
}
