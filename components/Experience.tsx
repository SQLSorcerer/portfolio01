import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">MF International /</span> Full Stack Web Developer
          </p>
          <p className="text-gray-300">SEPT 2023 - PRESENT, JHB, HYBRID</p>
        </div>
        <p className="text-gray-300 pt-5">
        Presently, I am engaged in the development of an eCommerce website seamlessly integrated with WordPress. 
      This web application serves as an eCommerce platform specializing in the sale of gym equipment across South Africa. 
      As a React.js developer with over two years of experience,
      I possess a robust foundation in crafting dynamic and responsive web applications.
          <br />
          <br />      
          My expertise extends across React.js, Next.js, Node.js, and .NET, Microservices, enabling me to create cross-platform web applications that operate seamlessly. 
          Moreover, my proficiency in React.js empowers me to build rapid, scalable, and dynamic web pages, ensuring exceptional user experiences. 
          I possess a profound understanding of component-based architecture and state management, staying abreast of the latest trends and technologies in web development.
        </p>
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold"> Escrow Group /</span> Full Stack Web Developer
          </p>
          <p className="text-gray-300">Feb 2021 - AUG 2023, HARARE, HYBRID</p>
        </div>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Nest.js
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Microservices
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            SQL
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Node
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            AWS
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Azure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
