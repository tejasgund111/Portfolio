import SectionHeading, { Reveal } from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data'
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Work" title="Featured Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => <Reveal key={p.title} delay={i * 0.1}><ProjectCard p={p} /></Reveal>)}
      </div>
    </section>
  )
}
