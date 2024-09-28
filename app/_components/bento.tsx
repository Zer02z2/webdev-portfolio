import { FC, ReactNode } from "react"

export const Bento: FC<{
  children: ReactNode
  border?: boolean
  dark?: boolean
  background?: string
}> = ({ children, border = true, dark = true, background = "#00000000" }) => {
  const borderStyle = border ? "border-solid" : "border-none"
  const borderColor = dark ? "border-midnight" : "border-silver"
  return (
    <div
      className={`${borderStyle} border ${borderColor} rounded-lg h-full px-4 py-3`}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  )
}
