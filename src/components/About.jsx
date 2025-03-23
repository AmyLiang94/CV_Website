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
        'Currently working on web development projects for Northumbria University, collaborating with marketing teams to enhance user engagement. Led the management and enhancement of the CMS backend system.',
        'Developed and deployed several full-stack web applications, gaining hands-on experience with projects like a money management website and a weather forecast app, showcasing strong skills in web development and RESTful API integration.',
        'Demonstrated strong database management skills through academic projects, including an Academic Staff Management System (Java, JUnit) that earned a grade of 85.5/100, showcasing practical knowledge of relational databases and SQL concepts.',
      ],
      bgColor: 'bg-blue-500',
      icon: <FaCode size={30} className="text-white" />,
    },
    {
      title: 'Team Player',
      description: [
        'Collaborated cross-functionally with marketing and data managers to enhance website functionality and improve user engagement.',
        'Managed and mentored team members during university events as a Computer Science University Ambassador, fostering a welcoming environment.',
        'Led a project team to develop a tourist information site for Newcastle, managing tasks, deadlines, and smooth collaboration.',
        'Worked as a Community Associate at Northern Stage Newcastle, collaborating with UX and design teams to enhance user experience.',
        'Facilitated collaboration with clients, service providers, and team members to negotiate and maximize benefits as a Case Manager, managing over 160 cases annually.',
        
      ],
      bgColor: 'bg-green-500',
      icon: <FaUsers size={30} className="text-white" />,
    },
    {
      title: 'Innovation',
      description: [
        'Improved user experience by analyzing feedback and implementing design enhancements at Northern Stage Newcastle.',
        'Guided students and visitors as a Computer Science University Ambassador, offering tailored tours and mentorship.',
      ],
      bgColor: 'bg-yellow-500',
      icon: <FaLightbulb size={30} className="text-white" />,
    },
    {
      title: 'Passion for Learning',
      description: [
        'Earned certifications in software development and Generative AI from Microsoft, Google, and LinkedIn.',
        'Completed HackerRank Java Challenges, demonstrating my commitment to expanding technical expertise.',
      ],
      bgColor: 'bg-purple-500',
      icon: <FaBookOpen size={30} className="text-white" />,
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signature">About</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => toggleDescription(index)}
              aria-expanded={activeIndex === index}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              </div>

              <div
                className={` transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="text-gray-100 text-left list-disc list-inside space-y-2">
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
