import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-zinc-500">© 2026 Tejas Gund. Built with React.</p>
        <SocialLinks />
        <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1.5 text-sm text-cyan-300">
          Back to top <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  )
}
