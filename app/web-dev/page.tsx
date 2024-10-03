import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { webDevMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={webDevMeta} />
      <BigText skills={[...webDevMeta.tech, "matter-js", "figma"]}>
        I made this website as the project itself to test out Next.js. It is
        100% code-based and original in design, built from the ground up. One of
        the experiments I did was to mix canvas with HTML elements and sync them
        on viewport resizing.
      </BigText>
    </div>
  )
}
