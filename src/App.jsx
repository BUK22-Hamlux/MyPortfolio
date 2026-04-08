import React from 'react';
import Navbar from './components/layout/navbar.jsx';
import Footer from './components/layout/footer.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import { ToastProvider } from './context/ToastContext.jsx';

function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main className='bg-[#0a1120] min-h-screen'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </ToastProvider>
  );
}

export default App;
