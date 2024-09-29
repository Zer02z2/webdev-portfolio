import Matter from "matter-js"
import { RefObject } from "react"

interface rollingBallProps {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  Bodies: typeof Matter.Bodies
  Composite: typeof Matter.Composite
  Engine: typeof Matter.Engine
  engine: Matter.Engine
  refs: RefObject<HTMLDivElement>[]
}

export const renderBall = (param: rollingBallProps) => {
  const { canvas, ctx, Bodies, Composite, Engine, engine, refs } = param

  const canvasBounds = canvas.getBoundingClientRect()

  const dpr = window.devicePixelRatio || 1
  canvas.width *= dpr
  canvas.height *= dpr
  ctx.scale(dpr, dpr)

  const bodies = refs.map((ref) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const { x, y, width, height } = rect
    console.log(y - canvasBounds.y + height * 0.5)

    const body = Bodies.rectangle(
      x - canvasBounds.x + width * 0.5,
      y - canvasBounds.y + height * 0.5,
      width,
      height,
      { isStatic: true }
    )
    return body
  })
  Composite.add(engine.world, bodies as Matter.Body[])

  const render = () => {
    Engine.update(engine)
    const bodies = Composite.allBodies(engine.world)

    window.requestAnimationFrame(() => {
      render()
    })
    //console.log(bodies)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bodies.forEach((body) => {
      const vertices = body.vertices

      ctx.moveTo(vertices[0].x, vertices[0].y)

      vertices.forEach((vertex, index) => {
        if (index === 0) return
        ctx.lineTo(vertex.x, vertex.y)
      })

      ctx.lineTo(vertices[0].x, vertices[0].y)

      ctx.lineWidth = 1
      ctx.strokeStyle = "#1E1E1E"
      ctx.stroke()
    })
  }
  render()
}
