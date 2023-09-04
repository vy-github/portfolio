import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { github } from "../assets";
import { styles } from "../styles";

const VerticalTimelineCard = ({ experience }) => {
  return (
    <>
      <div className="relative flex justify-between gap-3 z-10">
        <h3 className={styles.cardHeadText}>{experience.title}</h3>
        {experience.date && (
          <span
            className="vertical-timeline-element-date md:text-base text-xs"
            style={{ padding: 0 }}
          >
            {experience.date}
          </span>
        )}

        {experience?.source_code_link && (
          <div className="relative inset-0 flex justify-end card-img_hover z-0">
            <div
              onClick={() =>
                window.open(experience?.source_code_link, "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>
      {experience.company_name && (
        <p className="relative text-secondary text-[16px] font-semibold z-10s mt-3">
          {experience.company_name}
        </p>
      )}

      <ul className="relative mt-5 list-disc ml-5 space-y-2 z-10">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-txtcoloroncard text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience?.tags && (
        <div className="flex flex-wrap gap-2 m-[23px] ml-6 md:m-0 md:ml-[23px]">
          {experience.tags.map((tag) => (
            <p
              key={`${experience.title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default VerticalTimelineCard;
