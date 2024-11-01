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
        As an educational/explanatory website, this program uses the ping by
        asking the server what time it is to calculate the differences in clocks
        with an accuracy of milliseconds. It is not about the time zone but the
        milliseconds in the device&apos;s clock.<br></br>
        <br></br> The front end is built with React, and the back end is built
        with Express and Socket.io. Multiple users can connect at the same time
        and compare each of their clocks with other devices.
      </BigText>
      <NextProject currentProject={timeMachineMeta} />
    </div>
  )
}
