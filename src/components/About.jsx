import React from 'react';
import { FaCode, FaUsers, FaLightbulb, FaBookOpen } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      title: 'Technical Skills',
      description: [
        'Proficiency: Currently working on web development projects for Northumbria University, collaborating with marketing teams to enhance user engagement, resulting in a 22% increase in traffic. Also led the management and enhancement of the CMS backend system.',
        'API Integration: Developed and deployed several full-stack web applications, gaining hands-on experience with projects like a money management website and a weather forecast app, showcasing strong skills in web development and RESTful API integration.',
        'Database: Achieved excellent grades (85.5/100) for effectively managing academic staff data.',
      ],
      bgColor: 'bg-blue-500',
      icon: <FaCode size={30} className="text-white" />,
    },
    {
      title: 'Team Player',
      description: [
        'Project Leadership: Led a team in developing a museum management system, earning a top grade of 96/100. Facilitated effective communication and collaboration, ensuring successful project completion and team productivity.',
        'Efficiency & Team Collaboration: Managed 160+ cases annually, collaborating with diverse stakeholders to deliver results effectively within multidisciplinary teams.',
      ],
      bgColor: 'bg-green-500',
      icon: <FaUsers size={30} className="text-white" />,
    },
    {
      title: 'Innovation',
      description: [
        'User Experience Community Associate: Improved user experience by analyzing feedback and implementing design enhancements across platforms, ensuring alignment with diverse community interests.',
        'Computer Science University Ambassador, Campus Tour Guide, Student Guidance and Mentorship.',
      ],
      bgColor: 'bg-yellow-500',
      icon: <FaLightbulb size={30} className="text-white" />,
    },
    {
      title: 'Passion for Learning',
      description: [
        'Certifications: Earned certifications in software development and Generative AI from Microsoft, Google, and LinkedIn, alongside completing the HackerRank Java Challenges, showcasing my commitment to expanding my technical expertise.',
        'Certifications: Earned certifications in software development and Generative AI from Microsoft, Google, and LinkedIn, alongside completing the HackerRank Java Challenges, showcasing my commitment to expanding my technical expertise.',
      ],
      bgColor: 'bg-purple-500',
      icon: <FaBookOpen size={30} className="text-white" />,
    },
  ];

  return (
    <div
      name="about"
      className="w-full justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signature">About</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105`}
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              <ul className="text-gray-100 text-left list-disc list-inside">
                {skill.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
