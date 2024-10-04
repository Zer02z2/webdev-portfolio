import { IconText } from "../_components/iconText"
import { BigText } from "../_components/projects/bigText"
import { Hero } from "../_components/projects/hero"
import { NextProject } from "../_components/projects/nextProject"
import { aiStorybookMeta, skylabMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={aiStorybookMeta} />
      <BigText skills={[...aiStorybookMeta.tech, "html", "css"]}>
        <IconText
          src="/techIcons/github.svg"
          iconSize="large"
          text="Source code"
          url="https://github.com/Zer02z2/shared-minds/tree/main/src/week3"
        />
        <div className="pt-10"></div>
        Using APIs from Replicate, the storybook pulls various AI language and
        image models to produce the experience. Similar to
        choose-your-own-adventure style games, you can define the next sequence
        in the story by typing in your own words or choosing the options also
        generated by AI. Then, following your input, the AI will generate the
        next paragraph as well as an image that best depicts the current scene.
        Then, you will take the next turn, and so forth.
      </BigText>
      <NextProject metaData={skylabMeta} />
    </div>
  )
}
