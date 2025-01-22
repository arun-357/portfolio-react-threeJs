import Model from './sections/Model'
import Navbar from './sections/Navbar'
import About from './sections/About'
import TechStack from './sections/TechStack'
// import Projects from './sections/Projects'
export default function App() {
  return (
    <main className='max-w-8xl mx-auto'>
      <Navbar />
      <Model />
      <About />
      <TechStack />
      {/* <Projects /> */}
    </main>
  )
}
