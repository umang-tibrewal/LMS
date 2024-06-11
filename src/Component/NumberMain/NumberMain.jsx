import React from 'react';
import CountUp from 'react-countup';

const NumberMain = () => {
  return (
    <div className="bg-gray-100 py-8 mt-10 mb-10">
    <div className="flex justify-center items-center space-x-52 my-12 " style={{color:"black"}}>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">
          <CountUp
            start={0}
            end={10000}
            duration={7.5}
            separator=","
            decimal=","
            prefix="+"
          />
        </div>
        <p className="text-gray-600">Customers we have served</p>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-2">
          <CountUp start={0} end={97} duration={7.5} suffix="%" />
        </div>
        <p className="text-gray-600">Of our clients recommend us</p>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-2">
          <CountUp start={0} end={30} duration={8.5} suffix="+" />
        </div>
        <p className="text-gray-600">Years of meeting client needs</p>
      </div>
    </div>
    </div>
  );
};

export default NumberMain;