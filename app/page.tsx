import { Landing } from "./landing"
import { Overview } from "./overview"
import { synapticMeta } from "./projectMeta"

export default function Home() {
  return (
    <div>
      <Landing />
      <div className="pt-36"></div>
      <div className="grid place-items-center">
        <h1 className="text-6xl">PROJECTS</h1>
      </div>
      <Overview data={synapticMeta} order="1" />
    </div>
  )
}
