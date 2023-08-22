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
        <span className="italic font-bold">I`m</span> a graduate of the{" "}
        <span className="font-semibold">Indonesian Muslim University</span> with
        a specialization as a{" "}
        <span className="font-semibold italic underline">
          Frontend Web Developer
        </span>
        . I have experience in building attractive and responsive user
        interfaces using the latest technologies such as{" "}
        <span className="font-semibold italic underline">
          ReactJS and its Ecosystem
        </span>
        . Also,
        <span className="italic font-bold">I`m</span> always passionate about
        finding new ways to improve website quality and performance. I believe
        that strong <span className="italic">technical ability</span> must be
        accompanied by good <span className="italic">interpersonal skills</span>
        , so I always strive to be a
        <span className="italic">
          collaborative team member, communicate clearly, and be quality results
          oriented
        </span>
        . <span className="italic font-bold">I`m</span> excited to{" "}
        <span className="font-semibold">
          continue learning and developing my skills
        </span>
        , and I look forward to contributing to building an impressive and
        useful product.
      </p>
      <p></p>
    </motion.section>
  );
}
