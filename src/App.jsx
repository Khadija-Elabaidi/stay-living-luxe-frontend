import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Features from './components/Features/Features'
import  Services from './components/Services/Services'
import Apartment from './components/Apartments/Apartment'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import About from './components/About/About'


function App() {

  return ( 
    <>
      <WhatsAppButton/>
      <Navbar/>
      <Hero/>
      <Features/>
      <Apartment/>
      <Services/>
      <About/>
      <Gallery/>

      <Testimonials />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
