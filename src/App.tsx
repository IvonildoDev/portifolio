import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
