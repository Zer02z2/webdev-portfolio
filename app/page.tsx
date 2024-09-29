import { Fragment } from "react"
import { Landing } from "./_components/home/landing/landing"
import { Overview } from "./_components/home/overview"
import {
  aiPlaygroundMeta,
  ProjectMeta,
  skylabMeta,
  synapticMeta,
  webDevMeta,
} from "./projectMeta"
import { About } from "./_components/home/about"

export default function Home() {
  const projectMeta: ProjectMeta[] = [
    synapticMeta,
    webDevMeta,
    aiPlaygroundMeta,
    skylabMeta,
  ]
  return (
    <div>
      <Landing />
      <div className="pt-32"></div>
      <div className="grid place-items-center">
        <h1 className="text-3xl sm:text-6xl">PROJECTS</h1>
      </div>
      <div className="pt-6 sm:pt-12"></div>
      <div className="grid grid-cols-1 gap-y-14 xl:grid-cols-2 xl:gap-y-20 gap-x-10">
        {projectMeta.map((projectData, index) => {
          return (
            <Fragment key={index}>
              <Overview data={projectData} order={index + 1} />
            </Fragment>
          )
        })}
      </div>
      <div className="pt-40"></div>
      <About />
    </div>
  )
}
