import React from 'react';
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import img1 from "../CarosouleIMG/IMG1.jpg"
import img3 from "../CarosouleIMG/IMG3.jpg"
import img4 from "../CarosouleIMG/IMG4.jpg"
import img5 from "../CarosouleIMG/IMG5.jpg"


function createBigRedDiv() {
    return (
        <div className='mt-16' >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
      <img src={img1} style={{height: '850px', width: '1500px'}}  alt="..."  className='' />
        <img src={img3} style={{height: '650px', width: '1500px'}}  alt="..." />
        <img src={img4} style={{height: '650px', width: '1500px'}}  alt="..." />
        <img src={img5} style={{height: '500px', width: '1500px'}}  alt="..." />
        <img src={img3} style={{height: '650px', width: '1500px'}}  alt="..." />
        
      </Carousel>
    </div>

  

  
       
    </div>
        
    
 
    );
}

export default createBigRedDiv;