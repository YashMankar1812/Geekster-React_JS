import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Project'
// import Academics  from './components/Academics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TypingText from './components/TypingText'
import React from 'react';
import GymImage from 'src/assets/Gym.png';
import BusinessImage from 'src/assets/Bussiness.png';
import CampingImage from 'src/assets/Camping.png';
import AmazonImage from 'src/assets/Amazon.png';
import YouTubeImage from 'src/assets/youtube.png';
import DiviTeamImage from 'src/assets/Screenshot2024-06-29.png';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
