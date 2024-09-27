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

export const aiPlaygroundMeta: ProjectMeta = {
  src: "/projects/ai-playground/landing.jpg",
  alt: "Snapshot of an AI comic generator",
  title: "AI Playground",
  type: "Mini Apps",
  url: "https://github.com/Zer02z2/shared-minds",
  urlName: "Github repo",
  feature:
    "A series of fun and experimental mini-apps that leverage the power of AI.",
  tech: ["typescript", "replicate"],
}
