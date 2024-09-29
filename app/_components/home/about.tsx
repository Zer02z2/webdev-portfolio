"use client"
import { useEffect, useRef, useState } from "react"
import { Bento } from "../bento"
import { IconText } from "../iconText"
import { motion } from "framer-motion"

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [key, setKey] = useState(0)
  const [height, setHeight] = useState(0)
  const [dist, setDist] = useState(0)

  useEffect(() => {
    setHeight(ref.current?.getBoundingClientRect().height || 0)
    setDist(ref.current?.getBoundingClientRect().width || 0)
    setKey((prev) => prev + 1)
    window.addEventListener("resize", () => {
      setHeight(ref.current?.getBoundingClientRect().height || 0)
      setDist(ref.current?.getBoundingClientRect().width || 0)
      setKey((prev) => prev + 1)
    })
  }, [])

  return (
    <div className="pt-40">
      <div className="md:flex md:justify-between md:items-end">
        <div className="relative">
          <motion.div
            className="absolute rounded-full size-10 bg-black"
            key={key}
            style={{ bottom: height * 7 }}
            animate={{
              x: [
                0,
                dist * 0.3,
                dist * 0.5,
                dist * 0.6,
                dist * 0.7,
                dist * 0.8,
                dist * 1.2,
              ],
              y: [
                height * 3,
                height * 1,
                height * 4,
                height * 2,
                height * 5,
                height * 4,
                height * 7,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          ></motion.div>
          <h1 className="text-base sm:text-xl lg:text-2xl 2xl:text-4xl">
            <div>hi, my name is Zongze.</div>
            <div>I love coding and making beautiful</div>
            <div>things on the web. To see a broader range of</div>
            <div ref={ref}>
              my other work, you can visit&nbsp;
              <img
                src="/icons/browser.svg"
                alt="browser icons."
                className="size-7 inline-block"
              />
              &nbsp;
              <a
                className="inline-block"
                href="https://zongzechen.com"
                target="_blank"
              >
                zongzechen.com.
              </a>{" "}
              <img
                src="/icons/up-right-arrow.svg"
                alt="arrow"
                className="size-6 inline-block"
              />
            </div>
          </h1>
        </div>
        <Bento background="#E2E2E2">
          <IconText
            src="/icons/email.svg"
            text="zc1411@nyu.edu"
            iconSize="large"
          />
          <div className="pt-2"></div>
          <IconText src="/icons/file.svg" text="Resume" iconSize="large" />
        </Bento>
      </div>
    </div>
  )
}
