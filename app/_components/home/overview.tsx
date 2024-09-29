"use client"

import { motion, useInView } from "framer-motion"
import { Fragment, useRef } from "react"
import { Bento } from "../bento"
import { IconText } from "../iconText"
import { RoundedImg } from "../roundedImg"
import { SmallText } from "../smallText"
import { ProjectMeta } from "../../projectMeta"
import { TechIcon } from "../techIcon"

export const Overview = ({
  data,
  order,
}: {
  data: ProjectMeta
  order: number
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
      initial={{ y: 50, opacity: 0 }}
      animate={isInView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
    >
      <div className="grid place-items-center">
        <div>
          <h1 className="pb-4 text-xl sm:text-4xl">{`${order.toString()}. ${title}`}</h1>
          <RoundedImg src={src} alt={alt} />
          <div className="pt-4"></div>
          <Bento border={true} dark={false}>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4">
              <div className="col-span-3">
                <div className="gap-x-10 flex flex-col gap-y-4 2xl:flex-row">
                  <div>
                    <SmallText>Type</SmallText>
                    <p>{type}</p>
                  </div>
                  <div>
                    <SmallText>URL</SmallText>
                    <IconText
                      src="./icons/browser.svg"
                      text={urlName}
                      url={url}
                    />
                  </div>
                </div>
                <div className="pt-4"></div>
                <SmallText>Feature</SmallText>
                <p>{feature}</p>
                <div className="flex gap-x-2 pt-4">{techIcons}</div>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1 sm:grid place-items-center">
                <p className="font-medium">Read more</p>
              </div>
            </div>
          </Bento>
        </div>
      </div>
    </motion.div>
  )
}
