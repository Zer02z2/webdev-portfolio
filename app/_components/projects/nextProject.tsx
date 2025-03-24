import { ProjectMeta, selectedProjects } from "@/app/projectMeta"
import { FadeIn } from "../fadeIn"
import { Overview } from "../overview"

export const NextProject = ({
  currentProject,
}: {
  currentProject: ProjectMeta
}) => {
  const index = selectedProjects.indexOf(currentProject)
  const nextIndex = index === selectedProjects.length - 1 ? 0 : index + 1
  const nextProject = selectedProjects[nextIndex]

  return (
    <div className="pt-40 flex flex-col items-center justify-center">
      <div className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl pb-4 w-full text-center">Next</h1>
        </FadeIn>
        <Overview data={nextProject} />
      </div>
    </div>
  )
}
