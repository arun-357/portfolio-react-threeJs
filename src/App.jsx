import Model from './sections/Model'
import Navbar from './sections/Navbar'
import About from './sections/About'
import TechStack from './sections/TechStack'
export default function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Model />
      <About />
      <TechStack />
    </main>
  )
}
