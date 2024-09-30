import { Hero } from "../_components/projects/hero"
import { Intro } from "../_components/projects/intro"
import { synapticMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={synapticMeta} />
      <Intro skills={[...synapticMeta.tech, "html", "css", "figma"]}>
        During my internship at Synaptic Medical, I was responsible for
        designing and developing the new company website using Wordpress.org. My
        work includes dynamic generation of web page, client-side interactions,
        responsive design, and so on.
      </Intro>
    </div>
  )
}
