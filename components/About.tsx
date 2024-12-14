import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
        A passionate and results-driven Backend Developer, Cloud Engineer, and API Specialist with a strong focus on building scalable, high-performance applications. Whether you’re looking to build cutting-edge backend systems, design modern APIs, or leverage the power of cloud technologies, I’m here to turn your ideas into reality.          <br />
          <br />
          I believe in building high-quality, maintainable systems that not only meet your needs but scale with you as your business grows. My approach is to understand your unique challenges and goals, so I can craft tailored solutions that drive results.         </p>
      </div>
    </section>
  );
};

export default About;
