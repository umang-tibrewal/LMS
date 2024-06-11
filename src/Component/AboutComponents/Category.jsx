import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DigitalImg from "./AboutImage/DigitalMarketing.jpg"

// Card data
const card1Image = 'DigitalImg';
const card1Description = 'Digital Marketing';

const card2Image = 'https://example.com/card2.jpg';
const card2Description = 'Video Production';

const card3Image = 'https://example.com/card3.jpg';
const card3Description = 'Web Development';



const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="max-w-screen-lg mx-auto py-6 bg-gray-500 " style={{backgroundColor:"#ffffff" ,width:"2000px"}}>

    <div  className='text-center mb-9'>

      <h1 style={{color:"black"}}   className="font-serif">Category</h1>
    </div>
      <Slider {...settings}>
        <div className="px-2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={DigitalImg} alt="Card 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-800 text-sm">{card1Description}</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={card2Image} alt="Card 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-800 text-sm">{card2Description}</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={card3Image} alt="Card 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-800 text-sm">{card3Description}</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={card3Image} alt="Card 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-800 text-sm">{card3Description}</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardCarousel;