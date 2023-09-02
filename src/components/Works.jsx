import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import VerticalTimelineCard from "./VerticalTimelineCard";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="black-green-gradient-verticle p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="mt-3">
          <h3 className="text-headcoloroncard font-bold text-[24px]">{name}</h3>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {description.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-txtcoloroncard text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-6`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondarynew xs:text-[17px] text-[14px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col">
        {window.innerWidth > 768 ? (
          <VerticalTimeline layout="1-column-left">
            {projects.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                contentStyle={{
                  background: "linear-gradient(45deg, #262223, #373b23f0)",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #262223" }}
                date={""}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
              >
                <VerticalTimelineCard experience={experience} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        ) : (
          <div className="relative flex flex-col gap-10">
            {projects.map((experience, index) => (
              <div key={`experience-${index}`} className="relative black-green-gradient rounded p-4">
                <VerticalTimelineCard experience={experience} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "projects");
