import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data'
const label = (s) => s[0].toUpperCase() + s.slice(1)
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' })
    nav.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav aria-label="Primary" className={`w-full max-w-3xl rounded-3xl border border-white/10 px-3 py-2 backdrop-blur-xl transition-colors md:rounded-full ${scrolled ? 'bg-[#0b0b14]/85 shadow-lg shadow-violet-900/20' : 'bg-white/[0.03]'}`}>
        <div className="flex items-center justify-between">
          <a href="#about" className="grad-text px-3 text-lg font-extrabold">TG</a>
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((id) => (
              <li key={id} className="relative">
                <a href={`#${id}`} className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>{label(id)}</a>
                {active === id && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 shadow-[0_0_18px_rgba(139,92,246,.5)]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              </li>
            ))}
          </ul>
          <button className="grid h-10 w-10 place-items-center rounded-full md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden md:hidden">
              {nav.map((id) => (
                <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 ${active === id ? 'bg-white/10 text-white' : 'text-zinc-400'}`}>{label(id)}</a></li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
