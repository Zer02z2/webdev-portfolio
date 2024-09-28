import { Fragment } from "react"
import { Landing } from "./landing"
import { Overview } from "./overview"
import {
  aiPlaygroundMeta,
  creativeCodingsMeta,
  ProjectMeta,
  skylabMeta,
  synapticMeta,
  webDevMeta,
} from "./projectMeta"

export default function Home() {
  const projectMeta: ProjectMeta[] = [
    synapticMeta,
    webDevMeta,
    aiPlaygroundMeta,
    skylabMeta,
    creativeCodingsMeta,
  ]
  return (
    <div>
      <Landing />
      <div className="pt-32"></div>
      <div className="grid place-items-center">
        <h1 className="text-6xl">PROJECTS</h1>
      </div>
      <div className="pt-12"></div>
      <div className="grid gap-y-20">
        {projectMeta.map((projectData, index) => {
          return (
            <Fragment key={index}>
              <Overview data={projectData} order={index + 1} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
