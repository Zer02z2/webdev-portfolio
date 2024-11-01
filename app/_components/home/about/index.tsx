"use client"

import { useEffect, useRef, useState } from "react"
import { Bento } from "../../bento"
import { IconText } from "../../iconText"
import { renderBall } from "./rollingBall"
import { Composite, Engine } from "matter-js"
import { SmallText } from "../../smallText"

export const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const ref5 = useRef<HTMLDivElement>(null)
  const refs = [ref1, ref2, ref3, ref4, ref5]
  const [key, setKey] = useState(1)

  useEffect(() => {
    let lastTime = Date.now()
    window.addEventListener("resize", () => {
      lastTime = Date.now()
      const interval = 300
      setTimeout(() => {
        const timeNow = Date.now()
        if (timeNow - lastTime > interval) {
          setKey((prev) => prev + 1)
        }
      }, interval + 5)
    })

    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    if (refs.find((ref) => ref.current === null)) return

    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = width
    canvas.height = height
    const engine = Engine.create()

    renderBall({
      refs: refs,
      canvas: canvas,
      ctx: ctx,
      engine: engine,
    })

    return () => {
      Composite.clear(engine.world, true)
      Engine.clear(engine)
    }
  }, [key])

  return (
    <div className="relative">
      <div className="relative">
        <div className="pt-40"></div>
        <canvas
          key={key}
          ref={canvasRef}
          className="absolute top-0 w-full h-full -z-10"
        ></canvas>
        <h1 className="z-10 text-base sm:text-xl lg:text-2xl 2xl:text-4xl">
          <div>
            <span ref={ref1}>hi, my name is Zongze.</span>
          </div>
          <div>
            <span ref={ref2}>I love coding and making beautiful</span>
          </div>
          <div>
            <span ref={ref3}>things on the web. To see a broader range of</span>
          </div>
          <div>
            <span ref={ref4}>
              my other work, you can visit&nbsp;
              <img
                src="/icons/browser.svg"
                alt="browser icons."
                className="size-3 sm:size-4 lg:size-5 2xl:size-7 inline-block"
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
                className="size-2 sm:size-3 lg:size-4 2xl:size-6 inline-block"
              />
            </span>
          </div>
        </h1>
        <div ref={ref5} className="w-full"></div>
      </div>
      <div className="z-20 max-w-56 pt-4 xl:absolute xl:bottom-0 xl:right-0">
        <Bento background="#E2E2E2">
          <SmallText>More information</SmallText>
          <div className="pt-2"></div>
          <IconText
            src="./icons/browser.svg"
            text="zongzechen.com"
            url="https://zongzechen.com"
          ></IconText>
        </Bento>
      </div>
    </div>
  )
}
