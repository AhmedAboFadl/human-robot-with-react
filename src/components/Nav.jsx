import React from 'react';

export default function Nav() {
  return(

    <div className='fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4  text-white z-10 backdrop-blur-lg shadow-md wow animate__fadeInUp'>
      <div className="text-[20px] ml-[100px]">
        <h1>human-robot</h1>
      </div>
      <ul className='flex space-x-4 mr-[200px]'>
        <li><a href='#' className='hover:text-gray-300 mx-6'>Home</a></li>
        <li><a href='#' className='hover:text-gray-300 mx-6'>About</a></li>
        <li><a href='#' className='hover:text-gray-300 mx-6'>Contact</a></li>
      </ul>
    </div>
  );
}
