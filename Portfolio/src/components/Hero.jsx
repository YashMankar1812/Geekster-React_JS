import React from 'react'
import HeroImage from '../assets/WhatsApp_Image_2024-09-22_at_13.05.17_e9af4edf-removebg-preview (1).png'
import TypingText from './TypingText'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 dark:bg-gray-900 ' >
      <img 
  src={HeroImage} 
  alt="" 
  className='mx-auto mb-8 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg' 
/>

      {<h1 className='text-4xl font-bold py-4 mx-5'>
        Hey 👋🏻 {" "}
        {/* <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to to-purple-500'>Yash Mankar</span> */}
        Everyone
      </h1> }
<TypingText/>
      <p className='mt-4 text-lg text-gray-100'>I specialize in building modern and responsive web applicaion</p>
      <div className='mt-8 space-x-4'>
        {/* <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' >Contact me </button> */}
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Hero
