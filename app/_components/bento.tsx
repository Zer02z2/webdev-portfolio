import { FC, ReactNode } from "react"

export const Bento: FC<{ children: ReactNode; border?: boolean }> = ({
  children,
  border = true,
}) => {
  const borderStyle = border ? "border-solid" : "border-none"
  return (
    <div
      className={`${borderStyle} border border-midnight rounded-lg h-full px-4 py-3`}
    >
      {children}
    </div>
  )
}
