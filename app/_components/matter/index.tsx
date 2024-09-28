"use client"

import Matter from "matter-js"
import { useEffect, useRef, useState } from "react"
import { render } from "./render"
import { largeCanvas } from "./largeCanvas"

export interface ImgMapProps {
  [name: string]: { src: HTMLImageElement; w: number; h: number }
}

export const MatterScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const smCanvasRef = useRef<HTMLCanvasElement>(null)

  const [isSmall, setIsSmall] = useState<boolean | null>(null)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) setIsSmall(false)
      else setIsSmall(true)
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const Engine = Matter.Engine,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Constraint = Matter.Constraint
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
        "Digitalocean",
        "framer",
        "nginx",
        "node-red",
        "php",
        "vite",
        "nodejs",
        "firebase",
        "gsap",
        "mysql",
        "wordpress",
        "figma",
      ]

    const param = largeCanvas({
      canvas: canvas,
      ctx: ctx,
      techList: techList,
      rows: rows,
      textureScale: textureScale,
      Bodies: Bodies,
      Composite: Composite,
      Constraint: Constraint,
      Engine: Engine,
      engine: engine,
    })

    render(param)

    return () => {
      Composite.clear(engine.world, true)
      Engine.clear(engine)
    }
  }, [isSmall])

  return (
    <div className="w-full relative h-[600px]">
      <div
        className="w-screen absolute flex justify-center overflow-hidden"
        style={{ left: "calc(50% - 50vw)" }}
      >
        {!isSmall && (
          <canvas ref={canvasRef} style={{ width: 2000, height: 600 }} />
        )}
        {isSmall && (
          <canvas ref={smCanvasRef} style={{ width: 1200, height: 400 }} />
        )}
      </div>
    </div>
  )
}
