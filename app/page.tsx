import { Landing } from "./landing"
import { Overview } from "./overview"
import { aiPlaygroundMeta, synapticMeta } from "./projectMeta"

export default function Home() {
  return (
    <div>
      <Landing />
      <div className="pt-32"></div>
      <div className="grid place-items-center">
        <h1 className="text-6xl">PROJECTS</h1>
      </div>
      <div className="pt-12"></div>
      <div className="grid gap-y-20">
        <Overview data={synapticMeta} order="1" />
        <Overview data={aiPlaygroundMeta} order="2" />
      </div>
    </div>
  )
}
