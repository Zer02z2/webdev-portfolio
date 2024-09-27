export const TechIcon = ({ name }: { name: string }) => {
  const fileName = name
    .split(/[^a-zA-Z]+/)
    .join("-")
    .toLowerCase()
  const src = `/techIcons/${fileName}.svg`
  return <img src={src} />
}
