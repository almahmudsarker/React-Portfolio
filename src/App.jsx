import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
