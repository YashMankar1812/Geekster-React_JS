import React from 'react'
import AboutImage from '../assets/WhatsApp Image 2024-06-15 at 16.59.58_99ad427c.jpg'

const About = () => {
  return (
  <div className='bg-black text-white py-20 dark:bg-gray-900 ' id='about'>
    <div className='conatainer mx-auto px-8 md:px-16 lg-px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={AboutImage} alt=""className='w-72 h-80 rounded object-cover mb-8 md:mb-0' /> 
            <div className='flex-1'>
            <p className='text-lg mb-8 text-gray-500' >Hello! My self  Yash Mankar a passionate and enthusiastic learner currently diving deep into the world of software development.  I Completed my graduation journey in 2022 in (BCA) from RTMNU University Nagpur <br /><br /> With a keen interest in building dynamic and user-friendly applications, I’m constantly expanding my skill set in web technologies like   <strong> HTML, CSS, JavaScript, and beyond.</strong>

I’m driven by the curiosity to solve real-world problems through technology and have been working on various projects that challenge me to grow both as a developer and a creative thinker. <br /><br />From responsive web design to building interactive applications, I’m excited to continuously learn and contribute to the ever-evolving tech landscape.

I’m always eager to take on new challenges, collaborate with others, and bring ideas to life through code. Let’s connect and create something amazing together!</p>

            </div>

  </div>
  </div>
  </div>


  )
}

export default About
