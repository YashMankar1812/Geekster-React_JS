import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Quote from './components/Quote'
import Restaurent from './components/Restaurent'
import Geekfood from './components/Geekfood'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
    <Home/>
    {/* <Restaurent/>  */}
    {/* <Quote/> */}
    <Geekfood/>   
    <Review/>
    <Contact/>
    <Footer/>
    </>

  )
}

export default App
