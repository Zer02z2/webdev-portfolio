import Image from "next/image"

export const RoundedImg = ({
  src,
  alt = "image",
}: {
  src: string
  alt?: string
}) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image src={src} alt={alt} width="2560" height="1440" />
    </div>
  )
}
