import React from 'react'
import { Card } from "flowbite-react";

function CompanyCard() {
    return (
      <div className="bg-gray-100 py-8">
        <div className="flex flex-row mt-5 mb-5"> 
          <Card className="w-1/2 mr-2"> {/* Set width to half and add margin for spacing */}
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePd2oS6K-dvuC_PT1rkBNgvTsdvLQd3ZbyQ&s"
  alt="LearnKnowD Logo"
  className="rounded-lg object-cover h-30"
></img>
          </Card>
          <div className="w-1/2 p-4"> {/* Set width to half and add padding */}
            <h4 className="text-lg font-bold font-serif" style={{color: '#000000'}}>At LearnKnow Digital, we take pride in being globally recognized as the best custom content eLearning & Video Production company. With our unwavering commitment to excellence, we deliver innovative, engaging, and impactful Digital Learning solutions that empower organizations and learners worldwide.
            At LearnKnow Digital, we are a dynamic team of passionate individuals dedicated to revolutionizing the Digital Learning landscape. LearnKnow Digital - Your Solution Partner for Digital & Video-Based Learning!</h4>
            <p style={{color: '#3ec508'}} className="text-sm  font-serif italic">-LearnKnowD</p>
          </div>
        </div>
        </div>
      )
}

export default CompanyCard
