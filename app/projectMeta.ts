export interface ProjectMeta {
  src: string
  alt: string
  title: string
  type: string
  url: string
  urlName: string
  feature: string
  tech: string[]
}

export const synapticMeta: ProjectMeta = {
  src: "/projects/synaptic/landing.jpg",
  alt: "Landing page of Synaptic Medical",
  title: "Synapticmed.com",
  type: "Branding website",
  url: "https://synapticmed.com/",
  urlName: "synapticmed.com",
  feature: "Customized CMS and job application system implementation.",
  tech: ["wordpress", "php", "javascript", "gsap"],
}

export const webDevMeta: ProjectMeta = {
  src: "/projects/webdev/landing.jpg",
  alt: "Landing page of this website",
  title: "webdev.zongzechen.com",
  type: "Portfolio website",
  url: "https://zongzechen.com",
  urlName: "zongzechen.com",
  feature: "Self-designed and developed Next.js website.",
  tech: ["nextjs", "react", "typescript", "tailwindcss", "framer"],
}

export const aiPlaygroundMeta: ProjectMeta = {
  src: "/projects/ai-playground/landing.jpg",
  alt: "Snapshot of an AI comic generator",
  title: "AI Playground",
  type: "Mini Apps",
  url: "https://github.com/Zer02z2/shared-minds",
  urlName: "github.com/Zer02z2/shared-minds",
  feature:
    "A series of fun and experimental mini-apps that leverage the power of AI.",
  tech: ["typescript", "replicate", "vite", "firebase"],
}

export const skylabMeta: ProjectMeta = {
  src: "/projects/skylab/landing-dark.png",
  alt: "Snapshot of a database",
  title: "Skylab Data System",
  type: "Data Logger",
  url: "https://io.zongzechen.com/energy",
  urlName: "io.zongzechen.com/energy",
  feature:
    "Full-stack real-time data tracking system for IoT devices with an app that allows data query.",
  tech: ["Javascript", "node-red", "mysql", "nginx", "digitalocean"],
}

export const creativeCodingsMeta: ProjectMeta = {
  src: "/projects/infinite-swimming-pools/landing.png",
  alt: "3D modling scene of a swimming on a dirt hill",
  title: "Creative Codings",
  type: "Experimental",
  url: "https://github.com/Zer02z2/Swimming-Pools-in-the-Hill",
  urlName: "github.com/Zer02z2/Swimming-Pools-in-the-Hill",
  feature: "A compilation of 3D, 2D, and creative use of the canvas element.",
  tech: ["three-js", "p5js", "javascript", "vite"],
}
