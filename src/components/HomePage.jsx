import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { watch, macbook, ipad } from "../assets";

const HomePage = () => {
  return (
    // <section className={`relative flex w-ful h-screen mx-auto bg-transparent`}>
    <section
      className={`relative flex w-ful h-screen items-center mx-auto bg-transparent`}
    >
      {/* <div
        className={`fixed inset-y-auto inset-0 top-[30%] w-full sm:pl-16 flex flex-row items-start gap-5 mx-auto ${styles.paddingX}`}
      > */}
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
        className={`fixed left-0 md:top-[30%] top-36 w-full sm:pl-16 flex flex-row items-start gap-5 mx-auto ${styles.paddingX} z-10`}
      >
        <div className="hidden xss:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-txtcolorhighlight" />
          <div className="w-1 lg:h-72 sm:h-[264px] xs:h-52 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-txtcolor font-semibold`}>
            Hi, my <br></br>name is{" "}
            <span className="text-txtcolorhighlight">Vaibhav</span>
          </h1>
          {/* <h1 className={`${styles.heroHeadText} text-txtcolor`}>
            I'm <span className="text-txtcolorhighlight">V</span>aibhav
          </h1> */}
          <h1 className={`${styles.heroHeadSubText} text-txtcolor font-normal`}>
            Full Stack Developer
          </h1>

          <h1
            className={`${styles.heroSubText} mt-8 mx:mt-5 text-txtcolor font-normal`}
          >
            Skills:&nbsp;
            <TypeAnimation
              sequence={skills}
              wrapper="span"
              speed={50}
              className={` text-txtcolorhighlight font-normal`}
              repeat={Infinity}
            />
          </h1>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "spring", 0.5, 1)}
        className={`md:hidden block fixed top-[47%] left-0 right-0 min-w-[400px] w-full h-full`}
      >
        <img src={macbook} alt="not found" className="absolute w-[400px] right-0 top-[-38px]" />
        <img src={watch} alt="not found" className="absolute w-[68px] right-[45px] top-[258px]"/>
        <img src={ipad} alt="not found" className="absolute w-[150px] right-[247px] top-[200px]" />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(HomePage, "/");
