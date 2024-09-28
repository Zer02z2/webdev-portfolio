"use client"

import { motion, useInView } from "framer-motion"
import { Fragment, useRef } from "react"
import { Bento } from "./_components/bento"
import { IconText } from "./_components/iconText"
import { RoundedImg } from "./_components/roundedImg"
import { SmallText } from "./_components/smallText"
import { ProjectMeta } from "./projectMeta"
import { TechIcon } from "./_components/techIcon"

export const Overview = ({
  data,
  order,
}: {
  data: ProjectMeta
  order: string
}) => {
  const { src, alt, title, type, url, urlName, feature, tech } = data
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
      ref={ref}
      initial={{ x: "10%", opacity: 0 }}
      animate={isInView && { x: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
    >
      <div className="grid place-items-center">
        <div className="max-w-5xl">
          <h1 className="text-4xl pb-4">{`${order}. ${title}`}</h1>
          <RoundedImg src={src} alt={alt} />
          <div className="grid grid-cols-4 pt-5 gap-x-4">
            <Bento>
              <SmallText>Type</SmallText>
              <p>{type}</p>
              <div className="pt-2"></div>
              <SmallText>URL</SmallText>
              <IconText src="./icons/browser.svg" text={urlName} url={url} />
            </Bento>
            <div className="col-span-2">
              <Bento>
                <SmallText>Feature</SmallText>
                <p>{feature}</p>
                <div className="flex gap-x-2 pt-4">{techIcons}</div>
              </Bento>
            </div>
            <Bento border={false}>
              <div className="grid place-items-center h-full font-medium">
                Read more
              </div>
            </Bento>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
