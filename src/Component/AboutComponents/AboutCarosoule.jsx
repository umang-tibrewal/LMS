import React from 'react';
import { Carousel } from 'flowbite-react';
import backgroundimg from './AboutImage/background.jpeg';

function AboutCarosoule() {
  return (
    <div className="h-96 sm:h-64 xl:h-80 2xl:h-96" style={{ height: '700px' }}>
      <Carousel>
        <div className="flex h-full relative" style={{ height: '1200px' }}>
          <img src={backgroundimg} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-6xl font-bold mb-72 "  style={{marginRight:"60.5rem"}}>About us</p>
           
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-36 mt-7">
            <p className="text-white text-xl text-left">
            LMS stands for Learning Management System. It's a software platform for online learning. Think of it as a central hub for training courses.  Instructors can create and deliver course materials, like videos or quizzes. Learners can access them anytime, anywhere, often from their phones. LMS also tracks progress, automates grading, and generates reports.  
            It basically streamlines the entire learning and training process for businesses and educational institutions.</p>
           
          </div>
        </div>
        <div className="flex h-full relative" style={{ height: '1200px' }}>
          <img src={backgroundimg} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold mb-72 "  style={{marginRight:"60.5rem"}}>About us</p>
           
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-36 mt-6">
            <p className="text-white text-xl  text-left">
            Stand out from the crowd with LearnKnowD LMS! Build engaging content with interactive elements, branching scenarios, and immersive simulations. Leverage AI for personalized learning paths. Gain deep insights with advanced analytics and reporting. Keep learners motivated with microlearning and gamification. Foster a collaborative environment with social learning tools.  Offer VR/AR for immersive experiences.
             Ensure accessibility for all. Provide unmatched customer support with dedicated teams and extensive resources.

           </p>
           
          </div>
        </div>
        <div className="flex h-full relative" style={{ height: '1200px' }}>
          <img src={backgroundimg} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold mb-72 "  style={{marginRight:"60.5rem"}}>About us</p>
           
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-36 mt-6">
            <p className="text-white text-xl  text-left pd-2">
            LMS stands for Learning Management System. It's a software platform for online learning. Think of it as a central hub for training courses.  Instructors can create and deliver course materials, like videos or quizzes. Learners can access them anytime, anywhere, often from their phones. LMS also tracks progress, automates grading, and generates reports.  
            It basically streamlines the entire learning and training process for businesses and educational institutions.</p>
           
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default AboutCarosoule;