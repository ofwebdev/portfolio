import React from "react";
import Image from "next/image";
import Link from "next/link";
// import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Landing Page Typescript",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/p1.jpg",
    github:
      "https://github.com/ofwebdev/https-github.com-ofwebdev-landing-page-nextjs-13",
    link: "https://landing-page-nextjs-13-git.vercel.app/",
  },
  {
    name: "Image Search",
    description: "Pixel is a to do list app that built using the MERN stack.",
    image: "/p2.jpg",
    github: "https://github.com/ofwebdev/Infinite-scroll-nextjs-13",
    link: "https://infinite-scroll-next-13.vercel.app/",
  },
  {
    name: "Photography",
    description:
      "World class photography school with payment method integration",
    image: "/p4.png",
    github: "https://github.com/ofwebdev/photography",
    link: "https://frontend-f0e16.web.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="container mx-auto">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 md:p-4">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/* <SlideUp offset="-300px 0px -300px 0px"> */}
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* </SlideUp> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
