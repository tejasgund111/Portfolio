import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Atom, Hexagon } from 'lucide-react'
import SocialLinks from './SocialLinks'
import { roles } from '../data'

function useTyping(words) {
  const [t, setT] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const full = !del && t === w
    const id = setTimeout(() => {
      if (full) setDel(true)
      else if (del && t === '') { setDel(false); setI((i + 1) % words.length) }
      else setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1))
    }, full ? 1400 : del ? 35 : 70)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return t
}

function Layer({ depth, mx, my, className, children, delay = 0 }) {
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}>{children}</motion.div>
    </motion.div>
  )
}
const Snippet = ({ children }) => <div className="glass rounded-xl px-4 py-3 font-mono text-xs text-zinc-200 shadow-lg shadow-violet-900/20">{children}</div>

function Visual() {
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 15 })
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 15 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 40)
  }
  const reset = () => { mx.set(0); my.set(0) }
  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className="relative mx-auto h-[380px] w-full max-w-[460px] md:h-[460px]" aria-hidden>
      <Layer depth={0.3} mx={mx} my={my} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-56 w-56 place-items-center">
          <motion.div className="absolute inset-0 rounded-full border border-violet-400/40" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_16px_#a78bfa]" />
          </motion.div>
          <motion.div className="absolute inset-6 rounded-full border border-cyan-400/40" animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
            <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
          </motion.div>
          <div className="glass grid h-24 w-24 place-items-center rounded-full shadow-[0_0_50px_rgba(139,92,246,.45)]"><Atom size={44} className="text-cyan-300" /></div>
        </div>
      </Layer>
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 460 460" fill="none">
        <path d="M70 90 L230 230 L390 120 M230 230 L90 370 M230 230 L380 360" stroke="url(#g)" strokeWidth="1" strokeDasharray="4 6" />
        <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs>
      </svg>
      <Layer depth={1} mx={mx} my={my} className="left-0 top-6"><Snippet><span className="text-violet-300">const</span> dev = <span className="text-cyan-300">'Tejas'</span></Snippet></Layer>
      <Layer depth={1.4} mx={mx} my={my} delay={1} className="right-0 top-16"><Snippet><span className="text-cyan-300">{'<App />'}</span> React</Snippet></Layer>
      <Layer depth={0.8} mx={mx} my={my} delay={2} className="bottom-10 left-2"><Snippet>app.<span className="text-violet-300">listen</span>(5000)</Snippet></Layer>
      <Layer depth={1.2} mx={mx} my={my} delay={0.5} className="bottom-24 right-2"><Snippet><span className="text-violet-300">type</span> Dev = {'{ ts: true }'}</Snippet></Layer>
      <Layer depth={1.6} mx={mx} my={my} delay={1.5} className="right-24 top-1"><div className="glass grid h-12 w-12 place-items-center rounded-xl text-sm font-bold text-cyan-300">TS</div></Layer>
      <Layer depth={1.1} mx={mx} my={my} delay={2.5} className="bottom-2 right-28"><div className="glass flex items-center gap-1 rounded-xl px-3 py-2 text-xs text-emerald-300"><Hexagon size={16} /> Node.js</div></Layer>
    </div>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero() {
  const text = useTyping(roles)
  return (
    <section id="about" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-32 md:grid-cols-2">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-300">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
          Available for opportunities
        </motion.div>
        <motion.h1 variants={item} className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Hi, I'm <span className="grad-text">Tejas Gund</span>
        </motion.h1>
        <motion.p variants={item} className="mt-4 h-9 text-2xl font-semibold text-zinc-200 md:text-3xl" aria-live="off">
          {text}<span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-300 align-middle">&nbsp;</span>
        </motion.p>
        <motion.p variants={item} className="mt-5 max-w-lg text-zinc-400">
          Computer Engineer and Full Stack Developer passionate about building scalable web applications, intuitive user experiences, and solving real-world problems with modern technologies.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#projects" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3 font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,.45)] transition-shadow hover:shadow-[0_0_40px_rgba(34,211,238,.55)]">View Projects</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#contact" className="glass rounded-full px-7 py-3 font-semibold transition-shadow hover:shadow-[0_0_28px_rgba(139,92,246,.35)]">Contact Me</motion.a>
        </motion.div>
        <motion.div variants={item} className="mt-8"><SocialLinks /></motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}><Visual /></motion.div>
    </section>
  )
}
