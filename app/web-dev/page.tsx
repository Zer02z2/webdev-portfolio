import { FadeIn } from "../_components/fadeIn"
import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { RoundedImg } from "../_components/roundedImg"
import { webDevMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={webDevMeta} />
      <BigText skills={[...webDevMeta.tech, "matter-js", "figma"]}>
        I made this website as a project to experiment with Next.js. It is 100%
        code-based and original in design, built from the ground up. One of the
        experiments I did was to mix canvas with HTML elements and sync them on
        viewport resizing.
      </BigText>
      <div className="grid xl:grid-cols-2 gap-4">
        <FadeIn>
          <RoundedImg src="/projects/webdev/landing-animation.gif" />
        </FadeIn>
        <FadeIn>
          <RoundedImg src="/projects/webdev/about-animation.gif" />
        </FadeIn>
      </div>
      <BigText>
        I used Matter.js as the physics engine to simulate body collision on the
        canvas. To make the ball bounce on text, I grab the size and position of
        the div to create the collision bodies in the canvas. When the window
        resizes, the canvas will get rerendered to match the HTML elements.
      </BigText>
      <BigText>
        Besides canvas, I also used the Framer Motion library to create smooth
        transitions and parallax scrolling effects.
      </BigText>
      <FadeIn>
        <div className="rounded-lg p-20 bg-gradient-to-br from-deepblue to-midnight">
          <RoundedImg src="/projects/webdev/scroll-animation.gif" />
        </div>
      </FadeIn>
    </div>
  )
}
