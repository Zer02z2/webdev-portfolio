export interface ProjectMeta {
  src: string
  alt: string
  title: string
  slug: string
  type: string
  url: string
  urlName: string
  feature: string
  tech: string[]
  year: string
  role: string
}

export const synapticMeta: ProjectMeta = {
  src: "/projects/synaptic/landing.jpg",
  alt: "Landing page of Synaptic Medical",
  slug: "synaptic",
  title: "Synapticmed.com",
  type: "Branding website",
  url: "https://synapticmed.com/",
  urlName: "synapticmed.com",
  feature: "Customized CMS and job application system implementation.",
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
}

export const aiStorybookMeta: ProjectMeta = {
  src: "/projects/ai-playground/landing.jpg",
  alt: "Snapshot of an AI comic generator",
  title: "AI Storybook",
  slug: "ai-storybook",
  type: "AI App",
  url: "https://zer02z2.github.io/shared-minds/week3/",
  urlName: "github.com/Zer02z2/shared-minds",
  feature: "Take turns with AI to write stories and comics.",
  tech: ["typescript", "replicate", "vite", "firebase"],
  year: "2024",
  role: "Design & Development",
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

export const creativeCodingsMeta: ProjectMeta = {
  src: "/projects/infinite-swimming-pools/landing.png",
  alt: "3D modling scene of a swimming on a dirt hill",
  title: "Creative Coding Collection",
  slug: "creative-coding",
  type: "Experimental",
  url: "https://github.com/Zer02z2/Swimming-Pools-in-the-Hill",
  urlName: "github.com/Zer02z2/Swimming-Pools-in-the-Hill",
  feature: "AI, 3D, 2D, interactive sites, and all the fun stuff",
  tech: ["three-js", "p5js", "javascript", "vite"],
  year: "2022 - Now",
  role: "Design & Development",
}
