import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Appointment from './pages/Appointment'

function App() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App

