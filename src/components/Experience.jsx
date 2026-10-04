import { useState } from 'react'
import SectionHeading, { Reveal } from './SectionHeading'
import { experience } from '../data'
export default function Experience() {
  const [hover, setHover] = useState(null)
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="relative pl-10">
        <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent shadow-[0_0_12px_#8b5cf6]" />
        {experience.map((e, i) => (
          <Reveal key={e.company} x={-30} delay={i * 0.1} className="relative mb-10">
            <span className={`absolute -left-[39px] top-7 h-6 w-6 rounded-full border-2 transition-all duration-300 ${hover === i ? 'scale-125 border-cyan-300 bg-cyan-400 shadow-[0_0_24px_#22d3ee]' : 'border-violet-400 bg-[#07070d] shadow-[0_0_12px_#8b5cf6]'}`} />
            <article onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={0}
              className="glass rounded-2xl p-6 transition hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]">
              <p className="text-sm font-medium text-cyan-300">{e.period}</p>
              <h3 className="mt-1 text-xl font-bold">{e.role}</h3>
              <p className="text-zinc-400">{e.company}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-zinc-400 marker:text-violet-400">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
