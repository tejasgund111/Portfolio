import studyNotionImage from '../public/StudyNotion.png'
import chattyImage from '../public/Chatty.png'
import shopNestImage from '../public/ShopNest.png'

export const nav = ['about', 'experience', 'education', 'projects', 'skills', 'contact']
export const roles = ['Full Stack Developer', 'MERN Stack Developer', 'React Developer', 'Node.js Developer']
export const links = {
  github: 'https://github.com/tejasgund111',
  linkedin: 'https://linkedin.com/in/tejasgund111',
  email: 'mailto:tejasgund111@gmail.com',
}
export const stats = [['2+', 'Years Experience'], ['10+', 'Technologies'], ['5+', 'Projects']]
export const experience = [
  { company: 'Cognizant', role: 'Programmer Analyst', period: 'June 2025 – Present',
    points: ['Develop and maintain web applications using modern web technologies.', 'Integrate REST APIs and debug production issues across the stack.', 'Work in Agile sprints, collaborating with cross-functional teams.'] },
  { company: 'Lawshield Cyber And Forensic Lab LLP', role: 'Software Developer', period: 'May 2024 – May 2025',
    points: ['Built responsive interfaces with Next.js, React and Tailwind CSS.', 'Created reusable UI components that sped up feature delivery.', 'Collaborated on UI development and iterated on design feedback.'] },
]
export const education = [
  { title: 'BE Computer Engineering', school: 'Smt. Kashibai Navale College of Engineering, Pune', year: '2024', score: 'CGPA: 8.99' },
  { title: 'HSC', school: 'Residential Junior College, Ahmednagar', year: '2020', score: '86.31%' },
  { title: 'SSC', school: 'Janata Vidyalaya, Ruichhattishi', year: '2018', score: '95.4%' },
]
export const projects = [
  { title: 'StudyNotion', gradient: 'from-violet-600/40 to-cyan-500/20',
    image: studyNotionImage,
    desc: 'A full-stack EdTech platform where students can browse courses, purchase content, track learning progress, and instructors can create and manage courses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Cloudinary', 'Razorpay'],
    features: ['Authentication', 'Course management', 'Instructor dashboard', 'Course purchasing', 'Lecture progress tracking', 'Protected routes', 'Cloudinary integration', 'Payment integration'],
    github: 'https://github.com/tejasgund111/StudyNotion', live: 'https://study-notion-app-three.vercel.app/' },
  { title: 'Chatty', gradient: 'from-cyan-500/30 to-blue-600/20',
    image: chattyImage,
    desc: 'Real-time MERN chat application with authentication, profile management, and instant messaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary'],
    features: ['Authentication', 'Real-time messaging', 'Online status', 'Profile image upload', 'Responsive UI'],
    github: 'https://github.com/tejasgund111/Chatty', live: 'https://chatty-v0kk.onrender.com/login' },
  { title: 'ShopNest', gradient: 'from-fuchsia-600/30 to-violet-600/20',
    image: shopNestImage,
    desc: 'Full-stack e-commerce platform for product browsing, secure customer and admin workflows, shopping cart, checkout, and order management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Redux Toolkit', 'Razorpay', 'Cloudinary'],
    features: ['JWT authentication', 'Role-based authorization', 'Product browsing and management', 'Cart and checkout', 'Order management', 'Razorpay payments', 'Cloudinary image uploads', 'Admin analytics'],
    github: 'https://github.com/tejasgund111/ShopNest', live: 'https://shopnest-5fom.onrender.com/' },
]
export const skills = [
  { name: 'Languages', icon: 'Code2', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'] },
  { name: 'Frontend', icon: 'Layout', items: ['React.js', 'Next.js', 'Redux Toolkit', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'Backend', icon: 'Server', items: ['Node.js', 'Express.js', 'REST APIs', 'Web Services'] },
  { name: 'Databases', icon: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { name: 'DevOps & Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'VS Code', 'Cursor'] },
  { name: 'AI', icon: 'Brain', items: ['Generative AI', 'Prompt Engineering', 'Cursor AI'] },
]
