export interface CreativeMeta {
  src: string
  alt: string
  title: string
  liveUrl: string
  liveUrlName: string
  codeUrl: string
  codeUrlName: string
  tech: string[]
}

const srcPath = "/projects/creative-computing"

export const swimmingPoolMeta: CreativeMeta = {
  src: srcPath + "/infinite-swimming-pool.png",
  alt: "3D modling scene of a swimming on a dirt hill",
  title: "Infinite Swimming Pools",
  liveUrl: "https://zer02z2.github.io/Swimming-Pools-in-the-Hill/",
  liveUrlName: "Live website",
  codeUrl: "https://github.com/Zer02z2/Swimming-Pools-in-the-Hill",
  codeUrlName: "Source code",
  tech: ["threejs", "javascript", "vite"],
}

export const visibleTypingMeta: CreativeMeta = {
  src: srcPath + "/visible-typing.jpg",
  alt: "visible typing interface",
  title: "Visible Typing",
  liveUrl: "https://zer02z2.github.io/creative-computing-p5/visible-typing/",
  liveUrlName: "Live website",
  codeUrl:
    "https://github.com/Zer02z2/creative-computing-p5/tree/main/visible-typing",
  codeUrlName: "Source code",
  tech: ["p5js", "javascript"],
}

export const rhythmLegoMeta: CreativeMeta = {
  src: srcPath + "/rhythm-lego.gif",
  alt: "Rhythm lego interface",
  title: "Rhythm Lego",
  liveUrl: "https://zer02z2.github.io/creative-computing-p5/rhythm-lego/",
  liveUrlName: "Live website",
  codeUrl:
    "https://github.com/Zer02z2/creative-computing-p5/tree/main/rhythm-lego",
  codeUrlName: "Source code",
  tech: ["p5js", "javascript"],
}

export const fishSimulationMeta: CreativeMeta = {
  src: srcPath + "/fish-simulation.gif",
  alt: "Fish swimming simulation",
  title: "Fish body simulation",
  liveUrl:
    "https://zer02z2.github.io/creative-computing-p5/fish-body-simulation/",
  liveUrlName: "Live website",
  codeUrl:
    "https://github.com/Zer02z2/creative-computing-p5/tree/main/fish-body-simulation",
  codeUrlName: "Source code",
  tech: ["p5js", "javascript"],
}

export const clockMeta: CreativeMeta = {
  src: srcPath + "/clock.png",
  alt: "A digital clock",
  title: "Clock",
  liveUrl: "https://zer02z2.github.io/creative-computing/clock/",
  liveUrlName: "Live website",
  codeUrl: "https://github.com/Zer02z2/creative-computing/tree/main/src/clock",
  codeUrlName: "Source code",
  tech: ["typescript"],
}
