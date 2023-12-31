import SectionHeading from "@/components/atoms/SectionHeading/SectionHeading";
import { useTheme } from "@/contex/ThemeContextProvider/ThemeContextProvider";
import { DataExperience } from "@/dummy";
import { useSectionInView } from "@/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className="
        mb-28 
        scroll-mt-28
        sm:mb-40
        w-full
      "
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {DataExperience?.map((experience) => (
          <React.Fragment key={experience.id}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
