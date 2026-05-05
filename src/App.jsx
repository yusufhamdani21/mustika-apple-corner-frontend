import { useState } from 'react'
import LeadModal from './components/Leadmodal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Why from './components/Why'
import Testi from './components/Testi'
import Footer from './components/Footer'
import Articles from './components/Article'
import Services from './components/Services'
import FAQ from './components/Faq'
import Gallery from './components/Gallery'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [defaultService, setDefaultService] = useState('')

  const openModal = (service = '') => {
    setDefaultService(service)
    setIsModalOpen(true)
  }

  return (
    <div className="w-full min-h-screen bg-linear-to-r from-blue-400 to-emerald-400">
      <Nav openModal={openModal} />
      <Hero openModal={openModal} />
      <Why />
      <Testi />
      <Services openModal={openModal} />
      <Gallery />
      <Articles />
      <FAQ openModal={openModal} />
      <Footer openModal={openModal} />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="website"
        defaultService={defaultService}
      />
    </div>
  )
}

export default App