import { FC, ReactNode } from "react"

export const Bento: FC<{
  children: ReactNode
  border?: boolean
  dark?: boolean
}> = ({ children, border = true, dark = true }) => {
  const borderStyle = border ? "border-solid" : "border-none"
  const borderColor = dark ? "border-midnight" : "border-silver"
  return (
    <div
      className={`${borderStyle} border ${borderColor} rounded-lg h-full px-4 py-3`}
    >
      {children}
    </div>
  )
}
