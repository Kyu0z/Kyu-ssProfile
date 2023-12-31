import Container from "../UI/Container/Container";
import classes from "./Project.module.css";
const Project = ({ className, projectList }) => {
  return (
    <>
      {projectList.map((project) => (
        <section id={project.id} className="carousel-item w-full pt-10">
          <Container className={`flex flex-col px-6 space-y-12 items-center `}>
            <div data-aos="fade-up" className="flex justify-center">
              {/* Desktop */}
              <div className="hidden rounded-xl flex-col group relative cursor-pointer bg-white shadow-md p-6 items-center w-full shadow-slate-400 space-y-2 transition duration-700 hover:scale-105 hover:shadow-2xl sm:w-2/3 md:w-1/2 lg:flex  lg:w-1/3 xl:w-1/3 md:space-y-4">
                <a href={project.address}>
                  <button disabled={project.isProcessing}>
                    <img src={project.img} className="rounded-xl " alt="" />
                  </button>
                </a>
                <span className="text-sky-500 text-2xl font-bold relative flex justify-center after:absolute after:w-1/2 after:bg-sky-500 after:h-1 after:mt-12">
                  {project.title}
                </span>
                <p className="text-black text-lg text-left pt-6 leading-9">
                  {project.description}
                </p>

                <div
                  className={`${classes.projectFadeIn} flex-col -top-4 left-0 h-full justify-center space-y-8 absolute opacity-90 hidden items-center w-full rounded-xl  group-hover:flex`}
                >
                  {project.account &&
                    project.account.map((item) => (
                      <div className="flex flex-col text-white">
                        <span>{item.username}</span>
                        <span>{item.password}</span>
                      </div>
                    ))}

                  <div className="flex md:flex-row space-x-2 !mx-4 ">
                    <div className="flex flex-row space-x-2 justify-around w-full">
                      <span className="p-2 bg-blue-300 whitespace-nowrap text-blue-600 opacity-100 font-semibold border rounded-xl">
                        {project.technologies[0]}
                      </span>
                      {project.technologies[1] && (
                        <span className="p-2 bg-blue-300 whitespace-nowrap text-blue-600 opacity-100 font-semibold border rounded-xl">
                          {project.technologies[1]}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-row space-x-2 justify-around w-full">
                      {project.technologies[2] && (
                        <span className="p-2 bg-blue-300 whitespace-nowrap text-blue-600 opacity-100 font-semibold border rounded-xl">
                          {project.technologies[2]}
                        </span>
                      )}
                      {project.technologies[3] && (
                        <span className="p-2 bg-blue-300 whitespace-nowrap text-blue-600 opacity-100 font-semibold border rounded-xl">
                          {project.technologies[3]}
                        </span>
                      )}
                    </div>
                  </div>
                  {!project.isProcessing && (
                    <div className="flex flex-row justify-evenly w-full">
                      <a
                        href={project.github}
                        className="py-2 px-4 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-white hover:text-black hover:lg:ease-out"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                      <a
                        href={project.address}
                        className="py-2 px-6 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-white hover:text-black hover:lg:ease-out"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden rounded-xl flex flex-col group relative cursor-pointer bg-white shadow-md p-5 items-center w-full shadow-slate-400 space-y-1 transition duration-700 hover:scale-105 hover:shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 md:space-y-4">
                <a href={project.address}>
                  <button disabled={project.isProcessing}>
                    <img src={project.img} className="rounded-xl " alt="" />
                  </button>
                </a>
                <span className="text-sky-500 text-2xl font-bold relative flex justify-center after:absolute after:w-1/2 after:bg-sky-500 after:h-1 after:mt-12">
                  {project.title}
                </span>
                <p className="text-black text-lg text-left pt-6 leading-9">
                  {project.description}
                </p>

                <div className="flex flex-col items-center  w-full md:flex-row">
                  <div className="flex flex-row justify-around w-full">
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[0]}
                    </span>
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[1]}
                    </span>
                  </div>
                  <div className="flex flex-row justify-around w-full">
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[2]}
                    </span>
                    <span className="p-2 text-orange-700 rounded-xl">
                      {project.technologies[3]}
                    </span>
                  </div>
                </div>
                {!project.isProcessing && (
                  <div className="flex flex-row justify-evenly w-full">
                    <a
                      href={project.github}
                      className="py-2 px-4 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </a>
                    <a
                      href={project.address}
                      className="py-2 px-6 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};

export default Project;
