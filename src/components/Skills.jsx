import * as Icons from 'lucide-react'
import SectionHeading, { Reveal } from './SectionHeading'
import SkillCard from './SkillCard'
import { skills } from '../data'
export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((c, i) => <Reveal key={c.name} delay={i * 0.08}><SkillCard name={c.name} Icon={Icons[c.icon]} items={c.items} /></Reveal>)}
      </div>
    </section>
  )
}
