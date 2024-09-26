"use client"

import Matter from "matter-js"
import { useEffect, useRef } from "react"

export const Physics = () => {
  const sceneRef = useRef(null)
  const a = 2
  useEffect(() => {
    if (!sceneRef.current) return

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite

    const engine = Engine.create()
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
      },
    })

    const boxA = Bodies.rectangle(400, 200, 80, 80)
    const boxB = Bodies.rectangle(400, 50, 80, 80)
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

    Composite.add(engine.world, [boxA, boxB, ground])
    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)

    return () => {
      Render.stop(render)
      Composite.clear(engine.world, true)
      Engine.clear(engine)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return <div ref={sceneRef} />
}
