import { ProjectMeta } from "@/app/projectMeta"
import { FadeIn } from "../fadeIn"
import { Overview } from "../overview"

export const NextProject = ({ metaData }: { metaData: ProjectMeta }) => {
  return (
    <div className="pt-40 flex justify-center">
      <div className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl pb-4 w-full text-center">Next</h1>
        </FadeIn>
        <Overview data={metaData} />
      </div>
    </div>
  )
}
