import { FC } from "react"

export const SmallText: FC<{ children: string }> = ({ children }) => {
  return <p className="text-sm text-silver">{children}</p>
}
