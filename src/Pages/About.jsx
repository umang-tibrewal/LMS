import React from 'react';
import ReactPlayer from 'react-player';
import TopVideo from '../Component/AboutComponents/TopVideo';
import Category from '../Component/AboutComponents/Category';
import WhyLms from '../Component/AboutComponents/WhyLms';
import Navbar from "../Component/Navbar/Fronr";
import Footer from "../Component/Footer/Footer";
import Discription from '../Component/AboutComponents/Discription';


const About = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <div className="content-container  mt-16">
        <TopVideo />
        <Category />
        <WhyLms />
       <Discription />
     
      </div>
      <Footer/>
    </div>
  );
};

export default About;