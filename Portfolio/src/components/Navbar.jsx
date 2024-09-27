import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-gray-900 text-white dark:bg-white dark:bg-gradient-to-r from-pink-500 to-purple-500 px-8 md:px-16 lg:px-24'>
      <div className='py-2 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold tracking-widest bg-clip-text'>Yash</div>

        {/* Hamburger Icon */}
        <div className='md:hidden ml-auto'>
          <button
            onClick={toggleMenu}
            className='focus:outline-none'
            aria-label='Toggle navigation'
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl pr-5`}></i>
          </button>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-6'>
          <a href='#home' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold'>Home</a>
          <a href='#about' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold'>About me</a>
          <a href='#project' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold'>Project</a>
          <a href='#contact' className='hover:text-gray-400 dark:hover:text-gray-600 font-semibold'>Contact</a>
        </div>

        {/* Theme Toggle Button */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleTheme}
            className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full w-10'
          >
            {theme === 'light' ? <i className='fas fa-moon'></i> : <i className='fas fa-sun'></i>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-4 text-center'>
          <a href='#home' className='hover:text-gray-400 dark:hover:text-gray-600' onClick={closeMenu}>
            Home
          </a>
          <a href='#about' className='hover:text-gray-400 dark:hover:text-gray-600' onClick={closeMenu}>
            About me
          </a>
          <a href='#project' className='hover:text-gray-400 dark:hover:text-gray-600' onClick={closeMenu}>
            Project
          </a>
          <a href='#contact' className='hover:text-gray-400 dark:hover:text-gray-600' onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
