"use client"

import { ProjectMeta } from "@/app/projectMeta"
import { Bento } from "../bento"
import { SmallText } from "../smallText"
import { IconText } from "../iconText"
import { TechIcon } from "../techIcon"
import { Fragment } from "react"
import { motion } from "framer-motion"
import { CoverImg } from "../coverImg"
import { RoundedImg } from "../roundedImg"

export const Hero = ({ projectMeta }: { projectMeta: ProjectMeta }) => {
  const {
    src,
    alt,
    title,
    slug,
    type,
    url,
    urlName,
    feature,
    tech,
    year,
    role,
  } = projectMeta

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid pt-28 gap-8">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-end">
            <h1 className="text-xl sm:text-4xl">{title}</h1>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <SmallText>Type</SmallText>
              <p className="pb-4">{type}</p>
              <SmallText>URL</SmallText>
              <IconText
                src="/icons/browser.svg"
                text={urlName}
                url={url}
              ></IconText>
            </div>
            <div>
              <SmallText>Year</SmallText>
              <p className="pb-4">{year}</p>
              <SmallText>Role</SmallText>
              <p>{role}</p>
            </div>
          </div>
        </div>
        <RoundedImg src={src} alt={alt} />
      </div>
    </motion.div>
  )
}
