import Container from "../UI/Container/Container";
import classes from "./Intro.module.css";
const Intro = () => {
  return (
    <Container
      className={`${classes.intro} fixed h-screen min-w-full z-50 bg-black`}
    >
      <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className={`${classes.logo} font-bold text-white text-5xl `}>
          Kyu's
        </span>
        <span
          className={`${classes.imgLogo} font-bold text-white text-5xl ml-4`}
        >
          Profile
        </span>
      </div>
    </Container>
  );
};

export default Intro;
