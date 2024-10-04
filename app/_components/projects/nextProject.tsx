import { ProjectMeta } from "@/app/projectMeta"
import { FadeIn } from "../fadeIn"
import { Overview } from "../overview"

export const NextProject = ({ metaData }: { metaData: ProjectMeta }) => {
  return (
    <div className="pt-40 flex justify-center">
      <div className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl sm:text-6xl pb-20">Next</h1>
        </FadeIn>
        <Overview data={metaData} />
      </div>
    </div>
  )
}
