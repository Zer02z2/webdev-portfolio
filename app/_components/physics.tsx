"use client"

import Matter from "matter-js"
import { useEffect, useRef } from "react"

export const Physics = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.src = "./image.png"

    const Engine = Matter.Engine,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite

    const engine = Engine.create()

    const boxA = Bodies.rectangle(450, 200, 80, 80)
    const boxB = Bodies.rectangle(400, 50, 80, 80)
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

    Composite.add(engine.world, [boxA, boxB, ground])

    const render = () => {
      Engine.update(engine)
      const bodies = Composite.allBodies(engine.world)
      //console.log(bodies)
      window.requestAnimationFrame(render)

      ctx.fillStyle = "#fff"
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.beginPath()

      bodies.forEach((body) => {
        const vertices = body.vertices
        const { x, y } = body.position
        ctx.drawImage(img, x - 40, y - 40, 80, 80)

        ctx.moveTo(vertices[0].x, vertices[0].y)

        vertices.forEach((vertex, index) => {
          if (index === 0) return
          ctx.lineTo(vertex.x, vertex.y)
        })

        ctx.lineTo(vertices[0].x, vertices[0].y)
      })

      ctx.lineWidth = 1
      ctx.strokeStyle = "#999"
      ctx.stroke()
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
        <canvas ref={canvasRef} width={800} height={600} />
      </div>
    </div>
  )
}
