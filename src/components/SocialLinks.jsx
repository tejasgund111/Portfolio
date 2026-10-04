import { Github, Linkedin, Mail } from 'lucide-react'
import { links } from '../data'
const items = [[Github, links.github, 'GitHub'], [Linkedin, links.linkedin, 'LinkedIn'], [Mail, links.email, 'Email']]
export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {items.map(([Icon, href, label]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
          className="glass grid h-11 w-11 place-items-center rounded-full text-zinc-300 transition hover:-translate-y-1 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,.35)]">
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
