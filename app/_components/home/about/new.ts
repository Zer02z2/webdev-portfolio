import { RefObject } from "react"

interface BallProps {
  setX: React.Dispatch<React.SetStateAction<number>>
  setY: React.Dispatch<React.SetStateAction<number>>
  setKey: React.Dispatch<React.SetStateAction<number>>
  refs: RefObject<HTMLDivElement>[]
  ballRef: RefObject<HTMLDivElement>
}
export const renderBall = (param: BallProps) => {
  const { setX, setY, refs, ballRef } = param

  if (!ballRef.current) return
  // if (refs.find((ref) => ref.current === null)) return

  const ball = ballRef.current
  const speed = { x: 1, y: 1 }

  const render = () => {
    const body = ball.getBoundingClientRect()
    const ballX = body.x + body.width / 2
    const ballY = body.y + body.height * 1.5

    setX((prev) => prev + speed.x)
    setY((prev) => prev + speed.y)

    refs.forEach((ref) => {
      if (!ref.current) return
      const { x, y, width } = ref.current.getBoundingClientRect()
      if (x <= ballX && ballX <= x + width) {
        if (ballY >= y) {
          console.log("hit")
          speed.y *= -1
          setY((prev) => prev + speed.y)
        }
      }
    })

    window.requestAnimationFrame(() => {
      render()
    })
  }
  render()
}
