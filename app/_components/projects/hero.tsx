"use client"

import { ProjectMeta } from "@/app/projectMeta"
import { RoundedImg } from "../roundedImg"
import { Bento } from "../bento"
import { SmallText } from "../smallText"
import { IconText } from "../iconText"
import { TechIcon } from "../techIcon"
import { Fragment } from "react"
import { motion } from "framer-motion"

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

  const techIcons = tech.map((name, index) => {
    return (
      <Fragment key={index}>
        <div className="size-8">
          <TechIcon name={name} />
        </div>
      </Fragment>
    )
  })
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="min-h-screen grid xl:grid-cols-10 pt-28 gap-8">
        <div className="xl:col-span-6 relative">
          <RoundedImg src={src} alt={alt} />
        </div>
        <div className="xl:pl-6 xl:col-span-4 flex flex-col justify-end">
          <div>
            <h1 className="pb-8 text-xl sm:text-4xl">{title}</h1>
            <div className="grid grid-cols-2 gap-x-4">
              <Bento>
                <SmallText>Type</SmallText>
                <p className="pb-4">{type}</p>
                <SmallText>URL</SmallText>
                <IconText
                  src="/icons/browser.svg"
                  text={urlName}
                  url={url}
                ></IconText>
              </Bento>
              <Bento>
                <SmallText>Year</SmallText>
                <p className="pb-4">{year}</p>
                <SmallText>Role</SmallText>
                <p>{role}</p>
              </Bento>
            </div>
            <Bento border={false}>
              <SmallText>Feature</SmallText>
              <p className="pb-4">{feature}</p>
              <div className="flex gap-x-2">{techIcons}</div>
            </Bento>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
