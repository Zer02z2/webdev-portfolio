import { FadeIn } from "../_components/fadeIn"
import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { NextProject } from "../_components/projects/nextProject"
import { RoundedImg } from "../_components/roundedImg"
import { synapticMeta, webDevMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={webDevMeta} />
      <BigText skills={[...webDevMeta.tech, "matter-js", "figma"]}>
        I made this website as a project to experiment with Next.js. It is 100%
        code-based and original in design, built from the ground up. One of the
        experiments I did was to mix canvas with HTML elements in a physics
        engine.
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
        The physics simulation is achieved with Matter.js. To make the ball
        bounce on text, the size and position of the divs were calculated into
        the canvas to create the collision bodies. When the window resizes, the
        canvas will get rerendered to re-calibrate.<br></br>
        <br></br>Besides canvas, I also used the Framer Motion library to create
        smooth transitions and parallax scrolling effects.
      </BigText>
      <FadeIn>
        <div className="rounded-lg p-20 bg-gradient-to-br from-deepblue to-midnight">
          <RoundedImg src="/projects/webdev/scroll-animation.gif" />
        </div>
      </FadeIn>
      <NextProject currentProject={webDevMeta} />
    </div>
  )
}
