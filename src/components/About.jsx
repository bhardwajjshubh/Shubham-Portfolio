import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-black to-blue-900 ... text-gray-300 overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline '>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi. I'm Shubham Kumar, Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am currently pursuing a Master of Computer Application (MCA) with a strong passion for web development. Throughout my academic journey, I have immersed myself in creating dynamic and responsive web applications, building a solid foundation in Full Stack Development. <br/> 
               I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. <br/>
               In addition to my coursework, I have actively engaged in numerous web development projects, honing my skills in both front-end technologies.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
