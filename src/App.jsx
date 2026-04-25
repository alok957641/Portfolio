import { useState } from 'react'
import './App.css'
import Navbar from './Componrnt/Navbar'
import  Home from './Componrnt/Home.jsx'
import Services from './Componrnt/Skills.jsx'
import About from './Componrnt/About.jsx'
import Projects from './Componrnt/Projects.jsx'
import Certifications from "./Componrnt/Certifications.jsx"
import Contact from "./Componrnt/Contact.jsx"
import Footer from "./Componrnt/Footer.jsx"
import SmoothScroll from './Componrnt/SmoothScroll.jsx'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <SmoothScroll>
      <main className="bg-black">
        <Toaster position="top-center" reverseOrder={false} />
         <Navbar/>
         <Home/>
         <About/>
          <Services/>
          <Projects/>
          <Certifications/>
          <Contact/>
          <Footer/>
      </main>
      </SmoothScroll>
    </>
  )
}

export default App
