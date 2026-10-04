import { motion } from 'framer-motion'
const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 47) % 100, top: (i * 29) % 100, size: 2 + (i % 3), dur: 8 + (i % 6) * 2, delay: (i % 5) * 0.8,
}))
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="grid-bg absolute inset-0" />
      {particles.map((p, i) => (
        <motion.span key={i} className="absolute rounded-full bg-cyan-300/50"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
      <div className="noise absolute inset-0" />
    </div>
  )
}
