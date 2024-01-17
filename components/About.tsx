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
        As an enthusiastic full stack developer, I thrive on the intricate dance between logic and creativity, orchestrating a symphony of code to bring captivating web applications to life. My passion lies in seamlessly translating ideas into interactive and visually stunning digital experiences.
          <br />
          <br />
          With a keen eye for detail and a penchant for innovation, I relish the challenge of pushing the boundaries of what is possible in the dynamic world of web development. Join me on this exhilarating journey of transforming concepts into engaging and enthralling online solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
