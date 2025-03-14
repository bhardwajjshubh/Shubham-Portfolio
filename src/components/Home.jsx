import React, { useRef, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === title) {
              title.style.transform = 'translateY(0) rotate(0)';
              title.style.opacity = '1';
            } else if (entry.target === subtitle) {
              subtitle.style.transform = 'translateY(0) scale(1)';
              subtitle.style.opacity = '1';
            } else if (entry.target === description) {
              description.style.transform = 'translateX(0)';
              description.style.opacity = '1';
            } else if (entry.target === button) {
              button.style.transform = 'scale(1)';
              button.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.2 }
    );
  
    if (title) observer.observe(title);
    if (subtitle) observer.observe(subtitle);
    if (description) observer.observe(description);
    if (button) observer.observe(button);
  
    return () => {
      if (title) observer.unobserve(title);
      if (subtitle) observer.unobserve(subtitle);
      if (description) observer.unobserve(description);
      if (button) observer.unobserve(button);
    };
  }, []);
  

  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-black to-blue-900 overflow-x-hidden'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white text-2xl font-bold'>Hello there! This is </p>
        <h1
          ref={titleRef}
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] transform translateY(50px) rotate(-10deg) opacity-0 transition-all duration-1000'
        >
          SHUBHAM KUMAR
        </h1>
        <h2
          ref={subtitleRef}
          className='text-4xl sm:text-7xl font-bold text-[#8892b0] transform translateY(50px) scale(0.8) opacity-0 transition-all duration-1000 delay-100'
        >
          I'm a Front-End Developer.
        </h2>
        <p
          ref={descriptionRef}
          className='text-[#8892b0] py-4 max-w-[700px] transform translateX(-50px) opacity-0 transition-all duration-1000 delay-200'
        >
          I’m a Front-End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Front-End web applications.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button
              ref={buttonRef}
              className='text-white group border-2 border-blue-500 px-6 py-3 my-2 flex items-center bg-blue-500 hover:bg-blue-900 hover:border-blue-900 transition duration-700 transform scale-90 opacity-0 transition-all duration-1000 delay-300'
            >
              View Work
              <span className='group-hover:rotate-90 transition duration-700'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;