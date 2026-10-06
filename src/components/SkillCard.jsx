import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { useState } from 'react'

const skillIcons = {
  JavaScript: 'js',
  TypeScript: 'ts',
  Java: 'java',
  Python: 'py',
  'C++': 'cpp',
  'React.js': 'react',
  'Next.js': 'nextjs',
  'Redux Toolkit': 'redux',
  HTML: 'html',
  CSS: 'css',
  'Tailwind CSS': 'tailwind',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  'REST APIs': 'postman',
  'Web Services': 'swagger',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  PostgreSQL: 'postgres',
  Git: 'git',
  GitHub: 'github',
  Docker: 'docker',
  'CI/CD': 'githubactions',
  'VS Code': 'vscode',
  Cursor: 'cursor',
  'Generative AI': 'openai',
  'Prompt Engineering': 'openai',
  'Cursor AI': 'cursor',
}

function SkillItem({ name }) {
  const [iconFailed, setIconFailed] = useState(false)
  const icon = skillIcons[name]

  return (
    <motion.li whileHover={{ scale: 1.08, rotate: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-300 transition-[box-shadow,border-color] hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,.35)]">
      {icon && !iconFailed
        ? <img src={`https://skillicons.dev/icons?i=${icon}`} alt="" aria-hidden="true" onError={() => setIconFailed(true)} className="h-4 w-4 object-contain" />
        : <Code2 size={14} aria-hidden="true" className="text-cyan-300" />}
      {name}
    </motion.li>
  )
}

export default function SkillCard({ name, Icon, items }) {
  return (
    <div className="glass rounded-2xl p-6 transition hover:border-violet-400/40">
      <div className="mb-4 flex items-center gap-3"><Icon className="text-cyan-300" size={20} /><h3 className="font-bold">{name}</h3></div>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => <SkillItem key={skill} name={skill} />)}
      </ul>
    </div>
  )
}
