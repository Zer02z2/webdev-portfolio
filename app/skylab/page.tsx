import { FadeIn } from "../_components/fadeIn"
import { IconText } from "../_components/iconText"
import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { NextProject } from "../_components/projects/nextProject"
import { RoundedImg } from "../_components/roundedImg"
import { SmallText } from "../_components/smallText"
import { skylabMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={skylabMeta} />
      <BigText skills={[...skylabMeta.tech, "html", "css"]}>
        This app is a full-stack data tracking system with the backend running
        on Node-RED and hosted on DigitalOcean. It was made for the ITP Energy
        class to help everyone collect data on their solar IoT devices.<br></br>
        <br></br>The backend listens to MQTT messages and stores them in an
        SQLite database. I wrote custom scripts to run SQLite commands in order
        to write and query the correct data in and out of the database.<br></br>
        <br></br>
        The front end is a simple, plain Javascript app that fetches data by
        various filters and dynamically renders the components.
      </BigText>
      <div className="w-full flex justify-center">
        <div className="max-w-6xl">
          <FadeIn>
            <SmallText>Network diagram</SmallText>
            <div className="pt-2"></div>
            <RoundedImg
              src="/projects/skylab/network-diagram.png"
              width={1329}
              height={566}
            />
          </FadeIn>

          <div className="pt-8"></div>
          <FadeIn>
            <SmallText>Node-RED flow diagram</SmallText>
            <RoundedImg src="/projects/skylab/node-red.jpg" />
          </FadeIn>
          <BigText>
            While the main purpose of the system is to collect data for the
            entire class, part of its functions are modified specifically for
            our team’s project only. For example, it can transform specific data
            into audio files and serve the files to our Arduino. To read more
            about the solar energy and IoT part, you may visit:
            <div className="pt-8"></div>
            <IconText
              src="/icons/browser.svg"
              text="zongzechen.com/sun-watcher-1"
              url="https://zongzechen.com/sun-watcher-1"
              iconSize="large"
            />
          </BigText>
          <NextProject currentProject={skylabMeta} />
        </div>
      </div>
    </div>
  )
}
