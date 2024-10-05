import { Fragment } from "react"
import { Bento } from "../_components/bento"
import { FadeIn } from "../_components/fadeIn"
import { IconText } from "../_components/iconText"
import { RoundedImg } from "../_components/roundedImg"
import { CreativeMeta } from "./meta"
import { TechIcon } from "../_components/techIcon"

export const Entry = ({ projectMeta }: { projectMeta: CreativeMeta }) => {
  const { src, alt, title, liveUrl, liveUrlName, codeUrl, codeUrlName, tech } =
    projectMeta

  const techIcons = tech.map((name, index) => {
    return (
      <Fragment key={index}>
        <div className="size-8">
          <TechIcon name={name} />
        </div>
      </Fragment>
    )
  })
  return (
    <FadeIn>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-6">
          <RoundedImg src={src} alt={alt} />
        </div>
        <div className="col-span-4 flex items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl pb-8">{title}</h1>
            <IconText
              src="/icons/browser.svg"
              text={liveUrlName}
              url={liveUrl}
            />
            <div className="pt-2"></div>
            <IconText
              src="/techIcons/github.svg"
              text={codeUrlName}
              url={codeUrl}
            />
            <div className="pt-10"></div>
            <Bento inline={true}>
              <div className="flex gap-6 flex-wrap">{techIcons}</div>
            </Bento>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
