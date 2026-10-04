import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
export default function SkillCard({ name, Icon, items }) {
  return (
    <div className="glass rounded-2xl p-6 transition hover:border-violet-400/40">
      <div className="mb-4 flex items-center gap-3"><Icon className="text-cyan-300" size={20} /><h3 className="font-bold">{name}</h3></div>
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <motion.li key={s} whileHover={{ scale: 1.08, rotate: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="group flex cursor-default items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-300 transition-[box-shadow,border-color] hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,.35)]">
            <Sparkles size={14} className="w-0 -translate-x-1 text-cyan-300 opacity-0 transition-all duration-300 group-hover:mr-1.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100" />
            {s}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
