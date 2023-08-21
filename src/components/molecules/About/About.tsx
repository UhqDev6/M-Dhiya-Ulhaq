import SectionHeading from "@/components/atoms/SectionHeading/SectionHeading";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contex/ActiveSectionContext/ActiveSectionContext";
import { useSectionInView } from "@/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="
        mb-28
        max-w-[45rem]
        text-center
        leading-8
        sm:mb-40
        scroll-mt-24
      "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a graduate of the Indonesian Muslim University with a
        specialization as a Frontend Web Developer. I have experience in
        building attractive and responsive user interfaces using the latest
        technologies such as ReactJS and its Ecosystem. Also, I`m always
        passionate about finding new ways to improve website quality and
        performance. I believe that strong technical ability must be accompanied
        by good interpersonal skills, so I always strive to be a collaborative
        team member, communicate clearly, and be quality results oriented. I`m
        excited to continue learning and developing my skills, and I look
        forward to contributing to building an impressive and useful product.
      </p>
      <p></p>
    </motion.section>
  );
}
