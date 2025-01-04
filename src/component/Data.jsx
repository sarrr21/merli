import React from 'react'

const Data = () => {
  return (
    <div className="absolute left-1/2 w-11/12 md:w-4/5 transform -translate-x-1/2 flex flex-wrap md:flex-nowrap justify-between md:justify-start md:gap-16 bg-[#D82D43] text-white py-2 md:py-3 px-3 md:px-6 rounded-lg mt-8 md:mt-96 md:top-24">
      <div className="w-[45%] md:w-auto text-center md:text-left mb-2 md:mb-0">
        <h2 className="text-lg md:text-2xl font-bold truncate">100k</h2>
        <p className="text-xs md:text-sm truncate">Total Followers</p>
      </div>
      <div className="w-[45%] md:w-auto text-center md:text-left mb-2 md:mb-0">
        <h2 className="text-lg md:text-2xl font-bold truncate">100k</h2>
        <p className="text-xs md:text-sm truncate">Average Reach</p>
      </div>
      <div className="w-[45%] md:w-auto text-center md:text-left">
        <h2 className="text-lg md:text-2xl font-bold truncate">19M</h2>
        <p className="text-xs md:text-sm truncate">Engagement Rate</p>
      </div>
      <div className="w-[45%] md:w-auto text-center md:text-left">
        <h2 className="text-lg md:text-2xl font-bold truncate">90%</h2>
        <p className="text-xs md:text-sm truncate">Average Impression</p>
      </div>
    </div>
  );
};

export default Data

