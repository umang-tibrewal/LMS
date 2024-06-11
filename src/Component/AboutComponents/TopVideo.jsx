
import React from 'react';
import ReactPlayer from 'react-player';

const TopVideo = () => {
  return (
    <div className="relative  " style={{height:"606px"}}>
      <ReactPlayer
        url="https://youtu.be/ezbJwaLmOeM?si=k_8-yj2SzxDTqd5b" 
        playing
        loop
        muted
        width="100%"
        height="500px"
        className="absolute top-0  object-cover left-0 right-0"
      />
      <div className="absolute inset-0 flex items-center justify-center mb-72">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4" style={{color:"black"}}>About LMS</h1>

        </div>
      </div>
    </div>
  );
};

export default TopVideo;