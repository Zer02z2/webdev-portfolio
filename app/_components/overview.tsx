import { Fragment } from "react"
import { Bento } from "./bento"
import { IconText } from "./iconText"
import { RoundedImg } from "./roundedImg"
import { SmallText } from "./smallText"
import { ProjectMeta } from "../projectMeta"
import { TechIcon } from "./techIcon"
import Link from "next/link"
import { FadeIn } from "./fadeIn"

export const Overview = ({ data }: { data: ProjectMeta }) => {
  const {
    src,
    alt,
    title,
    url,
    urlName,
    linkType = "external",
    feature,
    tech,
    slug,
    codeUrl,
  } = data

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
      <div className="grid place-items-center">
        <div>
          <Link href={`/${slug}`}>
            <RoundedImg src={src} alt={alt} />
          </Link>
          <div className="pt-4"></div>
          <Bento border={true} dark={false}>
            <h1 className="text-2xl pb-4">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4">
              <div className="col-span-3">
                <div className="gap-x-10 flex flex-col gap-y-4 2xl:flex-row">
                  <div>
                    <SmallText>Live website</SmallText>
                    <IconText
                      src="./icons/browser.svg"
                      text={urlName}
                      url={url}
                      linkType={linkType}
                    />
                  </div>
                  {codeUrl && (
                    <div>
                      <SmallText>Source code</SmallText>
                      <IconText
                        src="./techIcons/github.svg"
                        text="Repository"
                        url={codeUrl}
                      />
                    </div>
                  )}
                </div>
                <div className="pt-4"></div>
                <SmallText>Feature</SmallText>
                <p>{feature}</p>
                <div className="flex gap-x-2 pt-4">{techIcons}</div>
              </div>
              <div className="col-span-1"></div>
              <Link
                className="col-span-1 sm:grid place-items-center"
                href={`/${slug}`}
              >
                <p className="font-medium">Read more</p>
              </Link>
            </div>
          </Bento>
        </div>
      </div>
    </FadeIn>
  )
}
