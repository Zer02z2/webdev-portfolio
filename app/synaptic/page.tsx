import { Hero } from "../_components/projects/hero"
import { Intro } from "../_components/projects/intro"
import { ScrollingImg } from "../_components/scrollingImg"
import { synapticMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={synapticMeta} />
      <Intro
        skills={[
          ...synapticMeta.tech,
          "html",
          "css",
          "figma",
          "illustrator",
          "photoshop",
        ]}
      >
        During my internship at Synaptic Medical, I worked on the design and
        development of the company's new website using Wordpress.org. My work
        includes dynamic generation of web page, client-side interactions,
        responsive design, and so on.
      </Intro>
      <div className="gap-8 h-[40rem] flex flex-col sm:grid grid-cols-4 sm:h-72 md:h-96 xl:h-[40rem] 2xl:h-[50rem]">
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/product-line-phone.png"
            width={750}
            height={6258}
            ratio={1 / 2}
          ></ScrollingImg>
        </div>
        <div className="col-span-3 h-1/2 sm:h-full">
          <ScrollingImg
            src="/projects/synaptic/product-line-desktop.png"
            width={1903}
            height={2342}
            ratio={3 / 2}
          ></ScrollingImg>
        </div>
      </div>
      <Intro skills={[...synapticMeta.tech, "html", "css", "figma"]}>
        During my internship at Synaptic Medical, I worked on the designing and
        developing the company's new website using Wordpress.org. My work
        includes dynamic generation of web page, client-side interactions,
        responsive design, and so on.
      </Intro>
      <Intro skills={[...synapticMeta.tech, "html", "css", "figma"]}>
        During my internship at Synaptic Medical, I worked on the designing and
        developing the company's new website using Wordpress.org. My work
        includes dynamic generation of web page, client-side interactions,
        responsive design, and so on.
      </Intro>
    </div>
  )
}
