import React from 'react';
import { Card } from "flowbite-react";
import EmployeIcon from "../FeatureCardImage/Employe.png";
import BuildingIcon from "../FeatureCardImage/Building.png";
import TeamIcon from "../FeatureCardImage/Team.png";

function FeatureCard() {
  return (
    <div className='flex flex-wrap mt-10 ml-8 mr-7 text-center justify-center bg-gray-100 py-10'>
      <Card className="max-w-sm d-flex flex-column align-items-center hover:shadow-2xl bg-white transition duration-300 ease-in-out transform hover:scale-105">
        <img src={BuildingIcon} alt="Meaningful alt text for an image that is not purely decorative" style={{ height: '50px', width: '50px', margin: "0 135px 0" }} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
          Increased Employement Engagement
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 font-serif">
          Increase employee engagement and retention with a comprehensive learning solution that fosters a culture of continuous learning and growth.
          Empower employees to take control of their own development, and provide them with the tools they need to succeed.
        </p>
      </Card>

      <Card className="max-w-sm d-flex flex-column align-items-center ml-10 mr-10 mt-10 hover:shadow-2xl bg-white transition duration-300 ease-in-out transform hover:scale-105">
        <img src={EmployeIcon} alt="Meaningful alt text for an image that is not purely decorative" style={{ height: '50px', width: '50px', margin: "0 135px 0" }} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
          Enhance Employee
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 font-serif">
          Empower employees to excel with a combined learning and management solution. Upskill workforces, personalize training, and track progress. Drive better
          decision-making with data-driven insights, fostering a culture of continuous learning and growth.
        </p>
      </Card>

      <Card className="max-w-sm d-flex flex-column align-items-center hover:shadow-2xl bg-white transition duration-300 ease-in-out transform hover:scale-105">
        <img src={TeamIcon} alt="Meaningful alt text for an image that is not purely decorative" style={{ height: '50px', width: '50px', margin: "0 135px 0" }} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
          Adaptability and Innovation
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 font-serif">
          Learning software adapts to employee needs, offering personalized training paths. Management tools
          innovate with features like AI-powered feedback and gamification, creating a dynamic and engaging experience.
        </p>
      </Card>
    </div>
  );
}

export default FeatureCard;