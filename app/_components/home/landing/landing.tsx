import { Bento } from "../../bento"
import { IconText } from "../../iconText"
import { MatterScene } from "./scene"
import { SmallText } from "../../smallText"

export const Landing = () => {
  return (
    <div>
      <MatterScene />
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl gap-4">
          <Bento border={false}>
            <p className="font-medium">Front-end developer</p>
            <IconText src="./icons/earth.svg" text="United States" />
          </Bento>
          <Bento>
            <div className="flex justify-between pb-2">
              <SmallText>latest experience</SmallText>
              <SmallText>2024</SmallText>
            </div>
            <p>Web development intern</p>
            <div className="flex items-center leading-none">
              <div className="rounded-full bg-midnight size-1 mr-2"></div>
              <p>Synaptic Medical</p>
            </div>
          </Bento>
          <Bento>
            <IconText
              src="./techIcons/github.svg"
              text="Zer02z2"
              url="https://github.com/Zer02z2"
              iconSize="large"
            />
            <div className="pt-2"></div>
            <IconText
              src="./icons/linkedin.svg"
              text="LinkedIn"
              url="https://www.linkedin.com/in/zongzechen22/"
              iconSize="large"
            />
          </Bento>
          <Bento>
            <SmallText>More information</SmallText>
            <div className="pt-2"></div>
            <IconText
              src="./icons/browser.svg"
              text="zongzechen.com"
              url="https://zongzechen.com"
            ></IconText>
          </Bento>
        </div>
      </div>
    </div>
  )
}
