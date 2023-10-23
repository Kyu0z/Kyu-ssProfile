import Container from "../UI/Container/Container";
import classes from "./About.module.css";
// import MyResume from "../../cv/cv.pdf";
import Lottie from "react-lottie";
import boy from "../../assets/68377-coder-boy.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: boy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  return (
    <section id="about" className="bg-slate-200">
      <Container className="flex flex-col px-6 py-20 items-center">
        <span className="relative flex text-black mb-16 font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          About me
        </span>
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-evenly min-w-full space-y-14 space-x-0 md:flex-row md:space-y-0 md:space-x-16"
        >
          <div style={{ maxWidth: 400 }}>
            <Lottie
              options={defaultOptions}
              height={dimension}
              width={dimension}
            />
          </div>
          <div className="relative group cursor-pointer bg-white rounded-xl shadow-sm py-10 px-8 tracking-wider  text-black text-md lg:text-justify lg:text-lg md:w-1/2 xl:w-1/3 lg:py-10">
            <div>
              <span className="font-bold text-secondary-blue underline ">
                Little of me:
                <br />
              </span>
              <p className="!mt-2 leading-9 text-left">
                I have accumulated 2 years of experience in Software Developer
                working with ReactJS, constantly improving my programming
                mindset through experimentation and exploration of various
                libraries and frameworks. Currently, I am focusing on developing
                with Next.js to expand my capabilities and knowledge.
              </p>
            </div>
            <div
              className={`${classes["second-about"]} hidden group-hover:block`}
            >
              <p>
                <span className="font-bold text-white underline">
                  Something else:
                </span>
                <ul className="list-disc pl-3 !mt-4">
                  <li className="pb-2">
                    University: <span className="sm:hidden">HUTECH</span>
                    <span className="hidden sm:inline">
                      <span className="">
                        Ho Chi Minh City University <br /> of Technology
                      </span>
                    </span>
                  </li>
                  <li className="pb-2">Time: 2019 - 2023</li>
                  <li className="pb-2">Major: Information Technology</li>
                  <li className="pb-2">GPA: 2.9/4.0</li>
                  <li className="pb-2">Language: Intermediate B1 English</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
