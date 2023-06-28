import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Skills from './components/skills/Skills'
function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </>
  )
}

export default App
