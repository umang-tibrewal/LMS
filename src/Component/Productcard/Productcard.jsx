import React from 'react';
import ReactPlayer from 'react-player';

const Productcard = () => (
  <div className='flex flex-wrap justify-center space-x-8 mb-24 mt-10 font-serif'>
    <div className='card text-left w-1/4 p-6 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-md hover:shadow-2xl transform transition duration-500 hover:scale-105'>
      <ReactPlayer url="https://youtu.be/Yr0xPVFcf-U?si=3P_oCEDUFUpNdFWx" width="100%" height="200px" />
      <p style={{ color: "black" }} className='mt-6 mb-4 text-lg leading-relaxed'>
        Cyber security shields our digital lives - data, devices, networks - from online threats. Hackers, viruses, and scams aim to steal, damage, or control information.
      </p>
      <button className='bg-black-500 hover:bg-black-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
        Learn Now
      </button>
    </div>
    <div className='card text-left w-1/4 p-6 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-md hover:shadow-2xl transform transition duration-500 hover:scale-105'>
      <ReactPlayer url="https://youtu.be/Yr0xPVFcf-U?si=3P_oCEDUFUpNdFWx" width="100%" height="200px" />
      <p style={{ color: "black" }} className='mt-6 mb-4 text-lg leading-relaxed'>
        Cyber security shields our digital lives - data, devices, networks - from online threats. Hackers, viruses, and scams aim to steal, damage, or control information.
      </p>
      <button className='bg-black-500 hover:bg-black-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
        Learn Now
      </button>
    </div>
    <div className='card text-left w-1/4 p-6 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-md hover:shadow-2xl transform transition duration-500 hover:scale-105'>
      <ReactPlayer url="https://youtu.be/Yr0xPVFcf-U?si=3P_oCEDUFUpNdFWx" width="100%" height="200px" />
      <p style={{ color: "black" }} className='mt-6 mb-4 text-lg leading-relaxed'>
        Cyber security shields our digital lives - data, devices, networks - from online threats. Hackers, viruses, and scams aim to steal, damage, or control information.
      </p>
      <button className='bg-black-500 hover:bg-black-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
        Learn Now
      </button>
    </div>
    {/* Repeat the pattern for the other two cards */}
  </div>
);

export default Productcard;