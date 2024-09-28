import { Bento } from "./_components/bento"
import { IconText } from "./_components/iconText"

export const About = () => {
  return (
    <div className="md:flex md:justify-between md:items-end">
      <h1 className="text-base sm:text-xl lg:text-2xl 2xl:text-4xl">
        <div>hi, my name is Zongze.</div>
        <div>I love coding and making beautiful</div>
        <div>things on the web. To see a broader range of</div>
        <div>
          my other work, you can visit&nbsp;
          <img
            src="/icons/browser.svg"
            alt="browser icons."
            className="size-7 inline-block"
          />
          &nbsp;
          <a className="inline-block" href="https://zongzechen.com">
            zongzechen.com.
          </a>{" "}
          <img
            src="/icons/up-right-arrow.svg"
            alt="arrow"
            className="size-6 inline-block"
          />
        </div>
      </h1>
      <Bento>
        <IconText
          src="/icons/email.svg"
          text="zc1411@nyu.edu"
          iconSize="large"
        />
        <div className="pt-2"></div>
        <IconText src="/icons/file.svg" text="Resume" iconSize="large" />
      </Bento>
    </div>
  )
}
