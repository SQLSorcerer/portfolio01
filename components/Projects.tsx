import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Food Delivery Web Application</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a food delivery web application utilizing Microservices architecture.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Next.js Car Rental App </p>
                <p className="text-gray-500 text-[10px]">
                Led the development of a feature-rich Car Rental App, demonstrating expertise in React, Tailwind CSS, GraphQL, HyGraph, TypeScript,  and Next.js 13.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Juice Blend Emporium eCommerce Website
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developing the eCommerce Website using React, TypeScript, Redux, Tailwind CSS, Hooks, GraphQL, Node
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Banking Web Application using Microservice Architecture </p>
                <p className="text-gray-500 text-[10px]">
                Nest.js, GraphQL, Next.js, Typescript, NextUI 
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
