import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: 'Zieers System Pvt Ltd',
      position: 'SDE Intern',
      type: 'OnSite',
      duration: 'Feb - Present',
      work: [
        'Developed and maintained the database for a Mutual Fund Distributor system using PHP, ensuring efficient data management.',
        'Built full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js), enhancing scalability and performance.',
        'Designed and implemented a Mutual Fund Distributor Calculator, enabling users to calculate SIP, Lumpsum Investment, Retirement Planning, Child Education, and EMI projections.',
        'Created a user-friendly interface with real-time financial calculations, allowing investors to visualize returns and make informed decisions.',
        'Implemented a secure backend to manage user data efficiently, with MongoDB storing user preferences for personalized insights.',
        'Collaborated with the team to enhance system functionality, ensuring a seamless and intuitive experience for end users.'
      ]
    },
    {
      company: 'MonoSpace',
      position: 'Web Design Intern',
      type: 'Remote',
      duration: 'Jan - Present',
      work: [
        'Designed and developed a responsive wedding website from scratch, focusing on modern UI/UX principles and seamless navigation.',
        'Created detailed wireframes and mood boards to ensure brand consistency and an intuitive user experience.',
        'Developed and optimized a Lead Dashboard, enhancing data visualization and improving user interaction efficiency.',
        'Implemented interactive UI components to boost user engagement and accessibility.',
        'Worked with HTML, CSS, JavaScript, Tailwind CSS, React.js, Redux, Bootstrap, and Git, alongside design tools like Figma and Canva.',
        'Integrated the frontend with backend APIs for smooth data flow and improved application performance.'
      ]
    },
  ];

  return (
    <div
      id="experience-section"
      name="experience"
      className="w-full min-h-screen bg-gradient-to-r from-black to-blue-900 flex flex-col justify-center items-center p-4 pt-20"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl font-bold text-gray-300">Experience</p>
      </div>

      <div className="flex flex-col w-full max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-[#0a192f] p-6 rounded-lg shadow-lg text-gray-300 transition-all duration-700 transform scale-95 opacity-0 ${
              isVisible ? 'animate-fade-slide' : ''
            } hover:scale-100 hover:bg-[#10243f] hover:shadow-md hover:shadow-blue-800/40`}
          >
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
              {exp.position} <span className="text-blue-400">@ {exp.company}</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium mb-3">
              {exp.type} | <span className="text-cyan-400">{exp.duration}</span>
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-300 leading-relaxed pl-5">
              {exp.work.map((task, idx) => (
                <li key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fade-slide {
            animation: fadeSlide 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Experience;
