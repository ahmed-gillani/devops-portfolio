import { resumeData } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="projects-heading"
          stageNumber="03 / Deploy"
          title="Projects"
          description="Academic and personal engineering projects shipped outside of coursework."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {resumeData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
