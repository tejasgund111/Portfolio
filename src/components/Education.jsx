import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading, { Reveal } from './SectionHeading'
import { education } from '../data'
export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Learning" title="Education" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.12}>
            <motion.article whileHover={{ y: -6 }} className="glass h-full rounded-2xl p-6 transition-shadow hover:shadow-[0_0_32px_rgba(139,92,246,.25)]">
              <GraduationCap className="text-violet-300" />
              <p className="mt-4 text-sm text-cyan-300">{e.year}</p>
              <h3 className="mt-1 text-lg font-bold">{e.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{e.school}</p>
              <p className="grad-text mt-4 text-xl font-extrabold">{e.score}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
