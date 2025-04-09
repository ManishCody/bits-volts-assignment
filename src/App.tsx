import { CompanyLogos } from './components/CompanyLogos/CompanyLogos'
import Footer from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Services } from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import { WorkingProcess } from './components/WorkingProcess/WorkingProcess'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
