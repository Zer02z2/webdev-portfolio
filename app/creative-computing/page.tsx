import { NextProject } from "../_components/projects/nextProject"
import { creativeComputingMeta } from "../projectMeta"
import { Entry } from "./entry"
import {
  clockMeta,
  fishSimulationMeta,
  rhythmLegoMeta,
  swimmingPoolMeta,
  visibleTypingMeta,
} from "./meta"

export default function Page() {
  return (
    <div className="pt-28 flex flex-col gap-y-10">
      <Entry projectMeta={swimmingPoolMeta} />
      <Entry projectMeta={clockMeta} />
      <Entry projectMeta={fishSimulationMeta} />
      <Entry projectMeta={visibleTypingMeta} />
      <Entry projectMeta={rhythmLegoMeta} />
      <NextProject currentProject={creativeComputingMeta} />
    </div>
  )
}
