export const TechIcon = ({ name }: { name: string }) => {
  const fileName = name
    .split(/[^a-zA-Z0-9]+/)
    .join("")
    .toLowerCase()
  const src = `/techIcons/${fileName}.svg`
  return <img src={src} />
}
