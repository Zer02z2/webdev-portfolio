import Image from "next/image"

export const RoundedImg = ({
  src,
  alt = "image",
  width = 2560,
  height = 1440,
}: {
  src: string
  alt?: string
  width?: number
  height?: number
}) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image src={src} alt={alt} width={width} height={height} quality={100} />
    </div>
  )
}
