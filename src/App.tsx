import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
      </main>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
