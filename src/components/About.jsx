import React, { useState } from 'react';
import { FaCode, FaUsers, FaLightbulb, FaBookOpen } from 'react-icons/fa';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which section is toggled

  const toggleDescription = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle logic
  };

  const skills = [
    {
      title: 'Technical Skills',
      description: [
        <span><strong>Proficiency:</strong> Currently working on web development projects for Northumbria University, collaborating with marketing teams to enhance user engagement. Also led the management and enhancement of the CMS backend system.</span>,
        <span><strong>API Integration:</strong> Developed and deployed several full-stack web applications, gaining hands-on experience with projects like a money management website and a weather forecast app, showcasing strong skills in web development and RESTful API integration.</span>,
        <span><strong>Database:</strong> Demonstrated strong database management skills through academic projects, including an Academic Staff Management System (Java, JUnit) that earned a grade of 85.5/100. Designed, implemented, and unit-tested a system for efficiently managing university staff data, showcasing practical knowledge of relational databases and SQL concepts.</span>,
      ],
      bgColor: 'bg-blue-500',
      icon: <FaCode size={30} className="text-white" />,
    },
    {
      title: 'Team Player',
      description: [
        <span><strong>Collaborated cross-functionally</strong> with marketing, data managers to enhance website functionality and improve user engagement.</span>,
        <span><strong>Managed and mentored team members</strong> during university events and tours as a Computer Science University Ambassador, providing guidance and maintaining a supportive, welcoming environment.</span>,
        <span><strong>Led a project team</strong> to develop a tourist Newcastle information site, effectively coordinating tasks, managing deadlines, and ensuring smooth collaboration.</span>,
        <span><strong>Worked as a Community Associate at Northern Stage Newcastle</strong>, collaborating with UX and design teams to enhance user experience through feedback-driven design improvements.</span>,
        <span><strong>Facilitated collaboration</strong> with clients, service providers, and team members to negotiate and maximize benefits during your time as a Case Manager, managing over 160 cases annually.</span>,
        <span><strong>Organized and coordinated activities</strong> as part of a fully-funded overseas internship, fostering teamwork to improve social engagement in disability and nursing centers.</span>,
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
      ],
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
            <div key={index} className={`${skill.bgColor} p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105`}>
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3
                className="text-2xl font-bold mb-2 cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                {skill.title}
              </h3>
              {activeIndex === index && (
                <ul className="text-gray-100 text-left list-disc list-inside">
                  {skill.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
