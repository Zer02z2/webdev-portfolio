import { FC, ReactNode } from "react"

export const Bento: FC<{
  children: ReactNode
  border?: boolean
  dark?: boolean
  background?: string
  inline?: boolean
}> = ({
  children,
  border = true,
  dark = true,
  background = "#00000000",
  inline = false,
}) => {
  const borderStyle = border ? "border-solid" : "border-none"
  const borderColor = dark ? "border-midnight" : "border-silver"
  const display = inline ? "inline-block" : "block"
  return (
    <div
      className={`${borderStyle} border ${borderColor} rounded-lg px-5 py-4 ${display}`}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  )
}
