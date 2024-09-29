import Matter from "matter-js"

export interface ImgMapProps {
  [name: string]: { src: HTMLImageElement; w: number; h: number }
}

export interface CanvasProps {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  canvasWidth: number
  canvasHeight: number
  techList: string[]
  rows: number
  textureScale: number
  engine: Matter.Engine
}

export interface RenderProps {
  engine: Matter.Engine
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  imgMap: ImgMapProps
}
