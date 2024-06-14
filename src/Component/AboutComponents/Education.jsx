import React from 'react';

const EducationImage = () => {
  return (
    <div className="bg-[#3ec508] flex flex-col items-center justify-center py-16">
      <div className="relative mb-8">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full opacity-20"></div>
        <div className="relative flex items-center">
          <div className="w-24 h-16 bg-white rounded-lg mr-2 " style={{color:"black"}}>
            hello
          </div>
          <div className="w-32 h-20 bg-purple-500 rounded-lg mr-2"></div>
          <div className="w-16 h-12 bg-white rounded-lg"></div>
        </div>
      </div>
      <h1 className="text-3xl text-white font-bold mb-4">Education is in Our Blood</h1>
      <p className="text-gray-300 text-center max-w-lg mb-8">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        View All Courses
      </button>
    </div>
  );
};

export default EducationImage;