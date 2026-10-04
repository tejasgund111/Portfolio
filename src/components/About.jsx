import SectionHeading, { Reveal } from './SectionHeading'
import { stats } from '../data'
export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" aria-labelledby="about-title">
      <SectionHeading eyebrow="About Me" title="Who I am" />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal><p id="about-title" className="text-3xl font-bold leading-snug md:text-4xl">Building digital experiences with <span className="grad-text">code, creativity and curiosity.</span></p></Reveal>
        <Reveal delay={0.15}>
          <p className="leading-relaxed text-zinc-400">
            I hold a BE in Computer Engineering and work as a Full Stack / MERN developer. I build with React, Next.js, Node.js and TypeScript, design REST APIs, and work with MongoDB and PostgreSQL. I ship with Docker and lean on AI-assisted development to move faster without sacrificing quality.
          </p>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.12}>
            <div className="glass rounded-2xl p-6 text-center transition hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,.2)]">
              <div className="grad-text text-4xl font-extrabold">{n}</div>
              <div className="mt-1 text-sm text-zinc-400">{l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
