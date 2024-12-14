import React from "react";

const Education = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EDUCATION
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
     <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Yeshiva University/</span> Msc in Digital Marketing and Analytics
          </p>
          <p className="text-gray-300">August 2024 - Present</p>
        </div>
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold"> Chinhoyi University of Technology </span> Bsc in Information Technology
          </p>
          <p className="text-gray-300">February 2019 - August 2023</p>
        </div>       
      </div>
    </section>
  );
};

export default Education;
