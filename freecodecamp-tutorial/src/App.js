import React from 'react';
import About from "./components/About"
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App;
