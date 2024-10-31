import { Fragment } from "react"
import { Landing } from "./_components/home/landing"
import { Overview } from "./_components/overview"
import { selectedProjects } from "./projectMeta"
import { About } from "./_components/home/about"
import { FadeIn } from "./_components/fadeIn"

export default function Home() {
  return (
    <div>
      <Landing />
      <div className="pt-20 sm:pt-48"></div>
      <div className="grid place-items-center">
        <FadeIn>
          <h1 className="text-3xl sm:text-6xl">PROJECTS</h1>
        </FadeIn>
      </div>
      <div className="pt-12 sm:pt-20"></div>
      <div className="grid grid-cols-1 gap-y-14 xl:grid-cols-2 xl:gap-y-20 gap-x-10">
        {selectedProjects.map((projectData, index) => {
          return (
            <Fragment key={index}>
              <Overview data={projectData} />
            </Fragment>
          )
        })}
      </div>
      <div className="pt-20"></div>
      <About />
    </div>
  )
}
