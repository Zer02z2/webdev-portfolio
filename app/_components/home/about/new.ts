import { RefObject } from "react"

interface RenderProps {
  setX: React.Dispatch<React.SetStateAction<number>>
  setY: React.Dispatch<React.SetStateAction<number>>
  refs: RefObject<HTMLDivElement>[]
}
export const renderBall = (param: RenderProps) => {
  const { setX, setY, refs } = param
  if (refs.find((ref) => ref.current === null)) return

  const speed = { x: 1, y: 10 }

  const render = () => {
    setX((prev) => prev + speed.x)

    window.requestAnimationFrame(() => {
      render()
    })
  }
  render()
}
