import Matter, { Bodies, Body, Composite, Engine } from "matter-js"
import { RefObject } from "react"

interface BallProps {
  refs: RefObject<HTMLDivElement>[]
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  engine: Matter.Engine
}
export const renderBall = (param: BallProps) => {
  const { refs, canvas, ctx, engine } = param

  const bodySizes = refs.map((ref, index) => {
    const { width, height } = ref.current
      ? ref.current.getBoundingClientRect()
      : { width: 0, height: 0 }
    return { w: width, h: height }
  })

  const bodies = bodySizes.map((size, index) => {
    const steps = bodySizes.slice(index + 1, bodySizes.length - 1)
    const height = steps.reduce((h, step) => h + step.h, 0)
    const body = Bodies.rectangle(
      size.w / 2,
      canvas.height - (size.h / 2 + height),
      size.w,
      size.h > 0 ? size.h : 10,
      {
        isStatic: true,
        friction: 0,
      }
    )
    return body
  })

  const radius = 25
  const position = { x: -radius, y: radius }
  const force = {
    x: refs[0].current
      ? refs[0].current.getBoundingClientRect().width * 0.005
      : 1,
    y: 0,
  }
  const ball = Bodies.circle(position.x, position.y, radius, {
    label: "ball",
    density: 0.04,
    frictionAir: 0,
    friction: 0,
    force: force,
    restitution: 0.8,
  })

  Composite.add(engine.world, [...bodies, ball])

  const render = () => {
    Engine.update(engine)
    const bodies = Composite.allBodies(engine.world)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bodies.forEach((body) => {
      if (body.label !== "ball") return

      if (body.position.x - radius > canvas.width) {
        Body.setPosition(ball, position)
        Body.setSpeed(ball, 0)
        Body.applyForce(ball, position, force)
      }

      const vertices = body.vertices
      ctx.moveTo(vertices[0].x, vertices[0].y)
      ctx.beginPath()
      vertices.forEach((vertex, index) => {
        if (index === 0) return
        ctx.lineTo(vertex.x, vertex.y)
      })
      ctx.lineTo(vertices[0].x, vertices[0].y)
      ctx.closePath()

      ctx.fillStyle = "#0059FF"
      ctx.fill()
    })
    window.requestAnimationFrame(() => {
      render()
    })
  }
  render()
}
