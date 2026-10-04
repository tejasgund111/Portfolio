import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import SectionHeading, { Reveal } from './SectionHeading'
import { links } from '../data'
const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}
const info = [[Mail, 'Email', 'tejasgund111@gmail.com', links.email], [Linkedin, 'LinkedIn', 'linkedin.com/in/tejasgund111', links.linkedin], [Github, 'GitHub', 'github.com/tejasgund111', links.github]]
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const er = validate(v)
    setErr(er)
    if (!Object.keys(er).length) setSent(true)
  }
  const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_18px_rgba(34,211,238,.25)]'
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Let's build something together." />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-zinc-400">Have a project, opportunity, or idea? I'd love to hear from you.</p>
          <ul className="mt-8 space-y-4">
            {info.map(([Icon, l, t, h]) => (
              <li key={l}><a href={h} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-violet-400/40 hover:shadow-[0_0_24px_rgba(139,92,246,.2)]">
                <Icon className="text-cyan-300" size={20} /><span><span className="block text-xs text-zinc-500">{l}</span><span className="text-sm">{t}</span></span>
              </a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glass relative min-h-[380px] overflow-hidden rounded-3xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex h-[320px] flex-col items-center justify-center text-center" role="status">
                  <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
                    <motion.circle cx="44" cy="44" r="40" stroke="#22d3ee" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }} />
                    <motion.path d="M26 45l12 12 24-26" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 }} />
                  </svg>
                  <h3 className="mt-6 text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 text-sm text-zinc-400">Thanks {v.name.split(' ')[0]}, I'll get back to you soon.</p>
                  <button onClick={() => { setSent(false); setV({ name: '', email: '', message: '' }) }} className="mt-6 text-sm text-cyan-300 underline">Send another</button>
                </motion.div>
              ) : (
                <motion.form key="form" noValidate onSubmit={submit} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                  {[['name', 'Name', 'text'], ['email', 'Email', 'email']].map(([k, l, t]) => (
                    <div key={k}><label htmlFor={k} className="mb-1.5 block text-sm text-zinc-400">{l}</label>
                      <input id={k} type={t} value={v[k]} onChange={set(k)} className={field} aria-invalid={!!err[k]} />
                      {err[k] && <p className="mt-1 text-xs text-rose-400">{err[k]}</p>}</div>
                  ))}
                  <div><label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">Message</label>
                    <textarea id="message" rows={5} value={v.message} onChange={set('message')} className={field} aria-invalid={!!err.message} />
                    {err.message && <p className="mt-1 text-xs text-rose-400">{err.message}</p>}</div>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 py-3 font-semibold shadow-[0_0_28px_rgba(139,92,246,.4)]">
                    Send Message <Send size={16} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
