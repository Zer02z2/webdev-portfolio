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
