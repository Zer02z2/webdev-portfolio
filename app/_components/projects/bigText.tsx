import { FC, Fragment, useRef } from "react"
import { TechIcon } from "../techIcon"
import { Bento } from "../bento"
import { SmallText } from "../smallText"
import { FadeIn } from "../fadeIn"

export const BigText: FC<{ children: string; skills?: string[] }> = ({
  children,
  skills,
}) => {
  const techIcons =
    skills &&
    skills.map((name, index) => {
      return (
        <Fragment key={index}>
          <div className="size-12">
            <TechIcon name={name} />
          </div>
        </Fragment>
      )
    })
  return (
    <div className="py-32">
      <FadeIn>
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-2xl">{children}</h1>
            {skills && (
              <div className="pt-10">
                <Bento inline={true} dark={false}>
                  <SmallText>Skills I used</SmallText>
                  <div className="flex gap-6 pt-4 flex-wrap">{techIcons}</div>
                </Bento>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
