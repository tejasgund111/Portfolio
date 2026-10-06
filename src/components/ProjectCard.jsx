import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
export default function ProjectCard({ p }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <motion.article onMouseMove={move} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group glass relative h-full overflow-hidden rounded-3xl transition-[border-color,box-shadow] duration-300 hover:border-violet-400/50 hover:shadow-[0_0_40px_rgba(139,92,246,.3)]">
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--x) var(--y), rgba(139,92,246,.18), transparent 45%)' }} />
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <img src={p.image} alt={`${p.title} project preview`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      </div>
      <div className="relative z-20 p-6">
        <h3 className="text-2xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">{t}</li>)}</ul>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-500">{p.features.map((f) => <li key={f} className="before:mr-1.5 before:text-cyan-400 before:content-['▹']">{f}</li>)}</ul>
        <div className="mt-6 flex gap-3">
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2 text-sm font-semibold transition hover:scale-105">Live Demo <ExternalLink size={14} /></a>}
          <a href={p.github} target="_blank" rel="noreferrer" className="glass flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition hover:scale-105">GitHub <Github size={14} /></a>
        </div>
      </div>
    </motion.article>
  )
}
