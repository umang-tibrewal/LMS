import React from 'react';

import { Carousel } from "flowbite-react";
import img1 from "../CarosouleIMG/IMG1.jpg"
import img3 from "../CarosouleIMG/IMG3.jpg"
import img4 from "../CarosouleIMG/IMG4.jpg"
import img5 from "../CarosouleIMG/IMG5.jpg"
import img6 from "../CarosouleIMG/IMG6.jpg"
import img8 from "../CarosouleIMG/IMG8.jpg"
import img9 from "../CarosouleIMG/IMG9.jpg"
import img10 from "../CarosouleIMG/IMG10.jpg"


function createBigRedDiv() {
    return (
        <div className='mt-16' >
      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96" style={{height: '550px'}}>
      <Carousel>
        <img src={img6} style={{height: '850px', width: '1500px'}}  alt="..."  />
        <img src={img9} style={{height: '650px', width: '1500px'}}  alt="..." />
        <img src={img10} style={{height: '650px', width: '1500px'}}  alt="..." />
        <img src={img5} style={{height: '650px', width: '1500px'}}  alt="..." />
        <img src={img8} style={{height: '650px', width: '1500px'}}  alt="..." />
        
      </Carousel>
    </div>

  

  
       
    </div>
        
    
 
    );
}

export default createBigRedDiv;