import SectionHeading from "@/components/atoms/SectionHeading/SectionHeading";
import { DataSkill } from "@/dummy";
import { useSectionInView } from "@/hooks";
import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  const { ref } = useSectionInView("Skills");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      ref={ref}
      id="skills"
      className="
        mb-28 
        max-w-[53rem]
        scroll-mt-28
        text-center
        sm:mb-40
      "
    >
      <SectionHeading>Skill</SectionHeading>
      <ul
        className="
          flex
          flex-wrap
          justify-center
          gap-2
          text-lg
          text-gray-800
        "
      >
        {DataSkill?.map((skill, index) => (
          <motion.li
            className="
              bg-white
              border
              border-black/[0.1]
              px-5
              py-3
              rounded-xl
              dark:bg-white/10
              dark:text-white/80
            "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
