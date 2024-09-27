import React from 'react';

const Academics = () => {
  const educationDetails = [
    {
      level: "SSC-X (2017-2018)",
      school: "Om Sai International Public School Sausar",
      board: "CBSE School Education",
      percentage: "8.6 CGPA",
    },
    {
      level: "HSC-XII (2019-2020)",
      school: "New Sunflower Higher Secondary School Sausar",
      board: "State Board of Education",
      percentage: "69.9%",
    },
    {
      level: "BCA (2020-2022)",
      school: "Santaji Mahavidhyalay Nagpur University",
      board: "RTMNU University Nagpur",
      percentage: "79.96%",
    },
  ];

  return (
    <div className='bg-black text-white py-20 dark:bg-gray-900'>
    <div className="  max-w-4xl mx-auto ">
    <h2 className="text-4xl font-bold text-gray-400 dark:text-white text-center py-8">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500">Academics</span>
        </h2>
      <div className="space-y-6">
        {educationDetails.map((education, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{education.level}</h3>
            <p className="text-gray-700">{education.school}</p>
            <p className="text-gray-500">{education.board}</p>
            <p className="font-bold">Percentage: {education.percentage}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Academics;
