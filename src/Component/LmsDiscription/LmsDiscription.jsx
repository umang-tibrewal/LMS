import React from 'react';
import LmsImage from "../LmsDiscriptionIMG/LmsImage.jpg"

function LmsDiscription() {
  return (
    <div className="flex bg-white md:mx-8 md:mt-8" style={{marginTop:"150px" ,marginBottom:"0px"}}>
      <div className="flex-1 text-black text-center px-4 py-2 m-2">
        <p className="text-6xl font-bold mb-10 text-left ">LMS-Learning and Management Software </p>
        <p className="text-black text-base text-left ">A Learning Management System is a 
        software application designed to deliver, track, and manage educational 
        courses, training programs, or learning and development programs. 
        It provides a centralized platform for instructors to create and 
        organize course content, assess learner progress, and facilitate
         communication. For learners, an LMS offers easy access to a wide range of resources and 
        interactive tools, enabling flexible and personalized learning experiences</p>
      </div>
      <div className="flex-1 mx-auto mr-5 ">
        <img className="rounded-lg mx-auto" style={{height:"400px" , width:"600px"}} src={LmsImage}  alt="placeholder" />
      </div>
    </div>
  );
}

export default LmsDiscription;