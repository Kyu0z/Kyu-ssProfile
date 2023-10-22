import Container from "../UI/Container/Container";
import classes from "./Technologies.module.css";
import TagSphere from "../TagSphere/TagSphere";
import toolIcon from "../../assets/88930-coding.json";
import Lottie from "react-lottie";
import React from "react";
import { Popover, Typography } from "@mui/material";
const Technologies = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: toolIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerWidth } = window;
  const dimension = () => {
    if (innerWidth < 500) return 200;
    else return 400;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <section id="technologies" className={`${classes.technologies} py-16`}>
      <Container className="flex flex-col space-y-12  items-center mx-auto px-6 md:px-16">
        <span className="relative flex text-black font-bold text-2xl md:text-4xl after:w-full after:bg-black after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Technologies
        </span>
        <div className="w-full self-start lg:w-1/2">
          <p
            data-aos="fade-up"
            className="text-lg min-w-full md:pl-20 text-black tracking-wider"
          >
            Below is a list of the web development technologies and skills{" "}
            <br /> I have learned and developed up to this point. These were
            acquired through my proactive participation in online courses on
            educational platforms such as Udemy, Google, and YouTube.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col space-y-8 min-w-full justify-around items-center md:flex-row md:space-y-0 md:space-x-24 lg:w-9/12"
        >
          <TagSphere />
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <div className="relative" style={{ maxWidth: 500 }}>
              {/* <Tyora */}
              <Lottie
                options={defaultOptions}
                height={dimension}
                width={dimension}
              />
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <div
                  className={`${classes["first-card"]} z-30  w-full top-0 group rounded-xl  bg-white`}
                >
                  <div className={`flex flex-col space-y-2 text-black p-4`}>
                    <h1 className="font-medium text-xl">What I can do:</h1>
                    <ul className="flex flex-col list-disc pl-4">
                      <li>Call API</li>
                      <li>Generate components</li>
                      <li>Proficient in using GIT and Figma</li>
                      <li>Experienced in working with Firebase and MySQL</li>
                      <li>
                        Capable of working with various Libraries and Frameworks
                      </li>
                      <li>Cooperate with Backend</li>
                    </ul>
                  </div>
                </div>
              </Popover>
            </div>
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
