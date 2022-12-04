import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css"
import {useEffect} from "react"

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
