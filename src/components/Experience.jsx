import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import VerticalTimelineCard from "./VerticalTimelineCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p> */}
        <h2 className={`${styles.sectionHeadText}`}>
          Work experience & Education
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        {window.innerWidth > 768 ? (
          <VerticalTimeline layout="1-column-left">
            {experiences.map((experience, index) => (
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
            {experiences.map((experience, index) => (
              <div
                key={`experience-${index}`}
                className="relative black-green-gradient rounded p-4"
              >
                <VerticalTimelineCard experience={experience} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
