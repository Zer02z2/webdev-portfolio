"use client"

import Matter from "matter-js"
import { useEffect, useRef, useState } from "react"

export const MatterScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({
    x: window.innerWidth,
    y: 600,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    window.addEventListener("resize", () => {
      setCanvasSize({ x: window.innerWidth, y: canvasSize.y })
    })

    const Engine = Matter.Engine,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Constraint = Matter.Constraint
    const engine = Engine.create()

    const iconSize = 60,
      textureScale = 0.7,
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
      ]

    const imgMap: {
      [name: string]: { src: HTMLImageElement; w: number; h: number }
    } = {}
    techList.forEach((name) => {
      const fileName = name
        .split(/[^a-zA-Z]+/)
        .join("-")
        .toLowerCase()
      const url = `./_techIcons/${fileName}.svg`
      const img = new Image()
      img.src = url
      if (!imgMap[name]) {
        imgMap[name] = {
          src: img,
          w: iconSize * textureScale,
          h: iconSize * textureScale,
        }
      }
    })
    const iconList = techList.map((name, index) => {
      const body = Bodies.rectangle(
        canvasSize.x / 2 + 200 + iconSize * Math.floor(index / rows),
        canvasSize.y - iconSize * (1 + (index % rows) - 0.5),
        iconSize,
        iconSize,
        { chamfer: { radius: 10 }, restitution: 0, frictionStatic: 10 }
      )
      body.label = name
      return body
    })

    const ground = Bodies.rectangle(
      canvas.width / 2,
      canvas.height,
      canvas.width,
      1,
      {
        isStatic: true,
      }
    )

    const ball = Bodies.circle(
      canvasSize.x / 2 - 500,
      canvasSize.y - 8 * iconSize,
      iconSize,
      { density: 0.04, frictionAir: 0.005 }
    )

    Composite.add(engine.world, [...iconList, ground, ball])
    Composite.add(
      engine.world,
      Constraint.create({
        pointA: { x: canvasSize.x / 2, y: -200 },
        bodyB: ball,
      })
    )

    const render = () => {
      Engine.update(engine)
      const bodies = Composite.allBodies(engine.world)
      //console.log(bodies)
      window.requestAnimationFrame(render)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.beginPath()

      bodies.forEach((body) => {
        const vertices = body.vertices

        ctx.moveTo(vertices[0].x, vertices[0].y)
        ctx.beginPath()

        vertices.forEach((vertex, index) => {
          if (index === 0) return
          ctx.lineTo(vertex.x, vertex.y)
        })

        ctx.lineTo(vertices[0].x, vertices[0].y)
        ctx.closePath()

        ctx.fillStyle = "#E2E2E2"
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle =
          body.label == "ground" || body.label == "string"
            ? "#909090"
            : "#1E1E1E"
        ctx.stroke()

        if (imgMap[body.label]) {
          const { x, y } = body.position
          const img = imgMap[body.label]
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(body.angle)
          ctx.drawImage(img.src, -img.w / 2, -img.h / 2, img.w, img.h)
          ctx.restore()
        }
      })
    }
    render()

    return () => {
      Composite.clear(engine.world, true)
      Engine.clear(engine)
    }
  }, [])

  return (
    <div className="w-full">
      <div className="absolute left-0">
        <canvas ref={canvasRef} width={canvasSize.x} height={canvasSize.y} />
      </div>
    </div>
  )
}
