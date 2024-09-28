import Link from "next/link"

export const IconText = ({
  src,
  text,
  alt = "icon",
  iconSize = "small",
  url,
  linkType = "external",
}: {
  src: string
  text: string
  alt?: string
  iconSize?: "large" | "small"
  url?: string
  linkType?: "external" | "internal"
}) => {
  const content = () => {
    if (url && linkType === "external") {
      return (
        <a href={url} target="_blank" className="external-link">
          {text}
        </a>
      )
    }
    if (url && linkType == "internal") {
      return <Link href={url}>{text}</Link>
    } else {
      return <span>{text}</span>
    }
  }

  return (
    <div className="flex items-center">
      <div className={`${iconSize === "large" ? "pr-4" : "pr-2"}`}>
        <img
          src={src}
          alt={alt}
          className={`${iconSize === "large" ? "size-7" : "size-4"}`}
        />
      </div>
      {content()}
    </div>
  )
}
