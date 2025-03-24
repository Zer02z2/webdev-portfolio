import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { NextProject } from "../_components/projects/nextProject"
import { timeMachineMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={timeMachineMeta} />
      <BigText
        skills={[
          ...timeMachineMeta.tech,
          "typescript",
          "nginx",
          "digitalOcean",
        ]}
      >
        This web project is inspired by the Network Time protocol. It can
        compare the milliseconds difference between multiple computers&apos;
        system times (this refers to the time differences due to latencies in
        time synchronization rather than the time zone).<br></br>
        <br></br> The front end is built with React, and the back end is built
        with Express and Socket.io. Multiple users can connect at the same time
        and compare each of their clocks with other devices.
      </BigText>
      <NextProject currentProject={timeMachineMeta} />
    </div>
  )
}
