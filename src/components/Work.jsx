import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
    // projects file
    const project = data;

    return (
        <div name='work' className='w-full min-h-screen text-gray-300 bg-gradient-to-r from-black to-blue-900 py-16 overflow-x-hidden'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline text-gray-300'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                        flex justify-center text-center items-center mx-auto content-div 
                                        bg-cover bg-center h-64"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out bg-black bg-opacity-70 w-full h-full flex justify-center items-center rounded-md">
                                <div className="text-center p-4">
                                    <span className="text-2xl font-bold text-white tracking-wider">
                                        {item.name}
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="text-center rounded-lg px-4 py-3 m-2
                                                            bg-white text-gray-700 font-bold text-lg"
                                            >
                                                Code
                                            </button>
                                        </a>
                                        <a href={item.live} target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="text-center rounded-lg px-4 py-3 m-2
                                                            bg-white text-gray-700 font-bold text-lg"
                                            >
                                                Live
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
