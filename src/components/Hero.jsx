import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative flex w-ful mx-auto`}>
      <div
        className={`relative inset-0 w-1/2 sm:pl-16 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-txtcolor`}>
            Hi, I'm <span className="text-[#915EFF]">Adrian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-txtcolor-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div
        className={`relative inset-0 w-1/2 flex flex-row items-start gap-5`}
      >
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
