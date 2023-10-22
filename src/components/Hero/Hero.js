import Container from "../UI/Container/Container";
import classes from "./Hero.module.css";
// import MyResume from "../../cv/cv.pdf";
import Lottie from "react-lottie";
import coding from "../../assets/71619-coding.json";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
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
    <section id="hero" className="bg-slate-200">
      <Container
        className={`z-0 relative items-center justify-center py-20 flex flex-col h-fit min-w-full p-0 md:h-screen`}
      >
        <div
          className={`${classes["bg-effect"]} flex absolute flex-row w-full h-full`}
        ></div>

        <div
          className={`${classes["hero-animation"]} flex w-full items-center justify-between flex-col md:flex-row lg:justify-evenly 2xl:w-2/3`}
        >
          <div className="flex flex-col space-y-8 p-10 text-center items-center md:text-left md:items-start md:w-1/2 md:mt-0">
            <p className="text-2xl text-white font-medium lg:text-4xl md:text-4xl">
              Welcome To My Professional Profile
            </p>
            <p className="text-md tracking-wider !leading-[2.5rem] text-slate-300 md:text-xl lg:text-xl">
              Hello, I'm Duy Khải. I'm a passionate front-end developer
              dedicated to creating amazing and impressive web experiences. With
              my knowledge and skills in the front-end field, I hope to have the
              opportunity to contribute to businesses and be a part of their
              success. Please explore my website to learn more about my skills
              and projects. Thank you for visiting!
            </p>
            <a href="#" download="#">
              <button
                className={` px-8 py-4 border group relative border-blue-600 w-fit text-white font-medium hover:text-black rounded-xl overflow-hidden bg-transparent`}
              >
                Download CV
                <div
                  className={`absolute hidden top-0 left-0 ${classes.downloadBtn} group-hover:block`}
                >
                  <button
                    className={`px-8 py-4 border relative w-fit whitespace-nowrap text-black font-medium`}
                  >
                    Download CV
                  </button>
                </div>
              </button>
            </a>
          </div>
          <div style={{ maxWidth: 400 }} className="flex">
            <Lottie
              options={defaultOptions}
              height={dimension}
              width={dimension}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
