"use client"

import Matter from "matter-js"
import { useEffect, useRef } from "react"

export const MatterScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const createImg = (src: string): HTMLImageElement => {
    const img = new Image()
    img.src = src
    return img
  }

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

    const canvasWidth = 2000,
      canvasHeight = 600,
      iconSize = 60,
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
        "nodejs",
        "firebase",
        "gsap",
        "mysql",
        "wordpress",
        "figma",
      ]

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr
    ctx.scale(dpr, dpr)

    const imgMap: {
      [name: string]: { src: HTMLImageElement; w: number; h: number }
    } = {}
    techList.forEach((name) => {
      const fileName = name
        .split(/[^a-zA-Z0-9]+/)
        .join("")
        .toLowerCase()
      if (!imgMap[name]) {
        imgMap[name] = {
          src: createImg(`/techIcons/${fileName}.svg`),
          w: iconSize * textureScale,
          h: iconSize * textureScale,
        }
      }
    })
    const iconList = techList.map((name, index) => {
      const body = Bodies.rectangle(
        canvasWidth / 2 + 100 + iconSize * Math.floor(index / rows),
        canvasHeight - iconSize * (1 + (index % rows) - 0.5),
        iconSize,
        iconSize,
        {
          label: name,
          chamfer: { radius: 10 },
          restitution: 0,
          frictionStatic: 10,
        }
      )
      return body
    })

    const ball = Bodies.circle(
      canvasWidth / 2 - 800,
      canvasHeight - 8 * iconSize,
      iconSize,
      {
        label: "ball",
        density: 0.04,
        frictionAir: 0.005,
        force: { x: 10, y: 10 },
      }
    )
    imgMap.ball = {
      src: createImg("/portrait.png"),
      w: 2 * iconSize * 0.9,
      h: 2 * iconSize * 0.9,
    }

    const ground = Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight,
      canvas.width,
      1,
      {
        label: "ground",
        isStatic: true,
      }
    )
    const nameBox = Bodies.rectangle(
      canvasWidth / 2 - 238,
      canvasHeight - 46,
      522,
      93,
      { label: "nameBox", isStatic: true }
    )
    imgMap.nameBox = {
      src: createImg("/ZONGZE.svg"),
      w: 522,
      h: 93,
    }

    Composite.add(engine.world, [...iconList, ground, ball, nameBox])
    Composite.add(
      engine.world,
      Constraint.create({
        pointA: { x: canvasWidth / 2 - 300, y: -200 },
        bodyB: ball,
      })
    )

    const render = () => {
      Engine.update(engine)
      const bodies = Composite.allBodies(engine.world)
      const constraints = Composite.allConstraints(engine.world)

      window.requestAnimationFrame(render)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.lineWidth = 1
      constraints.forEach((constraint) => {
        if (!constraint.bodyB) return
        if (constraint.label === "Mouse Constraint") return
        ctx.moveTo(constraint.pointA.x, constraint.pointA.y)
        ctx.lineTo(constraint.bodyB.position.x, constraint.bodyB.position.y)
        ctx.strokeStyle = "#909090"
        ctx.stroke()
      })

      ctx.beginPath()

      bodies.forEach((body) => {
        if (body.label !== "nameBox") {
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
          ctx.strokeStyle = body.label == "ground" ? "#909090" : "#1E1E1E"
          ctx.stroke()
        }

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
      <div className="flex justify-center">
        <canvas ref={canvasRef} style={{ width: 2000, height: 600 }} />
      </div>
    </div>
  )
}
