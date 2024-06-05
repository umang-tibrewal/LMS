import React from 'react';
import ReactPlayer from 'react-player';

const Productcard = () => (
  <div className='flex flex-wrap justify-between mb-24 mt-10 font-serif'>
    <div className='card text-left w-1/3 p-4 shadow-md  hover:shadow-2xl'>
      <ReactPlayer url="https://youtu.be/Yr0xPVFcf-U?si=3P_oCEDUFUpNdFWx" width="100%" height="300px" />
      <p style={{color:"black"}} className='mt-4 mb-4'>Cyber security shields our digital lives - data, devices, networks - from online threats. Hackers, viruses, and scams aim to steal, damage, or control information.
      .</p>
      <button className='bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded'>Learn Now </button>
    </div>
    <div className='card text-left w-1/3 p-4 shadow-md  hover:shadow-2xl '>
      <ReactPlayer url="https://youtu.be/QsY8fnvMn6c?si=T1CheBJlnaeIeNQs" width="100%" height="300px" />
      <p style={{color:"black"}} className='mt-4 mb-4'>
Digital marketing connects businesses with customers online.  Using websites, social media, search engines, and more, it creates targeted campaigns to build brand awareness, generate leads, and drive sales.
</p>
      <button className='bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded'>Learn Now </button>
    </div>
    <div className='card text-left w-1/3 p-4 shadow-md hover:shadow-2xl '>
      <ReactPlayer url="https://youtu.be/I6IAhXM-vps?si=tmHvPSI0panzPVqn" width="100%" height="300px" />
      <p style={{color:"black"}} className='mt-4 mb-4' >Strong communication builds bridges, fosters understanding, and unlocks success.</p>
      <button className='bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded'>Learn Now </button>
    </div>
  </div>
);

export default Productcard;