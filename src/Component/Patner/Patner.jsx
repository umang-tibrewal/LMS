import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pimg from "../PatnerIMG/ExceedL.avif"
import Naandi  from "../PatnerIMG/Naandi.png"
import vikranshila  from "../PatnerIMG/vigramshila.png"
import hp from "../PatnerIMG/hp.jpg"


// Card data
const card1Image = 'DigitalImg';
const card1Description = 'Digital Marketing';

const card2Image = 'https://example.com/card2.jpg';
const card2Description = 'Video Production';

const card3Image = 'https://example.com/card3.jpg';
const card3Description = 'Web Development';



const PartnerList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="   mb-32 mx-auto mt-10  ">

<div  className='text-center mb-9'>

<h1 style={{color:"black"}}   className="font-serif">Our Patners</h1>
</div>
    <div className="max-w-screen-md  ml-64 " >

   
 
      <Slider {...settings}  style={{width:"1000px"}} >
     
          <div className="bg-white    ">
            <img src={pimg} alt="Card 1" className="w-48 h-40 object-cover" />
           
          </div>
    
    
          <div className="bg-white  ">
            <img src={Naandi} alt="Card 1" className=" object-cover" />
           
          </div>
      
     
      
          <div className="bg-white    ">
            <img src={hp} alt="Card 1" className=" object-cover" />
           
          </div>
  
     
        <div className=" ">
          <div className="bg-white    ">
            <img src={vikranshila} alt="Card 1" className=" object-cover" style={{height:"120px"}} />
           
          </div>
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default PartnerList;