import React from 'react';
import About from "./components/About"
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import FunThings from './components/FunThings';



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <FunThings />
      <Contact />
    </main>
  )
}

export default App;
