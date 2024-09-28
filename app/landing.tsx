import { Bento } from "./_components/bento"
import { IconText } from "./_components/iconText"
import { MatterScene } from "./_components/matter"
import { SmallText } from "./_components/smallText"

export const Landing = () => {
  return (
    <div>
      <MatterScene />
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-4 w-full max-w-5xl gap-x-4">
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
              src="./icons/email.svg"
              text="zc1411@nyu.edu"
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