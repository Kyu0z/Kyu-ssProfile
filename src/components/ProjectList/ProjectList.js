import React from "react";
import Project from "../Project/Project";
import ecommerce from "../../assets/project-1.png";
import hotel from "../../assets/project-2.png";
import movies from "../../assets/project.png";

const projectList = [
  {
    id: "item1",
    title: "E-commerce",
    img: ecommerce,
    description:
      'This is an E-commerce website designed with a standard UI/UX along with the following Key features:\n"Product search.\nFilter products by category, brand, color, price.\nDisplay products in grid or list view.\nSort products by price low to high, high to low, A-Z, Z-A, etc.\nAdd products to the cart.\nPurchase products."',
    technologies: ["React + Redux-toolkit", "Context API", "Styled-components"],
    github: "https://github.com/Kyu0z/thapaStore",
    address: "https://ecommercekyu.netlify.app",
    isProcessing: false,
  },
  {
    id: "item2",
    title: "Booking Hotel",
    img: hotel,
    description:
      'This is an booking hotel website designed with a standard UI/UX along with the following Key features:\n"Room selection.\nRoom reservation (check-in, check-out)\nAccount registration for room booking and payment.\nPayment for reserved rooms through PayPal electronic wallet.\nRoom service requests.\nRoom and customer account management via the dashboard."',
    technologies: ["React + Typescript", "TailwindCss", "Firebase"],
    github: "https://github.com/Kyu0z/ManagerXhotel",
    address: "https://managerxhotel.vercel.app",
    isProcessing: false,
  },
  {
    id: "item3",
    title: "BamMovies",
    img: movies,
    description:
      'This is a movie streaming website designed with a standard UI/UX along with the following Key features:\n"Login/register.\nShow movies by lists (trending, tvshow,...)\nSearch movies.\nMovie details (actor, genre, duration, description, ..)\nWatch movie trailers via YouTube.\nRecommend similar movies."',
    technologies: ["React + Redux-toolkit", "Material UI", "Sass"],
    github: "https://github.com/Kyu0z/BamMovies",
    address: "https://kyu0z.github.io/BamMovies",
    isProcessing: false,
    account: [
      {
        username: "Username: admin",
        password: "Password: admin",
      },
    ],
  },
];

export default function ProjectList() {
  return (
    <div
      data-aos="fade-up"
      id="projects"
      className="bg-slate-200 py-16  relative"
    >
      <span className="relative flex text-black font-bold w-fit m-auto text-2xl  md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
        Projects
      </span>
      <div className="carousel m-auto">
        <Project projectList={projectList} />
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {projectList.map((_, index) => (
          <a href={`#item${++index}`} className="btn btn-xs">
            {index}
          </a>
        ))}
      </div>
    </div>
  );
}
