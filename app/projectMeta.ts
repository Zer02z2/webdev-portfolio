export interface ProjectMeta {
  src: string
  alt: string
  title: string
  slug: string
  type: string
  url?: string
  urlName?: string
  linkType?: "external" | "internal"
  feature: string
  tech: string[]
  year: string
  role: string
  codeUrl?: string
}

export const synapticMeta: ProjectMeta = {
  src: "/projects/synaptic/landing.jpg",
  alt: "Landing page of Synaptic Medical",
  slug: "synaptic",
  title: "Synapticmed.com",
  type: "Branding website",
  url: "https://synapticmed.com/",
  urlName: "synapticmed.com",
  feature: "Internship - full-stack web development and web design.",
  tech: ["wordpress", "php", "javascript", "gsap"],
  year: "2024",
  role: "Intern, Design & Development",
}

export const webDevMeta: ProjectMeta = {
  src: "/projects/webdev/landing.jpg",
  alt: "Landing page of this website",
  slug: "web-dev",
  title: "About this website",
  type: "Portfolio website",
  url: "https://webdev.zongzechen.com",
  urlName: "This website",
  feature: "Self-designed and developed Next.js website.",
  tech: ["nextjs", "react", "typescript", "tailwindcss", "framer"],
  year: "2024",
  role: "Design & Development",
  codeUrl: "https://github.com/Zer02z2/webdev-portfolio",
}

export const aiStorybookMeta: ProjectMeta = {
  src: "/projects/ai-playground/landing.jpg",
  alt: "Snapshot of an AI comic generator",
  title: "AI Storybook",
  slug: "ai-storybook",
  type: "AI App",
  url: "https://zer02z2.github.io/shared-minds/week3/",
  urlName: "github.com/Zer02z2/shared-minds",
  feature: "A front-end app to take turns with AI to write stories and comics.",
  tech: ["typescript", "replicate", "vite"],
  year: "2024",
  role: "Design & Development",
  codeUrl: "https://github.com/Zer02z2/shared-minds/tree/main/src/week3",
}

export const skylabMeta: ProjectMeta = {
  src: "/projects/skylab/landing.jpg",
  alt: "Snapshot of a database",
  title: "Skylab Data System",
  slug: "skylab",
  type: "Data Logger",
  url: "https://io.zongzechen.com/energy",
  urlName: "io.zongzechen.com/energy",
  feature: "Full-stack real-time data tracking system for IoT solar devices.",
  tech: ["Javascript", "node-red", "mysql", "nginx", "digitalocean"],
  year: "2024",
  role: "Design & Development",
}

export const creativeComputingMeta: ProjectMeta = {
  src: "/projects/creative-computing/koi-pond.gif",
  alt: "An animated scenes of kois swimming in a pond",
  title: "Creative Computing Collection",
  slug: "creative-computing",
  type: "Experimental",
  url: "/creative-computing",
  urlName: "Multiples",
  linkType: "internal",
  feature: "3D, 2D, interactive sites, and all the fun stuff",
  tech: ["three-js", "p5js", "javascript", "typescript", "vite"],
  year: "2022 - Now",
  role: "Design & Development",
}

export const timeMachineMeta: ProjectMeta = {
  src: "/projects/time-machine/landing16-9.jpg",
  alt: "Website interface that tells time",
  title: "Networked Time Comparator",
  slug: "time-machine",
  type: "Multiuser app",
  url: "https://io.zongzechen.com/undnet/timeMachine/",
  urlName: "io.zongzechen.com/undenet/timeMachine",
  feature:
    "A full-stack app that can compare the millionth sync error between multiple computers' time.",
  tech: ["react", "tailwindcss", "nodejs", "expressjs", "socketio"],
  year: "2024",
  role: "Design & Development",
  codeUrl: "https://github.com/Zer02z2/time-machine",
}

export const coBrowsingMeta: ProjectMeta = {
  src: "/projects/co-browsing/landing.jpg",
  alt: "Multi-user video meeting in the browswer",
  title: "Co-browsing",
  slug: "co-browsing",
  type: "Chrome extension",
  feature:
    "A Chrome extension that allows multiple people to browse the internet while seeing what each other is looking at concurrently.",
  tech: ["typescript", "nodejs", "webrtc", "socketio"],
  year: "2025",
  role: "Design & Development",
  codeUrl:
    "https://github.com/Zer02z2/undo/tree/main/software/chrome-extension-dev/src/screen-share",
}

export const selectedProjects: ProjectMeta[] = [
  timeMachineMeta,
  aiStorybookMeta,
  skylabMeta,
  synapticMeta,
  coBrowsingMeta,
  creativeComputingMeta,
  webDevMeta,
]
