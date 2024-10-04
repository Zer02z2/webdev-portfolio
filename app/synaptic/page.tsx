import { Hero } from "../_components/projects/hero"
import { BigText } from "../_components/projects/bigText"
import { ScrollingImg } from "../_components/scrollingImg"
import { aiStorybookMeta, synapticMeta } from "../projectMeta"
import { NextProject } from "../_components/projects/nextProject"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={synapticMeta} />
      <BigText
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
        development of the company&apos;s website using Wordpress.org. My work
        includes dynamic generation of web page, client-side interactions,
        responsive design, and so on.
      </BigText>
      <div className="gap-8 h-[40rem] flex flex-col sm:grid grid-cols-4 sm:h-72 md:h-96 xl:h-[40rem] 2xl:h-[50rem]">
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/products-phone.png"
            width={750}
            height={3952}
            speed={-30}
          ></ScrollingImg>
        </div>
        <div className="col-span-3 h-1/2 sm:h-full">
          <ScrollingImg
            src="/projects/synaptic/home-desktop.jpg"
            width={1903}
            height={2402}
            speed={-20}
          ></ScrollingImg>
        </div>
      </div>
      <BigText>
        I used PHP to interact with the content management system and make
        server-side rendering on certain pages. On specific pages that require
        user interaction, such as filtering, I also used Javascript and REST API
        to build client-side rendering.
      </BigText>
      <div className="gap-8 h-[40rem] flex flex-col md:h-[50rem] lg:grid grid-cols-4 lg:h-[20rem] xl:h-[30rem] 2xl:h-[40rem]">
        <div className="col-span-2 h-1/2 sm:h-full">
          <ScrollingImg
            src="/projects/synaptic/product-line-desktop.png"
            width={1903}
            height={2342}
            speed={-10}
          ></ScrollingImg>
        </div>
        <div className="col-span-2 h-1/2 sm:h-full">
          <ScrollingImg
            src="/projects/synaptic/job-desktop.jpg"
            width={1903}
            height={1875}
            speed={-10}
          ></ScrollingImg>
        </div>
      </div>
      <BigText>
        Designs are made responsive across mobile and desktop devices.
      </BigText>
      <div className="gap-8 h-72 grid grid-cols-4 md:h-96 xl:h-[40rem] 2xl:h-[50rem]">
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/product-line-bottom-phone.jpg"
            width={750}
            height={5316}
            speed={20}
          ></ScrollingImg>
        </div>
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/products-phone.png"
            width={750}
            height={3952}
            speed={-20}
          ></ScrollingImg>
        </div>
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/home-phone.jpg"
            width={750}
            height={6552}
            speed={20}
          ></ScrollingImg>
        </div>
        <div className="col-span-1 h-full">
          <ScrollingImg
            src="/projects/synaptic/job-phone.jpg"
            width={750}
            height={4642}
            speed={-20}
          ></ScrollingImg>
        </div>
      </div>
      <NextProject metaData={aiStorybookMeta} />
    </div>
  )
}
