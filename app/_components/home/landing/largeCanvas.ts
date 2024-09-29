import { CanvasProps, ImgMapProps, RenderProps } from "./types"

const createImg = (src: string): HTMLImageElement => {
  const img = new Image()
  img.src = src
  return img
}

export const largeCanvas = (param: CanvasProps): RenderProps => {
  const {
    canvas,
    ctx,
    canvasWidth,
    canvasHeight,
    techList,
    rows,
    textureScale,
    Bodies,
    Composite,
    Constraint,
    Engine,
    engine,
  } = param

  const iconSize = 60

  const dpr = window.devicePixelRatio || 1
  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  ctx.scale(dpr, dpr)

  const iconList = techList.map((name, index) => {
    const body = Bodies.rectangle(
      canvasWidth / 2 + 100 + iconSize * Math.floor(index / rows),
      canvasHeight - iconSize * (1 + (index % rows) - 0.5),
      iconSize,
      iconSize,
      {
        label: name,
        chamfer: { radius: 10 },
        restitution: 0,
        frictionStatic: 10,
      }
    )
    return body
  })
  const imgMap: ImgMapProps = {}
  techList.forEach((name) => {
    const fileName = name
      .split(/[^a-zA-Z0-9]+/)
      .join("")
      .toLowerCase()
    if (!imgMap[name]) {
      imgMap[name] = {
        src: createImg(`/techIcons/${fileName}.svg`),
        w: iconSize * textureScale,
        h: iconSize * textureScale,
      }
    }
  })

  const ball = Bodies.circle(
    canvasWidth / 2 - 800,
    canvasHeight - 8 * iconSize,
    iconSize,
    {
      label: "ball",
      density: 0.04,
      frictionAir: 0.005,
      force: { x: 10, y: 10 },
    }
  )
  imgMap.ball = {
    src: createImg("/portrait.png"),
    w: 2 * iconSize * 0.9,
    h: 2 * iconSize * 0.9,
  }

  const ground = Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight,
    canvas.width,
    1,
    {
      label: "ground",
      isStatic: true,
    }
  )
  const nameBox = Bodies.rectangle(
    canvasWidth / 2 - 238,
    canvasHeight - 46,
    522,
    93,
    { label: "nameBox", isStatic: true }
  )
  imgMap.nameBox = {
    src: createImg("/ZONGZE.svg"),
    w: 522,
    h: 93,
  }

  Composite.add(engine.world, [...iconList, ground, ball, nameBox])
  Composite.add(
    engine.world,
    Constraint.create({
      pointA: { x: canvasWidth / 2 - 300, y: -200 },
      bodyB: ball,
    })
  )

  return {
    Engine: Engine,
    engine: engine,
    Composite: Composite,
    ctx: ctx,
    canvas: canvas,
    imgMap: imgMap,
  }
}
