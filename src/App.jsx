import { MotionConfig } from 'motion/react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Specialties from './components/Specialties.jsx'
import Process from './components/Process.jsx'
import Care from './components/Care.jsx'
import Testimonials from './components/Testimonials.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import './App.css'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Process />
        <Care />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}

export default App
