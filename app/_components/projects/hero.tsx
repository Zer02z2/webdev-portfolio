import { ProjectMeta } from "@/app/projectMeta"
import { SmallText } from "../smallText"
import { IconText } from "../iconText"
import { RoundedImg } from "../roundedImg"
import { FadeIn } from "../fadeIn"

export const Hero = ({ projectMeta }: { projectMeta: ProjectMeta }) => {
  const { src, alt, title, type, url, urlName, year, role, codeUrl } =
    projectMeta

  return (
    <FadeIn>
      <div className="grid pt-28 gap-8">
        <div className="grid gap-y-14 lg:grid-cols-2">
          <div className="flex flex-col justify-end">
            <h1 className="text-2xl sm:text-4xl">{title}</h1>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              {codeUrl ? (
                <>
                  <SmallText>Source code</SmallText>
                  <IconText
                    src="/techIcons/github.svg"
                    text="Repository"
                    url={codeUrl}
                  ></IconText>
                </>
              ) : (
                <>
                  <SmallText>Type</SmallText>
                  <p>{type}</p>
                </>
              )}
              <div className="pt-4"></div>
              <SmallText>Live website</SmallText>
              <IconText
                src="/icons/browser.svg"
                text={urlName}
                url={url}
              ></IconText>
            </div>
            <div>
              <SmallText>Year</SmallText>
              <p className="pb-4">{year}</p>
              <SmallText>Role</SmallText>
              <p>{role}</p>
            </div>
          </div>
        </div>
        <RoundedImg src={src} alt={alt} />
      </div>
    </FadeIn>
  )
}
