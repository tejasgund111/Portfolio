import { MotionConfig } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Navbar />
      <main>
        <Hero /><About /><Experience /><Education /><Projects /><Skills /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
