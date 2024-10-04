"use client"

import { Composite, Engine } from "matter-js"
import { useEffect, useRef, useState } from "react"
import { render } from "./render"
import { largeCanvas } from "./largeCanvas"
import { smallCanvas } from "./smallCanvas"

export const MatterScene = () => {
  const largeCanvasSize = { x: 2000, y: 600 }
  const smallCanvasSize = { x: 1200, y: 400 }

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const smCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isSmall, setIsSmall] = useState<boolean | null>(null)

  useEffect(() => {
    if (window.innerWidth > 1024) setIsSmall(false)
    else setIsSmall(true)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) setIsSmall(false)
      else setIsSmall(true)
    })
  }, [])

  useEffect(() => {
    const canvas = isSmall ? smCanvasRef.current : canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const engine = Engine.create()

    const textureScale = 0.7,
      rows = 5,
      techList = [
        "Next.js",
        "Typescript",
        "React",
        "Tailwindcss",
        "three.js",
        "css",
        "javascript",
        "html",
        "framer",
        "nginx",
        "vite",
        "nodejs",
        "php",
        "Digitalocean",
        "node-red",
        "firebase",
        "gsap",
        "mysql",
        "wordpress",
        "figma",
      ]

    if (isSmall) {
      const param = smallCanvas({
        canvas: canvas,
        ctx: ctx,
        canvasWidth: smallCanvasSize.x,
        canvasHeight: smallCanvasSize.y,
        techList: techList,
        rows: rows,
        textureScale: textureScale,
        engine: engine,
      })
      render(param)
    } else {
      const param = largeCanvas({
        canvas: canvas,
        ctx: ctx,
        canvasWidth: largeCanvasSize.x,
        canvasHeight: largeCanvasSize.y,
        techList: techList,
        rows: rows,
        textureScale: textureScale,
        engine: engine,
      })
      render(param)
    }
    return () => {
      Composite.clear(engine.world, true)
      Engine.clear(engine)
    }
  }, [isSmall])

  return (
    <div>
      {!isSmall && (
        <div className="w-full relative h-[600px]">
          <div
            className="w-screen absolute flex justify-center overflow-hidden"
            style={{ left: "calc(50% - 50vw)" }}
          >
            <canvas
              ref={canvasRef}
              style={{ width: largeCanvasSize.x, height: largeCanvasSize.y }}
            />
          </div>
        </div>
      )}
      {isSmall && (
        <div className="w-full relative h-[400px]">
          <div
            className="w-screen absolute flex justify-center overflow-hidden"
            style={{ left: "calc(50% - 50vw)" }}
          >
            <canvas
              ref={smCanvasRef}
              style={{ width: smallCanvasSize.x, height: smallCanvasSize.y }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
