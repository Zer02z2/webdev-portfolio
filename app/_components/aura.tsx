"use client"

import { useEffect, useState } from "react"

export const Aura = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    })
  }, [])
  return (
    <div
      className="fixed -z-10 rounded-full w-96 h-96 blur-[150px]"
      style={{
        backgroundColor: "#DBEEFF",
        left: `${position.x - 192}px`,
        top: `${position.y - 192}px`,
      }}
    ></div>
  )
}
