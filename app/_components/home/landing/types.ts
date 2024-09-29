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
  Bodies: typeof Matter.Bodies
  Composite: typeof Matter.Composite
  Constraint: typeof Matter.Constraint
  Engine: typeof Matter.Engine
  engine: Matter.Engine
}

export interface RenderProps {
  Engine: typeof Matter.Engine
  engine: Matter.Engine
  Composite: typeof Matter.Composite
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  imgMap: ImgMapProps
}
