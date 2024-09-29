"use client"

import { useEffect, useRef, useState } from "react"
import { Bento } from "../../bento"
import { IconText } from "../../iconText"
import { renderBall } from "./new"
import Matter from "matter-js"

export const About = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  // const ballRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const refs = Array.from({ length: 5 }).map((div) =>
    useRef<HTMLDivElement>(null)
  )

  useEffect(() => {
    renderBall({ setX: setTranslateX, setY: setTranslateY, refs: refs })
    // const canvas = canvasRef.current
    // if (!(canvas && refs.every((ref) => ref.current !== null))) return
    // const ctx = canvas.getContext("2d")
    // if (!ctx) return
    // const Engine = Matter.Engine,
    //   Bodies = Matter.Bodies,
    //   Composite = Matter.Composite
    // const engine = Engine.create()
    // renderBall({
    //   canvas: canvas,
    //   ctx: ctx,
    //   Bodies: Bodies,
    //   Composite: Composite,
    //   Engine: Engine,
    //   engine: engine,
    //   refs: refs,
    // })
  }, [])

  return (
    <div className="relative">
      <div className="pt-40"></div>
      <div
        className="absolute top-0 rounded-full size-10 bg-black"
        style={{
          transition: "transform 0.1s",
          transform: `translateX(${translateX}px) translateY(${translateY}px)`,
        }}
      ></div>
      {/* <canvas
        ref={canvasRef}
        className="-z-10 absolute top-0 w-full h-full"
      ></canvas> */}
      <div className="md:flex md:justify-between md:items-end">
        <h1 className="text-base sm:text-xl lg:text-2xl 2xl:text-4xl">
          <div>
            <span ref={refs[0]} className="border border-red-500">
              hi, my name is Zongze.
            </span>
          </div>
          <div>
            <span ref={refs[1]} className="border border-red-500">
              I love coding and making beautiful
            </span>
          </div>
          <div>
            <span ref={refs[2]} className="border border-red-500">
              things on the web. To see a broader range of
            </span>
          </div>
          <div>
            <span ref={refs[3]} className="border border-red-500">
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
            </span>
          </div>
        </h1>
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
      <div ref={refs[4]} className="w-full border border-red-500"></div>
    </div>
  )
}
