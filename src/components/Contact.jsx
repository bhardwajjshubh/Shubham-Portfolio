import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { links } from './links';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowPopup(true);
        form.reset();
      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-gradient-to-r from-black to-blue-900 flex justify-center items-center p-4 overflow-x-hidden'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline  text-gray-300 '>Contact Us</p>
          <p className='text-gray-300 py-4'>Submit any Query or Update below </p>
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type='hidden' name='access_key' value='21bd6502-3fa9-4ec4-b179-386268c50aab' />
          <input type='hidden' name='subject' value='New Submission from Contact Form' />
          <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' required />
          <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' required />
          <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' required></textarea>
          <button type='submit' className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center transition-all duration-500 hover:bg-blue-900 hover:border-blue-900'>
            Let's Collaborate
          </button>
        </form>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl font-bold">Your message has been sent!</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Social icons for small screens */}
        <div className='flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mt-8'>
          <a
            href={links.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white flex items-center'
          >
            <FaLinkedin size={30} className='mr-2' />
            LinkedIn
          </a>
          <a
            href={links.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white flex items-center'
          >
            <FaGithub size={30} className='mr-2' />
            Github
          </a>
          <a
            href={links.email}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white flex items-center'
          >
            <HiOutlineMail size={30} className='mr-2' />
            Email
          </a>
          <a
            href={links.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white flex items-center'
          >
            <BsFillPersonLinesFill size={30} className='mr-2' />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
