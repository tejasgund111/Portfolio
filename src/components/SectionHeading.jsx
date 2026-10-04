import { motion } from 'framer-motion'
export function Reveal({ children, delay = 0, x = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 30, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  )
}
