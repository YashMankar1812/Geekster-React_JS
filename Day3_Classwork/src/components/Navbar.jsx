import React from 'react'

const Navbar = () => {
  return (
           <nav className=" p-4">
  <div className="container mx-auto flex justify-around items-center">
  <a href="/" className="flex items-center">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GeekFoods</span></a>

    <div className="hidden md:flex space-x-4">
      <a href="Home" className="text-gray-900 font-semibold hover:text-blue-500">Home</a>
      <a href="Quote" className="text-gray-900 font-semibold hover:text-blue-500">Quote</a>
      <a href="Restaurent" className="text-gray-900 font-semibold hover:text-blue-500">Restaurent</a>
      <a href="Food" className="text-gray-900 font-semibold hover:text-blue-500">Food</a>
      <a href="Contact" className="text-gray-900 font-semibold hover:text-blue-500">Contact</a>
    </div>

    <div>
      <button className="bg-blue-700 text- text-white px-2 py-1 rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>

    <div className="md:hidden">
      <button id="mobile-menu-toggle" className="text-white focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </div>

  <div id="mobile-menu" className="md:hidden hidden">
    <a href="#" className="block text-gray-300 hover:text-white py-2">Home</a>
    <a href="#" className="block text-gray-300 hover:text-white py-2">Quote</a>
    <a href="#" className="block text-gray-300 hover:text-white py-2">Resturants</a>
    <a href="#" className='block text-gray-300 hover:text-white py-2'></a>
    <a href="#" className="block text-gray-300 hover:text-white py-2">Contact</a>
  </div>
</nav>


  )
}

export default Navbar
