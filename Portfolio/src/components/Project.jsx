import React from 'react';
import GymImage from 'src/assets/Gym.png';
import BusinessImage from 'src/assets/Bussiness.png';
import CampingImage from 'src/assets/Camping.png';
import AmazonImage from 'src/assets/Amazon.png';
import YouTubeImage from 'src/assets/youtube.png';
import DiviTeamImage from 'src/assets/Screenshot2024-06-29.png';

const Projects = () => {
  const projects = [
    {
      title: 'Gym Project',
      imgSrc : 'src/assets/Gym.png',
      link: 'https://gym-project-green-delta.vercel.app/',
    },
    {
      title: 'Business Page',
      imgSrc: 'src/assets/Bussiness.png',
      link: 'https://yashmankar1812.github.io/BussinessPage/',
    },
    {
      title: 'Camping Services',
      imgSrc: 'src/assets/Camping.png',
      link: 'weekly-t-4.vercel.app',
    },
    {
      title: 'Amazon UI',
      imgSrc: 'src/assets/Amazon.png',
      link: 'https://yashmankar1812.github.io/Weekly_Test-5/#',
    },
    {
      title: 'YouTube UI',
      imgSrc: 'src/assets/youtube.png',
      link: 'https://youtube-ui-ten.vercel.app/',
    },
    {
        title: 'Divi Team Work  ',
        imgSrc: 'src/assets/Screenshot 2024-06-29 220829.png',
        link: 'https://aditya234892.github.io/ELEGANT-THEMES-Team/divi/divi',
      },

  ];

  return (
    <section className="bg-black project-section py-16 dark:bg-gray-900" id="project">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-400 dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to to-blue-500">Projects</span>
        </h2>
      </div>

      <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
        {projects.map((project, index) => (
          <div key={index} className="project-item group relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-53 object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
