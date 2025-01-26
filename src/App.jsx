import Model from './sections/Model'
import Navbar from './sections/Navbar'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <main className='max-w-8xl mx-auto'>
      <Navbar />
      <Model />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}
