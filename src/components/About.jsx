import React, { useState } from 'react';
import { FaCode, FaUsers, FaLightbulb, FaBookOpen } from 'react-icons/fa';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const skills = [
    {
      title: 'Technical Skills',
      description: [
        <span><strong>Proficiency:</strong> Currently working on web development projects for Northumbria University, collaborating with marketing teams to enhance user engagement. Also led the management and enhancement of the CMS backend system.</span>,
      ],
      bgColor: 'bg-blue-500',
      icon: <FaCode size={30} className="text-white" />,
    },
    {
      title: 'Team Player',
      description: [
        <span><strong>Collaborated cross-functionally</strong> with marketing, data managers to enhance website functionality and improve user engagement.</span>,
      ],
      bgColor: 'bg-green-500',
      icon: <FaUsers size={30} className="text-white" />,
    },
    {
      title: 'Innovation',
      description: ['User Experience Community Associate: Improved user experience by analyzing feedback and implementing design enhancements.'],
      bgColor: 'bg-yellow-500',
      icon: <FaLightbulb size={30} className="text-white" />,
    },
    {
      title: 'Passion for Learning',
      description: ['Certifications: Earned certifications in software development and Generative AI from Microsoft, Google, and LinkedIn.'],
      bgColor: 'bg-purple-500',
      icon: <FaBookOpen size={30} className="text-white" />,
    },
  ];

  return (
    <div name="about" className="w-full justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signature">About</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => toggleDescription(index)}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              </div>

              {/* Smooth toggle effect: animate height + opacity */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="text-gray-100 text-left list-disc list-inside mt-4">
                  {skill.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
