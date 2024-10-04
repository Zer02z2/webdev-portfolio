import { Hero } from "../_components/projects/hero"
import { aiStorybookMeta } from "../projectMeta"

export default function Page() {
  return (
    <div>
      <Hero projectMeta={aiStorybookMeta} />
    </div>
  )
}
