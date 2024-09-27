import React from 'react';

// FontAwesome Icons (ensure you have @fortawesome/react-fontawesome installed)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGitAlt, faGithub, faReact, faNodeJs, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black dark:bg-gray-900 ">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-400 dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to to-blue-500">Skills</span>
        </h1>
        <p className="mt-4 text-gray-400 dark:text-gray-300 font-semibold mx-5" >
          Here are some of the skills I have acquired during my journey as a web developer...
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12 mx-8">
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-orange-200  transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faHtml5} className="text-6xl text-orange-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-200  transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-blue-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-yellow-200  transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faJs} className="text-6xl text-yellow-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-red-200  transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faGitAlt} className="text-6xl text-red-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-700  transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faGithub} className="text-6xl text-gray-400" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-cyan-200 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faReact} className="text-6xl text-cyan-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-green-200 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faNodeJs} className="text-6xl text-green-500" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-purple-200 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faBootstrap} className="text-6xl text-purple-600" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-red-200 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faJava} className="text-6xl text-red-600" />
          </div>
          <div className="skill_card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:bg-indigo-100 dark:hover:bg-teal-200 transform transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faWind} className="text-6xl text-teal-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
