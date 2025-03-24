import { FadeIn } from "../_components/fadeIn"
import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { NextProject } from "../_components/projects/nextProject"
import { RoundedImg } from "../_components/roundedImg"
import { SmallText } from "../_components/smallText"
import { coBrowsingMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={coBrowsingMeta} />
      <BigText skills={[...coBrowsingMeta.tech]}>
        Co-browsing is a Chrome extension that uses PeerJS and WebSocket to
        connect multiple users. When a user is connected, they will stream the
        screen around their mouse to other users. Likewise, a user can see other
        users&apos; screens through tiny windows. The window will follow each
        user&apos;s mouse and always display the area around it.<br></br>
        <br></br>
        The idea is that multiple people can browse the internet while seeing
        what each other is looking at concurrently.
      </BigText>
      <div className="w-full flex justify-center">
        <div className="max-w-6xl">
          <FadeIn>
            <SmallText>Demonstration</SmallText>
            <div className="pt-2"></div>
            <RoundedImg
              src="/projects/co-browsing/animated.gif"
              width={1329}
              height={566}
            />
          </FadeIn>
        </div>
      </div>
      <BigText>
        On the technical side, the extension uses TaskVision and webcam to
        generate a face cutout of the user. The face is streamed together with
        the screen. The display of other user&apos;s screens and faces are drawn
        on a HTML Canvas. Therefore, the streamings can be used and overlayed on
        top of any websites.<br></br>
        <br></br>Each user can customize their displayed name and color of the
        border in the pop-up of the extension. Their mouse position is also
        broadcasted to all useres. The mouse positions are used to crop the
        displayed area of each user.
      </BigText>
      <FadeIn>
        <div
          className="rounded-lg overflow-hidden"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1044546927?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            title="Co-browsing"
          ></iframe>
        </div>
      </FadeIn>
      <NextProject currentProject={coBrowsingMeta} />
    </div>
  )
}
