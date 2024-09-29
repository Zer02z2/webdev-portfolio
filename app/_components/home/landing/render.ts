import { Composite, Engine } from "matter-js"
import { RenderProps } from "./types"

export const render = (param: RenderProps) => {
  const { engine, ctx, canvas, imgMap } = param

  Engine.update(engine)
  const bodies = Composite.allBodies(engine.world)
  const constraints = Composite.allConstraints(engine.world)

  window.requestAnimationFrame(() => {
    render(param)
  })

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
