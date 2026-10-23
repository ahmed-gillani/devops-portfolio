import { SkipLink } from './components/layout/SkipLink'
import { Navbar } from './components/layout/Navbar'
import { PipelineRail } from './components/layout/PipelineRail'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <PipelineRail />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
