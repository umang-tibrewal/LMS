import React from 'react';
import ReactPlayer from 'react-player';
import TopVideo from '../Component/AboutComponents/TopVideo';
import Category from '../Component/AboutComponents/Category';
import WhyLms from '../Component/AboutComponents/WhyLms';
import Navbar from "../Component/Navbar/Fronr";
import Footer from "../Component/Footer/Footer";
import Discription from '../Component/AboutComponents/Discription';
import Education from '../Component/AboutComponents/Education.jsx';
import AboutCarosoule from  "../Component/AboutComponents/AboutCarosoule.jsx"


const About = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <div className="content-container  mt-16 ">
       
      <AboutCarosoule />
     
      
     
      </div>
      <Footer/>
    </div>
  );
};

export default About;