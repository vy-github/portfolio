import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const HomePage = () => {
  return (
    // <section className={`relative flex w-ful h-screen mx-auto bg-transparent`}>
    <section
      className={`relative flex w-ful h-screen items-center mx-auto bg-transparent`}
    >
      <div
        className={`fixed inset-y-auto inset-0 top-[30%] w-full sm:pl-16 flex flex-row items-start gap-5 mx-auto ${styles.paddingX}`}
      >
        <div className="hidden xss:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-txtcolorhighlight" />
          <div className="w-1 sm:h-72 h-40 violet-gradient" />
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

          <h1 className={`${styles.heroSubText} mt-8 mx:mt-5 text-txtcolor font-normal`}>
          Skills:&nbsp;
          <TypeAnimation
            sequence={skills}
            wrapper="span"
            speed={50}
            className={` text-txtcolorhighlight font-normal`}
            repeat={Infinity}
          />
          </h1>

          {/* <p className={`${styles.heroSubText} mt-2 text-txtcolor-100`}>
            I develop web app, user <br className="sm:block hidden" />
            interfaces and web applications
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(HomePage, "/");
